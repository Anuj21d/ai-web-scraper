import React, { useState } from "react";
import {
  BookDashed,
  Link2,
  ArrowRight,
  BookOpen,
  Clock,
  Newspaper,
  Loader2,
  Layers,
  X,
} from "lucide-react";

const App = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async (e) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    // Simulate API call to your AIhandleSummarize = async (e)  backend
    setTimeout(() => {
      setIsLoading(false);
      alert(`Summarizing: ${url}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper-canvas text-paper-ink transition-colors duration-200 paper-texture selection:bg-paper-selection selection:text-paper-ink">
      <header className="w-full border-b border-paper-border bg-paper-surface/80 backdrop-blur-xs sticky top-0 z-30 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <div
            className="flex items-center gap-2.5 cursor-pointer select-none group"
            role="button"
            tabIndex="0"
          >
            <div className="w-7 h-7 rounded-sm border border-paper-ink/30 flex items-center justify-center bg-paper-canvas text-paper-ink transition-transform group-hover:-rotate-3">
              <BookDashed size={16} color="#25251f" strokeWidth={1.5} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-medium tracking-tight text-paper-ink">
                Papertrail
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-paper-muted hidden sm:inline">
                AI WEB READER
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-xs tracking-wider uppercase text-paper-muted">
            <button className="hover:text-paper-ink transition-colors whitespace-nowrap cursor-pointer py-1">
              How it works
            </button>
            <button className="hover:text-paper-ink transition-colors whitespace-nowrap cursor-pointer py-1">
              About
            </button>
          </nav>
          <div className="flex items-center gap-3 shrink-0">
            <button className="text-xs uppercase tracking-wider px-3.5 py-1.5 border border-paper-border hover:border-paper-ink bg-paper-canvas text-paper-ink rounded-xs transition-colors cursor-pointer whitespace-nowrap shadow-xs">
              New Reading
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto">
        <section className="pt-12 pb-10 sm:pt-16 sm:pb-12 text-center max-w-3xl mx-auto px-4 select-none">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-px w-6 bg-paper-border"></span>
            <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-paper-muted">
              READ LESS. UNDERSTAND MORE.
            </span>
            <span className="h-px w-6 bg-paper-border"></span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.75rem] leading-[1.1] font-normal tracking-tight text-paper-ink text-balance">
            The web, distilled to its essentials.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-paper-muted font-editorial-sans max-w-xl mx-auto leading-relaxed text-balance">
            Turn any webpage into a clear, thoughtful summary. No clutter, just
            the ideas that matter.
          </p>
        </section>

        <div className="max-w-2xl mx-auto px-4 pb-14">
          <div className="flex items-center justify-between border-b border-paper-border pb-3 mb-4 text-xs font-mono">
            <div className="flex items-center gap-4">
              <button
                className="pb-1.5 transition-colors cursor-pointer flex items-center gap-1.5 text-paper-ink font-medium border-b-2 border-paper-ink -mb-2.25"
                type="button"
              >
                <Link2 size={16} color="#25251f" strokeWidth={1.5} />
                <span>SOURCE URL</span>
              </button>
            </div>
          </div>
          <form onSubmit={handleSummarize} className="space-y-3">
            <div className="bg-paper-surface border border-paper-border rounded-xs p-1.5 sm:p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shadow-xs transition-colors focus-within:border-paper-ink">
              <div className="flex items-center gap-2.5 px-2.5 py-1.5 flex-1 min-w-0">
                <Link2 size={16} color="#25251f" strokeWidth={1.5} />
                <input
                  type="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isLoading}
                  className="w-full bg-transparent text-paper-ink placeholder-paper-muted/60 text-sm font-editorial-sans focus:outline-hidden disabled:opacity-50"
                  placeholder="https://example.com/article"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !url}
                className="bg-paper-ink text-paper-surface hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed px-5 py-2.5 rounded-xs text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 shadow-xs active:scale-[0.99]"
              >
                <span>{isLoading ? "Reading..." : "Summarize"}</span>
                {isLoading ? (
                  <Loader2
                    size={16}
                    className="animate-spin"
                    color="#faf8f1"
                    strokeWidth={1.5}
                  />
                ) : (
                  <ArrowRight size={16} color="#faf8f1" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </form>
        </div>

        <section className="max-w-3xl mx-auto px-4 pb-20 pt-2">
          <div className="border-t border-paper-border pt-8">
            <div className="text-center mb-8">
              <span className="text-[11px] font-mono tracking-widest uppercase text-paper-muted">
                THE DISTILLATION STANDARD
              </span>
              <h3 className="font-editorial-serif text-2xl font-medium mt-1 text-paper-ink">
                Designed for deep, restful contemplation.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-paper-ink">
              <div className="p-4 bg-paper-surface/60 border border-paper-border rounded-xs">
                <div className="font-mono text-[11px] text-paper-ink font-semibold uppercase mb-1 flex items-center gap-1.5">
                  <BookOpen size={16} color="#A44F35" strokeWidth={1.5} />
                  <span>01. Theses, Not Fluff</span>
                </div>
                <p>
                  Compress 30-minute sprawling essays into 3-minute crystal
                  distillations while retaining exact memorable quotes and
                  contextual nuance.
                </p>
              </div>
              <div className="p-4 bg-paper-surface/60 border border-paper-border rounded-xs">
                <div className="font-mono text-[11px] text-paper-ink font-semibold uppercase mb-1 flex items-center gap-1.5">
                  <Clock size={16} color="#A44F35" strokeWidth={1.5} />
                  <span>02. Measured Time</span>
                </div>
                <p>
                  Rather than generic AI bullet points, Papertrail extracts the
                  author's primary philosophical thesis, structural arguments,
                  and critical counterpoints.
                </p>
              </div>
              <div className="p-4 bg-paper-surface/60 border border-paper-border rounded-xs">
                <div className="font-mono text-[11px] text-paper-ink font-semibold uppercase mb-1 flex items-center gap-1.5">
                  <Newspaper size={16} color="#A44F35" strokeWidth={1.5} />
                  <span>03. Paper & Broadsheet</span>
                </div>
                <p>
                  Restful ivory background, zero-shadow hairline borders,
                  drop-cap openings, and printable broadsheet stylesheets for
                  tactile physical reading.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-paper-border bg-paper-surface/60 py-8 text-xs font-mono text-paper-muted no-print">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm font-medium text-paper-ink">
              Papertrail
            </span>
            <span>·</span>
            <span>An AI Web Reader for Digital Paper</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Google Gemini Flash</span>
            <span>·</span>
            <span>Zero-Distraction Typography</span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-paper-surface border border-paper-border rounded-xs shadow-xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150">
          <div className="p-4 sm:p-6 border-b border-paper-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers size={16} color="#25251f" strokeWidth={1.5} />
              <h3 className="font-serif font-medium text-lg text-paper-ink">
                How Papertrail Works
              </h3>
            </div>
            <button className="p-1 text-paper-muted hover:text-paper-ink cursor-pointer">
              <X size={16} color="#25251f" strokeWidth={1.5} />
            </button>
          </div>
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm text-paper-ink font-serif leading-relaxed">
            <div className="border-l-2 border-paper-border pl-4">
              <div className="text-xs font-mono text-paper-muted uppercase tracking-wider mb-1">
                Phase 01 · Clutter-Free Extraction
              </div>
              <h4 className="font-editorial-serif font-medium text-base mb-1">
                Pruning the Noise of the Web
              </h4>
              <p className="text-paper-muted">
                When a URL is submitted, Papertrail's engine retrieves the
                underlying HTML document and strips cookie consent banners,
                telemetry trackers, invasive scripts, newsletter popups, and
                sidebar ads, isolating only pure editorial prose.
              </p>
            </div>
            <div className="border-l-2 border-paper-border pl-4">
              <div className="text-xs font-mono text-paper-muted uppercase tracking-wider mb-1">
                Phase 02 · Gemini Intellectual Synthesis
              </div>
              <h4 className="font-editorial-serif font-medium text-base mb-1">
                Identifying Theses and Arguments
              </h4>
              <p className="text-paper-muted">
                The cleaned prose is fed into Google Gemini 3.8 Flash with
                rigorous editorial instructions. Rather than producing generic
                bullet points, the model extracts the author's primary thesis,
                structural thematic chapters, actual verbatim quotes, and
                critical nuances.
              </p>
            </div>
            <div className="border-l-2 border-paper-border pl-4">
              <div className="text-xs font-mono text-paper-muted uppercase tracking-wider mb-1">
                Phase 03 · Digital Paper Composition
              </div>
              <h4 className="font-editorial-serif font-medium text-base mb-1">
                Quiet Typography for Contemplative Reading
              </h4>
              <p className="text-paper-muted">
                The distillation is rendered on warm ivory surfaces styled after
                classic broadsheets and E-Ink paper. Enjoy adjustable serif
                typography, high-contrast monochrome themes, or print directly
                as a physical booklet.
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-paper-border/60 bg-paper-canvas/30 text-right">
            <button className="px-4 py-1.5 text-xs font-mono uppercase bg-paper-ink text-paper-surface rounded-xs cursor-pointer">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
