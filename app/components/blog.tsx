"use client";

import React, { useState, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Article {
  title: string;
  summary: string;
  url: string;
  date: string;
  readTime: string;
  tag: string;
}

const articles: Article[] = [
  {
    title: "Where RAG Fails: Understanding the Limitations",
    summary:
      "A practical look at why Retrieval-Augmented Generation breaks down in real applications — chunking pitfalls, retrieval blind spots, and what actually helps AI answer questions from your own documents.",
    url: "https://rvindra.hashnode.dev/rag-beginner-guide",
    date: "Jul 18, 2026",
    readTime: "8 min read",
    tag: "Vector RAG",
  },
  {
    title: "Context Window — Humans vs. LLMs",
    summary:
      "How memory actually works for large language models compared to human recall, and why understanding context windows changes how you should prompt and design AI applications.",
    url: "https://rvindra.hashnode.dev/context-window-llm",
    date: "Jul 13, 2026",
    readTime: "4 min read",
    tag: "LLM Architecture",
  },
  {
    title: "How ChatGPT Understands Your Questions",
    summary:
      "Tracing the path from raw text to intelligent response — tokenization, embeddings, and attention explained simply, for anyone curious what's really happening under the hood.",
    url: "https://rvindra.hashnode.dev/how-chatgpt-understands-your-questions",
    date: "Jul 1, 2026",
    readTime: "6 min read",
    tag: "Transformers",
  },
];

export default function Blog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.children[0] as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24;
    const index = Math.round(scrollLeft / cardWidth);
    const clamped = Math.min(Math.max(0, index), articles.length - 1);
    if (clamped !== activeIndex) {
      setActiveIndex(clamped);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      const containerLeft = container.getBoundingClientRect().left;
      const cardLeft = card.getBoundingClientRect().left;
      const targetScroll =
        container.scrollLeft +
        (cardLeft - containerLeft) -
        (container.clientWidth - card.offsetWidth) / 2;
      container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const scrollPrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  };

  const scrollNext = () => {
    scrollToIndex(Math.min(articles.length - 1, activeIndex + 1));
  };

  return (
    <section id="blog" className="py-20 md:py-28 border-t border-border/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
              06 / Thoughts
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Technical{" "}
              <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
                Essays
              </span>
              {" "}&amp; Systems Writing.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              I write in-depth essays on Hashnode to deconstruct complex AI mechanisms, memory limits, and systems design.
            </p>
          </div>

          <div className="flex items-center gap-4 self-end">
            <a
              href="https://rvindra.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground hover:text-amber-500 transition-colors"
            >
              <span>View All Articles</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Prev / Next Buttons */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={scrollPrev}
                disabled={activeIndex === 0}
                aria-label="Previous essay"
                className="p-2 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={scrollNext}
                disabled={activeIndex === articles.length - 1}
                aria-label="Next essay"
                className="p-2 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Fluid Carousel Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 scroll-smooth"
        >
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[85vw] sm:w-[380px] md:w-[440px] shrink-0 snap-center group p-6 sm:p-7 rounded-3xl bg-card border border-border hover:border-amber-500/40 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span className="text-amber-600 dark:text-amber-400 font-medium">
                    {article.tag}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-amber-500 transition-colors">
                    {article.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1"
                  />
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-border/60 text-xs font-mono font-medium text-amber-600 dark:text-amber-400 group-hover:underline flex items-center gap-1">
                <span>Read Full Essay</span>
                <ArrowUpRight size={12} />
              </div>
            </a>
          ))}
        </div>

        {/* Dotted Visual Scroll Indicator & Navigation Bar */}
        <div className="flex items-center justify-between pt-6 mt-4">
          <span className="text-xs font-mono text-muted-foreground">
            0{activeIndex + 1} / 0{articles.length} Essays
          </span>

          {/* Interactive Dotted Track */}
          <div className="flex items-center gap-2">
            {articles.map((a, i) => (
              <button
                key={a.url}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to essay ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-7 sm:w-9 h-2 bg-amber-500 shadow-sm shadow-amber-500/40"
                    : "w-2 h-2 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous essay"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === articles.length - 1}
              aria-label="Next essay"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={14} />
            </button>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground">
            Click dots or swipe to read
          </span>
        </div>
      </div>
    </section>
  );
}
