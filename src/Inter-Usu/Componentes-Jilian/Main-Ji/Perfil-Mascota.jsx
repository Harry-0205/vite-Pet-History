import { useEffect, useState } from "react";
import {obtenerMascotas, obtenerRazas, obtenerColores, obtenerEspecies,crearMascota } from '../../../api/mascotasApi';



const PerfilMascota = () => {


    useEffect(() => {
        obtenerMascotas()
            .then(data => setMascotas(data))
            .catch((error) => console.error("Error al cargar mascotas:", error));
    }, []);

    const handleCrearMascota = async (e) => {
        e.preventDefault();
        try {
            await crearMascota(formData);
            alert(" Mascota creada exitosamente");
            const obtenerMasc = await obtenerMascotas();
            setMascotas(obtenerMasc);
            setFormData({ nom: "", fecNam: "", foto: "", idColor: "", usuarioDoc: "", idRaza: "" });
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert(" Error al crear la mascota");
        }
    };

    const [raza, setRazas] = useState([]);
    const [colore, setColores] = useState([]);
    const [especie, setEspecies] = useState([]);
    const [mascotas, setMascotas] = useState([]);

    const [formData, setFormData] = useState({
    nom: "",
    fecNam: "",
    foto: "",
    idColor: "",
    usuarioDoc: "",
    idRaza: "",
    foto: null
});

useEffect(() => {
    const cargarDatos = async () => {
        try {
            const razaData = await obtenerRazas();
            const coloreData = await obtenerColores();
            const especieData = await obtenerEspecies();;
            setRazas(razaData);
            setColores(coloreData);
            setEspecies(especieData);
        } catch (error) {
            console.error("Error al cargar razas:", error);
        }
    };
    cargarDatos();
}, []);



const handleChange = (e) => {
  const { name, value, files } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: files ? files[0] : value,
  }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nom || !formData.fecNam || !formData.foto || !formData.idColor || !formData.usuarioDoc || !formData.idRaza) {
    alert("Por favor completa los campos obligatorios");
    return;
}
    setMascotas([...mascotas, { ...formData, id: Date.now() }]);
    setFormData({ nom: "", fecNam: "", foto: "", idColor: "", usuarioDoc: "", idRaza: "" });
};

const eliminarMascota = (id) => {
    setMascotas(mascotas.filter((m) => m.idMasc !== idMasc));
};

return (
    <div className="pantalla-completa">
    <div className="mascotas-container">
        <h2>Gestión de Mascotas</h2>
        <form onSubmit={handleCrearMascota} className="form-mascota">
        <input type="text" name="nom" placeholder="Nombre de la mascota" value={formData.nom} onChange={handleChange} required />
        <select name="especie"  onChange={handleChange} required>
            <option value="">Selecciona especie</option>
            {especie.map((espe) => (
            <option key={espe.idEspecie} value={espe.idEspecie}>{espe.nomEspecie}</option>
            ))}
        </select>
        <select name="idRaza" value={formData.idRaza} onChange={handleChange} required disabled={!formData.especie}>
            <option value="">Selecciona raza</option>
            {raza.map((raz) => (
            <option key={raz.idRaza} value={raz.idRaza}>{raz.nomRaza}</option>
            ))}
        </select>
    <input type="date" name="fecNam" placeholder="Fecha de Nacimiento" value={formData.fecNam} onChange={handleChange} required />
        <select name="idColor" value={formData.idColor} onChange={handleChange} required disabled={!formData.especie}>
            <option value="">Selecciona color</option>
            {colore.map((col) => (
            <option key={col.idColor} value={col.idColor}>{col.nomColor}</option>
            ))}
        </select>
    <input type="number" name="usuarioDoc" placeholder="Documento del usuario" value={formData.usuarioDoc} onChange={handleChange} required />
    <button type="submit" >Agregar Mascota</button>
        </form>
        <div className="lista-mascotas">
        {mascotas.length === 0 ? (
            <p>No hay mascotas registradas</p>
        ) : (
            mascotas.map((  m) => (
            <div key={m.idMasc} className="mascota-card">
                <h3>{m.nom}</h3>
                <p><strong>Raza:</strong> {m.nomRaza}</p>
                <p><strong>Edad:</strong> {m.fecNam}</p>
                {m.vacunas && <p><strong>Vacunas:</strong> {m.vacunas}</p>}
                <button onClick={m.estad}>Eliminar</button>
            </div>
))
)}
        </div>
    </div>
    </div>
);
};

export default PerfilMascota;
