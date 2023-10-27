import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Class",
        description: "Get ready to build strength and sculpt your body in our Weight Training Class. Whether you're a beginner or a seasoned lifter, our class offers a comprehensive workout designed to help you reach your fitness goals and boost your confidence.",
        image: image1,
    },
    {
        name: "Boxing Class",
        description: "Unleash your inner fighter with our exhilarating Boxing Class. Perfect your stance, throw powerful punches, and build both physical and mental strength. No matter your experience level, this class will leave you feeling empowered and energized.",
        image: image2,
    },
    {
        name: "AB Core Class",
        description: "Strengthen your core and achieve a toned midsection with our AB Core Class. Join us for a focused and effective workout that targets your abdominal muscles, helping you build a strong foundation for all your fitness endeavors.",
        image: image3,
    },
    {
        name: "Adventure Class",
        description: "Embark on an adventurous fitness journey in our Adventure Class. This class combines fun and challenging activities to keep you engaged and motivated. It's a great way to break the routine and infuse excitement into your workouts.",
        image: image4,
    },
    {
        name: "Fitness Class",
        description: "Our Fitness Class offers a well-rounded workout that covers cardio, strength, and flexibility. It's suitable for all fitness levels and aims to improve overall health, endurance, and physical well-being.",
        image: image5,
    },
    {
        name: "Training Class",
        description: "Take your fitness to the next level with our Training Class. Led by experienced trainers, this class offers personalized coaching and workout plans to help you reach your specific fitness goals. It's the ideal choice for those looking for individualized guidance and support on their fitness journey.",
        image: image6,
    }
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;}

const OurClasses = ({setSelectedPage}: Props) => {
  return <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}  
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}    
                transition={{duration: 1.5}}
                variants={{
                    hidden: {opacity:0, x: -100},
                    visible: {opacity:1, x: 0}
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                        Join our Boxing Class at EVOGYM and experience a dynamic, high-energy workout that will boost your fitness and self-confidence. Our certified trainers will guide you through the fundamentals of boxing, helping you improve strength, agility, and cardio endurance. Whether you're a seasoned boxer or a beginner, our inclusive and motivating environment ensures an empowering experience. Discover the thrill of every punch and unlock your inner fighter at EVOGYM.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
}

export default OurClasses