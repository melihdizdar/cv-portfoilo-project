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
                    <li className="botListItemHeader">Write</li>
                    <li className="botListItemHeader">Follow</li>
                </ul>
                <ul className="botList">
                    <li className="botListItemText">123-456-7890</li>
                    <li className="botListItemText">info@melihdizdar.com</li>
                    <li className="botListItemText">Social Media Icons</li>
                </ul>
            </div>
        </div>
    )
}
