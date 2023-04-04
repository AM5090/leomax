export function linksHandler(link: string): string | undefined {
  if(!link.includes('http')) {
    return link;
  }
  return undefined;
}