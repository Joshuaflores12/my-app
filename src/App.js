import './App.css';
import Greeting from './Greeting';

function App() {
  return (
   <div className="ProfileCard">
    <style>
    
    </style>
    <Greeting name=" Name: Joshua Gabriel L. Flores"/>
    <Greeting Age="Age: 21" />
    <Greeting Description="About me:  Aspiring Game Developer"/>
    <Greeting Location=" Location: Manila"/>

    <div className='ProfileCard2'>
    <Greeting name=" Name: John Phoenix"/>
    <Greeting Age="Age: 30" />
    <Greeting Description="About me:  Aspiring Software Engineer"/>
    <Greeting Location=" Location: Los Angeles"/>

    <div className='ProfileCard3'>
    <Greeting name=" Name: Reyna Cruz"/>
    <Greeting Age="Age: 30" />
    <Greeting Description="About me:  Aspiring Web Designer"/>
    <Greeting Location=" Location: San Francisco"/>
    </div>
    </div>
   </div>
  )
}

export default App;