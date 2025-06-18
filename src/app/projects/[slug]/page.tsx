import { getProject } from '@/lib/content';
import BackButton from '@/components/BackButton';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  console.log('ProjectPage slug:', params.slug);
  const project = await getProject(params.slug);
  console.log('ProjectPage fetched project:', project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton className="mb-4" />
      <MarkdownRenderer meta={project.meta} html={project.html} />
    </div>
  );
} 