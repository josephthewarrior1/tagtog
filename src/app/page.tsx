import type { Metadata } from "next";
import { ReferenceLanding } from "@/components/reference/ReferenceLanding";

export const metadata: Metadata = {
  title: "TAGTOG | One Platform. Every Event. Fully Connected.",
  description: "Plan, manage, and deliver every moving part of your event — from registration to engagement, without losing control.",
};

export default function Home() {
  return <ReferenceLanding />;
}
