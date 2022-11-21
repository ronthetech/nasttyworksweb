import Link from "next/link";
import InstagramLogo from "../../public/Instagram.svg";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer className="bg-gray-800 fixed bottom-0 w-full">
      <div className="mx-auto max-w-sm px-4 sm:px-6 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a>
              <h1
                id="header-title"
                className="text-3xl lg:text-4xl font-bold tracking-tight text-center text-emerald-700 hover:text-emerald-800">
                Nastty Works Auto
              </h1>
            </a>
          </Link>
          <a
            href="https://www.instagram.com/nastty.ent/"
            rel="noreferrer noopener"
            target="_blank">
            <InstagramLogo className="text-5xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
