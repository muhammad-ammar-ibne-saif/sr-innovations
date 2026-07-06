import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  schema?: object | object[];
}

export const Seo = ({ title, description, path, schema }: SeoProps) => {
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={path} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={path} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
};
