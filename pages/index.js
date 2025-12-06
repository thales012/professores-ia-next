import { builder } from "@builder.io/react";
import DefaultErrorPage from "next/error";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export async function getStaticProps() {
  const content = await builder.get("page", { url: "/" }).toPromise();
  return { props: { content: content || null }, revalidate: 30 };
}

export default function Home({ content }) {
  if (!content) return <DefaultErrorPage statusCode={404} />;
  return <builder-content model="page" content={content} />;
}
