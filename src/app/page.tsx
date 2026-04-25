import { Hero } from "@/components/sections/Hero";
import { StoryStrip } from "@/components/sections/StoryStrip";
import { SignatureBurger } from "@/components/sections/SignatureBurger";
import { SpicyChallenge } from "@/components/sections/SpicyChallenge";
import { MenuStrip } from "@/components/sections/MenuStrip";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryStrip />
      <SignatureBurger />
      <SpicyChallenge />
      <MenuStrip />
    </main>
  );
}
