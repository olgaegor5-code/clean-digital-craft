export type Project = {
  slug: string;
  title: string;
  tag: string;
  /** Optional external link (Behance, Notion, live site). If omitted — карточка показывается как «Скоро». */
  url?: string;
  /** Опционально: путь к превью в /public, например "/projects/case-1.jpg" */
  image?: string;
};

/**
 * Чтобы добавить проект:
 * 1. (опц.) положите превью в public/projects/
 * 2. Добавьте запись в массив ниже
 * Карточки на /projects обновятся автоматически.
 */
export const projects: Project[] = [
  { slug: "case-1", title: "Лендинг для студии", tag: "Сайт" },
  { slug: "case-2", title: "Сервис записи", tag: "Онлайн-сервис" },
  { slug: "case-3", title: "Telegram-бот для заявок", tag: "Бот" },
  { slug: "case-4", title: "Корпоративный сайт", tag: "Сайт" },
  { slug: "case-5", title: "Личный кабинет клиента", tag: "Приложение" },
  { slug: "case-6", title: "Промо-страница продукта", tag: "Лендинг" },
];
