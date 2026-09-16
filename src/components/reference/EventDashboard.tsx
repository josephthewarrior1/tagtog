import {
  BarChart3,
  CalendarDays,
  ChevronDown,
  FileText,
  Megaphone,
  ScanLine,
  Settings,
  Users,
} from "lucide-react";
import styles from "./EventDashboard.module.css";

const menuItems = [
  { label: "Events", icon: CalendarDays },
  { label: "Attendees", icon: Users },
  { label: "Marketing", icon: Megaphone },
  { label: "Content", icon: FileText },
  { label: "Onsite", icon: ScanLine },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const metrics = [
  { label: "Total Attendees", value: "2,480", change: "+12%" },
  { label: "Check-ins", value: "92%", change: "+8%" },
  { label: "Revenue", value: "$86,420", change: "+24%" },
];

export function EventDashboard() {
  return (
    <div
      className={styles.dashboard}
      role="img"
      aria-label="TAGTOG event dashboard for Product Summit 2024: 2,480 total attendees, 92 percent check-ins, $86,420 in revenue, and a registration trend chart."
    >
      <div className={styles.frame} aria-hidden="true">
        <div className={styles.sidebar}>
          <div className={styles.brand}>TAGTOG</div>
          <div className={styles.menu}>
            {menuItems.map(({ label, icon: Icon }, index) => (
              <div
                className={`${styles.menuItem} ${index === 0 ? styles.active : ""}`}
                key={label}
              >
                <Icon strokeWidth={1.3} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.header}>
            <div>
              <div className={styles.heading}>Event Overview</div>
              <div className={styles.subtitle}>Product Summit 2024</div>
            </div>
            <div className={styles.date}>
              Apr 21–Apr 23, 2024 <ChevronDown />
            </div>
          </div>

          <div className={styles.metrics}>
            {metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <div className={styles.metricLabel}>{metric.label}</div>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricComparison}>
                  <span>↑ {metric.change}</span> from last event
                </div>
              </div>
            ))}
          </div>

          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <span>Registration Trend</span>
              <div className={styles.chartPeriod}>
                Last 30 days <ChevronDown />
              </div>
            </div>
            <div className={styles.chart}>
              <div className={styles.axisLabels}>
                <span>150</span>
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>0</span>
              </div>
              <svg
                className={styles.plot}
                viewBox="0 0 520 144"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="registration-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a8a8a8" stopOpacity="0.38" />
                    <stop offset="100%" stopColor="#eeeeee" stopOpacity="0.12" />
                  </linearGradient>
                </defs>
                {[18, 48, 78, 108, 138].map((y) => (
                  <path key={y} d={`M0 ${y} H520`} stroke="#f0f0ef" strokeWidth="0.65" />
                ))}
                <path
                  d="M0 135 C15 121 25 108 41 111 S60 126 77 117 S98 93 113 99 S129 116 145 100 S163 79 178 89 S196 92 207 79 S224 61 239 71 S260 94 276 75 S291 64 308 77 S327 94 344 84 S365 96 382 85 S410 63 427 73 S457 96 475 89 S501 69 520 64 V144 H0 Z"
                  fill="url(#registration-chart-fill)"
                />
                <path
                  d="M0 135 C15 121 25 108 41 111 S60 126 77 117 S98 93 113 99 S129 116 145 100 S163 79 178 89 S196 92 207 79 S224 61 239 71 S260 94 276 75 S291 64 308 77 S327 94 344 84 S365 96 382 85 S410 63 427 73 S457 96 475 89 S501 69 520 64"
                  stroke="#898d8d"
                  strokeWidth="1.4"
                />
                <path d="M293 38 V143" stroke="#c6c7c3" strokeWidth="1" />
                <circle cx="293" cy="39" r="7" fill="#0c1010" />
              </svg>
              <div className={styles.chartTooltip}>
                <strong>1,248</strong>
                <span>Registrations</span>
              </div>
            </div>
            <div className={styles.dates}>
              <span>Apr 01</span>
              <span>Apr 05</span>
              <span>Apr 10</span>
              <span>Apr 15</span>
              <span>Apr 22</span>
              <span>Apr 30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
