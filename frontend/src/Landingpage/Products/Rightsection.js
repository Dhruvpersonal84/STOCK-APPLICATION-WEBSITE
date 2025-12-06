/*export default function Rightsection({Heading, paragraph, Images}){
    return(
        <div className="container" style={{paddingLeft:"90px",marginTop:"25px"}}>
            <div className="row">
                <div className="col-6" style={{marginTop:"200px",paddingLeft:"150px"}}>
                    <h3 className="fs-3 text-muted" style={{fontWeight:"400"}}>{Heading}</h3>
                    <br></br>
                    <p style={{fontSize:"large",paddingRight:"95px"}}>{paragraph}</p>
                </div>
                <div className="col-6">
                    <img src={Images} alt="Product" style={{paddingRight:"125px",marginRight:"70px"}}/>
                </div>
            </div>
        </div>
    )
}*/

export default function Rightsection({Heading, paragraph, Images}){
    return(
        <div className="container" style={{marginTop:"40px",marginRight:"500px"}}>
            <div className="row" style={{marginTop:"70px"}}>
                <div className="col-6"style={{marginTop:"100px",paddingTop:"100px",paddingLeft:"200px",paddingRight:"100px"}}>
                    <h3 className="fs-3 text-muted" style={{fontWeight:"400"}}>{Heading}</h3>
                    <br></br>
                    <p style={{fontSize:"large"}}>{paragraph}</p>
                </div>
                <div className="col-6">
                    <img className="" src={Images} alt="Product"/>
                </div>
            </div>
        </div>
    )
}