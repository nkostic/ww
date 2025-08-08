import Link from "next/link";
import { ComponentInfo } from "@/lib/component-discovery";

interface ComponentCardProps {
  component: ComponentInfo;
  className?: string;
}

export function ComponentCard({ component, className = "" }: ComponentCardProps) {
  const CardContent = (
    <div
      className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-gray-100 hover:border-[#3B70B5] ${className}`}
    >
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${component.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md`}
          >
            <svg
              className="w-6 h-6 text-white drop-shadow-sm"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={component.icon}
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold ml-4" style={{ color: "#182C55" }}>
            {component.displayName}
          </h3>
        </div>
        <p className="mb-4" style={{ color: "#00351C" }}>
          {component.description}
        </p>
        {component.demoPath ? (
          <div
            className="flex items-center font-semibold transition-colors"
            style={{ color: "#822F03" }}
          >
            View Demo
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        ) : (
          <div className="font-semibold" style={{ color: "#B9B1FA" }}>
            Demo Coming Soon
          </div>
        )}
      </div>
    </div>
  );

  // If there's a demo path, wrap in Link
  if (component.demoPath) {
    return <Link href={component.demoPath}>{CardContent}</Link>;
  }

  // Otherwise, just return the card (maybe with onclick to show "coming soon")
  return CardContent;
}

interface ComponentGridProps {
  components: ComponentInfo[];
}

export function ComponentGrid({ components }: ComponentGridProps) {
  if (components.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">
          No components found. Add components to the src/components/storyblok/components directory.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {components.map((component) => (
        <ComponentCard key={component.name} component={component} />
      ))}
    </div>
  );
}
