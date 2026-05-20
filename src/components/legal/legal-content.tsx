import { formatDate } from "@/lib/utils";

type LegalSection = {
  title: string;
  content: string[];
};

type LegalContentProps = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalContent({ title, lastUpdated, sections }: LegalContentProps) {
  return (
    <article className="section-padding mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {formatDate(lastUpdated)}</p>
      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
            <div className="mt-4 space-y-4">
              {section.content.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-slate-600 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
