import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Проекты — Ольга Владимирец" },
      {
        name: "description",
        content: "Подборка цифровых проектов: сайты, сервисы, боты и приложения.",
      },
      { property: "og:title", content: "Проекты — Ольга Владимирец" },
      {
        property: "og:description",
        content: "Подборка цифровых проектов: сайты, сервисы, боты и приложения.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="pb-32">
      <section className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <span aria-hidden>←</span> На главную
          </Link>
          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            портфолио
          </span>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24"
        >
          <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-balance">
            Проекты
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            Небольшая подборка работ. Каждый проект — про ясность и спокойную
            функциональность.
          </p>
        </motion.header>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Tag = p.url ? "a" : "div";
            const props = p.url
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              >
                <Tag
                  {...(props as Record<string, string>)}
                  className="group block overflow-hidden rounded-[22px] bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-float"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.94_0.008_75),transparent_60%),radial-gradient(circle_at_70%_70%,var(--greige),transparent_55%)]">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-5xl text-foreground/20">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    )}
                    {!p.url && (
                      <span className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                        скоро
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {p.tag}
                      </div>
                      <h3 className="mt-2 text-xl tracking-tight">{p.title}</h3>
                    </div>
                    <span
                      aria-hidden
                      className="text-foreground/40 transition group-hover:translate-x-1 group-hover:text-foreground"
                    >
                      →
                    </span>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 rounded-[28px] border border-border bg-card/60 p-8 sm:p-12">
          <h2 className="text-2xl tracking-tight sm:text-3xl">Хотите подобный проект?</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Напишите — обсудим задачу и подберём подходящее решение.
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            Связаться
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
