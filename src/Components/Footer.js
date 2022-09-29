import React from 'react';

export default function Footer(props){
    return(
        <footer className='footer'>
            <div className='footercategories'>
                <div>
                    <h2>Une question ?</h2>
                    <p>FAQ</p>
                    <p> Comment ça marche ?</p>
                    <p>Nous contacter</p>
                </div>
                <div>
                    <h2>A propos</h2>
                    <p>Entrechats</p>
                    <p>L'équipe</p>
                    <p>Nos garanties</p>
                </div>
                <div>
                    <h2>Devenir Pet-sitter</h2>
                    <p>Un métier pour moi ?</p>
                    <p> Comment s'inscrire</p>
                    <p>Les bonnes pratiques</p>
                </div>
                <div className='categoryNewsletter'>
                    <h2>Newsletter</h2>
                    <input placeholder='Nom Prénom' className='inputNewsletter'/>
                    <input placeholder='Adresse mail' className='inputNewsletter' />
                    <button className='btnNewsletter inputNewsletter'>S'inscrire</button>
                </div>
            </div>

            <div className='divlegalmentions'>
                <a href='#' className='legalmentions'>Mentions légales</a>
            </div>
        </footer>
    )
}