import './HomePage.css'
import { Categories } from '../../components/Categories/Categories'
import { womensbags, mensbags, childrensbags } from '../../orders'

/** Главная страница. */
export const HomePage = () => {
    return (
        <>
            <h5>Главная страница</h5>
            <Categories categoryName={'Женские сумки'} ordersArray={womensbags} />
            <Categories categoryName={'Мужские сумки'} ordersArray={mensbags} />
            <Categories categoryName={'Детские сумки'} ordersArray={childrensbags} />
            <Categories categoryName={'Прочее'} />
        </>
    );
};