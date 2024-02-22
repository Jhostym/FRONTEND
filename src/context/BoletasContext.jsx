import { createContext, useContext, useState } from "react";

import { createBoletasRequest, getBoletasRequest, updateBoletasRequest } from "../api/Boletas";

const BoletaContext = createContext();

export const useBoleta = () => {
  const context = useContext(BoletaContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
}

export function BoletaProvider({ children }) {
  const [boletas, setBoletas] = useState([]);

  const getBoletas = async () => {
    try {
      const res = await getBoletasRequest();
      setBoletas(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const createBoletas = async (task) => {
    const res = await createBoletasRequest(task);
    console.log(res)
  }

  const updateTask = async (id, task) => {
    try {
      await updateBoletasRequest(id, task);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <BoletaContext.Provider value={{
      boletas,
      createBoletas,
      getBoletas,
      updateTask,
    }}>
      {children}
    </BoletaContext.Provider>
  );
}

