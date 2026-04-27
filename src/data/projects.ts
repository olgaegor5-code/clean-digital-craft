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
  {
    slug: "sole-care-expert",
    title: "Сайт мастера педикюра и подолога — приём заявок и консультаций",
    tag: "Сайт",
    url: "https://sole-care-expert.lovable.app/",
  },
  {
    slug: "yoga-studio-landing",
    title: "Лендинг для студии йоги — расписание и запись на занятия",
    tag: "Лендинг",
  },
  {
    slug: "beauty-booking",
    title: "Онлайн-сервис записи в салон красоты",
    tag: "Онлайн-сервис",
  },
  {
    slug: "tg-bot-orders",
    title: "Telegram-бот для приёма заявок кондитера",
    tag: "Бот",
  },
  {
    slug: "coach-personal-site",
    title: "Персональный сайт коуча с блогом и формой консультации",
    tag: "Сайт",
  },
  {
    slug: "course-promo",
    title: "Промо-страница авторского онлайн-курса",
    tag: "Лендинг",
  },
];
