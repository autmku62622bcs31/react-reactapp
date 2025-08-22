function Cards(props){
    return(
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">Id card</h5>
    <p className="card-text">Employee id</p>
    <p>Name  : {props.name}</p>
    <p>DOB  : {props.dob}</p>
    <p>Email  : {props.email}</p>
    <p>Roll  : {props.roll}</p>
  </div>
</div>
    )
}

export default Cards;