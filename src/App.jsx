/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {
  const actors=['Sakib','Soriful Raj','Jasim','Rubel','Salman Shah']

  const singers=[
    {id:1,name: 'Dr Mahfuz',  age:68},
    {id:2,name: 'Eva Rahman', age:38},
    {id:3,name: 'Shuvro Dev', age:58},
    {id:4,name: 'Pritom',     age:28},
  ]
  return (
    <>
      <h3>Vite + React</h3>
      {
        singers.map(singer=> <Singers key={singer.id} singer={singer}></Singers>)
      }
      
      <Actor name={'Bappa Raz'}></Actor>
      {
        actors.map((actor,idx)=> <Actor key={idx} name={actor}></Actor>)
      }
      <Todo 
        task="learn react" 
        isDone={true}>
     </Todo>
      <Todo 
        task="Explore Core Concepts" 
        isDone={false}>
     </Todo>
      <Todo 
        task="Try JSX"
        isDone={true}>
     </Todo>
      <Device name="laptop" price="505505"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="27000"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="80"></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  );
}

function Device(props) {
  return (
    <h2>
      This device:{props.name} price:{props.price}
    </h2>
  );
}
function Person() {
  const age = 23;
  const money = 20;
  const person = { name: "sakib", age: 23 };
  return (
    <h2>
      I am {person.name} with age {age + money}
    </h2>
  );
}
const { grade, score } = { grade: 7, score: 99 };
function Student({ grade = 3, score = 78 }) {
  console.log(grade, score);

  return (
    <div className="student">
      <h3>This is a student </h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    color: "",
    margin: "20px",
    padding: "20px",
    border: "2px solid tomato",
    borderRadius: "10px",
  };
  return (
    <div
      style={{
        color: "",
        margin: "20px",
        padding: "20px",
        border: "2px solid tomato",
        borderRadius: "10px",
      }}
    >
      <h5>Developer</h5>
      <p>Coding</p>
    </div>
  );
}
export default App;
