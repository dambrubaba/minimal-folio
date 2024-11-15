import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogCardData } from '../../utils/data';
import { notFound } from 'next/navigation';

async function getPost(slug) {
  try {
    const filePath = path.join(process.cwd(), 'app/content/blog', `${slug}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    if (!data.title || !data.date || !data.tags) {
      throw new Error('Missing required metadata');
    }
    
    return {
      metadata: data,
      content: content
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export async function generateStaticParams() {
  return BlogCardData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto py-10">
      <article className="prose dark:prose-invert max-w-none px-8">
        <h1 className="mb-4">{post.metadata.title}</h1>
        <div className="flex flex-wrap gap-2 items-center mb-8 text-sm text-muted-foreground">
          <time dateTime={post.metadata.date}>{post.metadata.date}</time>
          <div className="flex gap-2">
            {post.metadata.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-accent px-2 py-1 rounded-md text-xs hover:bg-accent/80 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
