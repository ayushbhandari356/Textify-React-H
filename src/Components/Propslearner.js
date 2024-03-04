// this is made only for learning props as obj


import React from 'react';



function MyComponent(props) {
  // You can access props as usual
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}


export default MyComponent
