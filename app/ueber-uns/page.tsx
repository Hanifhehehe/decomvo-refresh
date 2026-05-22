import type { Metadata } from "next";
import { UeberUnsPage } from "@/components/ueber-uns-page";

export const metadata: Metadata = {
  title: "Über Uns | DeComVo",
  description:
    "Erfahren Sie mehr über die Mission, den Ansatz und die Kennzahlen von DeComVo.",
};

export default function UeberUnsRoutePage() {
  return <UeberUnsPage />;
}
