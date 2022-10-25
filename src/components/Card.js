

function Card(props) {
    return(
        
                <div className="card">
                    <img src={`img/${props.img}`} className="card-img" alt="Katie Bach" />
                    <div className="class-stat">
                        <img src="img/star-icon.jpg" alt="star-icon" className="star-icon" />
                        <span className="grey">{props.rating}</span>
                        <span className="grey">({props.reviewCount}) *</span>
                        <span className="grey">{props.country}</span>
                    </div>
                    <p>{props.title}</p>
                    <p><span className="bold">from ${props.price}</span> / person</p>
                </div>
           
    )
}

export default Card