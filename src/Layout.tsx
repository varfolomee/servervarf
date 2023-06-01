import { Container, Navbar, Nav, Row, Col } from "react-bootstrap"
import { LeftMenu } from "./components/LeftMenu/LeftMenu"
import { NavLink, Outlet } from "react-router-dom"

/** Шаблон. */
export const Layout = () => {
    return (
        <>
            <Navbar bg="warning" variant="warning">
                <Container>
                <Navbar.Brand>
                        BRACCIALINI
                    </Navbar.Brand>
                    <Navbar.Brand>
                        мир сумок
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to={'/'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Главная страница
                        </NavLink>
                        <NavLink to={'products'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            Каталог
                        </NavLink>
                        <NavLink to={'about'} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                            О нас
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row style={{ marginTop: '10px'}}>
                    <Col sm={2} md={2} lg={2}>
                        <LeftMenu />
                    </Col>
                    <Col sm={10} md={10} lg={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    );
};