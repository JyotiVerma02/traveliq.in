import { getPosts } from "@/lib/wordpress";

export default async function TestPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold">
        WordPress Posts
      </h1>

      <div className="space-y-6">
        {posts.map((post: any) => (
          <article
            key={post.id}
            className="rounded-lg border p-6"
          >
            <h2
              className="text-xl font-bold"
              dangerouslySetInnerHTML={{
                __html: post.title.rendered,
              }}
            />

            <p className="mt-3 text-gray-600">
              Slug: {post.slug}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}