"use client";

import { useState } from "react";
import { submitNetlifyForm } from "@/lib/netlify";

type FormEvt = React.FormEvent<HTMLFormElement>;

/** Logique partagée du formulaire teaser 2 étapes (Desktop / Mobile). */
export function useTeaserForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [listingUrl, setListingUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const goStep2 = (e: FormEvt) => {
    e.preventDefault();
    setListingUrl(String(new FormData(e.currentTarget).get("listing-url") ?? ""));
    setStep(2);
  };

  const submit = async (e: FormEvt) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setError(false);
    setIsSubmitting(true);
    try {
      await submitNetlifyForm("teaser", {
        "listing-url": listingUrl,
        agency: String(data.get("agency") ?? ""),
        email: String(data.get("email") ?? ""),
      });
      setDone(true);
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { step, listingUrl, isSubmitting, error, done, goStep2, submit };
}
