import { motion } from "framer-motion";
import styles from "../styles/index";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import map from "../public/map.png";
import people01 from "../public/people-01.png"
import people02 from "../public/people-02.png"
import people03 from "../public/people-03.png"

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyLes="text-center" />
      <TitleText
        title={
          <>
            Track Friends around you and invite them to play together in the
            same world
          </>
        }
        textStyLes="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src={map} alt="map" className="w-full h-full object-contain" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src={people01} alt="people01" className="w-full h-full"/>
        </div>

        <div className="absolute top-[80px] left-14 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src={people02} alt="people02" className="w-full h-full"/>
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src={people03} alt="people03" className="w-full h-full"/>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
