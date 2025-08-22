function Idcard(props){
    return(
        <div>
            <div className="idcard">
                <div className="topimg">
                    <img className="image" src={props.logo} alt="" />
                </div>
                <div className="content">
                <h2>Praveenkumar</h2>
                <p>MERN DEVELOPER</p>
                </div>
                <div className="lowcontent">
                    <p>Id no:</p>
                    <p>Id no:</p>
                    <p>Id no:</p>
                </div>
            </div>
        </div>
    )
}

export default Idcard;