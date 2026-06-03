import type { Metadata } from "next";
import { ImpressumPage } from "@/components/impressum-page";

export const metadata: Metadata = {
  title: "Impressum | DeComVo",
  description: "Impressum von DeComVo.",
};

export default function ImpressumRoutePage() {
  return <ImpressumPage />;
}
