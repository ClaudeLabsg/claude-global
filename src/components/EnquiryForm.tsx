"use client";

import type { FormEvent } from "react";

const inputClass =
  "w-full rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-claude-orange";
const labelClass = "mb-1.5 block text-sm font-medium text-text-primary";

function Required() {
  return <span className="text-claude-orange">*</span>;
}

/**
 * Workshop / collaboration enquiry form, matching claudecode.sg. The site has no backend, so submitting
 * opens the visitor's email app with the details filled in, addressed to the community's email.
 */
export function EnquiryForm({
  id,
  email,
  subject,
  phoneExample,
  selectLabel,
  options,
  selectHint,
  messageLabel,
  messagePlaceholder,
  submitLabel,
}: {
  id: string;
  email?: string;
  subject: string;
  phoneExample: string;
  selectLabel: string;
  options: string[];
  selectHint: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
}) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const body = [
      `Name: ${field("name")}`,
      `Organisation: ${field("company")}`,
      `Email: ${field("email")}`,
      `Contact number: ${field("phone")}`,
      `${selectLabel} ${field("budget")}`,
      "",
      field("message"),
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-white/25 bg-white/95 p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name <Required />
          </label>
          <input id={`${id}-name`} name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor={`${id}-company`} className={labelClass}>
            Organisation
          </label>
          <input
            id={`${id}-company`}
            name="company"
            type="text"
            className={inputClass}
            placeholder="Company, school or association"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email <Required />
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="you@organisation.com"
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>
            Contact number
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
            placeholder={phoneExample}
          />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-budget`} className={labelClass}>
          {selectLabel}
        </label>
        <select id={`${id}-budget`} name="budget" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select one
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <p className="mt-1.5 text-xs text-text-muted">{selectHint}</p>
      </div>
      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          {messageLabel} <Required />
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder={messagePlaceholder}
        />
      </div>
      <button
        type="submit"
        disabled={!email}
        className="inline-flex w-full items-center justify-center rounded-full bg-claude-orange px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-claude-orange/25 transition-all hover:bg-claude-orange-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitLabel}
      </button>
      {!email && <p className="text-xs text-text-muted">Enquiries open soon.</p>}
    </form>
  );
}
