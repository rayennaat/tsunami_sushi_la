import { AboutSection } from "./components/AboutSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { ReservationSection } from "./components/ReservationSection";
import { ReviewsSection } from "./components/ReviewsSection";

const images = {
  hero:
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1800&q=85",
  counter:
    "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=85"
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection heroImage={images.hero} />
      <AboutSection />
      <MenuSection />
      <ReservationSection counterImage={images.counter} />
      <ReviewsSection />
    </main>
  );
}
