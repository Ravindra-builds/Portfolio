import { Calendar, Clock, ArrowUpRight, PenLine } from "lucide-react";

interface BlogPost {
  title: string;
  blurb: string;
  url: string;
  date: string;
  readTime: string;
  tag: string;
}

const posts: BlogPost[] = [
  {
    title: "Where RAG Fails: Understanding the Limitations",
    blurb:
      "A practical look at why Retrieval-Augmented Generation breaks down in real applications — chunking pitfalls, retrieval blind spots, and what actually helps AI answer questions from your own documents.",
    url: "https://rvindra.hashnode.dev/rag-beginner-guide",
    date: "Jul 18, 2026",
    readTime: "8 min read",
    tag: "RAG",
  },
  {
    title: "Context Window — Humans vs. LLMs",
    blurb:
      "How memory actually works for large language models compared to how humans remember, and why understanding context windows changes how you should prompt and design AI applications.",
    url: "https://rvindra.hashnode.dev/context-window-llm",
    date: "Jul 13, 2026",
    readTime: "4 min read",
    tag: "LLMs",
  },
  {
    title: "How ChatGPT Understands Your Questions",
    blurb:
      "Tracing the path from raw text to intelligent response — tokenization, embeddings, and attention explained simply, for anyone curious what's really happening under the hood.",
    url: "https://rvindra.hashnode.dev/how-chatgpt-understands-your-questions",
    date: "Jul 1, 2026",
    readTime: "6 min read",
    tag: "LLMs",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/5">
            <PenLine size={14} className="text-pink-400" />
            <span className="text-xs text-pink-300 font-medium">Technical Writing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">
            Latest Writing
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I write to understand things properly - AI, LLMs, and the systems behind them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="slideUp group relative flex flex-col bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-pink-500/40 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="inline-block w-fit text-[11px] font-medium px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20 mb-4">
                {post.tag}
              </span>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-pink-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {post.blurb}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-800">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-gray-500 group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12 slideUp">
          <a
            href="https://rvindra.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:border-pink-500/50 hover:bg-pink-500/5 text-gray-300 hover:text-pink-300 font-medium transition-all duration-300"
          >
            Explore all posts on Hashnode
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;