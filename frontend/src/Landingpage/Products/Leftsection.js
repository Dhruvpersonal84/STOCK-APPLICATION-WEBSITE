export default function Leftsection({Images,Heading,paragraph}){
    return(
        <div className="container" style={{paddingLeft:"90px"}}>
            <div className="row">
                <div className="col-6 p-5">
                    <img src={Images} alt="Product" style={{}}/>
                </div>
                <div className="col-6" style={{marginTop:"100px",paddingLeft:"150px"}}>
                    <h3 className="fs-3 text-muted" style={{fontWeight:"400"}}>{Heading}</h3>
                    <br></br>
                    <p style={{fontSize:"large",paddingRight:"95px"}}>{paragraph}</p>
                    <img src="media/images/googlePlayBadge.svg" alt="appImage"/>
                    <span></span>
                    <img style={{marginLeft:"30px"}} src="media/images/appstoreBadge.svg" alt="appImage"/>
                </div>
            </div>
        </div>
    )
}