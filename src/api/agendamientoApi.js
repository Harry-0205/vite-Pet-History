const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const crearAgendamiento = async (agen) =>{
    try{
        const response = await fetch(`${BASE_URL}/agendamientos/Crear`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(agen),
        });
        if (!response.ok) throw new Error("Error al crear el agendamiento");
        return await response.json();
    }catch(error){
        console.error(error);
        throw error;
    }
};

export const obtenerCitas = async () => {
    try{
        const response = await fetch(`${BASE_URL}/agendamientos/Listar`);
        if(!response.ok)throw new Error("Error al obtener lista de citas");
        return await response.json();
    }catch(error){
        console.error(error);
        throw error;
    }
};

export const obtenerProcedimientos = async () => {
    try{
        const response = await fetch(`${BASE_URL}/procedimientos`);
        if(!response.ok)throw new Error("Error al obtener lista de procedimientos");
        return await response.json();
    }catch(error){
        console.error(error);
        throw error;
    }
}