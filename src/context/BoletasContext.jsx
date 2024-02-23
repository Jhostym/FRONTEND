import { createContext, useContext, useState } from "react";

import { createBoletasRequest, getBoletasRequest } from "../api/Boletas";

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

  const createBoletas = async (boletas) => {
    const res = await createBoletasRequest(boletas);
    console.log(res)
  }

  return (
    <BoletaContext.Provider value={{
      boletas,
      createBoletas,
      getBoletas,
    }}>
      {children}
    </BoletaContext.Provider>
  );
}

