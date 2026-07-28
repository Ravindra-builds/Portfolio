import { Calendar, Clock, ArrowUpRight } from "lucide-react";

interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  url: string;
  coverImage: { url: string } | null;
  publishedAt: string;
  readTimeInMinutes: number;
}

interface HashnodePostEdge {
  node: HashnodePost;
}

interface HashnodeResponse {
  data?: {
    publication?: {
      posts?: {
        edges: HashnodePostEdge[];
      };
    };
  };
  errors?: { message: string }[];
}

async function getPosts(): Promise<HashnodePost[]> {
  const query = `
    query Publication($host: String!) {
      publication(host: $host) {
        posts(first: 4) {
          edges {
            node {
              id
              title
              brief
              url
              coverImage { url }
              publishedAt
              readTimeInMinutes
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "ravindra-portfolio (+https://ravindrayadav.online)",
      },
      body: JSON.stringify({
        query,
        variables: { host: "rvindra.hashnode.dev" },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Hashnode API returned ${res.status}:`, body.slice(0, 300));
      return [];
    }

    const json: HashnodeResponse = await res.json();

    if (json.errors?.length) {
      console.error("Hashnode GraphQL errors:", json.errors);
      return [];
    }

    return json?.data?.publication?.posts?.edges?.map((e) => e.node) ?? [];
  } catch (err) {
    console.error("Failed to fetch Hashnode posts:", err);
    return [];
  }
}

const Blog = async () => {
  const posts = await getPosts();

  if (posts.length === 0) {
    return null; // hides section gracefully; check terminal logs if this triggers unexpectedly
  }

  return (
    <section id="blog" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">
            Latest Writing
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">I write about AI, LLMs, and building real products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="slideUp group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {post.coverImage?.url && (
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage.url}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.brief}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTimeInMinutes} min read
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-500 group-hover:text-pink-400 transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://rvindra.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            View all posts on Hashnode
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;