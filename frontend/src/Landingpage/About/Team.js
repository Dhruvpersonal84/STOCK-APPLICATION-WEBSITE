export default function Team() {
    return (
        <div className="container p-5">
            <div className="row mt-5">
                <div className="col-6 p-5">
                    <img src="media/images/Personal image.jpg" alt="MyImage" style={{ width: "295px", height: "295px", marginLeft: "30%", border: "2px solid black", borderRadius: "100%" }} />
                    <h5 className="text-center" style={{ marginLeft: "100px", marginTop: "10px" }}>Dhruv Kumar</h5>
                    <h6 className="text-center" style={{ marginLeft: "100px" }}>Full Stack Developer</h6>
                </div>
                <div className="col-6 p-5 mr-5">
                    <p className=""style={{paddingRight:"100px",marginRight:"50px"}}>
                        I am a passionate Full-Stack Developer with experience in
                        building modern, user-friendly web applications.
                        I enjoy turning ideas into functional products and
                        constantly improving my skills in both frontend
                        and backend technologies.
                    </p>
                    <p className="" style={{paddingRight:"100px",marginRight:"50px"}}>
                        I come from a computer science background,
                        where I built a strong base in programming,
                        web development, and software engineering concepts.
                        My academic journey helped me gain practical exposure
                        through projects and hands-on assignments.
                    </p>
                    <p className=""style={{paddingRight:"100px",marginRight:"50px"}}>
                        One of my key projects is StockSphere,
                        a simple and efficient stock tracking
                        application. It provides real-time market
                        updates, clean data visualization, and an
                        intuitive interface—showcasing my ability
                        to integrate APIs, design smooth UIs, and
                        build end-to-end web solutions.
                    </p>
                </div>
            </div>
        </div>
    )
}