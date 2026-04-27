import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import portraitImg from "@/assets/olga-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ольга Владимирец — цифровые решения для бизнеса" },
      {
        name: "description",
        content:
          "Создаю понятные цифровые решения: сайты, онлайн-сервисы, боты и приложения, которые приводят к заявкам.",
      },
      { property: "og:title", content: "Ольга Владимирец — цифровые решения для бизнеса" },
      {
        property: "og:description",
        content:
          "Понятные цифровые продукты: сайты, сервисы, боты и приложения. Простота, ясность, ориентир на результат.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-6 bg-foreground/30" />
      {children}
      <span className="h-px w-6 bg-foreground/30" />
    </span>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-secondary shadow-float">
      <img
        src={portraitImg}
        alt="Ольга Владимирец"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
    </div>
  );
}

const tasks = [
  { n: "01", t: "Есть идея, но непонятно как реализовать" },
  { n: "02", t: "Сайт не приносит клиентов" },
  { n: "03", t: "Сложно объяснить ценность продукта" },
  { n: "04", t: "Всё перегружено и запутано" },
];

const services = [
  { t: "Сайты и страницы", d: "Лендинги, корпоративные сайты, промо" },
  { t: "Онлайн-сервисы", d: "Личные кабинеты, формы, конструкторы" },
  { t: "Боты", d: "Telegram-боты для заявок и автоматизации" },
  { t: "Простые приложения", d: "Лёгкие веб-инструменты под задачу" },
];

const approach = [
  "Простота и ясность",
  "Логичная структура",
  "Без лишнего",
  "Ориентир на результат",
];

const process = [
  { n: "01", t: "Обсуждение задачи", d: "Слушаю, уточняю, разбираюсь в контексте" },
  { n: "02", t: "Предложение решения", d: "Описываю формат и шаги работы" },
  { n: "03", t: "Создание", d: "Делаю аккуратно и без лишнего" },
  { n: "04", t: "Доработка", d: "Шлифую детали по результатам теста" },
];

