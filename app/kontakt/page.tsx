import type { Metadata } from "next";
import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Kontakt | DeComVo",
  description:
    "Kontaktieren Sie DeComVo für redaktionelle Fragen, Kooperationen oder Presseanfragen.",
};

export default function KontaktPage() {
  return <ContactPage />;
}
