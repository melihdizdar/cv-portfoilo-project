import "./aboutme.css"
import { Button, Card } from "react-bootstrap"

export default function AboutMe() {
    return (
        <div className="aboutbg">
            <div className="about">
                <div className="aboutme">
                    <div className="aboutmeLeft">
                        <Card className="Card">
                            <Card.Img variant='top' src="https://i.hizliresim.com/kyok9pb.png" className="image"/>
                            <Card.Body>
                                <Card.Title className="leftname">Melih</Card.Title>
                                <Card.Title className="leftsurname">Dizdar</Card.Title>
                                <div className="bar"></div>
                                <Card.Title className="lefttitle">FRONT-END DEVELOPER</Card.Title>
                            </Card.Body>
                        </Card>
                        <div className="sociallinks">
                            <ul>
                                <li className="sociallinkslist">
                                    <a href="https://www.facebook.com/melihdizdarr/"><i class="fab fa-facebook-f" title="Facebook"></i></a>
                                    <a href="https://www.instagram.com/melihdizdarr/"><i class="fab fa-instagram" title="Instagram"></i></a>
                                    <a href="https://twitter.com/benmelko"><i class="fab fa-twitter" title="Twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/melihdizdar/"><i class="fab fa-linkedin-in" title="Linkedin"></i></a>
                                    <a href="https://github.com/melihdizdar"><i class="fab fa-github" title="Github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="aboutmeRight">
                        <div className="rightItem">
                            <div className="rightHeader">Hello</div>
                            <div className="rightTitle">Here's who I am and what I do</div>
                            <div className="rightButtons">
                                <Button variant="primary" size="default" className="button" href="/resume">Resume</Button>&nbsp;
                                <Button variant="primary" size="default" className="button"href="/projects">Projects</Button>
                            </div>
                            <p>I completed my high school education in the department of information technologies, in the field of web design. During my high school years, I developed sites related to asp.net, html and css. I graduated from Sakarya University of Applied Sciences Computer Programming department in 2 years and in my associate years I developed projects using html, css, bootstrap4, asp.net, arduino, c#, windows form project and php languages. Now I am developing projects with ReactJS.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