function QrCard({
  label,
  storageKey,
  placeholder,
}: {
  label: string;
  storageKey: string;
  placeholder: string;
}) {
  const [value, setValue] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
    if (saved) setValue(saved);
  }, [storageKey]);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem(storageKey, value);
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        value || placeholder,
        {
          width: 240,
          margin: 1,
          color: { dark: "#1C1C1C", light: "#00000000" },
          errorCorrectionLevel: "M",
        },
        () => {},
      );
    }
  }, [value, placeholder, storageKey]);

  const download = () => {
    if (!value) return;
    QRCode.toDataURL(
      value,
      { width: 1024, margin: 2, color: { dark: "#1C1C1C", light: "#F7F7F5" } },
      (_err, url) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = `${label.toLowerCase()}-qr.png`;
        a.click();
      },
    );
  };

  return (
    <div className="flex flex-col gap-5 rounded-[24px] bg-card p-6 shadow-soft sm:p-8">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">qr</span>
      </div>

      <div className="flex items-center justify-center rounded-2xl bg-secondary/60 p-6">
        <canvas ref={canvasRef} className={value ? "" : "opacity-30"} />
      </div>

      <input
        type="url"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:outline-none"
      />

      <div className="flex flex-wrap gap-2">
        <a
          href={value || "#"}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!value}
          onClick={(e) => !value && e.preventDefault()}
          className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            value
              ? "bg-foreground text-background hover:bg-foreground/90"
              : "bg-secondary text-muted-foreground cursor-not-allowed"
          }`}
        >
          Открыть {label}
        </a>
        <button
          type="button"
          onClick={download}
          disabled={!value}
          className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary disabled:opacity-40"
        >
          Скачать PNG
        </button>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <main className="pb-32">
      {/* HERO */}
      <Section className="pt-16 sm:pt-24 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <Eyebrow>цифровые решения</Eyebrow>
            <h1 className="mt-6 text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] text-balance whitespace-nowrap">
              Ольга <span className="font-hand text-foreground/90 border-none ml-2 text-[1.25em] leading-none">Владимирец</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Создаю цифровые решения для бизнеса, которые помогают
              получать заявки — спокойные интерфейсы, в которых пользователь сразу понимает,
              что делать.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90"
              >
                Посмотреть проекты
                <span aria-hidden>→</span>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Связаться
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <PortraitPlaceholder />
          </motion.div>
        </div>
      </Section>

      {/* TASKS */}
      <Section className="mt-32 sm:mt-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <Eyebrow>задачи</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              С чем ко мне приходят
            </h2>
            <p className="mt-5 text-muted-foreground">
              Чаще всего — за тем, чтобы наконец навести порядок и превратить идею
              в работающий продукт.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {tasks.map((task, i) => (
                <motion.div
                  key={task.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`group rounded-[22px] bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-float sm:p-8 ${
                    i % 3 === 0 ? "sm:translate-y-6" : ""
                  }`}
                >
                  <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
                    {task.n}
                  </div>
                  <p className="mt-6 text-lg leading-snug text-foreground text-pretty">
                    {task.t}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* SOLUTION */}
      <Section className="mt-32 sm:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] bg-secondary px-8 py-16 sm:px-16 sm:py-24 lg:px-24 lg:py-28"
        >
          <Eyebrow>решение</Eyebrow>
          <p className="mt-8 max-w-3xl font-display text-3xl leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] text-balance">
            Создаю понятные и удобные цифровые решения, в которых пользователь
            легко понимает, что делать — и доходит до заявки.
          </p>
        </motion.div>
      </Section>

      {/* SERVICES */}
      <Section className="mt-32 sm:mt-40">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>что я делаю</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Форматы работы
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Выбираю формат под задачу, а не наоборот.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-6">
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex min-h-[200px] flex-col justify-between rounded-[22px] bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-float ${
                i === 0 ? "sm:col-span-4" : i === 1 ? "sm:col-span-2" : i === 2 ? "sm:col-span-2" : "sm:col-span-4"
              }`}
            >
              <div className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-2xl tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS TEASER */}
      <Section className="mt-32 sm:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <Eyebrow>проекты</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.025em] text-balance">
              Каждый проект — <span className="italic">тихая</span>
              <br />
              работа над ясностью.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90"
            >
              Смотреть проекты
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>
      </Section>

      {/* APPROACH */}
      <Section className="mt-32 sm:mt-40">
        <Eyebrow>подход</Eyebrow>
        <h2 className="mt-6 max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Принципы, на которых строю работу
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex min-h-[180px] flex-col justify-between bg-background p-8"
            >
              <span className="font-display text-2xl text-muted-foreground">
                / 0{i + 1}
              </span>
              <p className="text-xl tracking-tight text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="mt-32 sm:mt-40">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>процесс</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Как мы будем работать
            </h2>
            <p className="mt-5 text-muted-foreground">
              Без сюрпризов: на каждом шаге вы понимаете, что происходит и зачем.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative">
              {process.map((step, i) => (
                <motion.li
                  key={step.n}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="grid grid-cols-[64px_1fr] gap-6 border-t border-border py-8 first:border-t-0 sm:grid-cols-[88px_1fr]"
                >
                  <div className="font-display text-2xl text-muted-foreground">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-2xl tracking-tight">{step.t}</h3>
                    <p className="mt-2 text-muted-foreground">{step.d}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="mt-32 sm:mt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] bg-card px-6 py-14 shadow-float sm:px-12 sm:py-20 lg:px-20"
        >
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>контакты</Eyebrow>
              <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl text-balance">
                Напишите мне — обсудим задачу и подберём решение.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Вставьте свои ссылки в поля справа — для каждой соберётся аккуратный
                QR-код, который можно показать с экрана или скачать.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90"
                >
                  Telegram
                </a>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  VK
                </a>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              <QrCard
                label="Telegram"
                storageKey="contact.tg"
                placeholder="https://t.me/username"
              />
              <QrCard label="VK" storageKey="contact.vk" placeholder="https://vk.com/username" />
            </div>
          </div>
        </motion.div>
      </Section>

      {/* FOOTER */}
      <Section className="mt-24">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Ольга Владимирец</span>
          <span className="font-display italic">Спокойные цифровые решения</span>
        </div>
      </Section>
    </main>
  );
}
