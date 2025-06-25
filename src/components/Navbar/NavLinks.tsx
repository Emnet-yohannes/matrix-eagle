import { useTranslation } from "react-i18next";

const NavLinks = () => {
  const { t } = useTranslation();
  const navItems = [
    { key: "dashboard", link: "#dashboard" },
    { key: "tokenomicsNav", link: "#tokenomics" },
    { key: "whitepaper", link: "#whitepaper" },
    { key: "roadmapNav", link: "#roadmap" },
    { key: "howToBuy", link: "#how-to-buy" },
    { key: "contactUs", link: "#contact-us" },
  ];
  return (
    <div className="flex flex-col sm:flex-row">
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.link}
          className="text-[10px] xl:text-xs 2xl:text-base font-bold tracking-normal leading-6 text-white cursor-pointer transition-colors duration-300 hover:text-[#ffb833a2] py-2 px-2 2xl:px-4"
        >
          {t(item.key)}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
