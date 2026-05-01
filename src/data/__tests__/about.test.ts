import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('Xenia');
    expect(aboutMarkdown).toContain('TypeScript');
  });

  it('contains the current-work section', () => {
    expect(aboutMarkdown).toContain("# What I'm Building Now");
  });

  it('contains the AI-native section', () => {
    expect(aboutMarkdown).toContain('# AI-Native Engineering');
    expect(aboutMarkdown).toContain('Claude Code');
  });

  it('contains the background section', () => {
    expect(aboutMarkdown).toContain('# Background');
    expect(aboutMarkdown).toContain('ITU');
  });

  it('contains the how-i-work section', () => {
    expect(aboutMarkdown).toContain('# How I Work');
  });

  it('contains the get-in-touch section', () => {
    expect(aboutMarkdown).toContain('# Get in Touch');
  });

  it('contains valid markdown links', () => {
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThan(2);
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(4);
  });
});
