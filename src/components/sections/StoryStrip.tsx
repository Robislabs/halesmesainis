"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { content } from "@/content";

export function StoryStrip() {
  const { story } = content;
  const photo = story.photos[0];
  return (
    <section className="py-20 sm:py-28 bg-[var(--color-cream-dark)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3.2vw,2.6rem)] leading-tight"
          >
            {story.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-square w-full max-w-[520px] mx-auto rounded-3xl overflow-hidden"
          >
            <Image
              src={photo}
              alt="Halės Mėsainis — pirmieji smash burgeriai Vilniuje"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
