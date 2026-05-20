import { site } from './site';
import { getPageSeo } from './seo-config';

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildSeo(props: SeoProps) {
  const cfg = props.canonicalPath ? getPageSeo(props.canonicalPath) : undefined;

  const rawTitle = (props.title && props.title.trim()) ? props.title : cfg?.title;
  const title = rawTitle
    ? (cfg?.title === rawTitle ? rawTitle : `${rawTitle} · ${site.name}`)
    : `${site.name} · ${site.tagline}`;

  const description = props.description ?? cfg?.description ?? site.description;
  const keywords = props.keywords ?? cfg?.keywords;
  const canonical = props.canonicalPath
    ? new URL(props.canonicalPath, site.url).toString()
    : site.url;
  const ogImage = props.ogImage ?? `${site.url}/jcspl_logo.png`;

  return { title, description, keywords, canonical, ogImage, noIndex: !!props.noIndex };
}
