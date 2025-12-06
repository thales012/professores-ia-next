import { builder } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import { useRouter } from "next/router";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const urlPath = "/" + (params?.slug || "");
  const content = await builder.get("page", { url: urlPath }).toPromise();
  return { props: { content: content || null }, revalidate: 30 };
}

export default function Page({ content }) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;
  if (!content) return <DefaultErrorPage statusCode={404} />;
  return <builder-content model="page" content={content} />;
}
