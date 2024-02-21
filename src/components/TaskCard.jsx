import { useTask } from "../context/TaskContext"
import {Link} from "react-router-dom"
import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)


function TaskCard({ task }) {

  const {deleteTask} = useTask()


  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl-font-bold">{task.title}</h1>
        <div className="flex gap-2 items-center">
          <button onClick={()=> {
            deleteTask(task._id)
          }}>delete</button>
          <Link to={`/tasks/${task._id}`}>edit</Link>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      <p>
        {dayjs(task.date).utc().format("DD/MM/YYYY")}
      </p>
    </div>
  )
}

export default TaskCard