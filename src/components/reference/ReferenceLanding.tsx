import Image from "next/image";
import Link from "next/link";
import { Inter, Roboto_Condensed } from "next/font/google";
import { ArrowRight, CalendarCheck2, FileCheck2, GitBranch, LockKeyhole, Search, UsersRound } from "lucide-react";
import { ReferenceNav } from "./ReferenceNav";
import styles from "./ReferenceLanding.module.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-reference-sans", display: "swap" });
const condensed = Roboto_Condensed({ subsets: ["latin"], variable: "--font-condensed", weight: ["600", "700", "800"], display: "swap" });

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function DemoButton({ children = "Talk to us" }: { children?: React.ReactNode }) {
  return <Link href="/request-demo" className={`${styles.button} ${styles.buttonPrimary}`}>{children}<ArrowRight aria-hidden="true" /></Link>;
}

const products = [
  { name: "CRM", title: "Relationships & client information", description: "Keep customer relationships and client information connected to the work that follows.", icon: UsersRound },
  { name: "EMS", title: "Event flow", description: "Connect the moving parts of an event, from planning through execution and reporting.", icon: CalendarCheck2 },
  { name: "PMS", title: "Projects & responsibilities", description: "Organize project work so teams understand what needs to happen and who is responsible.", icon: GitBranch },
  { name: "IAM", title: "Identity & access", description: "Control who can access each system and action based on their role and responsibilities.", icon: LockKeyhole },
];

const clear = [
  { letter: "C", title: "Connect", description: "Connect fragmented information across teams, documents, and workflows." },
  { letter: "L", title: "Locate", description: "Locate what matters quickly, without comparing multiple files." },
  { letter: "E", title: "Ensure", description: "Ensure consistent master data across operational documents and workflows." },
  { letter: "A", title: "Account", description: "Account for every change: what changed, when, and who reviewed or approved it." },
  { letter: "R", title: "Route", description: "Route the right information to the right people, with access appropriate to their role." },
];

const audiences = [
  { title: "Event organizers", description: "Coordinate clients, vendors, teams, and approvals across complex events.", image: "hero-conference.jpg" },
  { title: "In-house teams", description: "Connect event and marketing communication work across your organization.", image: "before-planning.jpg" },
  { title: "Hotels & venues", description: "Keep venue information and event responsibilities aligned.", image: "exhibition.jpg" },
  { title: "Government", description: "Bring clarity to event coordination, documents, and access.", image: "hero-conference.jpg" },
  { title: "Event partners", description: "Connect vendors, sponsors, and suppliers to the information they need.", image: "networking-venue.jpg" },
];

const pillars = [
  { title: "Reliable information", description: "Find the latest information without searching through multiple documents.", icon: Search },
  { title: "One connected flow", description: "Bring workflows, documents, master data, and responsibilities together.", icon: GitBranch },
  { title: "Traceability & control", description: "Understand what changed, who changed it, and who has access.", icon: FileCheck2 },
  { title: "Growth without more complexity", description: "Start with what you need today and expand without creating more disconnected systems.", icon: UsersRound },
  { title: "Useful innovation", description: "Use automation and embedded AI to reduce repetitive work and help teams act more quickly.", icon: CalendarCheck2 },
];

const footerGroups = [
  { title: "Platform", links: [["Ecosystem", "#platform"], ["CLEAR framework", "#clear"], ["Benefits", "#features"], ["Growth", "#integrations"]] },
  { title: "Who it is for", links: [["Organizers", "#solutions"], ["In-house teams", "#solutions"], ["Hotels & venues", "#solutions"], ["Government", "#solutions"], ["Event partners", "#solutions"]] },
  { title: "Explore", links: [["Event lifecycle", "#lifecycle"], ["Our approach", "#stories"], ["Practical AI", "#innovation"]] },
  { title: "Get in touch", links: [["Talk to us", "/request-demo"], ["Request a demo", "/request-demo"], ["Discuss your needs", "/request-demo?interest=operations"]] },
];

