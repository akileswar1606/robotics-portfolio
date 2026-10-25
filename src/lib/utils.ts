import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves an asset path with GitHub Pages basePath support.
 * - In local dev: returns "/images/..."
 * - On GitHub Pages (production): returns "/robotics-portfolio/images/..."
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Runtime browser check: if running under /robotics-portfolio on GitHub Pages
  if (!basePath && typeof window !== "undefined") {
    if (window.location.pathname.startsWith("/robotics-portfolio")) {
      basePath = "/robotics-portfolio";
    }
  }

  // Build-time SSR/export check for production GitHub Pages build
  if (!basePath && process.env.NODE_ENV === "production") {
    basePath = "/robotics-portfolio";
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (
    basePath &&
    (cleanPath === basePath || cleanPath.startsWith(`${basePath}/`))
  ) {
    return cleanPath;
  }
  return `${basePath}${cleanPath}`;
}
