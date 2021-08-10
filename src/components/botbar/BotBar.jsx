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
                    <li className="botListItemText">123-456-789</li>
                </ul>
            </div>
            <div className="botRight">
                <ul className="botList">
                    <li className="botListItemHeader">Write</li>
                    <li className="botListItemText">info@melihdizdar.com</li>
                </ul>
            </div>
            <div className="botRight">
                <ul className="botList">
                    <li className="botListItemIconHeader">Follow</li>
                    <li className="botListItemIcon">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-instagram"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
