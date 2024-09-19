import './App.css';
import Greeting from './Greeting';

function App() {
  return (
    <div>
   <div className="ProfileCard">
    <style>
    
    </style>
    <Greeting name=" Name: John Phoenix"  
    Age = "Age: 30" 
    Description="About me:  Aspiring Software Engineer" 
    Location=" Location: Los Angeles" 
    />

    </div>

    <div className='ProfileCard2'>
    <Greeting name=" Name: John Phoenix" 
    Age = "Age: 30" 
    Description="About me:  Aspiring Software Engineer" 
    Location=" Location: Los Angeles" 
    />

    </div>

    <div className='ProfileCard3'>
    <Greeting name=" Name: Reyna Cruz" 
    Age="Age: 30" 
    Description="About me:  Aspiring Web Designer" 
    Location=" Location: San Francisco"  
    />

    </div>
    
    </div>
  );
};

export default App;