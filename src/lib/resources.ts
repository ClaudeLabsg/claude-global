// Shared resource library, mirrored from claudecode.sg/resources.

export type Resource = {
  kind: "Featured" | "Article" | "Presentation";
  source: string;
  date: string;
  title: string;
  description: string;
  href: string;
};

export const resources: Resource[] = [
  {
    kind: "Featured",
    source: "Claude Singapore Community",
    date: "23 Sept 2026",
    title: "claudearchitects.org is live — free mock exams for every Claude certification",
    description:
      "1,759 original practice questions across all four Claude certifications, timed mock exams scored on the real 100–1000 scale, every exam objective, the official documents, and a free route to sit the Developer and Architect exams under the Claude SG partner network. How the exam is really marked, how to apply, and how to pass. No account, no paywall.",
    href: "https://claudecode.sg/resources/claudearchitects-org-launch",
  },
  {
    kind: "Featured",
    source: "Claude Singapore Community",
    date: "14 Sept 2026",
    title: "Claude Certified Architect and Developer exams — now open to the community",
    description:
      "Anthropic Academy only accepts partner-domain sign-ups. As a Claude Partner Network member, ClaudeSG has opened an eligibility pathway to the CCA-F (Architect, hard), CCD-F (Developer, easy) and CCA-P (Architect Professional, advanced) exams — USD 125 for each Foundations exam and USD 175 for Professional, paid to Anthropic. How it works and where to sign up.",
    href: "https://claudecode.sg/resources/claude-certifications-open",
  },
  {
    kind: "Article",
    source: "Anthropic · CCA-F",
    date: "1 Jul 2026",
    title: "Claude Certified Architect — Foundations Information (Updated July 2026)",
    description:
      "The latest CCA-F exam information from Anthropic — updated 1 July 2026. A two-page summary: the exam overview and weighted content domains, plus the study guide with the top topics, the six scenarios, and the retake policy.",
    href: "https://claudecode.sg/resources/cca-f-foundations-july-2026",
  },
  {
    kind: "Featured",
    source: "Claude SG · Workshop",
    date: "",
    title: "Resource Kit — MCP, API, Skills & Plugins (2026)",
    description:
      "A complete reference handbook for builders going beyond basic chat. Covers MCP servers, the Claude API, Skills, Plugins, hooks, and how to wire them together — built as a companion to the Power Up Claude Code workshop, also reads cleanly as a textbook on its own.",
    href: "https://claudecode.sg/resources/resource-kit.html",
  },
  {
    kind: "Article",
    source: "Claude SG",
    date: "22 Apr 2026",
    title: "Setup Your Claude Code Git",
    description:
      "Claude Code asks you to install Git the first time you run it. A very detailed step-by-step tutorial for both Mac and Windows — plus how to configure Git, verify it works, and fix common errors.",
    href: "https://claudecode.sg/resources/setup-claude-code-git",
  },
  {
    kind: "Article",
    source: "Claude SG",
    date: "22 Apr 2026",
    title: "Setup Your Vercel",
    description:
      "Vercel is where your website goes live on the internet. What Vercel does, why you need it, and a step-by-step walkthrough — including connecting Vercel to Claude Desktop so Claude can deploy for you.",
    href: "https://claudecode.sg/resources/setup-vercel",
  },
  {
    kind: "Article",
    source: "Claude SG",
    date: "22 Apr 2026",
    title: "GitHub vs Vercel vs Supabase",
    description:
      "Three services, three jobs. GitHub stores your code, Vercel hosts your site, Supabase runs your backend. Clear explainer with a comparison table, how they fit together, and when you need each.",
    href: "https://claudecode.sg/resources/github-vs-vercel-vs-supabase",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "1 Dec 2025",
    title: "Getting Started with Claude",
    description:
      "Begin your journey with Claude — covers account setup, your first conversation, understanding Claude's capabilities, and tips for getting the most out of your AI assistant right away.",
    href: "https://docs.anthropic.com/en/docs/initial-setup",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "1 Dec 2025",
    title: "API Quickstart — Build a Web Search Assistant",
    description:
      "Hands-on tutorial for developers: build a web search assistant using the Claude API. Covers API keys, SDK setup in Python/TypeScript, tool use, and your first working agent.",
    href: "https://docs.anthropic.com/en/docs/quickstart",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "1 Nov 2025",
    title: "What is Claude? — Anthropic's AI Assistant",
    description:
      "Overview of Claude's capabilities, model variants (Haiku, Sonnet, Opus), and what makes Claude different — safety, long context, and multimodal understanding.",
    href: "https://docs.anthropic.com/en/docs/about-claude/models",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "15 Oct 2025",
    title: "Prompt Engineering Guide for Claude",
    description:
      "Comprehensive guide to writing effective prompts. Covers system prompts, chain-of-thought, structured output, role prompting, and common mistakes to avoid.",
    href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "1 Feb 2026",
    title: "Claude Code — Agentic Coding in Your Terminal",
    description:
      "Official documentation for Claude Code, the CLI tool that lets Claude write, edit, and run code directly. Covers installation, configuration, skills, hooks, and MCP plugins.",
    href: "https://docs.anthropic.com/en/docs/claude-code/overview",
  },
  {
    kind: "Article",
    source: "MCP Docs",
    date: "15 Nov 2025",
    title: "Model Context Protocol (MCP) — Connect Claude to Everything",
    description:
      "Introduction to MCP, the open protocol that lets Claude connect to external tools and data sources. Explains servers, clients, tool definitions, and how to build your own MCP server.",
    href: "https://modelcontextprotocol.io/introduction",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "20 Sept 2025",
    title: "Tool Use (Function Calling) with Claude",
    description:
      "How to give Claude access to external tools and APIs. Covers defining tools with JSON schemas, handling tool calls, multi-turn tool use, and best practices for reliable tool execution.",
    href: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview",
  },
  {
    kind: "Article",
    source: "Vercel AI SDK",
    date: "10 Jan 2026",
    title: "Vercel AI SDK — Build AI Apps with Any Provider",
    description:
      "The open-source TypeScript SDK for building AI-powered apps. Covers streaming, chat UIs with useChat, structured output, tool calling, agents, and multi-provider support including Claude.",
    href: "https://sdk.vercel.ai/docs/introduction",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "1 Aug 2025",
    title: "Extended Thinking — Let Claude Reason Step by Step",
    description:
      "How to enable extended thinking for complex tasks. Claude shows its reasoning process before giving a final answer, improving accuracy for math, code, and multi-step problems.",
    href: "https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking",
  },
  {
    kind: "Article",
    source: "Anthropic",
    date: "20 Jan 2026",
    title: "Claude Desktop App — Setup & Features",
    description:
      "Download and set up the Claude desktop app for Mac or Windows. Covers MCP integration, file access, Claude Code built-in, and how the desktop app differs from the browser version.",
    href: "https://claude.ai/download",
  },
  {
    kind: "Article",
    source: "Anthropic Docs",
    date: "1 Oct 2025",
    title: "System Prompts — Set Claude's Role & Behaviour",
    description:
      "How to use system prompts to define Claude's persona, set rules, and establish context before a conversation. Includes examples for customer service bots, code reviewers, and writing assistants.",
    href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts",
  },
  {
    kind: "Presentation",
    source: "Claude SG Workshop",
    date: "20 Apr 2026",
    title: "Claude SG #002 — Claude & Grow · Build Your First Web App",
    description:
      "Full workshop deck from Claude SG #002 at *SCAPE Singapore (Apr 2026). Step-by-step walkthrough: install Git, sign up for Vercel, plan in Claude Chat, build with Claude Code, connect an image API, deploy, and generate your QR wallpaper.",
    href: "https://claudecode.sg/slides/Beginner-walkthrough-002",
  },
  {
    kind: "Presentation",
    source: "ClaudeSG Workshop",
    date: "24 Mar 2026",
    title: "Claude Coding 101: Lesson 1 — Getting Started Workshop",
    description:
      "Interactive Pokemon-themed presentation from the first ClaudeCode.sg workshop. Covers choosing your starter, prepping your Pokebag, freestyle coding, prompt briefs, and shipping your first app.",
    href: "https://claudecode.sg/slides/claude-coding-101",
  },
];
