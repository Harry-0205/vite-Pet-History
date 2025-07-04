function CreaPer () {
      const [formulario, setFormulario] = useState({
    nombre: '',
    cedula: '',
    correo: '',
    telefono: '',
    experiencia: '',
    habilidades: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del perfil:', formulario);
    // Aquí puedes enviar los datos a un backend con fetch o axios
  };

  return (
    <div>
      <h2>Formulario de Creación de Perfil Profesional - Administrador</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre completo:</label><br />
        <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} required /><br /><br />

        <label>Cédula:</label><br />
        <input type="text" name="cedula" value={formulario.cedula} onChange={handleChange} required /><br /><br />

        <label>Correo electrónico:</label><br />
        <input type="email" name="correo" value={formulario.correo} onChange={handleChange} required /><br /><br />

        <label>Teléfono de contacto:</label><br />
        <input type="tel" name="telefono" value={formulario.telefono} onChange={handleChange} required /><br /><br />

        <label>Cargo actual:</label><br />
        <input type="text" name="cargo" value="Administrador" readOnly /><br /><br />

        <label>Años de experiencia:</label><br />
        <input type="number" name="experiencia" value={formulario.experiencia} onChange={handleChange} required /><br /><br />

        <label>Habilidades (separadas por comas):</label><br />
        <textarea name="habilidades" rows="4" value={formulario.habilidades} onChange={handleChange} placeholder="Liderazgo, gestión de equipos, etc." required></textarea><br /><br />

        <label>Descripción profesional:</label><br />
        <textarea name="descripcion" rows="5" value={formulario.descripcion} onChange={handleChange} placeholder="Describe tu perfil profesional..." required></textarea><br /><br />

        <button type="submit">Crear Perfil</button>
      </form>
    </div>
  )
}

export default CreaPer