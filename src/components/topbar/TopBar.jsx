import { Link } from "react-router-dom"
import "./topbar.css"

export default function Topbar() {
    return(
        <div className="top" >
            <div className="topLeft">
                <ul className="topText">
                    <li className="square"></li>
                    <li className="topName">Melih Dizdar</li>
                    <li className="topTitle">/ WEB DEVELOPER</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/">ABOUT ME</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/resume">RESUME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/projects">PROJECTS</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}