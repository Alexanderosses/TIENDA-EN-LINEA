// BOOTSTRAP
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// OWN
import '../../app.css';
import {menuList} from '../../constvar.js'; 
import logo from '../../assets/logo-app.png';
import PropTypes from 'prop-types';

export const HeaderComp = ( {menuFrase} ) => {
    const frase = menuFrase && menuFrase.length > 0 ? menuFrase[0].item : '';

    return (
        <Container fluid className='g-0 fixed'>
            <Navbar.Brand className='headerLogo justify-content-center'>
                <Link to='/'>
                    <img src={logo} alt='Imagen Logo' className='logoHeader' />
                </Link>
                <div className='frase'>{frase}</div>
            </Navbar.Brand>

            <Navbar expand="lg" className="headerMenu">                
                <Navbar.Toggle aria-controls="basic-navbar-nav"> <strong className='menu-text'>MENÚ</strong> </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ">
                        {menuList.map((menu, index) => (
                        <Nav.Link as={Link} to={menu.url} key={index} className='menu'>
                            {menu.item}
                        </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

HeaderComp.propTypes = {
    menuFrase: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.string.isRequired,
        // Otros campos si los hay
      })
    ),
  };