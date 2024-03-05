import AsideSection from "@/components/AsideSection";
import HeaderSection from "@/components/HeaderSection";
import ArticleSection from "@/components/ArticleSection";
import FooterSection from "@/components/FooterSection";




export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-screen h-screen p-10">
      <HeaderSection />
      <main className="flex justify-between">
        <ArticleSection />
        <AsideSection />
      </main>
      <FooterSection />
    </div>
  );
}
