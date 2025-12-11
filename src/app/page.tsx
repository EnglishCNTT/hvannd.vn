import NewsCarousel from "@/components/organisms/NewsCarousel";
import StatisticsSection from "@/components/organisms/StatisticsSection";
import RankingSection from "@/components/organisms/RankingSection";
import CooperationSection from "@/components/organisms/CooperationSection";
import PublicationsSection from "@/components/organisms/PublicationsSection";
import UnitsSection from "@/components/organisms/UnitsSection";

export default function Home() {
  return (
    <main>
      <NewsCarousel />
      <StatisticsSection />
      <RankingSection />
      <CooperationSection />
      <PublicationsSection />
      <UnitsSection />
    </main>
  );
}
