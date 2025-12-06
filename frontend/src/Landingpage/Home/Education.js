export default function Education(){
    return(
        <div className="container p-5">
            <div className="row p-3">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="EducationImage" style={{width:"80%"}}/>
                </div>


                <div className="col-6">
                    <h2>Free and open market education</h2>
                    <br></br>
                    <p>
                        Varsity, the largest online stock market 
                        education book in the world covering everything from 
                        the basics to advanced trading.
                    </p>
                    <a href="w" style={{textDecoration:"none"}}>Varsity<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <br></br>
                    <br></br>
                    <p>
                        TradingQ&A, the most active trading and 
                        investment community in India for all your
                        market related queries.
                    </p>
                    <a href="w" style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}