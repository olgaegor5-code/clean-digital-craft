import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — Ольга Владимирец" },
      {
        name: "description",
        content:
          "Политика конфиденциальности и обработки персональных данных сайта Ольги Владимирец.",
      },
      { property: "og:title", content: "Политика конфиденциальности — Ольга Владимирец" },
      {
        property: "og:description",
        content:
          "Как обрабатываются персональные данные посетителей сайта и как с этим связаться.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "27 апреля 2026";

  return (
    <main className="pb-32">
      <section className="mx-auto w-full max-w-3xl px-6 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-32">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          ← На главную
        </Link>

        <h1 className="mt-8 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Последнее обновление: {updated}</p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold">1. Общие положения</h2>
            <p className="mt-3 text-muted-foreground">
              Настоящая Политика описывает, как Ольга Владимирец (далее — «Оператор») обрабатывает
              персональные данные посетителей сайта. Используя сайт, вы подтверждаете, что
              ознакомились с условиями Политики и согласны с ними.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Какие данные обрабатываются</h2>
            <p className="mt-3 text-muted-foreground">
              На сайте нет форм сбора персональных данных. Оператор может получать данные только
              в случае вашего самостоятельного обращения через мессенджеры (Telegram, ВКонтакте)
              по ссылкам, размещённым на сайте: имя или ник, контактные данные и текст сообщения,
              которые вы добровольно отправляете.
            </p>
            <p className="mt-3 text-muted-foreground">
              Также автоматически собираются технические данные: IP-адрес, тип устройства и
              браузера, источник перехода, посещённые страницы. Эти данные используются в
              обезличенном виде для анализа работы сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Цели обработки</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Ответ на обращения, отправленные через мессенджеры.</li>
              <li>Подготовка коммерческих предложений и обсуждение проектов.</li>
              <li>Анализ посещаемости и улучшение сайта.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Правовые основания</h2>
            <p className="mt-3 text-muted-foreground">
              Обработка данных осуществляется на основании вашего согласия, выраженного путём
              самостоятельного обращения к Оператору, а также в соответствии с применимым
              законодательством о персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Передача третьим лицам</h2>
            <p className="mt-3 text-muted-foreground">
              Оператор не передаёт персональные данные третьим лицам, за исключением случаев,
              предусмотренных законом, и сервисов, обеспечивающих работу сайта (хостинг,
              аналитика) в обезличенном виде.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Cookies</h2>
            <p className="mt-3 text-muted-foreground">
              Сайт может использовать файлы cookies для корректной работы интерфейса. Вы можете
              отключить cookies в настройках браузера; это может повлиять на работу отдельных
              элементов сайта.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Ваши права</h2>
            <p className="mt-3 text-muted-foreground">
              Вы можете запросить удаление или уточнение ваших данных, отозвать согласие на
              обработку, обратившись к Оператору через указанные ниже каналы связи.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Контакты</h2>
            <p className="mt-3 text-muted-foreground">
              По вопросам обработки персональных данных свяжитесь с Оператором:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li>
                Telegram:{" "}
                <a
                  href="https://t.me/ovladimirets_ai_prompt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  @ovladimirets_ai_prompt
                </a>
              </li>
              <li>
                ВКонтакте:{" "}
                <a
                  href="https://vk.com/promt_by_olga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  vk.com/promt_by_olga
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Изменения Политики</h2>
            <p className="mt-3 text-muted-foreground">
              Оператор вправе обновлять настоящую Политику. Актуальная версия всегда доступна на
              этой странице.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
