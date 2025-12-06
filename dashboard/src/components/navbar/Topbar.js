import Menu from "./Menu";

export default function Topbar() {
    return (
        <div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p>NIFTY 50</p>
                    <span></span>
                    <p>100.2</p>
                </div>

                <div className="sensex">
                    <p>SENSEX</p>
                    <span></span>
                    <p>100.2</p>
                </div>
            </div>

            <Menu />

        </div>
    )
}
