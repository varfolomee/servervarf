import { Nav } from 'react-bootstrap'

/** Компонент с отображением левого меню */
export const LeftMenu = () => {
    return (
        <>
            <h5>Каталог</h5>
            <Nav className="flex-column">
                <Nav.Link href="/products#womensbags">Женские сумки</Nav.Link>
                <Nav.Link href="/products#mensbags">Мужские сумки</Nav.Link>
                <Nav.Link href="/products#childrensbags">Детские сумки</Nav.Link>
            </Nav>
        </>
    );
};