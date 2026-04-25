"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { content } from "@/content";

export function MenuStrip() {
  const { menu } = content;
  return (
    <section id="meniu" className="py-20 sm:py-28">
      <Container>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-chili)]">
          Visas meniu
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] font-extrabold text-[clamp(2rem,4.5vw,3.4rem)] leading-tight max-w-3xl">
          Smash burgeriai, gardumynai ir gėrimai.
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {menu.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="flex justify-between gap-6 border-b border-[var(--color-ink)]/10 pb-6"
            >
              <div className="min-w-0">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="mt-1 text-sm text-[var(--color-ink-soft)] leading-snug">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="font-[family-name:var(--font-display)] font-bold text-xl whitespace-nowrap">
                {item.price}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
