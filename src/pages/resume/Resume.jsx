import { Button } from "react-bootstrap"
import "./resume.css"

export default function Resume() {
    return (
        <div className="resume">
            <div className="resumeLeft"></div>
            <div className="resumeCenter">
                <div className="header">
                    <div className="headerTop">
                        <ul className="resumeTitleList">
                            <li className="square"></li>
                            <li className="resumeTitle">Resume</li>
                        </ul>
                    </div>
                    <div className="headerBottom">
                        <div className="headerBottomLeft">Experience</div>
                        <div className="headerBottomRight">
                            <Button variant="primary" size="default" className="button">DOWNLOAD CV</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumeRight"></div>
        </div>
    )
}
