export default function Accountopening() {
    return (
        <div className="container p-5">
            <div className="p-4">
                <h2 className="fs-4 text-muted" style={{ marginLeft: "10px" }}>Charges for account opening</h2>
                
                <img src="media/images/Account opening.png" alt="Accountopen" style={{ width: "100%", marginLeft: "10px" }} />
            </div>

            <div className="p-5" style={{marginTop:"30px"}}>
                <h2 className="fs-4 text-muted">Demat AMC (Annual Maintenance Charge)</h2>
                
                <img src="media/images/AMC.png" alt="Accountopen" style={{ width: "100%" }} />
            </div>


            <div className="p-5 text-muted" style={{marginTop:"30px"}}>
                <h2 className="fs-4">Charges for optional value added services</h2>
                
                <img src="media/images/Addservie.png" alt="Accountopen" style={{ width: "100%" }} />
            </div>
        </div>
    )
}