import { useForm } from 'react-hook-form'
import { useTask } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';


function TaskFormPage() {

  const { register, handleSubmit } = useForm()
  const { createTask } = useTask()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    navigate('/boletas')
  })
  
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-mb my-2'
            autoFocus
          />
          <label htmlFor="description">description</label>
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-mb my-2'
          ></textarea>
          <label htmlFor="date">Date</label>
          <input
            type="date" name="date"
            {...register("date")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-mb my-2'
          />
          <button className='bg-indigo-500 px-3 py-2 rounded-md'>Save</button>
        </form>
      </div>
    </div>
  )
}
export default TaskFormPage