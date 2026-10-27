import React from "react";
import { ArrowUpRight, BookOpen, Calendar, Clock } from "lucide-react";

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
  return (
    <section id="blog" className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
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
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              I write in-depth essays on Hashnode to deconstruct complex AI mechanisms, memory limits, and systems design.
            </p>
          </div>

          <a
            href="https://rvindra.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground hover:text-amber-500 transition-colors"
          >
            <span>View All Articles</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-7 rounded-3xl bg-card border border-border hover:border-amber-500/40 block transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <span>•</span>
                <span className="text-amber-600 dark:text-amber-400 font-medium">
                  {article.tag}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-amber-500 transition-colors">
                  {article.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-1"
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {article.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
