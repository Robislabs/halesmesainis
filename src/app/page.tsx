import { Hero } from "@/components/sections/Hero";
import { StoryStrip } from "@/components/sections/StoryStrip";
import { SignatureBurger } from "@/components/sections/SignatureBurger";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryStrip />
      <SignatureBurger />
    </main>
  );
}
