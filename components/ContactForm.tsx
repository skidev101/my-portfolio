"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

/* Mirrors the API route's limits so the user is told inline rather than
   getting a 400 after submitting. */
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name needs at least 3 characters" })
    .max(100, { message: "Name is too long" }),
  email: z.email({ message: "Enter a valid email address" }).max(200, {
    message: "Email is too long",
  }),
  message: z
    .string()
    .trim()
    .min(5, { message: "Tell me a little more — 5 characters minimum" })
    .max(5000, { message: "Message is too long" }),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

/* Bordered fields. `--color-field` is the one border token that clears 3:1
   against the ground, so the control boundary is visible without relying on
   placeholder text. Focus pairs a colour change with a soft ring, and
   outline-hidden keeps an indicator in forced-colors mode. */
const fieldClass = (invalid: boolean) =>
  [
    "w-full rounded-md border bg-surface px-3 py-2.5 text-sm text-ink",
    "transition-colors duration-150 ease-out placeholder:text-quiet",
    "focus:outline-hidden focus:ring-2 focus:ring-signal/25",
    invalid
      ? "border-danger focus:border-danger"
      : "border-field focus:border-signal",
  ].join(" ");

const Field = ({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-ink" htmlFor={id}>
      {label}
    </label>
    {children}
    {error ? (
      <p className="text-xs text-danger" id={`${id}-error`} role="alert">
        {error}
      </p>
    ) : null}
  </div>
);

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [failure, setFailure] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setSent(false);
    setFailure("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setSent(true);
      reset();
    } catch {
      setFailure("That didn't send. Email me directly instead.");
    }
  };

  return (
    <form className="flex max-w-[32rem] flex-col gap-5" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 sm:flex-row">
        <Field id="name" label="Name" error={errors.name?.message}>
          <input
            {...register("name")}
            id="name"
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(Boolean(errors.name))}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email?.message}>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <Field id="message" label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          placeholder="What are you building?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`resize-y ${fieldClass(Boolean(errors.message))}`}
        />
      </Field>

      {failure ? (
        <p className="text-sm text-danger" role="alert">
          {failure}
        </p>
      ) : null}

      {sent ? (
        <p className="flex items-center gap-2 text-sm text-signal" role="status">
          <Check size={15} aria-hidden="true" />
          Thanks — your note is on its way.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-ink px-4 text-sm font-medium text-canvas transition-[background-color,transform] duration-150 ease-out hover:bg-copy active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={15} className="animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          "Send note"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
