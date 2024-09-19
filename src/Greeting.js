import React from 'react' 
function Greeting(props) {
    return(
       <><h1>{props.name}</h1>
       <h2> {props.Age}</h2>
       <h3> {props.Description}</h3>
       <h4>{props.Location}</h4>
       </>
       
    );
}
    export default Greeting;