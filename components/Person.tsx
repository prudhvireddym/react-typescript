import {FC} from 'react'

//declaring the types of props in a component
interface PersonProps {
    name: string; //name?:string; - Use ? if a props is optional
    age: number;
    email: string;
}

//declaring the type of props as a function argument
export const Person1 =(props: PersonProps)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>

        </div>
    )
}

//Better way to do the above code is both the ways work

export const Person2: FC<PersonProps> = (props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>

        </div>
    )
}