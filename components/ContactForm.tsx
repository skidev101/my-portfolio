"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Field, FieldError, FieldGroup } from "./ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const contactSchema = z.object({
  name: z.string().min(3, { message: "Name is too short" }),
  email: z.email({ message: "Enter a valid email address" }),
  message: z
    .string()
    .min(5, { message: "Message should be at least 3 characters" }),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      console.log("form submitted");
      setSent(true);
    } catch (error) {
      console.error("error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full h-full px-0 md:px-24 bg-transparent">
      <CardHeader>
        {/* <CardTitle>fill these</CardTitle> */}
        <CardDescription>How can i help biggest</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="">
          <FieldGroup className="flex flex-col sm:flex-row">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Full name"
                    autoComplete="off"
                    className="h-[50px] rounded-2xl"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Email address"
                    autoComplete="off"
                    className="h-[50px] rounded-2xl -mt-3 sm:mt-0"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <FieldGroup className="mt-4">
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Textarea
                    {...field}
                    aria-invalid={fieldState.invalid}
                    rows={6}
                    placeholder="Hey, i would like us to work on..."
                    className="min-h-40 resize-none rounded-2xl"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>

        <CardFooter>
          <Field>
            <Button
              type="submit"
              className="h-[50px] mt-4 rounded-2xl hover:cursor-pointer"
              variant="secondary"
              disabled={isLoading}
            >
              Send Message
            </Button>
          </Field>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
