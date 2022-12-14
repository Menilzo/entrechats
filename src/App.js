import './App.css';
import CardSitter from './Components/CardSitter';
import Footer from './Components/Footer'
import LeftMenu from './Components/LeftMenu';
import HeaderBand from './Components/HeaderBand.js';
import Navbar from './Components/Navbar.js';


function App() {

  const users = [
    {name: 'Audrey', address: '20 rue de l\'horloge | 75019 Paris', description: 'lorem blablablabla lfelzhaf efahzlkjhlfkh fkejzhkf', path: 'pet-sitter1.png'},
    {name: 'Ben', address: '24 rue des Félines | 87100 Limoges', description: 'lorem blablablabla lfelzhaf efahzlkjhlfkh fkejzhkf', path: 'pet-sitter2.png'},
    {name: 'Pauline', address: '12 avenue Jean Jaurès | 84162 Avignon', description: 'lorem blablablabla lfelzhaf efahzlkjhlfkh fkejzhkf', path: 'pet-sitter3.png'},
    {name: 'Lucas', address: '17 avenue Baudin | 59000 Lille', description: 'lorem blablablabla lfelzhaf efahzlkjhlfkh fkejzhkf', path: 'pet-sitter4.png'},
  ]

  return (
    <div className="App">

        <div className='main-container'>
            <HeaderBand />
            <Navbar/>
            <LeftMenu />
            <div className='petSitter-container'>
                {users.map((user,index)=>{
                    return <CardSitter key={index} msg={user}/>
                })}
            </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
