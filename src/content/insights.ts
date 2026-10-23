/**
 * INSIGHTS — add your real articles, videos and tutorials here.
 * The hub (/insights) and the Home preview render from this list; empty = a tidy empty state.
 * Use `href` for external content (YouTube, LinkedIn, Substack, Medium) — it opens in a new tab.
 * Keep items newest-first.
 *
 * Example:
 * {
 *   id: "ai-for-managers",
 *   type: "video",
 *   theme: "ai",
 *   title: "Five ways managers can use AI this week",
 *   excerpt: "A short walkthrough of…",
 *   date: "2026-01-15",
 *   href: "https://www.youtube.com/watch?v=…",
 * }
 */

export type InsightType = "article" | "video" | "tutorial" | "interview";

export interface Insight {
  id: string;
  type: InsightType;
  theme: "ai" | "growth" | "leadership" | "branding" | "marketing";
  title: string;
  excerpt: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  href: string;
}

export const insights: Insight[] = [];
