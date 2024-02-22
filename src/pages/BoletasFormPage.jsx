import { useForm } from 'react-hook-form'


//import { useTask } from '../context/TaskContext';
import { useBoleta } from '../context/BoletasContext'


import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)


function BoletasFormPage() {

  const { register, handleSubmit, setValue } = useForm()
  const { createBoletas, getBoletas, updateBoletas } = useBoleta()
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const loadBoleta = async () => {
      if (params.id) {
        const res = await getBoletas(params.id);
        const { dni, mes, año } = res.data;
        setValue('dni', dni);
        setValue('mes', mes);
        setValue('año', año);
      }
    };
    loadBoleta();

  }, []);

  const onSubmit = handleSubmit((data) => {

    if (params.id) {
      updateBoletas(params.id, data);
    } else {
      createBoletas(data);
      console.log(data)
    }
    navigate('/boletas')
  }
  );


  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <form onSubmit={onSubmit}>


          <label htmlFor="dni">dni</label>
          <input
            type="text"
            placeholder="dni"
            {...register("dni")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-mb my-2'
            autoFocus
          />


          <label htmlFor="mes">mes</label>
          <input
            rows="3"
            placeholder="mes"
            {...register("mes")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-mb my-2'
          />


          <label htmlFor="año">año</label>
          <input
            type="año" name="año"
            {...register("año")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-mb my-2'
          />

          <label htmlFor="image">image</label>
          <input
            type="file" name="image"
            {...register("image")}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-mb my-2'
          />

          <button className='bg-indigo-500 px-3 py-2 rounded-md'>Save</button>
        </form>
      </div>
    </div>
  )
}
export default BoletasFormPage