import { TRUST_STATS } from "@/lib/constants";

const logos = ["HubSpot", "Salesforce", "Mailchimp", "Zapier", "Notion", "Stripe"];

export function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
      <div className="section-padding mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Insights aligned with tools teams actually use
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-semibold text-slate-300 dark:text-slate-600">
              {logo}
            </span>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
