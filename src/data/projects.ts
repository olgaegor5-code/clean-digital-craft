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
];
