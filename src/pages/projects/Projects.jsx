import { Carousel } from "react-bootstrap"
import "./projects.css"

export default function Projects() {
    return (
        <div className="projects">
            <div className="projectsLeft"></div>
            <div className="projectsCenter">
                <Carousel>
                    <Carousel.Item as="html">
                        <img
                        className="slider"
                        src="https://i.hizliresim.com/pfh6p7g.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <p>You can click on me and browse my html projects.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item as="aspnet">
                        <img
                        className="slider"
                        src="https://i.hizliresim.com/en8fu7z.png"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <p>You can click on me and browse my asp.net projects.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item as="react">
                        <img
                        className="slider"
                        src="https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <p>You can click on me and browse my react projects.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="projectsRight"></div>
        </div>
    )
}
