/* Composant sous forme de fonction */
function CardSitter(props){

    return (
        <div className="card">
                {/* Image à la une */}
                <div className="card-image">
                    <img src={require(`../assets/images/${props.msg.path}`)} alt="Orange" />
                </div>
                {/* Corps de notre carte */}
                <div className="card-body">
                    {/* Titre de la carte */}
                    <div className="card-title">
                        <img className='iconUser' src={require('../assets/icons/user.png')} alt='user'/>
                        <h3>{props.msg.name}</h3>
                    </div>
                    <p>{props.msg.address}</p>
                    {/* Description de la carte*/}
                    <div className="card-excerpt">
                        <p>{props.msg.description}</p>
                    </div>
                    <div>
                        <img className='iconFav' src={require(`../assets/icons/fav.png`)} alt='patoune'/>
                        <img className='iconPatoune' src={require(`../assets/icons/patoune.png`)} alt='patoune'/>
                    </div>
                </div>
        </div>
    )
}

export default CardSitter