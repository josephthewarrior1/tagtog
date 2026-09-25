import type { Metadata } from "next";
import { ReferenceLanding } from "@/components/reference/ReferenceLanding";

export const metadata: Metadata = {
  title: "TAGTOG | Everything in Flow. Everyone in Sync.",
  description: "TAGTOG is a connected event operations ecosystem. Bring teams, workflows, information, and access together through CRM, EMS, PMS, and IAM, from planning to reporting.",
};

export default function Home() {
  return <ReferenceLanding />;
}
