import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';

// Configure marked with GitHub Flavored Markdown
marked.use(gfmHeadingId());

export interface MarkdownMeta {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image?: string;
  category?: string;
  readTime?: string;
  issuer?: string;
  certificateId?: string;
  link?: string;
  technologies?: string[];
}

export interface MarkdownContent {
  meta: MarkdownMeta;
  content: string;
  html: string;
  slug: string;
}

interface Frontmatter {
  title?: string;
  date?: string;
  issuer?: string;
  certificateId?: string;
  link?: string;
  tags?: string[];
  excerpt?: string;
  image?: string;
  category?: string;
  readTime?: string;
  technologies?: string[];
  [key: string]: any;
}

export function parseMarkdown(content: string) {
  console.log('Parsing markdown content:', content);
  
  // Split frontmatter and content
  const parts = content.split('---');
  let frontmatter: Frontmatter = {};
  let markdownContent = content;

  if (parts.length >= 3) {
    try {
      // Parse YAML-style frontmatter
      const frontmatterText = parts[1].trim();
      console.log('Frontmatter text:', frontmatterText);
      
      frontmatterText.split('\n').forEach(line => {
        const [key, ...values] = line.split(':');
        if (key && values.length > 0) {
          const value = values.join(':').trim();
          const trimmedKey = key.trim();
          
          console.log(`Processing frontmatter key: ${trimmedKey}, value: ${value}`);
          
          switch (trimmedKey) {
            case 'title':
              frontmatter.title = value;
              break;
            case 'date':
              frontmatter.date = value;
              break;
            case 'tags':
              frontmatter.tags = value.split(',').map(tag => tag.trim());
              break;
            case 'excerpt':
              frontmatter.excerpt = value;
              break;
            case 'image':
              frontmatter.image = value;
              break;
            case 'category':
              frontmatter.category = value;
              break;
            case 'readTime':
              frontmatter.readTime = value;
              break;
            case 'issuer':
              frontmatter.issuer = value;
              break;
            case 'certificateId':
              frontmatter.certificateId = value;
              break;
            case 'link':
              frontmatter.link = value;
              break;
            case 'technologies':
              frontmatter.technologies = value.split(',').map(tech => tech.trim());
              break;
            default:
              frontmatter[trimmedKey] = value;
          }
        }
      });
      
      markdownContent = parts.slice(2).join('---').trim();
      console.log('Parsed frontmatter:', frontmatter);
      console.log('Markdown content:', markdownContent);
    } catch (error) {
      console.error('Error parsing frontmatter:', error);
    }
  } else {
    console.warn('No frontmatter found in content');
  }

  // Convert markdown to HTML
  const html = marked(markdownContent);
  console.log('Generated HTML:', html);

  return {
    frontmatter,
    content: html,
  };
}

export async function fetchMarkdownFiles(repo: string, path: string): Promise<MarkdownContent[]> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`);
    const files = await response.json();
    
    const markdownFiles = files.filter((file: any) => file.name.endsWith('.md'));
    
    const contents = await Promise.all(
      markdownFiles.map(async (file: any) => {
        const response = await fetch(file.download_url);
        const content = await response.text();
        return parseMarkdown(content);
      })
    );

    return contents.sort((a, b) => 
      new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
  } catch (error) {
    console.error('Error fetching markdown files:', error);
    return [];
  }
} 