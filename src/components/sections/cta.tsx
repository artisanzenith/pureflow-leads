import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="section-padding mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-8 py-16 text-center sm:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build a predictable lead engine?
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            Join thousands of US founders and marketers who use PureFlow Leads to stay ahead of channel shifts,
            tool updates, and conversion benchmarks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/blog" variant="secondary" size="lg" className="bg-white text-brand-700 hover:bg-brand-50">
              Read growth guides
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Partner with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
