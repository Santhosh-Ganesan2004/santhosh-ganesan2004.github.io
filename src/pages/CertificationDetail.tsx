import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCertification } from '../lib/content';
import MarkdownRenderer from '../components/MarkdownRenderer';

const CertificationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [certification, setCertification] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertification = async () => {
      if (!slug) return;
      try {
        const fetchedCertification = await getCertification(slug);
        setCertification(fetchedCertification);
      } catch (err) {
        setError('Failed to load certification');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCertification();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !certification) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="text-red-500 text-xl font-semibold">Certification not found</div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => window.location.href = '/certifications'}
        >
          Back to Certifications
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <MarkdownRenderer meta={certification.meta} html={certification.html} />
      </div>
    </div>
  );
};

export default CertificationDetail; 