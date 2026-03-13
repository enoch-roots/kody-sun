import Hero from "@/components/sections/Hero";
import FeaturedSet from "@/components/sections/FeaturedSet";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import MusicMixes from "@/components/sections/MusicMixes";
import About from "@/components/sections/About";
import Press from "@/components/sections/Press";
import MediaGallery from "@/components/sections/MediaGallery";
import LinkHub from "@/components/sections/LinkHub";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedSet />
      <div style={{ position: 'relative', height: 0, overflow: 'visible', zIndex: 30 }}>
        <div className="px-5 md:px-10 max-w-5xl mx-auto" style={{ position: 'absolute', left: 0, right: 0, top: 0, transform: 'translateY(-50%)' }}>
          <SectionDivider token="penta-rose" />
        </div>
      </div>
      {/* <UpcomingEvents /> */}
      <MusicMixes />
      <div style={{ position: 'relative', height: 0, overflow: 'visible', zIndex: 30 }}>
        <div className="px-5 md:px-10 max-w-5xl mx-auto" style={{ position: 'absolute', left: 0, right: 0, top: 0, transform: 'translateY(-50%)' }}>
          <SectionDivider token="star-burst" />
        </div>
      </div>
      <About />
      {/* <Press /> */}
      <div style={{ position: 'relative', height: 0, overflow: 'visible', zIndex: 30 }}>
        <div className="px-5 md:px-10 max-w-5xl mx-auto" style={{ position: 'absolute', left: 0, right: 0, top: 0, transform: 'translateY(-50%)' }}>
          <SectionDivider token="triple-lotus" />
        </div>
      </div>
      <MediaGallery />
      <div style={{ position: 'relative', height: 0, overflow: 'visible', zIndex: 30 }}>
        <div className="px-5 md:px-10 max-w-5xl mx-auto" style={{ position: 'absolute', left: 0, right: 0, top: 0, transform: 'translateY(-50%)' }}>
          <SectionDivider token="crystal-petal" />
        </div>
      </div>
      <LinkHub />
      <Contact />
    </main>
  );
}
