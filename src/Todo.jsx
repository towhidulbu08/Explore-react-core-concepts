//  export default function Todo({task,isDone}){
//     return(
//         <li> Task:{task} {isDone}</li>
//     )
// }
// conditional rendering :option-01
//  export default function Todo({task,isDone}){
//     if(isDone==true){
//         return(
//             <li> Finished: Task:{task} </li>
//         )
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

//conditional rendering: optional-02
// export default function Todo({task,isDone}){
//     if(isDone){
//         return(
//             <li> Finish: Task:{task} </li>
//         )
//     }

//         return <li>Work on: {task}</li>

// }

// // conditional rendering: option-03(ternary operator)
// export default function Todo({ task, isDone }) {
//     return <li>{isDone ? 'Finished':'Work on'}: {task}</li>;
// }

// conditional rendering: option-04: &&
// export default function Todo({task,isDone}){
//         return(
//             <li> {task} {isDone && ': Done'} </li>
//         )
//     }

//conditional rendering: option-05: ||
// export default function Todo({task,isDone}){
//     return(
//         <li> {task} {isDone || ': do complete'} </li>
//     )
// }

// conditional rendering: option-06
export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
       
           listItem= <li> Finish: Task:{task} </li>
       
    }
    else{
       listItem= <li>Work on: {task}</li>
    }
    return listItem;
       

}
