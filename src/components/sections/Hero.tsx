"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SauceDrip } from "@/components/ui/SauceDrip";
import { content } from "@/content";

export function Hero() {
  const { hero } = content;
  return (
    <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-[family-name:var(--font-display)] font-extrabold tracking-tight text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.95]">
              {hero.headline}
              <br />
              <span className="text-[var(--color-chili)] inline-block relative">
                {hero.headlineAccent}
                <SauceDrip className="absolute -bottom-3 left-0 right-0 h-3 text-[var(--color-chili)]" />
              </span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl max-w-xl text-[var(--color-ink-soft)] leading-relaxed">
              {hero.sub}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-[var(--color-chili)] transition-colors"
              >
                {hero.primaryCta.label}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative aspect-square w-full max-w-[560px] mx-auto"
          >
            <Image
              src="/images/hero-burger.jpg"
              alt="Halės Mėsainis signature smash burger"
              fill
              priority
              className="object-cover rounded-3xl"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
