import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogCardData } from '../../utils/data';

async function getPost(slug) {
  try {
    const filePath = path.join(process.cwd(), 'app/content/blog', `${slug}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
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
    return <div>Post not found</div>;
  }

  return (
    <article className="prose dark:prose-invert max-w-none px-8">
      <h1>{post.metadata.title}</h1>
      <div className="flex gap-2 text-sm text-muted-foreground">
        <time>{post.metadata.date}</time>
        <div className="flex gap-2">
          {post.metadata.tags.map(tag => (
            <span key={tag} className="bg-accent px-2 py-1 rounded-md text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <MDXRemote source={post.content} />
    </article>
  );
}
