import Image from "next/image";
import { getStaticComponents } from "@/lib/component-discovery";
import { ComponentGrid } from "@/components/ComponentCard";
import { wwColors } from "@/lib/ww-colors";

export default function Home() {
  const components = getStaticComponents();
  const componentsWithDemos = components.filter((c) => c.demoPath);
  const totalComponents = components.length;

  return (
    <div
      className="font-sans min-h-screen p-8"
      style={{
        background: `linear-gradient(135deg, ${wwColors.oatMilk} 0%, ${wwColors.oyster} 100%)`
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: wwColors.blueberry }}>
            WW Storyblok Components
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: wwColors.dinoKale }}>
            Discover our collection of {totalComponents} production-ready Storyblok components with{" "}
            {componentsWithDemos.length} interactive demos available.
          </p>
        </header>

        {/* Dynamic Component Grid */}
        <div className="mb-12">
          <ComponentGrid components={components} />
        </div>

        {/* Development Guide */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: wwColors.blueberry }}>
            Adding New Components
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: wwColors.blueAgave }}>
                📁 Add Component
              </h3>
              <p className="mb-4" style={{ color: wwColors.dinoKale }}>
                Create your component in{" "}
                <code className="px-2 py-1 rounded" style={{ backgroundColor: wwColors.oyster }}>
                  src/components/storyblok/components/
                </code>
              </p>
              <ul className="text-sm space-y-2" style={{ color: wwColors.roastedChestnut }}>
                <li>
                  • Create <code>YourComponent.tsx</code> or <code>YourComponent/</code> directory
                </li>
                <li>
                  • Export from <code>components/index.ts</code>
                </li>
                <li>• Component automatically appears here</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: wwColors.blueAgave }}>
                🎯 Add Demo Page
              </h3>
              <p className="mb-4" style={{ color: wwColors.dinoKale }}>
                Create a demo page in{" "}
                <code className="px-2 py-1 rounded" style={{ backgroundColor: wwColors.oyster }}>
                  src/app/your-component-demo/
                </code>
              </p>
              <ul className="text-sm space-y-2" style={{ color: wwColors.roastedChestnut }}>
                <li>
                  • Follow naming: <code>component-name-demo</code>
                </li>
                <li>• Demo link automatically appears</li>
                <li>
                  • Update metadata in <code>component-discovery.ts</code>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-12">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={25}
            />
            <span style={{ color: wwColors.roastedChestnut }}>×</span>
            <div className="text-2xl font-bold" style={{ color: wwColors.blueAgave }}>
              Storyblok
            </div>
          </div>
          <p style={{ color: wwColors.dinoKale }}>
            Built with Next.js 15, Tailwind CSS, and Storyblok CMS - Dynamic Component Gallery
          </p>
        </footer>
      </div>
    </div>
  );
}
