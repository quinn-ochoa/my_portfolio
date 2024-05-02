import AboutmePart from "./AboutmePart";
import { ABOUT_ME } from "../data";

export default function Aboutme(){
    return(
        <section id="about-me">
            <h2>Skills</h2>
            <ul>
                {ABOUT_ME.map((about) => <AboutmePart key={about.title} {...about}/>)}
            </ul>
        </section>
    )

}