/** Public asset prefix for the custom-domain GitHub Pages site. */
export const BASE_PATH = "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
