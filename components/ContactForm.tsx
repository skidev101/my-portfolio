'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Field, FieldError, FieldGroup } from './ui/field';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(3, { message: 'Name is too short' }),
  email: z.email({ message: 'Enter a valid email address' }),
  message: z
    .string()
    .min(5, { message: 'Message should be at least 5 characters' }),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        setSent(true);
        form.reset();
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-transparent border-none shadow-none">
      <CardHeader className="px-0 text-center">
        <CardDescription className="hidden text-base text-gray-600">
          Tell me about your project
        </CardDescription>
      </CardHeader>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="px-0 space-y-6">
          {/* Name + Email */}
          <FieldGroup className="flex flex-col sm:flex-row gap-4">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    placeholder="Full name"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    className="
                      h-[48px]
                      rounded-xl
                      bg-transparent
                      border border-gray-300
                      focus:border-gray-900 focus:ring-0
                      placeholder:text-gray-400
                    "
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
                    placeholder="Email address"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                    className="
                      h-[48px]
                      rounded-xl
                      bg-transparent
                      border border-gray-300
                      focus:border-gray-900 focus:ring-0
                      placeholder:text-gray-400
                    "
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Message */}
          <FieldGroup>
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Textarea
                    {...field}
                    rows={6}
                    placeholder="Tell me a bit about what you’re building…"
                    aria-invalid={fieldState.invalid}
                    className="
                      min-h-40
                      resize-none
                      rounded-xl
                      bg-transparent
                      border border-gray-300
                      focus:border-gray-900 focus:ring-0
                      placeholder:text-gray-400
                    "
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="
                h-[48px]
                w-full
                rounded-xl
                bg-gray-900
                text-white
                hover:bg-gray-800
                active:scale-[0.98]
              "
            >
              {isLoading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                'Send message'
              )}
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default ContactForm;
