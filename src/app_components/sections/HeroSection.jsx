import { Badge } from "../../components/ui/badge";
import HeroImage from '../../assets/alfieanil.jpg';
import 'animate.css';

function HeroSection(){
    return (
        <div className="flex flex-col items-center h-screen animate__animated animate__fadeIn">
            <div className="flex mt-8 ">
                <Badge className="me-3">Software Developer</Badge>
                <Badge>Bsc Computer Science</Badge>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-3">
                Hello, I'm Alfie Anil
            </h1>
            <h4 className="text-xl text-center font-normal mt-4">I work on interesting projects to solve problems. Welcome to my portfolio.</h4>

            {/* <div className="flex my-8 justify-center items-center w-100">
                <img src={HeroImage} alt="Alfie Anil" className=" max-h-[67vh] rounded-md max-w-full max-h-full object-contain mb-4 shrink" />
            </div> */}

            <div className="h-full w-full overflow-hidden">
                <img src={HeroImage} alt="Alfie Anil" className="object-cover h-5/6 rounded-md max-w-full max-h-full mx-auto my-8" />
            </div>
        </div>
    )
}

export default HeroSection;