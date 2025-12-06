export default function Hero(){
    return(
        <div className="container">
            <div className="row text-center mt-5 p-5">
                <h2>Charges</h2>
                <br></br>
                <h3 className="mt-1 text-muted fs-5" style={{fontWeight:"normal"}}>List of all charges and taxes</h3>
            </div>

            <div className="row m-5 p-5">
                <div className="col-4 p-5">
                     <img src="media/images/pricing0.svg" alt="TradeImage"/>
                    <h3 className="text-center fs-4">Free equity delivery</h3>
                    <br></br>
                    <p className="text-center">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" alt="TradeImage"/>
                    <h3 className="text-center fs-4">Intraday and F&O trades</h3>
                    <br></br>
                    <p className="text-center">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                     <img src="media/images/pricing0.svg" alt="TradeImage"/>
                    <h3 className="text-center fs-4">Free direct MF</h3>
                    <br></br>
                    <p className="text-center">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}