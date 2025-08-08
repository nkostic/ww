// Utility functions for Storyblok integration
// These utilities help with common Storyblok operations

// Transform Storyblok asset URL to optimized format
export function storyblokAsset(
  filename: string,
  width?: number,
  height?: number
): string {
  if (!filename) return "";

  const baseUrl = filename.includes("//a.storyblok.com")
    ? filename.replace("//a.storyblok.com", "//img2.storyblok.com")
    : filename;

  const params = new URLSearchParams();
  if (width) params.set("m", `${width}x${height || width}`);

  return params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
}

// Check if we're in Storyblok editor mode
export function isStoryblokEditor(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.search.includes("_storyblok");
}

// Get readable date string
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString();
}

// Get environment-specific Storyblok version
export function getStoryblokVersion(): string {
  return typeof window !== "undefined" && isStoryblokEditor()
    ? "draft"
    : "published";
}
