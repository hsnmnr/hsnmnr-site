import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { isValidElement, type ReactElement, type ReactNode } from 'react';
import { ArticleSchema } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import MermaidDiagram from '@/components/Writing/MermaidDiagram';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { AUTHOR_NAME, formatDate, SITE_URL } from '@/lib/utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const url = `${SITE_URL}/writing/${post.slug}/`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [AUTHOR_NAME],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

interface CodeChildProps {
  className?: string;
  children?: string;
}

/**
 * Renders fenced code blocks. ```mermaid blocks are sent through MermaidDiagram
 * (client-side render). Everything else falls through to the default <pre><code>.
 */
function PreOverride({
  children,
  ...rest
}: {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLPreElement>) {
  if (isValidElement(children)) {
    const codeChild = children as ReactElement<CodeChildProps>;
    const className = codeChild.props.className ?? '';
    if (/(?:^|\s)(?:lang|language)-mermaid(?:\s|$)/.test(className)) {
      return <MermaidDiagram chart={codeChild.props.children ?? ''} />;
    }
  }
  return <pre {...rest}>{children}</pre>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper>
      <ArticleSchema post={post} />
      <article className="post-page">
        <header className="post-header">
          <time className="post-date" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-description">{post.description}</p>
        </header>
        <div className="post-content prose">
          <Markdown
            options={{
              overrides: {
                pre: {
                  component: PreOverride,
                },
                img: {
                  component: ({ alt, src }: { alt?: string; src?: string }) => (
                    <Image
                      src={src || ''}
                      alt={alt || ''}
                      width={1200}
                      height={630}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  ),
                },
              },
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </article>
    </PageWrapper>
  );
}
