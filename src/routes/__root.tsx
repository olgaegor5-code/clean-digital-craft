import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ольга Владимирец — цифровые решения для бизнеса" },
      {
        name: "description",
        content:
          "Создаю понятные цифровые решения: сайты, онлайн-сервисы, боты и приложения, которые приводят к заявкам.",
      },
      { name: "author", content: "Ольга Владимирец" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Ольга Владимирец — цифровые решения для бизнеса" },
      { name: "twitter:title", content: "Ольга Владимирец — цифровые решения для бизнеса" },
      { name: "description", content: "A modern, minimalist digital business card website for a specialist in digital solutions." },
      { property: "og:description", content: "A modern, minimalist digital business card website for a specialist in digital solutions." },
      { name: "twitter:description", content: "A modern, minimalist digital business card website for a specialist in digital solutions." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hGiMtis7jBWiFtqF710IF5anSBC2/social-images/social-1777294370496-Снимок_экрана_2026-04-27_155230.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/hGiMtis7jBWiFtqF710IF5anSBC2/social-images/social-1777294370496-Снимок_экрана_2026-04-27_155230.webp" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Marck+Script&family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
