"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { content } from "@/content";

export function SignatureBurger() {
  const { signature } = content;
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-square w-full rounded-3xl overflow-hidden"
          >
            <Image
              src={signature.photo}
              alt={signature.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-chili)]">
              Mūsų klasika
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.95]">
              {signature.name}
            </h2>
            <ul className="mt-8 space-y-3 text-lg text-[var(--color-ink-soft)]">
              {signature.ingredients.map((ing) => (
                <li key={ing} className="flex gap-3">
                  <span className="text-[var(--color-chili)] font-bold">+</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
            {signature.price && (
              <p className="mt-10 font-[family-name:var(--font-display)] text-3xl font-bold">
                {signature.price}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
