import type { Metadata } from "next";
import { KooperationPage } from "@/components/kooperation-page";

export const metadata: Metadata = {
  title: "Kooperation | DeComVo",
  description:
    "Informationen zur Kooperation von DeComVo mit dem Verein Pen Paper Peace.",
};

export default function KooperationRoutePage() {
  return <KooperationPage />;
}
