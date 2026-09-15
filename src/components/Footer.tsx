import { ROUTES, TABS } from "@/lib/constants";

const footerLinks = [
  { link: ROUTES.HOME, label: TABS.HOME },
  { link: ROUTES.SERVICES, label: TABS.SERVICES },
  { link: ROUTES.WORKS, label: TABS.WORKS },
  { link: ROUTES.BRANDS, label: TABS.BRANDS },
  { link: ROUTES.CONTACTME, label: TABS.CONTACTME },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full relative mt-[70px]">
      <a href={ROUTES.HOME}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/GM.png" alt="logo" className="h-16 w-auto" />
      </a>
      <ul className="flex flex-wrap justify-center gap-8 list-none p-0 m-0 h-[50px] items-center">
        {footerLinks.map(({ link, label }) => (
          <li key={link}>
            <a
              href={link}
              className="text-white px-2.5 no-underline transition-colors hover:text-[var(--color-primary)]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <p className="py-5 mb-0 text-white opacity-50">
        Inspirado en{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wpriverthemes.com/gridxlight/"
          className="text-[var(--color-primary)]"
        >
          GridX
        </a>
      </p>
    </footer>
  );
}
