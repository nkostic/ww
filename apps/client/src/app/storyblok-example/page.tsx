import Link from "next/link";

// Example data structure that would come from Storyblok
const exampleStoryblokData = {
  hero: {
    title: "Transform Your Health Journey",
    subtitle: "Weight Watchers",
    description:
      "Join millions of people who have found their path to wellness with our proven approach to sustainable weight loss.",
    background_image: {
      filename:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Healthy lifestyle background",
    },
    cta_text: "Start Your Journey",
    cta_link: {
      url: "/signup",
      linktype: "story",
    },
    theme: "brand",
  },
  features: [
    {
      title: "Personalized Plans",
      description:
        "Get a plan that's tailored to your lifestyle, preferences, and goals.",
      icon: "🎯",
      layout: "vertical",
    },
    {
      title: "Expert Support",
      description: "Access to certified coaches and a supportive community.",
      icon: "👥",
      layout: "vertical",
    },
    {
      title: "Proven Results",
      description: "Science-backed approach with millions of success stories.",
      icon: "📊",
      layout: "vertical",
    },
  ],
};

// Simple Hero Component (demonstrates structure)
function ExampleHero({ data }: { data: typeof exampleStoryblokData.hero }) {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-blue-600 text-white">
      {data.background_image?.filename && (
        <div className="absolute inset-0 z-0">
          <img
            src={data.background_image.filename}
            alt={data.background_image.alt || "Background"}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {data.subtitle && (
          <p className="text-sm uppercase tracking-wide font-semibold mb-4 opacity-80">
            {data.subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>

        {data.description && (
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {data.description}
          </p>
        )}

        {data.cta_text && data.cta_link?.url && (
          <a
            href={data.cta_link.url}
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {data.cta_text}
          </a>
        )}
      </div>
    </section>
  );
}

// Simple Feature Component (demonstrates structure)
function ExampleFeature({
  data,
}: {
  data: (typeof exampleStoryblokData.features)[0];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow text-center">
      {data.icon && <div className="text-4xl mb-4">{data.icon}</div>}

      <h3 className="text-xl font-semibold mb-2 text-gray-900">{data.title}</h3>

      <p className="text-gray-600 leading-relaxed">{data.description}</p>
    </div>
  );
}

export default function StoryblokExamplePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Storyblok Components Example
          </h1>
          <p className="text-gray-600">
            This page demonstrates the structure and usage of shared Storyblok
            components from{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">
              @repo/storyblok-components
            </code>
          </p>
        </div>
      </div>

      {/* Hero Example */}
      <ExampleHero data={exampleStoryblokData.hero} />

      {/* Features Grid Example */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Features Grid Example
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exampleStoryblokData.features.map((feature, index) => (
              <ExampleFeature key={index} data={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Storyblok Components Package
          </h2>

          <div className="prose prose-gray max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Package Structure</h3>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
                {`packages/storyblok-components/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section component
│   │   ├── Feature.tsx       # Feature card component  
│   │   ├── Grid.tsx          # Grid layout component
│   │   ├── RichText.tsx      # Rich text renderer
│   │   └── index.ts          # Component exports
│   ├── types/
│   │   ├── storyblok.ts      # Storyblok type definitions
│   │   └── index.ts          # Type exports
│   └── utils/
│       ├── storyblok.ts      # Storyblok utilities
│       └── index.ts          # Utility exports
├── package.json
├── tsconfig.json
└── README.md`}
              </pre>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Components Included
                </h4>
                <ul className="text-blue-800 space-y-1">
                  <li>• Hero - Hero sections with CTA</li>
                  <li>• Feature - Feature cards with icons</li>
                  <li>• Grid - Responsive grid layouts</li>
                  <li>• RichText - Rich content rendering</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">
                  Key Features
                </h4>
                <ul className="text-green-800 space-y-1">
                  <li>• TypeScript support</li>
                  <li>• Storyblok Visual Editor compatible</li>
                  <li>• Tailwind CSS styling</li>
                  <li>• Shared across monorepo</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">
                Usage in Client Apps
              </h4>
              <pre className="bg-yellow-100 p-4 rounded text-sm overflow-x-auto text-yellow-900">
                {`// 1. Add to package.json
"@repo/storyblok-components": "workspace:*"

// 2. Initialize Storyblok
import { storyblokComponents } from "@repo/storyblok-components/components";
storyblokInit({ components: storyblokComponents });

// 3. Use in pages
<StoryblokComponent blok={storyData} />`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
