import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
    hidden: {opacity:0, scale: 0.9},
    visible: {opacity:1, scale: 1}
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        variants={childVariant}
    >
        <motion.div className="mb-4 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}    
            transition={{ delay: 0.5, duration: 1}}
            variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1, x: 0}
            }}
        >
            <div className="rounded-4 border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>
        </motion.div>

        <h4 className="font-bold">
            {title}
        </h4>

        <p className="my-3">
            {description}
        </p>

        <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit