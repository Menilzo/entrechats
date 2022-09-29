/* Composant sous forme de classe */
import React from 'react'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.date = new Date().toLocaleDateString()
        this.mlLink = 'https://fr.reactjs.org/'
    }
    // Methode render obligatoire
    render(){
        return (
            <div className='footer'>
                <ul>
                    <li>copyright</li>
                    <li>{ this.date }</li>
                    <li><a href={this.mlLink}>Mentions légales</a></li>
                </ul>
            </div>
        )
    }
}

export default Footer