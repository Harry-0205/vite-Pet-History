const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/";

export const crearReporte = async (data) => {
    const resp = await fetch(`${BASE_URL}api/report/crearpro`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!resp.ok) throw new Error('Error al crear reporte');
    return resp.json();
}

    export const obtenerReportesid = async (id) => {
        
            const resp = await fetch(`${BASE_URL}api/prohiscli/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (!resp.ok) throw new Error('Error al obtener reportes');
            return await resp.json();
        };