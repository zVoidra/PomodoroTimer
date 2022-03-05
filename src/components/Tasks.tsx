
import { useEffect, useLayoutEffect, useRef, useState } from 'react'


interface ITask {
    id: number,
    Title: string,
    Description: string,
    isTaskDone: boolean
}

export default function Tasks() {

    const [ tasklist, setTasklist ]:any = useState([])

    const tasklistCount = useRef(0)

    function AddTask() {
        if (tasklist.length >= 3) {
            return
        }

        setTasklist([
            ...tasklist,
            {
                id: tasklistCount.current,
                Title: "",
                Description: "",
                isTaskDone: false
            }
        ])
        tasklistCount.current = tasklistCount.current + 1
    }

    function DeleteTask(id:any)  {
        const newTasklist = tasklist.filter((item:any) => item.id !== id)
        setTasklist(newTasklist)
    }

    function SaveTask(id:number, inTask:any) {
        let taskindex = tasklist.findIndex((item:any) => item.id === id);

        tasklist[taskindex] = inTask
        setTasklist(tasklist)
    }

    return(
        <div className="bg-yellow-600 ml-[5%] px-4 flex flex-col items-center rounded-[1em] shadow-2xl
        max-h-[90%] w-[20%] max-w-max">
            <span className='text-[3em]'>Tasks</span>
            
            <div className="flex flex-col gap-5 h-full w-full">
                {tasklist.map((task:any) => {
                    if(task !== undefined || null) {
                        return <TaskContainer key={Math.random()} 
                        id={task.id} 
                        title={task.Title} 
                        description={task.Description} 
                        istaskdone={task.isTaskDone}
                        deletetask={DeleteTask}
                        savetask={SaveTask}
                        />
                    }
                })}
            

            <button className='border-2 p-2 self-center mb-5'
            onClick={() => { AddTask() }}>Add Task</button>
            </div>
        </div>
    )
}

import iconDelete from '../public/iconDelete.svg'

const TaskContainer = (props:any) => {

    const [ task, setTask ] = useState({
        id: props.id,
        Title: props.title,
        Description: props.description,
        isTaskDone: props.istaskdone
    })

    function handleInput (event:any) {
        setTask({
            ...task,
            [event.target.name] : event.target.value
        }) 
    }

    function notTaskDone() {
        setTask({
            ...task,
            isTaskDone: !task.isTaskDone
        })
    }

    useEffect(() => {
        props.savetask(task.id, task)    
    }, [task])

    return(
        <div className="flex flex-col font-sans border-2 rounded-[1em] h-[25%] w-full">
            
            <div className="flex flex-row rounded-t-[1em] shadow-2xl h-12">
                <button className={`${task.isTaskDone ? "taskdone" : "tasknotdone"}`}
                    onClick={() => { notTaskDone()}}>
                </button>

                <textarea className="taskTextArea text-[1em] text-center flex-grow w-6 h-full"
                    placeholder={ "Insert a Title" }
                    value={task.Title}
                    onChange={ (e) => { handleInput(e)} }
                    name= "Title"
                />
                
                <button className="taskbtn"
                onClick={() => {props.deletetask(task.id)}}>
                    <img src={iconDelete}/>
                </button>
            </div>


            <textarea className="taskTextArea px-1 py-2 rounded-b-[1em] h-full "
                placeholder={ "Insert a Description"}
                value={task.Description}
                onChange={ (e) => { handleInput(e) } }
                name="Description" 
                />
                
        </div>
    )
}

