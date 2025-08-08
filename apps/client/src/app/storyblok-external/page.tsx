import Link from "next/link";
// Note: In a real implementation, these would be imported from @repo/storyblok-components
// import { Hero, Feature, Grid, RichText } from "@repo/storyblok-components";

// Mock components representing what would be imported from @repo/storyblok-components
interface HeroBlok {
  title: string;
  subtitle?: string;
  description?: string;
  theme?: "brand" | "default";
  cta_text?: string;
  cta_link?: { url: string };
}

interface FeatureBlok {
  icon: string;
  title: string;
  description: string;
}

interface GridBlok {
  columns: number;
  items: FeatureBlok[];
}

const Hero = ({ blok }: { blok: HeroBlok }) => (
  <div
    className={`py-20 px-8 rounded-xl mb-8 text-white ${
      blok.theme === "brand"
        ? "bg-gradient-to-r from-purple-600 to-pink-600"
        : "bg-gradient-to-r from-blue-600 to-purple-600"
    }`}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">{blok.title}</h1>
      {blok.subtitle && <h2 className="text-2xl text-purple-100 mb-6">{blok.subtitle}</h2>}
      {blok.description && (
        <p className="text-xl text-purple-50 max-w-2xl mx-auto">{blok.description}</p>
      )}
      {blok.cta_text && (
        <a
          href={blok.cta_link?.url}
          className="inline-block mt-8 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
        >
          {blok.cta_text}
        </a>
      )}
    </div>
  </div>
);

