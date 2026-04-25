import { Hero } from "@/components/sections/Hero";
import { StoryStrip } from "@/components/sections/StoryStrip";
import { SignatureBurger } from "@/components/sections/SignatureBurger";
import { SpicyChallenge } from "@/components/sections/SpicyChallenge";
import { MenuStrip } from "@/components/sections/MenuStrip";
import { FindUs } from "@/components/sections/FindUs";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <StoryStrip />
        <SignatureBurger />
        <SpicyChallenge />
        <MenuStrip />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
