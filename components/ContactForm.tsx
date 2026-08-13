"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Field, FieldError, FieldGroup } from "./ui/field";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({ name: z.string().min(3, { message: "Name is too short" }), email: z.email({ message: "Enter a valid email address" }), message: z.string().min(5, { message: "Message should be at least 5 characters" }) });
type ContactFormSchema = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<ContactFormSchema>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", email: "", message: "" } });
  const onSubmit = async (data: ContactFormSchema) => {
    setIsLoading(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("Request failed");
      setSent(true);
      form.reset();
    } catch {
      setError("Message failed to send. Email me directly instead.");
    } finally {
      setIsLoading(false);
    }
  };

  return <Card className="w-full max-w-none border-0 bg-transparent p-0 shadow-none"><form onSubmit={form.handleSubmit(onSubmit)}><CardContent className="space-y-5 p-0"><p className="technical-label text-copy">Or leave a note</p><FieldGroup className="flex flex-col gap-4 sm:flex-row"><Controller name="name" control={form.control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}><Input {...field} autoComplete="name" placeholder="Full name" aria-label="Full name" aria-invalid={fieldState.invalid} className="h-12 rounded-none border-0 border-b border-zinc-700 bg-transparent px-0 shadow-none focus-visible:border-signal focus-visible:ring-0" />{fieldState.invalid && <FieldError errors={[fieldState.error]} />}</Field>} /><Controller name="email" control={form.control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}><Input {...field} type="email" autoComplete="email" placeholder="Email address" aria-label="Email address" aria-invalid={fieldState.invalid} className="h-12 rounded-none border-0 border-b border-zinc-700 bg-transparent px-0 shadow-none focus-visible:border-signal focus-visible:ring-0" />{fieldState.invalid && <FieldError errors={[fieldState.error]} />}</Field>} /></FieldGroup><Controller name="message" control={form.control} render={({ field, fieldState }) => <Field data-invalid={fieldState.invalid}><Textarea {...field} rows={4} placeholder="What are you building?" aria-label="Project details" aria-invalid={fieldState.invalid} className="min-h-28 resize-none rounded-none border-0 border-b border-zinc-700 bg-transparent px-0 shadow-none focus-visible:border-signal focus-visible:ring-0" />{fieldState.invalid && <FieldError errors={[fieldState.error]} />}</Field>} />{error && <p role="alert" className="font-mono text-xs text-red-500">{error}</p>}<Button type="submit" disabled={isLoading} className="h-11 rounded-none bg-ink px-5 font-mono text-[0.68rem] uppercase text-canvas hover:bg-signal">{isLoading ? <Loader2 className="size-4 animate-spin" /> : sent ? "Message sent" : "Send note"}</Button></CardContent></form></Card>;
};

export default ContactForm;
