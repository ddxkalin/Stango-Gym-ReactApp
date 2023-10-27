import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/5 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    Get fit and stay motivated with EVOGYM - your all-in-one fitness
                    companion. Track workouts, set goals, and achieve results with ease.
                </p>
                <p>
                    © Evogym All Rights Reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5"><a href="https://github.com/ddxkalin">GitHub </a></p>
                <p className="my-5"><a href="https://www.linkedin.com/in/kalinstoev9316/">LinkedIn</a></p>
                <a href="https://ddxkalin.github.io/">Portfolio</a>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"><a href="mailto:kstoev9316@gmail.com">Email-Me</a></p>
            </div>
        </div>
    </footer>
    )
}

export default Footer