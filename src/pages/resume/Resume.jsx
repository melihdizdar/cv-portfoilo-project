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
                        <Button variant="primary" size="default" className="button" href="https://dosya.co/sga580h4doz5/MelihCV.pdf.html">DOWNLOAD CV</Button>
                    </div>
                </div>
                <div className="experienceContent">
                    <div className="experienceContentLeft">
                        <Card className="experienceCard">
                            <Card.Body>
                                <Card.Title className="experienceCardHeader">2019-2020</Card.Title>
                                <Card.Title className="experienceCardPosition">Information Technology Technician</Card.Title>
                                <Card.Subtitle className="experienceCardCompanyName">Özel Şahin Okulları</Card.Subtitle>
                                <Card.Subtitle className="experienceCardCompanyLocation">Camili/Sakarya</Card.Subtitle>
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
                                <Card.Title className="educationCardHeader">2015-2016</Card.Title>
                                <Card.Title className="educationCardPosition">Information Technology Technician</Card.Title>
                                <Card.Subtitle className="educationCardCompanyName">Karel</Card.Subtitle>
                                <Card.Subtitle className="educationCardCompanyLocation">Zincirlikuyu/İstanbul</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="experienceContentRight">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className="education">
                    <div className="educationLeft">Education</div>
                </div>
                <div className="educationContent">
                    <div className="educationContentLeft">
                        <Card className="educationCard">
                            <Card.Body>
                                <Card.Title className="educationCardHeader">2018-2020</Card.Title>
                                <Card.Title className="educationCardPosition">Sakarya Uygulamalı Bilimler Üniversitesi</Card.Title>
                                <Card.Subtitle className="educationCardCompanyName">Associate Degree</Card.Subtitle>
                                <Card.Subtitle className="educationCardCompanyLocation">Serdivan/Sakarya</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="educationContentRight">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className="educationContent">
                    <div className="educationContentLeft">
                        <Card className="educationCard">
                            <Card.Body>
                                <Card.Title className="educationCardHeader">2013-2017</Card.Title>
                                <Card.Title className="educationCardPosition">İMMİB Erkan Avcı Anadolu Teknik Lisesi</Card.Title>
                                <Card.Subtitle className="educationCardCompanyName">High School</Card.Subtitle>
                                <Card.Subtitle className="educationCardCompanyLocation">Bahçelievler/İstanbul</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="experienceContentRight">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        <p>I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className="skillset">
                    <div className="skillsetTop">
                        <div className="skillsetTopHeader">Professional Skillset</div>
                        <div className="skillsetTopList">
                            <ul className="fas-ul">
                                <li className="skillsetTopListItem"><i class="fas-li fas fa-square"></i>Entrepreneurial Mindset</li>
                                <li className="skillsetTopListItem"><i class="fas-li fas fa-square"></i>Teamwork and Collaboration</li>
                                <li className="skillsetTopListItem"><i class="fas-li fas fa-square"></i>Go-to-Market Planning</li>
                                <li className="skillsetTopListItem"><i class="fas-li fas fa-square"></i>Digital Analytics</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skillsetBottom">
                        <div className="skillsetBottomHeader">Languages</div>
                        <div className="skillsetBottomList">
                            <ul className="fas-ul">
                                <li className="skillsetBottomListItem"><i class="fas-li fas fa-square"></i>Turkish (native)</li>
                                <li className="skillsetBottomListItem"><i class="fas-li fas fa-square"></i>English (proficient)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="resumeRight"></div>
        </div>
    )
}
