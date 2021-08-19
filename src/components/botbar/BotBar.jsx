import "./botbar.css"

export default function BotBar() {
    return (
        <div className="bot">
            <div className="botLeft">
                <ul className="botLeftText">
                    <li className="botLeftText">© 2023 by Melih Dizdar.</li>
                    <li className="botLeftText">Proudly created with melkorsoftware</li>
                </ul>
            </div>
            <div className="botRight">
                <ul className="botList">
                    <li className="botListItemHeader">Call</li>
                    <li className="botListItemText">+90-533-143-82-93</li>
                </ul>
            </div>
            <div className="botRight">
                <ul className="botList">
                    <li className="botListItemHeader">Write</li>
                    <li className="botListItemText">melihdizdar99@gmail.com</li>
                </ul>
            </div>
            <div className="botRight">
                <ul className="botList">
                    <li className="botListItemIconHeader">Follow</li>
                    <li className="botListItemIcon">
                        <a href="https://www.facebook.com/melihdizdarr/"><i class="fab fa-facebook-f" title="Facebook"></i></a>
                        <a href="https://www.instagram.com/melihdizdarr/"><i class="fab fa-instagram" title="Instagram"></i></a>
                        <a href="https://twitter.com/benmelko"><i class="fab fa-twitter" title="Twitter"></i></a>
                        <a href="https://www.linkedin.com/in/melihdizdar/"><i class="fab fa-linkedin-in" title="Linkedin"></i></a>
                        <a href="https://github.com/melihdizdar"><i class="fab fa-github" title="Github"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
