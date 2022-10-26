import { useRouter } from "next/router";
import NextLink from "next/link";
import cx from "clsx";

export const NavObj = [
  { href: "/", text: "Home" },
  { href: "/about", text: "about" },
];

const NavItem: React.FC<{ href: string; text: string }> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      className={cx(
        isActive ? "bg-black text-white" : "text-gray ",
        "rounded-lg px-4 py-2 transition-all hover:bg-gray-2"
      )}
    >
      <span>{text}</span>
    </NextLink>
  );
};

const Navbar = () => {
  return (
    <header className="w-full shadow-lg bg-blue max-w-2xl flex justify-between items-center mx-auto h-16 z-40 md:rounded-xl px-2">
      <div>
        <a
          className="text-2xl font-bold text-gray transition-colors lg:text-3xl"
          href="#"
        >
          Demo
        </a>
      </div>

      <ul className="gap-2 flex">
        {NavObj.map((item) => (
          <li key={item.href}>
            <NavItem href={item.href} text={item.text} />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
