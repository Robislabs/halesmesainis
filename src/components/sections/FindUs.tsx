"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { content } from "@/content";

export function FindUs() {
  const { findUs } = content;
  return (
    <section id="kur-rasti" className="py-20 sm:py-28 bg-[var(--color-cream-dark)]">
      <Container>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--color-chili)]">
          Kur rasti
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] font-extrabold text-[clamp(2rem,4.5vw,3.4rem)] leading-tight max-w-3xl">
          Halės turgavietėje, pačiame Vilniaus centre.
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-lg"
          >
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 mt-1 text-[var(--color-chili)] shrink-0" />
              <div>
                <p className="font-bold">{findUs.address}</p>
                {findUs.stallNote && (
                  <p className="mt-1 text-[var(--color-ink-soft)] text-base">{findUs.stallNote}</p>
                )}
                <a
                  href={findUs.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-2 inline-block text-sm font-bold tracking-wider uppercase text-[var(--color-chili)] underline underline-offset-4"
                >
                  Atidaryti žemėlapyje
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 mt-1 text-[var(--color-chili)] shrink-0" />
              <ul className="space-y-1">
                {findUs.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-8">
                    <span className="font-bold">{h.day}</span>
                    <span className="text-[var(--color-ink-soft)]">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 mt-1 text-[var(--color-chili)] shrink-0" />
              <a href={`tel:${findUs.phone.replace(/\s/g, "")}`} className="font-bold underline underline-offset-4">
                {findUs.phone}
              </a>
            </div>
          </motion.div>

          <div className="relative aspect-square lg:aspect-auto rounded-3xl overflow-hidden min-h-[320px]">
            <iframe
              title="Halės Mėsainis žemėlapyje"
              src={`https://www.google.com/maps?q=${encodeURIComponent(findUs.address)}&output=embed`}
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
