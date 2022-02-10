import React from 'react';

import './App.css';

function App() {
  const name: string = 'Prudhvi';
  const age: number = 25;
  const isMarried: boolean = false;

  const getAge = (name:string):number =>{
    if (name==='prudhvi'){
      return 25
  }else{
    return 0
  }
}

  return (
    <div className="App">
      <p> {name} is {age} years old and {isMarried ? 'married' : 'not married'}</p>
    </div>
  );
}

export default App;
