import { Hero } from "@/components/sections/Hero";
import { StoryStrip } from "@/components/sections/StoryStrip";
import { SignatureBurger } from "@/components/sections/SignatureBurger";
import { SpicyChallenge } from "@/components/sections/SpicyChallenge";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryStrip />
      <SignatureBurger />
      <SpicyChallenge />
    </main>
  );
}
