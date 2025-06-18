import { getBlogPost } from '@/lib/content';
import BackButton from '@/components/BackButton';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  console.log('BlogPost slug:', params.slug);
  const post = await getBlogPost(params.slug);
  console.log('BlogPost fetched post:', post);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton className="mb-4" />
      <MarkdownRenderer meta={post.meta} html={post.html} />
    </div>
  );
} 