import {FC, ChangeEvent,useState} from 'react'

//enum
//declar enum with diffrent hair colours
export enum HairColour{
    Black = 'Your hair is black looks great',
    Blonde = 'Your hair is blonde looks great',
    Brown= 'Your hair is brown looks great',
    Red = 'Your hair is red looks great',

    }

//declaring the types of props in a component
interface PersonProps {
    name: string; //name?:string; - Use ? if a props is optional
    age: number;
    email: string;
    hairColour?: HairColour;
}

//declaring the type of props as a function argument
export const Person1 =(props: PersonProps)=>{

    //type in typescript used when a varible only accepts few varibales
    type marriedType = "married" | "not married";
    const married:marriedType = "married";

    //Declaring types for useState in Typescript
    const [country,setCountry] = useState<string | null>('');

    //declaring the type of event in typescript
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
            <h1>{props.hairColour}</h1>
            <input placeholder='Write down your country' onChange={handleChange}></input>
            <h1>{country}</h1>

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