export function ReferenceLanding() {
  return (
    <div className={`${styles.page} ${inter.variable} ${condensed.variable}`}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <Image className={styles.heroPhoto} src="/images/reference/hero-conference.jpg" alt="People gathered at a conference" fill sizes="100vw" preload />
          <div className={styles.heroShade} />
          <ReferenceNav />
          <div className={`${styles.container} ${styles.heroContent}`}>
            <Eyebrow>Technology. Operations. Growth.</Eyebrow>
            <h1 id="hero-title">Everything in Flow.<br /><span>Everyone in Sync.</span></h1>
            <p className={styles.heroDescription}>Turn fragmented event operations into one connected flow.<br className={styles.desktopBreak} /> Bring teams, workflows, information, and access together,<br className={styles.desktopBreak} /> from planning to reporting.</p>
            <div className={styles.heroActions}><DemoButton /><a href="#platform" className={`${styles.button} ${styles.buttonOutline}`}>Explore TAGTOG<ArrowRight aria-hidden="true" /></a></div>
            <div className={styles.heroStats}>
              <div><strong>Connect</strong><span>People & information</span></div>
              <div><strong>Clarify</strong><span>Work & responsibilities</span></div>
              <div><strong>Grow</strong><span>At your own pace</span></div>
            </div>
          </div>
          <p className={styles.heroMotto}>Flow Smarter.<br />Grow Further.</p>
          <a href="#platform" className={styles.liveEvent} aria-label="Explore the connected TAGTOG ecosystem">
            <span className={styles.liveLabel}>One connected ecosystem</span>
            <strong>CRM. EMS. PMS. IAM.</strong>
            <span className={styles.liveLocation}>A shared foundation for event operations.</span>
            <span className={styles.liveArrow}><ArrowRight aria-hidden="true" /></span>
          </a>
        </section>

        <section className={styles.trust} aria-label="Who TAGTOG is built for">
          <div className={styles.container}>
            <Eyebrow>Built for organizations where every detail matters</Eyebrow>
            <div className={styles.audienceStrip}><span>Event organizers</span><span>In-house teams</span><span>Hotels & venues</span><span>Government</span><span>Event partners</span></div>
          </div>
        </section>

        <section id="platform" className={styles.overview} aria-labelledby="overview-title">
          <div className={styles.overviewBackdrop} />
          <div className={`${styles.container} ${styles.overviewGrid}`}>
            <div className={styles.overviewCopy}>
              <Eyebrow>Connected event operations ecosystem</Eyebrow>
              <h2 id="overview-title">One ecosystem.<br />One connected<br />flow.</h2>
              <p>Your information is spread across spreadsheets, proposals, contracts, emails, and chats. The challenge is knowing which version to trust.</p>
              <p>TAGTOG brings workflows, master data, documents, audit trails, and access into one reliable flow through CRM, EMS, PMS, and IAM.</p>
              <a className={`${styles.button} ${styles.buttonDark}`} href="#clear">See the CLEAR framework<ArrowRight aria-hidden="true" /></a>
            </div>
            <div className={styles.ecosystem}>
              <div className={styles.ecosystemHeading}><span>TAGTOG</span><p>Shared information. Connected responsibilities. Controlled access.</p></div>
              <div className={styles.productGrid}>{products.map(({ name, title, description, icon: Icon }) => <article className={styles.product} key={name}><Icon aria-hidden="true" /><strong>{name}</strong><h3>{title}</h3><p>{description}</p></article>)}</div>
              <p className={styles.foundation}>One shared foundation, shaped by firsthand event-industry experience.</p>
            </div>
          </div>
        </section>

        <section id="lifecycle" className={styles.lifecycle} aria-labelledby="lifecycle-title">
          <div className={`${styles.container} ${styles.sectionIntro}`}>
            <div><Eyebrow>The event lifecycle</Eyebrow><h2 id="lifecycle-title">Information stays connected.<br />From planning to reporting.</h2></div>
            <div className={styles.introAside}><p>Know what needs to happen, who is responsible, and where the latest information can be found.</p><a href="#event-stages" className={styles.textLink}>Follow the flow<ArrowRight aria-hidden="true" /></a></div>
          </div>
          <div id="event-stages" className={styles.lifecycleCards}>
            {[
              { name: "BEFORE", subtitle: "Plan & coordinate", description: "Align client details, schedules, venues, vendors, and project responsibilities.", image: "before-planning.jpg" },
              { name: "DURING", subtitle: "Execute & stay aligned", description: "Keep teams working from current information as plans and responsibilities change.", image: "hero-conference.jpg" },
              { name: "AFTER", subtitle: "Report & grow", description: "Retain changes, approvals, and operational knowledge for the work that comes next.", image: "after-analytics.jpg" },
            ].map(stage => <a href="#features" className={styles.stageCard} key={stage.name}>
              <Image src={`/images/reference/${stage.image}`} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <div className={styles.stageShade} /><div className={styles.stageCopy}><h3>{stage.name}</h3><span className={styles.greenRule} /><h4>{stage.subtitle}</h4><p>{stage.description}</p></div><span className={styles.circleArrow}><ArrowRight aria-hidden="true" /></span>
            </a>)}
          </div>
        </section>

        <section id="clear" className={styles.clearSection} aria-labelledby="clear-title">
          <div className={styles.container}><Eyebrow>Our mission</Eyebrow><h2 id="clear-title">Make every event CLEAR.</h2><p className={styles.clearIntro}>A practical way to bring clarity, trust, and control to the work behind every event.</p>
            <div className={styles.clearGrid}>{clear.map(item => <article key={item.letter}><span aria-hidden="true">{item.letter}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
          </div>
        </section>

        <section id="features" className={styles.features} aria-labelledby="features-title">
          <div className={`${styles.container} ${styles.featuresGrid}`}>
            <div className={styles.featureIntro}><Eyebrow>What changes for your team</Eyebrow><h2 id="features-title">Clarity where<br />complexity used to be.</h2><p>Spend less time checking versions and following up. Bring teams, documents, responsibilities, and approvals into one connected flow.</p><DemoButton>Discuss your operations</DemoButton></div>
            <div className={styles.featureList}>{pillars.map(({ title, description, icon: Icon }) => <div key={title} className={styles.feature}><Icon aria-hidden="true" strokeWidth={1.4} /><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
          </div>
        </section>

        <section id="solutions" className={styles.solutions} aria-labelledby="solutions-title">
          <div className={styles.container}>
            <div className={styles.solutionsIntro}><div><Eyebrow>Built around your operations</Eyebrow><h2 id="solutions-title">For everyone behind<br />the event.</h2></div><div className={styles.introAside}><p>For organizations coordinating multiple teams, stakeholders, vendors, documents, and approval processes.</p><Link href="/request-demo" className={styles.textLink}>Discuss your needs<ArrowRight aria-hidden="true" /></Link></div></div>
            <div className={styles.industryCards}>{audiences.map(audience => <Link href={`/request-demo?industry=${encodeURIComponent(audience.title)}`} key={audience.title} className={styles.industryCard}><div className={styles.industryPhoto}><Image src={`/images/reference/${audience.image}`} alt="" fill sizes="(max-width: 700px) 50vw, 18vw" /></div><div className={styles.industryCopy}><h3>{audience.title}</h3><p>{audience.description}</p><span className={styles.industryArrow}><ArrowRight aria-hidden="true" /></span></div></Link>)}</div>
          </div>
        </section>

        <section id="stories" className={styles.stories} aria-labelledby="story-title">
          <div className={`${styles.container} ${styles.brandStoryGrid}`}>
            <div><Eyebrow>Our story</Eyebrow><h2 id="story-title">Events connect people,<br />ideas, and opportunities.</h2><p>TAGTOG connects the work behind them. Built from inside the event industry, our ecosystem brings teams, clients, venues, vendors, documents, approvals, participants, and deadlines into one connected flow.</p><p>Technology connects the system. Operations become clearer. Growth becomes easier to manage.</p></div>
            <div className={styles.storyPhoto}><Image src="/images/reference/testimonial-speaker.jpg" alt="A speaker addressing an event audience" fill sizes="(max-width: 700px) 90vw, 40vw" /></div>
          </div>
        </section>

        <section id="integrations" className={styles.integrations} aria-labelledby="integrations-title">
          <div className={`${styles.container} ${styles.growthGrid}`}>
            <div><Eyebrow>Start with what you need</Eyebrow><h2 id="integrations-title">Expand when your<br />operations grow.</h2><p>Begin with your most urgent operational requirement. Introduce additional capabilities as your needs develop, without repeatedly rebuilding your systems.</p><Link href="/request-demo?interest=integrations" className={styles.textLink}>Find your starting point<ArrowRight aria-hidden="true" /></Link></div>
            <div className={styles.growthNotes}><h3>Structured products first.</h3><p>Configuration, integration, and selective development extend the ecosystem where they add lasting value to your operations.</p><h3>Connected as you grow.</h3><p>CRM, EMS, PMS, and IAM support different parts of the same operational journey.</p></div>
          </div>
        </section>

        <section id="innovation" className={styles.clearSection} aria-labelledby="innovation-title">
          <div className={`${styles.container} ${styles.growthGrid}`}><div><Eyebrow>Practical AI within the ecosystem</Eyebrow><h2 id="innovation-title">Useful innovation.<br />Less repetitive work.</h2><p className={styles.clearIntro}>AI is introduced within EMS, PMS, and CRM where it helps people understand information and act more quickly.</p></div><ul className={styles.aiList}><li>Summarize operational information</li><li>Identify missing steps</li><li>Reduce repetitive work</li><li>Help teams understand what comes next</li></ul></div>
        </section>

        <section className={styles.finalCta} aria-labelledby="cta-title"><div className={`${styles.container} ${styles.ctaGrid}`}><div><Eyebrow>Everything in Flow. Everyone in Sync.</Eyebrow><h2 id="cta-title">Bring everything<br />into flow.</h2></div><div className={styles.ctaAside}><p>Tell us how your team works today. Start with the capabilities that make your next step clearer.</p><div className={styles.ctaButtons}><DemoButton /><a href="#platform" className={`${styles.button} ${styles.buttonOutline}`}>Explore TAGTOG</a></div></div></div></section>
      </main>

      <footer id="footer" className={styles.footer}><div className={styles.container}><div className={styles.footerMain}><div className={styles.footerBrand}><a href="#hero-title" className={styles.wordmark}>TAGTOG</a><p>Technology. Operations. Growth.</p><p>Connected Event Operations Ecosystem</p></div>{footerGroups.map(group => <div className={styles.footerGroup} key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</div>)}<p className={styles.footerMotto}>Flow<br />Smarter.<br />Grow<br />Further.</p></div><div className={styles.footerBottom}><p>© {new Date().getFullYear()} TAGTOG. All rights reserved.</p><Link href="/request-demo">Contact TAGTOG</Link></div></div></footer>
    </div>
  );
}
