import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const { t } = useTranslation();
  const navItems = [
    { key: "dashboard", link: "#dashboard" },
    { key: "whitepaper", link: "#whitepaper" },
    { key: "tokenomicsNav", link: "#tokenomics" },
    { key: "roadmapNav", link: "#roadmap" },
    { key: "about", link: "#about" },
  ];
  return (
    <div className="flex flex-col lg:flex-row">
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.link}
          className="text-[10px] md:text-sm lg:text-lg 2xl:text-[24px] font-bold tracking-normal leading-6 text-white cursor-pointer transition-colors duration-300 hover:text-[#ffb833a2] py-2 px-2 2xl:px-4"
        >
          {t(item.key)}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
