<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">

<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"
  doctype-system="about:legacy-compat"/>

<xsl:template match="/">
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>RSS Feed - <xsl:value-of select="/rss/channel/title"/></title>
      <link rel="icon" href="/images/favicon/favicon.ico"/>
      <style>
        :root {
          color-scheme: light dark;
          --bg: #fafafa;
          --bg-alt: #ffffff;
          --fg: #1d1d1f;
          --fg-muted: #6b7280;
          --border: #e5e7eb;
          --accent: #2e59ba;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #0a0a0a;
            --bg-alt: #141414;
            --fg: #f5f5f5;
            --fg-muted: #a1a1aa;
            --border: #27272a;
            --accent: #60a5fa;
          }
        }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          padding: 2.5rem 1.5rem 4rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: var(--bg);
          color: var(--fg);
          line-height: 1.6;
        }
        .wrap {
          max-width: 720px;
          margin: 0 auto;
        }
        header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 2rem;
          margin-bottom: 2.5rem;
        }
        .badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          padding: 0.35rem 0.7rem;
          border-radius: 999px;
          margin-bottom: 1.25rem;
        }
        h1 {
          font-size: 2rem;
          font-weight: 800;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }
        .feed-desc {
          color: var(--fg-muted);
          margin: 0 0 1.5rem;
          font-size: 1.05rem;
        }
        .explainer {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          font-size: 0.95rem;
          color: var(--fg-muted);
        }
        .explainer strong {
          color: var(--fg);
        }
        .explainer code {
          background: color-mix(in srgb, var(--accent) 8%, transparent);
          color: var(--accent);
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          font-size: 0.875em;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          word-break: break-all;
        }
        .explainer a {
          color: var(--accent);
        }
        h2.list-heading {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 2.5rem 0 1.25rem;
          color: var(--fg-muted);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        article.post {
          border-bottom: 1px solid var(--border);
          padding: 1.25rem 0;
        }
        article.post:last-child { border-bottom: none; }
        .post-date {
          font-size: 0.85rem;
          color: var(--fg-muted);
          letter-spacing: 0.02em;
        }
        .post-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0.4rem 0 0.5rem;
          line-height: 1.35;
        }
        .post-title a {
          color: var(--fg);
          text-decoration: none;
        }
        .post-title a:hover {
          color: var(--accent);
        }
        .post-desc {
          margin: 0;
          color: var(--fg-muted);
        }
        footer {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--fg-muted);
          text-align: center;
        }
        footer a { color: var(--accent); text-decoration: none; }
        footer a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <div class="wrap">
        <header>
          <span class="badge">RSS Feed</span>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="feed-desc">
            <xsl:value-of select="/rss/channel/description"/>
          </p>
          <div class="explainer">
            This is an <strong>RSS feed</strong>. Paste this URL into an RSS
            reader (<a href="https://feedly.com" target="_blank" rel="noopener">Feedly</a>,
            <a href="https://netnewswire.com" target="_blank" rel="noopener">NetNewsWire</a>,
            <a href="https://reederapp.com" target="_blank" rel="noopener">Reeder</a>,
            <a href="https://inoreader.com" target="_blank" rel="noopener">Inoreader</a>,
            and many others) to get new posts in your feed reader as soon as
            they are published. The URL is
            <code>
              <xsl:value-of select="/rss/channel/atom:link/@href"/>
            </code>.
          </div>
        </header>

        <h2 class="list-heading">Latest posts</h2>

        <xsl:for-each select="/rss/channel/item">
          <article class="post">
            <div class="post-date">
              <xsl:value-of select="substring(pubDate, 0, 17)"/>
            </div>
            <h3 class="post-title">
              <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="link"/>
                </xsl:attribute>
                <xsl:value-of select="title"/>
              </a>
            </h3>
            <p class="post-desc">
              <xsl:value-of select="description"/>
            </p>
          </article>
        </xsl:for-each>

        <footer>
          <a>
            <xsl:attribute name="href">
              <xsl:value-of select="/rss/channel/link"/>
            </xsl:attribute>
            Visit the site
          </a>
        </footer>
      </div>
    </body>
  </html>
</xsl:template>

</xsl:stylesheet>
