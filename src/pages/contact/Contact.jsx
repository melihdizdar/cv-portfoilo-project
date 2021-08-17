import "./contact.css"
import { Button, Form } from "react-bootstrap"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contactLeft"></div>
            <div className="contactCenter">
                <div className="contactHeader">
                    <div className="contactHeaderContent">
                        <ul className="contactTitleList">
                            <li className="square"></li>
                            <li className="contactTitle">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="contactFormStage">
                    <div className="contactForm">
                        <Form>
                            <Form.Group className="mb-3" controlId="nameControl">
                                <Form.Label>First Name*</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" />
                                <Form.Label>Last Name*</Form.Label>
                                <Form.Control type="surname" placeholder="Enter Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="emailControl">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="subjectControl">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="Subject" placeholder="Enter Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="messageControl">
                                <Form.Label>Message</Form.Label>
                                <Form.Control type="Message" placeholder="Enter Message" />
                            </Form.Group>
                            <Button variant="primary" type="send">Send</Button>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="contactRight"></div>
        </div>
    )
}
