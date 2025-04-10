import Dropdown from 'react-bootstrap/Dropdown';

function Peboton() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="Pe" variant="secondary" id="dropdown-basic">
        Perfil
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Configuracion de perfil</Dropdown.Item>
        <Dropdown.Item href="#/action-2"></Dropdown.Item>
        <Dropdown.Item href="#/action-3"></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Peboton;