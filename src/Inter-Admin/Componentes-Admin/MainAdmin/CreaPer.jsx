import FooterMi from "../../../home/Componentes-Miguel/FooterMi/FooterMi";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin"

function CreaPer () {
    return(
     
        <div className="InfoAdm">
            <h2>Formulario de Creación de Perfil Profesional - Administrador</h2>
                <form >
                    <label for="nombre">Nombre completo:</label><br />
                    <input type="text" id="nombre" name="nombre" required/><br></br>

                    <label for="cedula">Cédula:</label><br/>
                    <input type="text" id="cedula" name="cedula" required/><br></br>

                    <label for="correo">Correo electrónico:</label><br/>
                    <input type="email" id="correo" name="correo" required/><br></br>

                    <label for="telefono">Teléfono de contacto:</label><br/>
                    <input type="tel" id="telefono" name="telefono" required/><br></br>

                    <label for="cargo">Cargo actual:</label><br/>
                    <input type="text" id="cargo" name="cargo" value="Administrador" readonly/><br></br>

                    <label for="experiencia">Años de experiencia:</label><br/>
                    <input type="number" id="experiencia" name="experiencia" min="0" required/><br></br>

                    <label for="habilidades">Habilidades (separadas por comas):</label><br/>
                    <textarea id="habilidades" name="habilidades" rows="4" placeholder="Liderazgo, gestión de equipos, análisis de datos, etc." required></textarea><br></br>

                    <label for="descripcion">Descripción profesional:</label><br />
                    <textarea id="descripcion" name="descripcion" rows="5" placeholder="Describe tu perfil profesional..." required></textarea><br></br>

                    <button type="submit">Crear Perfil</button>
                </form>
        </div>
       
  );
};

export default CreaPer