const Feature = ({ blok }: { blok: FeatureBlok }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
    <div className="text-4xl mb-4">{blok.icon}</div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{blok.title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{blok.description}</p>
  </div>
);

const Grid = ({ blok, children }: { blok: GridBlok; children: React.ReactNode }) => (
  <div
    className={`grid gap-6 ${
      blok.columns === 2
        ? "md:grid-cols-2"
        : blok.columns === 3
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2 lg:grid-cols-4"
    }`}
  >
    {children}
  </div>
);

const RichText = ({ content }: { content: unknown }) => (
  <div className="prose prose-lg dark:prose-invert max-w-none">
    {/* Simplified rich text rendering for demo */}
    <h3>About External Components</h3>
    <p>
      The <code>@repo/storyblok-components</code> package provides a collection of reusable
      Storyblok components that can be shared across multiple applications in our monorepo.
    </p>
    <p>Key features include:</p>
    <ul>
      <li>
        <strong>TypeScript Support</strong> - Full type safety with comprehensive interfaces
      </li>
      <li>
        <strong>Storyblok Integration</strong> - Built-in support for Storyblok&apos;s Visual Editor
      </li>
      <li>
        <strong>Consistent Styling</strong> - Tailwind CSS classes for consistent design
      </li>
    </ul>
    {/* Note: content parameter would be used in real implementation */}
    <div style={{ display: "none" }}>{JSON.stringify(content)}</div>
  </div>
);

export default function StoryblokExternal() {
  // Sample data that would typically come from Storyblok CMS
  const heroData = {
    title: "External Components Demo",
    subtitle: "Powered by @repo/storyblok-components",
    description:
      "These components are imported from our shared package, demonstrating reusability across the monorepo.",
    theme: "brand" as const,
    cta_text: "Explore Components",
    cta_link: {
      url: "#features",
      linktype: "url",
    },
  };

  const featuresData = [
    {
      icon: "🔄",
      title: "Reusable",
      description:
        "Components can be shared across multiple applications in the monorepo, ensuring consistency and reducing development time.",
    },
    {
      icon: "📦",
      title: "Packaged",
      description:
        "Distributed as a proper npm package with TypeScript support, proper exports, and comprehensive documentation.",
    },
    {
      icon: "🎨",
      title: "Themed",
      description:
        "Built-in theme support allows for consistent branding while maintaining flexibility for customization.",
    },
    {
      icon: "🔧",
      title: "Maintainable",
      description:
        "Centralized maintenance means bug fixes and improvements benefit all applications using the package.",
    },
  ];

  const richTextContent = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 3 },
        content: [{ type: "text", text: "About External Components" }],
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "The " },
          { type: "text", marks: [{ type: "code" }], text: "@repo/storyblok-components" },
          {
            type: "text",
            text: " package provides a collection of reusable Storyblok components that can be shared across multiple applications in our monorepo.",
          },
        ],
      },
      {
        type: "paragraph",
        content: [{ type: "text", text: "Key features include:" }],
      },
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", marks: [{ type: "bold" }], text: "TypeScript Support" },
                  { type: "text", text: " - Full type safety with comprehensive interfaces" },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", marks: [{ type: "bold" }], text: "Storyblok Integration" },
                  { type: "text", text: " - Built-in support for Storyblok's Visual Editor" },
                ],
              },
            ],
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", marks: [{ type: "bold" }], text: "Consistent Styling" },
                  { type: "text", text: " - Tailwind CSS classes for consistent design" },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Gallery
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/20 px-4 py-2 rounded-full mb-4">
            <svg
              className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              @repo/storyblok-components
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            External Storyblok Components
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These components are imported from our shared package, demonstrating how to build
            reusable Storyblok components that can be used across multiple applications in the
            monorepo.
          </p>
        </div>

        {/* Hero Component Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hero Component</h2>
          <Hero blok={heroData} />

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Import & Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`import { Hero } from "@repo/storyblok-components";

<Hero blok={heroData} />`}
            </pre>
          </div>
        </section>

        {/* Feature Grid Demo */}
        <section className="mb-16" id="features">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Feature Grid</h2>
          <Grid blok={{ columns: 2, items: featuresData }}>
            {featuresData.map((feature, index) => (
              <Feature key={index} blok={feature} />
            ))}
          </Grid>

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Import & Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`import { Grid, Feature } from "@repo/storyblok-components";

<Grid blok={{ columns: 2, items: featuresData }}>
  {featuresData.map((feature, index) => (
    <Feature key={index} blok={feature} />
  ))}
</Grid>`}
            </pre>
          </div>
        </section>

        {/* Rich Text Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Rich Text Content
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <RichText content={richTextContent} />
          </div>

          {/* Code Preview */}
          <div className="bg-gray-900 rounded-lg p-6 mt-6">
            <h3 className="text-white text-lg font-semibold mb-4">Import & Usage:</h3>
            <pre className="text-green-300 text-sm overflow-x-auto">
              {`import { RichText } from "@repo/storyblok-components";

<RichText content={storyblokRichTextContent} />`}
            </pre>
          </div>
        </section>

        {/* Package Information */}
        <section className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Package Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📁 Package Contents
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                <div className="text-gray-600 dark:text-gray-300">
                  @repo/storyblok-components/
                  <br />
                  ├── src/
                  <br />
                  │ ├── components/
                  <br />
                  │ │ ├── Hero.tsx
                  <br />
                  │ │ ├── Feature.tsx
                  <br />
                  │ │ ├── Grid.tsx
                  <br />
                  │ │ └── RichText.tsx
                  <br />
                  │ └── types/
                  <br />
                  └── package.json
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📦 Installation</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded p-4 font-mono text-sm">
                <div className="text-gray-600 dark:text-gray-300">
                  # Already available in monorepo
                  <br />
                  # as workspace dependency
                  <br />
                  <br />
                  &quot;dependencies&quot;: {`{`}
                  <br />
                  &nbsp;&nbsp;&quot;@repo/storyblok-components&quot;: &quot;workspace:*&quot;
                  <br />
                  {`}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            External Component Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Advantages</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Reusable across multiple apps</li>
                <li>• Centralized maintenance and updates</li>
                <li>• Consistent UI/UX across applications</li>
                <li>• Proper TypeScript support</li>
                <li>• Version controlled independently</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚠️ Considerations
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Less flexibility for app-specific needs</li>
                <li>• Requires package versioning strategy</li>
                <li>• Breaking changes affect all consumers</li>
                <li>• Additional build step for package</li>
                <li>• May include unused components</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
