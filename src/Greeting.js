import React from 'react' 
function Greeting(props) {
    return(
       <><h1>{props.name}{props.Age}{props.Description}{props.Location}</h1>
       </>
       
    );
}
    export default Greeting;