"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { content } from "@/content";

export function SpicyChallenge() {
  const { spicy } = content;
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-ink)] text-[var(--color-cream)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, var(--color-chili) 0, transparent 40%), radial-gradient(circle at 75% 70%, var(--color-chili) 0, transparent 40%)",
        }}
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Flame className="w-12 h-12 text-[var(--color-chili)]" strokeWidth={2.5} />
          <h2 className="mt-6 font-[family-name:var(--font-display)] font-extrabold text-[clamp(2.4rem,6vw,5rem)] leading-[0.95]">
            {spicy.headline}
          </h2>
          <p className="mt-8 text-xl sm:text-2xl text-[var(--color-cream)]/80 leading-snug max-w-2xl">
            {spicy.sub}
          </p>
          <a
            href={spicy.cta.href}
            className="mt-12 inline-flex items-center justify-center rounded-full bg-[var(--color-chili)] text-[var(--color-cream)] px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-[var(--color-chili-dark)] transition-colors"
          >
            {spicy.cta.label}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
