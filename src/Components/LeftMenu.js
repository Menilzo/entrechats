/* Composant sous forme de fonction */
function LeftMenu(props){

    const leftMenuLinks = ['Mes informations', 'Mon historique de garde', 'Mes informations de paiement', 'Mes favoris', 'Mes avoirs', 'Se déconnecter', 'Supprimer mon compte']

    return (
        <div className="left-menu">
            <ul>
                {leftMenuLinks.map((link, index)=>{
                    return <li key={index}>{link}</li>
                })}
            </ul>
        </div>
    )
}

export default LeftMenu