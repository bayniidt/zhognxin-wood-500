/** Public asset prefix for this GitHub Pages project site. */
export const BASE_PATH = "/zhognxin-wood-500";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
