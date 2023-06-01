import { womensbags, mensbags, childrensbags} from '../../orders'
import { useLocation } from 'react-router-dom'
import { Categories } from '../../components/Categories/Categories'

/** Страница со списком товаров. */
export const ProductsPage = () => {
    /** Получаем hash из строки браузера. */
    const { hash } = useLocation()

    return (
        <>
            <h5>Наш ассортимент</h5>
            <p>Интернет-магазин BRACCIALINI продаёт только подлинные итальянские товары - кожаные сумки для всей семьи, в разной цветовой гамме и размеров. 
               Товары данного магазина особо привлекут внимание дам, здесь есть выбор бренда, дизайна и чувства стиля. Стиль - это пазл, в котором все детали 
               существуют в приятной глазу гармонии. Сумки и аксессуары помогают создавать именно такие - образы, в которых легко и комфортно находится каждый день, 
               независимо от того, что происходит вокруг. Мы за комфортную женственнность, раслабленость и капельку шика.</p>
            {hash !== '' ? (
                <>
                    {hash === '#womensbags' && <Categories categoryName={'Женские сумки'} ordersArray={womensbags} />}
                    {hash === '#mensbags' && <Categories categoryName={'Мужские сумки'} ordersArray={mensbags} />}
                    {hash === '#childrensbags' && <Categories categoryName={'Детские сумки'} ordersArray={childrensbags} />}
                </>
            ) : (
                <>
                    <Categories categoryName={'Женские сумки'} ordersArray={womensbags} />
                    <Categories categoryName={'Мужские сумки'} ordersArray={mensbags} />
                    <Categories categoryName={'Деские сумки'} ordersArray={childrensbags} />
                    <Categories categoryName={'Прочее'} />
                </>
            )}
        </>
    );
};