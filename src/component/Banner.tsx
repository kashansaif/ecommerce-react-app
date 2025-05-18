import { FC } from "react";
type BannerProps = {
  bannerText: string;
};

const Banner: FC<BannerProps> = ({ bannerText }) => {
  return <h1 className="bg-gray-100 border h-32 flex items-center justify-center text-center shadow-sm mb-5">{bannerText}</h1>;
};

export default Banner;
