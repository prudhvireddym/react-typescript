import React,{FC} from 'react';

import './App.css';
import { PersonDetails } from './components/Person';

//Function Component is defined using the FC keyword
const App: FC = ()=> {
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
      <PersonDetails name='Prudhvi' age={20} email={'prudhviemail@gmail.com'} />
    </div>
  );
}

export default App;
