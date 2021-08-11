import "./aboutme.css"
import { Image } from "react-bootstrap"


export default function AboutMe() {
    return (
        <div className="aboutme">
                <div className="aboutmeLeft">
                    <div className="aboutmeLeftItem">
                        <Image src="https://i.hizliresim.com/kyok9pb.png" className="image" roundedCircle />
                        <div className="lefthead">Melih Dizdar</div>
                        <div className="bluebar">bluebar</div>
                        <div className="lefttitle">WEB DEVELOPER</div>
                        <div className="sociallinks">Social Media</div>
                    </div>
                </div>
                <div className="aboutmeRight">
                    right
                </div>
        </div>
    )
}