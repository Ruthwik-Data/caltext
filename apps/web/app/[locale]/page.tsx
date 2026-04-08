 import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Faq } from "@/components/faq";
import { BottomCta } from "@/components/bottom-cta";
import { Footer } from "@/components/footer";
import { ChatShowcase } from "@/components/chat-showcase";
 
 
type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ChatShowcase />
        <Faq />
        <BottomCta />
      </main>
      <Footer />
    </>
  );
}
