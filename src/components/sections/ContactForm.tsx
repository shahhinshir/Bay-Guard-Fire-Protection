"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

type Errors = Partial<
  Record<"first-name" | "last-name" | "email" | "subject" | "message", string>
>;

const fieldClass = (hasError: boolean) =>
  cn(
    "block w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-ink shadow-sm ring-1 ring-inset transition-shadow placeholder:text-ink-muted/70 focus:ring-2 focus:ring-inset focus:ring-brand-600",
    hasError ? "ring-brand-500" : "ring-hairline",
  );

const labelClass = "block text-sm font-medium text-ink";

export function ContactForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = (form: HTMLFormElement): boolean => {
    const next: Errors = {};
    const value = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement | null)?.value.trim() ?? "";

    if (!value("first-name")) next["first-name"] = "First name is required";
    if (!value("last-name")) next["last-name"] = "Last name is required";
    if (!value("email")) next.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(value("email"))) next.email = "Enter a valid email";
    if (!value("subject")) next.subject = "Subject is required";
    if (!value("message")) next.message = "Message is required";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(false);
    const form = event.currentTarget;
    if (!validate(form)) return;

    const data = new FormData(form);
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("first-name"),
          lastName: data.get("last-name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("send failed");

      window.gtag?.("event", "conversion", {
        send_to: SITE.analytics.conversionLabel,
      });
      router.push("/thank-you");
    } catch {
      setSubmitError(true);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className={labelClass}>
            First name <span className="text-brand-600">*</span>
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            aria-invalid={Boolean(errors["first-name"])}
            className={cn("mt-1.5", fieldClass(Boolean(errors["first-name"])))}
          />
          {errors["first-name"] && (
            <p className="mt-1 text-xs text-brand-600">{errors["first-name"]}</p>
          )}
        </div>

        <div>
          <label htmlFor="last-name" className={labelClass}>
            Last name <span className="text-brand-600">*</span>
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            autoComplete="family-name"
            aria-invalid={Boolean(errors["last-name"])}
            className={cn("mt-1.5", fieldClass(Boolean(errors["last-name"])))}
          />
          {errors["last-name"] && (
            <p className="mt-1 text-xs text-brand-600">{errors["last-name"]}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-brand-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={cn("mt-1.5", fieldClass(Boolean(errors.email)))}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-brand-600">{errors.email}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <span className="text-xs text-ink-muted">Optional</span>
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={cn("mt-1.5", fieldClass(false))}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject <span className="text-brand-600">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          aria-invalid={Boolean(errors.subject)}
          className={cn("mt-1.5", fieldClass(Boolean(errors.subject)))}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-brand-600">{errors.subject}</p>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="message" className={labelClass}>
            Message <span className="text-brand-600">*</span>
          </label>
          <span className="text-xs text-ink-muted">Max. 500 characters</span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={500}
          aria-invalid={Boolean(errors.message)}
          className={cn("mt-1.5 resize-y", fieldClass(Boolean(errors.message)))}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-brand-600">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        {submitError ? (
          <p className="text-sm text-brand-600" role="alert">
            Something went wrong. Please call us at {SITE.phone.display}.
          </p>
        ) : (
          <span aria-hidden />
        )}
        <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
