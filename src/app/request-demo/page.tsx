"use client";

import Image from "next/image";
import Link from "next/link";
import { Inter, Roboto_Condensed } from "next/font/google";
import { ReferenceNav } from "@/components/reference/ReferenceNav";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, ChevronDown, UsersRound, Zap } from "lucide-react";
import styles from "./request-demo.module.css";

const eventTypes = ["Conference or summit", "Internal event or town hall", "Roadshow or multi-city program", "Hybrid event", "Other event format"];
const inter = Inter({ subsets: ["latin"], variable: "--font-reference-sans", display: "swap" });
const condensed = Roboto_Condensed({ subsets: ["latin"], variable: "--font-condensed", weight: ["600", "700", "800"], display: "swap" });

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  return (
    <div className={styles.page}>
      <div className={`${inter.variable} ${condensed.variable}`}><ReferenceNav solid /></div>

      <main className={styles.layout}>
        <section className={styles.intro} aria-labelledby="demo-title">
          <p className={styles.eyebrow}>Request a demo</p>
          <h1 id="demo-title">See TAGTOG<br />in <em>action.</em></h1>
          <p className={styles.description}>Explore how CRM, EMS, PMS, and IAM can connect your teams, information, responsibilities, and access. Start with the operational need that matters most to you.</p>
          <div className={styles.benefits}>
            <div><span><CalendarDays /></span><p>Tailored<br />to your needs</p></div>
            <div><span><UsersRound /></span><p>Real use cases<br />for your team</p></div>
            <div><span><Zap /></span><p>Get expert<br />guidance</p></div>
          </div>

          <div className={styles.collage} aria-label="Event connections and a TAGTOG conference badge">
            <div className={styles.lanyard}><span>TAGTOG</span></div>
            <div className={styles.clasp} />
            <div className={styles.connection}>
              <Image src="/images/reference/networking-venue.jpg" alt="Attendees connecting at an event" fill sizes="(max-width: 700px) 55vw, 320px" />
              <p>Meaningful<br />Connections</p>
            </div>
            <div className={styles.eventPhoto}>
              <Image src="/images/reference/hero-conference.jpg" alt="A live conference with an engaged audience" fill sizes="200px" />
              <p>Everything<br />in Flow.<br />Everyone<br />in Sync. <ArrowUpRight size={20} /></p>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeTop}><span className={styles.slot} /><ArrowUpRight className={styles.badgeArrow} size={30} /><p>Flow Smarter.<br />Grow<br />Further.</p><small>TECHNOLOGY. OPERATIONS. GROWTH.</small></div>
              <div className={styles.badgePhoto}><Image src="/images/reference/hero-conference.jpg" alt="" fill sizes="300px" /><span>TAGTOG</span></div>
            </div>
            <span className={styles.handwriting}>More<br />Than<br />Events<span /></span>
          </div>
          <div className={styles.trust}>
            <p>One connected event operations ecosystem</p>
            <div><strong>CRM<small>Relationships</small></strong><strong>EMS<small>Event flow</small></strong><strong>PMS<small>Responsibilities</small></strong><strong>IAM<small>Identity &amp; access</small></strong></div>
          </div>
        </section>

        <section className={styles.formCard} id="demo-form" aria-labelledby="form-title">
          {!submitted ? <>
            <p className={styles.eyebrow}>Let’s talk</p>
            <h2 id="form-title">Tell us a bit about your<br className={styles.desktopBreak} /> event operation.</h2>
            <p className={styles.formIntro}>We’ll use this information to prepare a relevant and personalized demo for your team.</p>
            <form className={styles.form} onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <div className={styles.nameRow}>
                <label>First Name<input name="firstName" autoComplete="given-name" placeholder="John" value={firstName} onChange={(event) => setFirstName(event.target.value)} required /></label>
                <label>Last Name<input name="lastName" autoComplete="family-name" placeholder="Doe" required /></label>
              </div>
              <label>Work Email<input name="email" type="email" autoComplete="email" placeholder="john@yourcompany.com" required /></label>
              <label>Company<input name="company" autoComplete="organization" placeholder="Your company name" required /></label>
              <label>Country<span className={styles.selectWrap}><select name="country" autoComplete="country-name" defaultValue="" required><option value="" disabled>Select a country</option>{["Indonesia", "Singapore", "Malaysia", "Thailand", "Philippines", "Vietnam", "Australia", "India", "United Kingdom", "United States", "Other"].map(country => <option key={country}>{country}</option>)}</select><ChevronDown size={16} /></span></label>
              <label>What type of events do you run?<span className={styles.selectWrap}><select name="eventType" defaultValue="" required><option value="" disabled>Select an option</option>{eventTypes.map(type => <option key={type}>{type}</option>)}</select><ChevronDown size={16} /></span></label>
              <label>Anything specific you’d like to discuss? (Optional)<textarea name="message" rows={3} placeholder="Share your goals, current challenges, or any specific use cases..." /></label>
              <button className={styles.submit} type="submit">Request My Demo <ArrowRight size={18} /></button>
              <p className={styles.consent}>By submitting this form, you agree to occasional follow-up communication related to your request.</p>
            </form>
          </> : <div className={styles.success} role="status"><p className={styles.eyebrow}>Thank you, {firstName}</p><h2 id="form-title">Your demo details are ready.</h2><p>This preview form isn’t connected to a booking service yet. Your request has not been sent.</p><button className={styles.submit} onClick={() => setSubmitted(false)}>Back to form <ArrowRight size={18} /></button><Link href="/">Return to homepage</Link></div>}
        </section>
      </main>
    </div>
  );
}
