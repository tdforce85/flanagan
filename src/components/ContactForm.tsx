"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/business";
import { inputClass, btnPrimary } from "@/lib/ui";
import { CheckIcon } from "@/components/icons";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ACCESS_KEY) {
      setStatus("error");
      setError(
        "The form isn't configured yet — add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
      );
      return;
    }
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New website inquiry — ${BUSINESS.name}`,
          from_name: BUSINESS.name,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message ?? "Something went wrong. Please call us instead.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-secondary bg-cream/60 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
          <CheckIcon className="h-6 w-6" aria-hidden />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-primary">
          Thanks — we got your message.
        </h3>
        <p className="mt-1 text-sm text-ink/70">
          We&apos;ll be in touch shortly. Need a faster answer? Call{" "}
          <a href={BUSINESS.phoneHref} className="font-semibold text-primary underline">
            {BUSINESS.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from users, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        aria-hidden
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or to-do list…"
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className={`${btnPrimary} w-full`}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      <p className="text-center text-xs text-ink/50">
        Prefer to talk? Call{" "}
        <a href={BUSINESS.phoneHref} className="font-semibold text-primary">
          {BUSINESS.phone}
        </a>
        .
      </p>
    </form>
  );
}
