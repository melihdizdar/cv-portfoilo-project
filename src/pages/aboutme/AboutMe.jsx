import "./aboutme.css"
import { Image } from "react-bootstrap"
import { Button } from "react-bootstrap"


export default function AboutMe() {
    return (
        <div className="aboutme">
                <div className="aboutmeLeft">
                    <div className="aboutmeLeftItem">
                        <Image src="https://i.hizliresim.com/kyok9pb.png" className="image" roundedCircle />
                        <div className="leftname">Melih</div>
                        <div className="leftsurname">Dizdar</div>
                        <div className="bluebar"></div>
                        <div className="lefttitle">WEB DEVELOPER</div>
                        <div className="sociallinks">
                            <ul>
                                <li className="sociallinkslist">
                                    <a href="https://www.facebook.com/melihdizdarr/"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/benmelko"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/melihdizdar/"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.instagram.com/melihdizdarr/"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="aboutmeRight">
                    <div className="rightHeader">Hello</div>
                    <div className="rightTitle">Here's who I am and what I do</div>
                    <div className="rightButtons">
                        <Button variant="primary" size="default" className="button">Resume</Button>&nbsp;
                        <Button variant="primary" size="default" className="button">Projects</Button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec odio eu elit porttitor finibus. Aliquam pellentesque massa sed libero placerat eleifend.</p>
                    <p>Nam mollis enim neque, nec fermentum mauris consectetur non. Suspendisse efficitur dictum odio. Ut posuere risus nunc, in bibendum.</p>
                </div>
        </div>
    )
}