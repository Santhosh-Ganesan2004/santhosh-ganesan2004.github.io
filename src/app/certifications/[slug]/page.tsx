import { getCertification } from '@/lib/content';
import BackButton from '@/components/BackButton';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function CertificationPage({ params }: { params: { slug: string } }) {
  console.log('CertificationPage slug:', params.slug);
  const certification = await getCertification(params.slug);
  console.log('CertificationPage fetched certification:', certification);

  if (!certification) {
    return <div>Certification not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton className="mb-4" />
      <MarkdownRenderer meta={certification.meta} html={certification.html} />
    </div>
  );
} 