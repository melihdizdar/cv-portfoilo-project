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
                    <li className="topListItem">ABOUT ME</li>
                    <li className="topListItem">RESUME</li>
                    <li className="topListItem">PROJECTS</li>
                    <li className="topListItem">CONTACT</li>
                </ul>
            </div>
        </div>
    )
}