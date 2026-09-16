import Image from "next/image";
import Link from "next/link";
import { Inter, Roboto_Condensed } from "next/font/google";
import { ArrowRight, Asterisk, Badge, CalendarCheck2, ChartNoAxesCombined, MapPin, Megaphone, ScanLine, UserRound } from "lucide-react";
import { FaLinkedinIn, FaMicrosoft, FaSalesforce, FaSlack, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiHubspot, SiMailchimp, SiSpotify } from "react-icons/si";
import { EventDashboard } from "./EventDashboard";
import { ReferenceNav } from "./ReferenceNav";
import { WatchVideo } from "./WatchVideo";
import styles from "./ReferenceLanding.module.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-reference-sans", display: "swap" });
const condensed = Roboto_Condensed({ subsets: ["latin"], variable: "--font-condensed", weight: ["600", "700", "800"], display: "swap" });

function Eyebrow({ number, children }: { number?: string; children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{number && <span>{number}</span>}{children}</p>;
}

function DemoButton({ children = "Book a demo" }: { children?: React.ReactNode }) {
  return <Link href="/request-demo" className={`${styles.button} ${styles.buttonGreen}`}>{children}<ArrowRight aria-hidden="true" /></Link>;
}

const features = [
  { title: "Registration & Ticketing", description: "Flexible registration, payments, and attendee management.", icon: CalendarCheck2 },
  { title: "Onsite & Mobile", description: "Check-in, event apps, and real-time engagement.", icon: UserRound },
  { title: "Event Websites", description: "Beautiful, no-code event sites that convert.", icon: ScanLine },
  { title: "Analytics & Reporting", description: "Measure impact with powerful insights.", icon: ChartNoAxesCombined },
  { title: "Marketing & Communication", description: "Reach the right people with unified campaigns.", icon: Megaphone },
  { title: "Attendee Experience", description: "Personalized, seamless, and memorable.", icon: Badge },
];

const industries = [
  { title: "Corporate Events", description: "Conferences, product launches, team offsites.", image: "hero-conference.jpg" },
  { title: "Education", description: "Seminars, training sessions, academic events.", image: "before-planning.jpg" },
  { title: "Exhibitions & Trade Shows", description: "Expos, fairs, industry events.", image: "exhibition.jpg" },
  { title: "Nonprofit", description: "Fundraising events, community programs.", image: "networking-venue.jpg" },
  { title: "Government", description: "Public events, summits, civic engagement.", image: "hero-conference.jpg" },
];

const footerGroups = [
  { title: "Product", links: [["Overview", "#platform"], ["Features", "#features"], ["Integrations", "#integrations"], ["Security", "/request-demo?interest=security"]] },
  { title: "Solutions", links: [["Corporate", "#solutions"], ["Education", "#solutions"], ["Nonprofit", "#solutions"], ["Trade Shows", "#solutions"], ["Government", "#solutions"]] },
  { title: "Resources", links: [["Blog", "#stories"], ["Help Center", "/request-demo?interest=support"], ["Event Templates", "#platform"], ["Guides", "#lifecycle"], ["Webinars", "#stories"]] },
  { title: "Company", links: [["About", "#stories"], ["Careers", "/request-demo?interest=careers"], ["Press", "/request-demo?interest=press"], ["Contact", "/request-demo"]] },
];

export function ReferenceLanding() {
  return (
    <div className={`${styles.page} ${inter.variable} ${condensed.variable}`}>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <Image className={styles.heroPhoto} src="/images/reference/hero-conference.jpg" alt="A packed conference auditorium with an Ideas Connect People stage" fill sizes="100vw" preload />
          <div className={styles.heroShade} />
          <ReferenceNav />
          <div className={`${styles.container} ${styles.heroContent}`}>
            <Eyebrow>The event operations platform</Eyebrow>
            <h1 id="hero-title">One Platform.<br />Every Event.<br />Fully <span>Connected.</span></h1>
            <p className={styles.heroDescription}>Plan, manage, and deliver every moving part of your event —<br className={styles.desktopBreak} /> from registration to engagement, without losing control.</p>
            <div className={styles.heroActions}><DemoButton /><WatchVideo /></div>
            <div className={styles.heroStats}>
              <div><strong>10K+</strong><span>Events powered</span></div>
              <div><strong>2M+</strong><span>Attendees managed</span></div>
              <div><strong>99.9%</strong><span>Platform reliability</span></div>
            </div>
          </div>
          <p className={styles.heroMotto}>Better events.<br />Bigger impact.</p>
          <Link href="#stories" className={styles.liveEvent} aria-label="Explore the Global Innovation Summit story">
            <span className={styles.liveLabel}><i />Live Event</span>
            <strong>Global Innovation Summit</strong>
            <span className={styles.liveLocation}><MapPin />San Francisco, CA</span>
            <span className={styles.liveArrow}><ArrowRight /></span>
            <span className={styles.attendees}>
              <span className={styles.avatars}>
                <Image src="/images/reference/jessica-lim.jpg" alt="" width={38} height={38} />
                <Image src="/images/reference/attendee-man.jpg" alt="" width={38} height={38} />
                <Image src="/images/reference/attendee-woman.jpg" alt="" width={38} height={38} />
              </span><span>+1.2K attending</span>
            </span>
          </Link>
        </section>

        <section className={styles.trust} aria-label="Trusted organizations">
          <div className={styles.container}>
            <Eyebrow>Trusted by leading organizations worldwide</Eyebrow>
            <div className={styles.trustLogos}>
              <span className={styles.google}>Google</span>
              <span className={styles.microsoft}><FaMicrosoft />Microsoft</span>
              <span className={styles.adobe}><svg viewBox="0 0 24 26" aria-hidden="true"><path fill="currentColor" d="M0 0h9L0 26V0Zm15 0h9v26L15 0ZM12 9l6 17h-4l-1.5-5H7.8L12 9Z" /></svg>Adobe</span>
              <span className={styles.spotify}><SiSpotify />Spotify</span>
              <span className={styles.samsung}>SAMSUNG</span>
              <span className={styles.zoom}>zoom</span><span className={styles.ted}>TED</span><FaSalesforce title="Salesforce" className={styles.salesforce} />
            </div>
          </div>
        </section>

        <section id="platform" className={styles.overview} aria-labelledby="overview-title">
          <div className={styles.overviewBackdrop} />
          <div className={`${styles.container} ${styles.overviewGrid}`}>
            <div className={styles.overviewCopy}>
              <Eyebrow number="01">Everything you need</Eyebrow>
              <h2 id="overview-title">From planning<br />to post-event.<br />All in one place.</h2>
              <p>TAGTOG brings every part of your event together — people, content, operations, and data — so you can focus on what matters most, your attendees.</p>
              <a className={`${styles.button} ${styles.buttonDark}`} href="#features">Explore the platform<ArrowRight /></a>
            </div>
            <div className={styles.dashboardWrap}><EventDashboard /></div>
          </div>
        </section>

        <section id="lifecycle" className={styles.lifecycle} aria-labelledby="lifecycle-title">
          <div className={`${styles.container} ${styles.sectionIntro}`}>
            <div><Eyebrow number="02">The event lifecycle</Eyebrow><h2 id="lifecycle-title">Turning complex<br />events into a connected flow.</h2></div>
            <div className={styles.introAside}><p>TAGTOG helps you stay in control at every stage —<br className={styles.desktopBreak} /> so your events run smoother, your team works faster,<br className={styles.desktopBreak} /> and your impact goes further.</p><a href="#event-stages" className={styles.textLink}>See how it works<ArrowRight /></a></div>
          </div>
          <div id="event-stages" className={styles.lifecycleCards}>
            {[
              { name: "BEFORE", subtitle: "Plan & Prepare", description: "Set goals, build your event, align your team, and create buzz.", image: "before-planning.jpg" },
              { name: "DURING", subtitle: "Engage & Execute", description: "Deliver seamless experiences with real-time tools, check-ins, and live engagement.", image: "hero-conference.jpg" },
              { name: "AFTER", subtitle: "Measure & Grow", description: "Get insights, analyze performance, and turn your event into bigger opportunities.", image: "after-analytics.jpg" },
            ].map((stage) => <a href="#features" className={styles.stageCard} key={stage.name}>
              <Image src={`/images/reference/${stage.image}`} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
              <div className={styles.stageShade} /><div className={styles.stageCopy}><h3>{stage.name}</h3><span className={styles.greenRule} /><h4>{stage.subtitle}</h4><p>{stage.description}</p></div><span className={styles.circleArrow}><ArrowRight /></span>
            </a>)}
          </div>
        </section>

        <section id="features" className={styles.features} aria-labelledby="features-title">
          <div className={`${styles.container} ${styles.featuresGrid}`}>
            <div className={styles.featureIntro}><Eyebrow number="02">The eventful features</Eyebrow><h2 id="features-title">Built for real<br />event operations.</h2><p>From registration and event websites to onsite check-in, engagement, and analytics — TAGTOG gives you the tools to create exceptional experiences, at any scale.</p><DemoButton>Explore all features</DemoButton></div>
            <div className={styles.featureList}>{features.map(({ title, description, icon: Icon }) => <div key={title} className={styles.feature}><Icon aria-hidden="true" strokeWidth={1.4} /><div><h3>{title}</h3><p>{description}</p></div></div>)}</div>
          </div>
        </section>

        <section id="solutions" className={styles.solutions} aria-labelledby="solutions-title">
          <div className={styles.container}>
            <div className={styles.solutionsIntro}><div><Eyebrow number="03">Powers for every industry</Eyebrow><h2 id="solutions-title">A platform for<br />every kind of event.</h2></div><div className={styles.introAside}><p>From global conferences to community meetups,<br className={styles.desktopBreak} /> TAGTOG adapts to your industry, audience, and goals.</p><Link href="/request-demo" className={styles.textLink}>Explore all solutions<ArrowRight /></Link></div></div>
            <div className={styles.industryCards}>{industries.map((industry) => <Link href={`/request-demo?industry=${encodeURIComponent(industry.title)}`} key={industry.title} className={styles.industryCard}><div className={styles.industryPhoto}><Image src={`/images/reference/${industry.image}`} alt={industry.title} fill sizes="(max-width: 700px) 50vw, 18vw" /></div><div className={styles.industryCopy}><h3>{industry.title}</h3><p>{industry.description}</p><span className={styles.industryArrow}><ArrowRight /></span></div></Link>)}</div>
          </div>
        </section>

        <section id="stories" className={styles.stories} aria-label="Customer story">
          <div className={`${styles.container} ${styles.storyGrid}`}>
            <div className={styles.storyCopy}><Eyebrow number="05">Real stories. Real impact.</Eyebrow><blockquote>“TAGTOG gave us the flexibility and control we needed to deliver our biggest event yet. The experience for our team and attendees was seamless from day one.”</blockquote><div className={styles.author}><Image src="/images/reference/jessica-lim.jpg" alt="Jessica Lim" width={56} height={56} /><div><strong>Jessica Lim</strong><span>Head of Global Events, Canva</span></div><span className={styles.canva}>Canva</span></div></div>
            <div className={styles.storyPhoto}><Image src="/images/reference/testimonial-speaker.jpg" alt="Speaker presenting Ideas Connect People to a conference audience" fill sizes="(max-width: 700px) 90vw, 34vw" /></div>
            <div className={styles.storyStats}><span className={styles.impactLabel}>Impact</span><div><strong>+ 48%</strong><span>higher attendance rate</span></div><div><strong>- 60%</strong><span>less operational time</span></div><div><strong>4.9/5</strong><span>average event satisfaction</span></div></div>
          </div>
        </section>

        <section id="integrations" className={styles.integrations} aria-labelledby="integrations-title">
          <div className={`${styles.container} ${styles.integrationsGrid}`}>
            <div><Eyebrow number="06">Integrations</Eyebrow><h2 id="integrations-title">Works with the tools<br />you already love.</h2><p>Connect TAGTOG with your existing tech stack<br className={styles.desktopBreak} /> and unlock even more possibilities.</p><Link href="/request-demo?interest=integrations" className={styles.textLink}>View all integrations<ArrowRight /></Link></div>
            <div className={styles.integrationLogos}><span className={styles.microsoft365}><span><FaMicrosoft /></span>Microsoft 365</span><span className={styles.googleWorkspace}>Google Workspace</span><span className={styles.hubspot}>HubSpot<SiHubspot aria-hidden="true" /></span><FaSalesforce title="Salesforce" className={styles.integrationSalesforce} /><span className={styles.mailchimp}><SiMailchimp />Mailchimp</span><span className={styles.zapier}><Asterisk aria-hidden="true" />zapier</span><span className={styles.stripe}>stripe</span><span className={styles.slack}><FaSlack />slack</span></div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="cta-title"><div className={`${styles.container} ${styles.ctaGrid}`}><div><Eyebrow>Ready to create what’s next?</Eyebrow><h2 id="cta-title">Let’s make your next<br />event extraordinary.</h2></div><div className={styles.ctaAside}><p>Join thousands of event teams who trust TAGTOG<br className={styles.desktopBreak} /> to bring their biggest ideas to life.</p><div className={styles.ctaButtons}><DemoButton /><Link href="/request-demo?interest=sales" className={`${styles.button} ${styles.buttonOutline}`}>Talk to sales</Link></div></div></div></section>
      </main>

      <footer id="footer" className={styles.footer}><div className={styles.container}><div className={styles.footerMain}><div className={styles.footerBrand}><a href="#" className={styles.wordmark}>TAGTOG</a><p>Events that move people forward.</p><div className={styles.socials}><a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="https://x.com/" aria-label="X"><FaXTwitter /></a><a href="https://www.youtube.com/" aria-label="YouTube"><FaYoutube /></a><a href="#stories" aria-label="Event videos"><span className={styles.videoSocial}><span /><span /></span></a></div></div>{footerGroups.map((group) => <div className={styles.footerGroup} key={group.title}><h3>{group.title}{group.title === "Product" && <span>⌄</span>}</h3>{group.links.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</div>)}<p className={styles.footerMotto}>Better<br />events.<br />Bigger<br />impact.</p></div><div className={styles.footerBottom}><p>© 2025 TAGTOG. All rights reserved.</p><div><Link href="/request-demo?interest=privacy">Privacy</Link><Link href="/request-demo?interest=terms">Terms</Link><a href="#footer">Cookies</a></div></div></div></footer>
    </div>
  );
}
