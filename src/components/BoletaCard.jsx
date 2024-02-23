import { useBoleta } from "../context/BoletasContext"

function BoletaCard({ boleta }) {

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl-font-bold">{boleta.dni}</h1>
      </header>
      <p className="text-slate-300">{boleta.mes}</p>
    </div>
  )
}

export default BoletaCard