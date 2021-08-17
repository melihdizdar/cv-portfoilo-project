import "./contact.css"
import { Button, Form } from "react-bootstrap"
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_7kl5yll', 'template_xe3rt8j', e.target, 'user_Rks5kb5pOEODsYxIyO3Og')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

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
                        <div className="contactFormLeft"></div>
                        <div className="contactFormCenter">
                            <Form onSubmit={sendEmail}>
                                <div className="namegroup">
                                    <Form.Group className="nameClass" controlId="nameControl">
                                        <Form.Label>First Name*</Form.Label>
                                        <Form.Control type="text" name="name"/>
                                    </Form.Group>
                                    <div className="namegroupCenter"></div>
                                    <Form.Group className="surnameClass" controlId="surnameControl">
                                        <Form.Label>Last Name*</Form.Label>
                                        <Form.Control type="text" name="surname"/>
                                    </Form.Group>
                                </div>
                                <br/>
                                <Form.Group className="emailClass" controlId="emailControl">
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="text" name="email"/>
                                </Form.Group>
                                <br/>
                                <Form.Group className="subjectClass" controlId="subjectControl">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" name="subject"/>
                                </Form.Group>
                                <br/>
                                <Form.Group className="messageClass" controlId="messageControl">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3}  name="message" className="textareaClass"/>
                                </Form.Group>
                                <br/>
                                <Button type="submit" className="button">Send</Button>
                            </Form>
                        </div>
                        <div className="contactFormRight"></div>
                    </div>
                </div>
            </div>
            <div className="contactRight"></div>
        </div>
    )
}
