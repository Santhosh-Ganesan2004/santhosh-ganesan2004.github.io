import { parseMarkdown } from './markdown';

// Static globs for each content type
const blogFiles = import.meta.glob('../markdown/blog/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;
const certificationFiles = import.meta.glob('../markdown/certifications/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;
const projectFiles = import.meta.glob('../markdown/projects/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;

async function loadMarkdown(files: Record<string, () => Promise<string>>) {
  const items = [];
  for (const [path, resolver] of Object.entries(files)) {
    try {
      console.log('Loading markdown file:', path);
      const content = await resolver();
      console.log('Raw markdown content:', content);
      const parsed = parseMarkdown(content);
      console.log('Parsed markdown:', parsed);
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      items.push({
        meta: parsed.frontmatter,
        html: parsed.content,
        slug,
      });
    } catch (error) {
      console.error(`Error processing ${path}:`, error);
    }
  }
  return items;
}

export async function getBlogPosts() {
  return loadMarkdown(blogFiles);
}

export async function getCertifications() {
  return loadMarkdown(certificationFiles);
}

export async function getProjects() {
  return loadMarkdown(projectFiles);
}

export async function getBlogPost(slug: string) {
  const posts = await getBlogPosts();
  return posts.find(p => p.slug === slug);
}

export async function getProject(slug: string) {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}

export async function getCertification(slug: string) {
  const certifications = await getCertifications();
  return certifications.find(c => c.slug === slug);
} 