'use client';

import { useEffect, useId, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
}

/**
 * Renders a Mermaid diagram client-side.
 *
 * Mermaid is a heavy dependency (~200KB gz). We dynamic-import it inside
 * `useEffect` so the cost only lands when a post containing a diagram is
 * actually viewed.
 */
export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const renderId = `mermaid-${reactId.replace(/:/g, '')}`;
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setError(null);

    (async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        const isDark =
          typeof document !== 'undefined' &&
          document.documentElement.getAttribute('data-theme') === 'dark';

        mermaid.initialize({
          startOnLoad: false,
          theme: isDark ? 'dark' : 'default',
          securityLevel: 'strict',
          fontFamily: 'inherit',
        });

        const { svg } = await mermaid.render(renderId, chart);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Diagram failed');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [chart, renderId]);

  if (error) {
    return (
      <pre className="mermaid-error" role="alert">
        {`Diagram rendering failed: ${error}\n\n${chart}`}
      </pre>
    );
  }

  return <div ref={ref} className="mermaid-diagram" aria-label="Diagram" />;
}
