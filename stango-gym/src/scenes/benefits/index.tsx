import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { HomeModernIcon , UserGroupIcon , AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of Art Facilities",
        description: "Our gym boasts state-of-the-art facilities designed to elevate your fitness experience. From cutting-edge workout equipment to spacious and well-maintained exercise areas, we offer everything you need to reach your fitness goals. Our commitment to providing top-tier facilities ensures that your workouts are not only effective but also enjoyable. Experience the difference with our modern and well-equipped gym.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100% of Diverse Classes",
        description: "At our gym, we take pride in offering a diverse range of fitness classes to cater to every individual's preferences and fitness levels. Whether you're into high-intensity interval training, yoga, or group cycling, we've got you covered. Our classes are led by experienced instructors who are passionate about helping you achieve your fitness objectives. With a variety of class options, you can find the perfect fit for your fitness journey.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Our team of dedicated and highly trained fitness professionals is here to guide you towards success. Our expert trainers are not only knowledgeable but also passionate about helping you reach your fitness goals. Whether you're looking to build strength, improve endurance, or lose weight, our trainers are committed to creating customized workout plans and providing the motivation and support you need.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}  
        >
            {/* Header */}
            <motion.div className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0}
                }}    
            >
                <HText>MORE THAN JUST A GYM!</HText>
                <p className="my-5 text-sm ">
                    EVOGYM provide a dedicated space for individuals to engage in physical exercise and improve their overall fitness. These facilities typically offer a wide range of exercise equipment, including cardio machines, weightlifting apparatus, and functional training areas. Gyms cater to people with diverse fitness goals, whether it's building muscle, losing weight, improving cardiovascular health, or enhancing flexibility and endurance.
                </p>
            </motion.div>
            
            {/* Benefit */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* Graphics Desc */}
            <div className="mt-16 flex justify-between items-center gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                    <img 
                        className="mx-auto" 
                        alt="benefitsPageGraphic"
                        src={BenefitsPageGraphic}/>
                {/* Description */}
                <div>
                    {/* Title */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: 50},
                            visible: {opacity: 1, x: 0}
                        }} 
                    >
                        <div className="before:absolute before:-top-20 before before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <div>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING {"   "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: -50},
                            visible: {opacity: 1, x: 0}
                        }} 
                    >
                        <p className="my-5">
                            Unlock Your Full Potential, One Rep at a Time. Join our thriving fitness family and embark on a journey of self-discovery, strength, and resilience. We understand that the road to fitness is a series of steps, each one bringing you closer to your best self. Our community at EVOGYM is not just about getting fit; it's about unearthing your inner champion. Every drop of sweat, every lift, and every push beyond your limits takes you one step closer to greatness.
                        </p>
                        <p className="mb-5">
                            At EVOGYM, we're here to inspire and support your progress because we know that true victory isn't just in reaching your goals; it's in the journey itself. Join our community today, and together, we'll turn your ambitions into achievements. Your story, your effort, your success – it all starts here. Let's take that first step towards greatness together."
                        </p>
                    </motion.div>
                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
}

export default Benefits