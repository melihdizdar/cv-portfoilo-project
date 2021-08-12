import "./aboutme.css"
import { Image } from "react-bootstrap"


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
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-linkedin-in"></i>
                                    <i class="fab fa-instagram"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="aboutmeRight">
                    right
                </div>
        </div>
    )
}