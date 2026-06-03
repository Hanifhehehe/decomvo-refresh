import type { Metadata } from "next";
import { DatenschutzPage } from "@/components/datenschutz-page";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | DeComVo",
  description:
    "Datenschutzerklärung von DeComVo mit Hinweisen zur Nutzung personenbezogener Daten.",
};

export default function DatenschutzRoutePage() {
  return <DatenschutzPage />;
}
