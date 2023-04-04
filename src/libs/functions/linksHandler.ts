export function linksHandler(link: string): string | undefined {
  if(!link.includes('http') && !link.includes('tovary-dlya-vzroslyh')) {
    return link;
  }
  return undefined;
}