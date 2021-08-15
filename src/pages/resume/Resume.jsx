import { Button, Card } from "react-bootstrap"
import "./resume.css"

export default function Resume() {
    return (
        <div className="resume">
            <div className="resumeLeft"></div>
            <div className="resumeCenter">
                <div className="header">
                    <div className="headerContent">
                        <ul className="resumeTitleList">
                            <li className="square"></li>
                            <li className="resumeTitle">Resume</li>
                        </ul>
                    </div>
                </div>
                <div className="experience">
                    <div className="experienceLeft">Experience</div>
                    <div className="experienceRight">
                        <Button variant="primary" size="default" className="button">DOWNLOAD CV</Button>
                    </div>
                </div>
                <div className="experienceContent">
                    <div className="experienceContentLeft">
                        <Card className="experienceCard">
                            <Card.Body>
                                <Card.Title>2019-2020</Card.Title>
                                <Card.Title>Information Technology Technician</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Özel Şahin Okulları</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Camili/Sakarya</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="experienceContentRight">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className="experienceContent">
                    <div className="experienceContentLeft">
                        <Card className="experienceCard">
                            <Card.Body>
                                <Card.Title>2015-2016</Card.Title>
                                <Card.Title>Information Technology Technician</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Karel</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Zincirlikuyu/İstanbul</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="experienceContentRight">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className="education">
                    <div className="educationInside">Education</div>
                </div>
            </div>
            <div className="resumeRight"></div>
        </div>
    )
}
