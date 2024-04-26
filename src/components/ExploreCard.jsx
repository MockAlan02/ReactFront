import { motion } from "framer-motion";
import styles from "../styles/index";
import { fadeIn } from "../utils/motion";
import headsetSvg from "../public/headset.svg"

const ExploreCard = ({ active, handleClick, imgUrl, id, title, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
 onClick={() => handleClick(id)} >
    <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
        {title}
      </h3>
    ): (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-black/50 rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] rounded-[24px] glassmorphism mb-[16px] h-[60px]`}>
          <img src={headsetSvg} alt="headsetSvg" className="w-1/2 h-1/2  object-contain"/>
        </div >
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">Enter the metaverse</p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px]">
The Upside Down
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
