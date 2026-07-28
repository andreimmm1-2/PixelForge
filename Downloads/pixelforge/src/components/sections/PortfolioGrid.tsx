"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Project } from "@/types";

export const PortfolioGrid = ({ projects }: { projects: Project[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <AnimatePresence>
      {projects.map((p, i) => (
        <motion.article
          key={p.slug}
          layout
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ delay: (i % 6) * 0.03, duration: 0.45 }}
        >
          <Card className="h-full flex flex-col overflow-hidden hover:shadow-soft transition-shadow duration-300">
            <div className="group relative flex flex-col h-full">
              <div className="relative w-full lg:h-60 h-48 overflow-hidden rounded-lg">
                <Image src={p.image} alt={p.name} fill className="object-cover transform-gpu group-hover:scale-105 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />

                <Badge className="absolute top-3 left-3" variant="secondary">
                  {p.industry}
                </Badge>

                <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
                  <div className="w-full flex justify-between items-end">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.slice(0, 3).map((t) => (
                        <Badge key={t} className="text-xs">{t}</Badge>
                      ))}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                      <Link href={`/portfolio/${p.slug}`} aria-label={`View ${p.name}`}>
                        <Button size="sm" variant="outline">View project</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-white text-lg">{p.name}</h3>
                <p className="text-muted text-sm mt-2 flex-1">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs text-white/80 px-2 py-1 rounded-md bg-white/3">{t}</span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href={`/portfolio/${p.slug}`} aria-label={`Open ${p.name}`} className="text-sm font-medium text-accent hover:underline">View case study →</Link>
                </div>
              </div>
            </div>
          </Card>
        </motion.article>
      ))}
    </AnimatePresence>
  </div>
);

