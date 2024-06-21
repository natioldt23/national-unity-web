import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation()

  const home = t("home")

  return (
    <div className="top-banner text-center">
      <h2 className="tx-dark mb-20">
        {home.bannerTitle}
      </h2>
    </div>
  );
};

export default Banner;
