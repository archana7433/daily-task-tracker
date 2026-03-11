import React, { useState } from "react";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    if(task==="") return;

    setTasks([...tasks, task]);
    setTask("");

  };

  const deleteTask = (index) => {

    const newTasks = tasks.filter((t,i)=> i !== index);
    setTasks(newTasks);

  };

  return (

    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      background:"#e6f2ff"
    }}>

      <div style={{
        background:"white",
        padding:"30px",
        borderRadius:"10px",
        width:"400px",
        boxShadow:"0px 0px 10px gray"
      }}>

        <h2 style={{textAlign:"center"}}>My Daily Task Tracker</h2>

        <input
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          placeholder="Enter your task"
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"10px"
          }}
        />

        <button
          onClick={addTask}
          style={{
            width:"100%",
            padding:"10px",
            background:"blue",
            color:"white",
            border:"none"
          }}
        >
        Add Task
        </button>

        <ul>

        {tasks.map((t,i)=>(
          <li key={i} style={{marginTop:"10px"}}>

            {t}

            <button
            onClick={()=>deleteTask(i)}
            style={{marginLeft:"10px",color:"red"}}
            >
            Delete
            </button>

          </li>
        ))}

        </ul>

      </div>

    </div>

  );

}

export default App;