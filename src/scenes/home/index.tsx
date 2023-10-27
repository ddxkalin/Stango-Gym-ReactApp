import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedbull from "@/assets/SponsorRedbull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
// import SponsorEquityMultiple from "@/assets/SponsorEquityMultiple.png"
import ActionButton from "@/shared/ActionButton"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediaScreen = useMediaQuery("(min-width:1060px");

  return <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Image Main Header */}
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            {/* Main Header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* Headings */}
                <motion.div 
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}    
                    transition={{duration: 1.5}}
                    variants={{
                        hidden: {opacity:0, x: -100},
                        visible: {opacity:1, x: 0}
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="homePageText" src={HomePageText} />
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                    Are you ready to transform your life, boost your energy, and unveil your inner strength? Look no further! Join us on a thrilling fitness adventure that will change the way you think about exercise.
                    At Evolve's Ultimate Workout Experience, we're more than just a gym: we're a community, a support system, and a lifestyle. Our goal is to help you achieve your fitness aspirations and enjoy the journey along the way.
                    </p>
                </motion.div>
                {/* Actions */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}    
                    transition={{ delay: 0.5, duration: 1}}
                    variants={{
                        hidden: {opacity:0, x: -50},
                        visible: {opacity:1, x: 0}
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}> 
                        Pump Now!
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-center">
                <img alt="HomePageGraphic" src={HomePageGraphic} />
            </div>
        </motion.div>

        {/* Sponsors */}
        {isAboveMediaScreen && ( 
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img alt="redbull-sponsor" src={SponsorRedbull} />
                        <img alt="forbes-sponsor" src={SponsorForbes} />
                        <img alt="fortune-sponsor" src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )}
  </section>
}

export default Home