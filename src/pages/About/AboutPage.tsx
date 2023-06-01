import { Accordion } from 'react-bootstrap'

/** Страница "О нас". */
export const AboutPage = () => {
    return (
        <>
            <h5>О нас</h5>
            <div>  BRACCIALINI – это дизайн и качество, которое доступно в меру своей истинной ценности. 
                Это качественное изделие, которое стоит ровно столько, сколько оно должно стоить. 
                Ни больше, ни меньше. Непоколебимо..</div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>О КОМПАНИИ</Accordion.Header>
                    <Accordion.Body>
                    Идея BRACCIALINI - предложить Вам настоящие итальянские изделия по итальянской цене.
                    Мы с уверенностью заявляем, что все без исключения товары,
                    представленные на сайте BRACCIALINI, оригинальные и итальянские. 
                    Тут не только продукция всемирно известных брендов, но и вещи ручной работы 
                    от небольших семейных фирм, мастерство которых ценится особенно высоко. 
                    Тут всегда новые коллекции, мы постоянно обновляем ассортимент. 
                    Все наши цены установлены производителями, товар доставляется без посредников. 
                    Для зарегистрированных клиентов у нас есть специальные предложения и скидки.
                    Кроме того, мы предлагаем бесплатную доставку по всему миру.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>История бренда Piquadro</Accordion.Header>
                    <Accordion.Body>
                    В 1987 году Марко Пальмиери (Marco Palmieri), в то время - 22-летний выпускник инженерного
                    факультета Болонского университета, открыл в Италии фирму по производству изделий из кожи.
                    В 1998 году Пальмиери зарегистрировал собственный бренд, который назвал Piquadro – ”Пи в квадрате”,
                    где P обозначает как фамилию - Palmieri, так и род занятий - Pelletteria (кожгалантерея по-итальянски).
                    Сейчас Марко Пальмиери - президент и генеральный директор компании. Штаб-квартира, 
                    офисы и склады Piquadro расположены в городке Гаджио Монтано (провинция Болонья). 
                    Piquadro специализируется на производстве инновационных сумок и аксессуаров для бизнеса, 
                    которые выделяются функциональностью и узнаваемостью. Все продукты Piquadro – это результат 
                    тщательного проектирования. В 2013 году рюкзак Coleos от Piquadro стал победителем конкурса
                    дизайна журнала Wallpaper в категории "The Best Bag".
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>История  бренда Coccinelle</Accordion.Header>
                    <Accordion.Body>
                    Фирму Coccinelle основал 1978 году Джакомо Маццьери (Giacomo Mazzieri) в итальянском городе Парма. 
                    В название (Coccinelle - "Божьи коровки", ит.) 
                    Джакомо заложил сразу три метафоры: во-первых, божья коровка - символ добрых пожеланий, во-вторых, 
                    несмотря на кажущуюся хрупкость, защищена бронёй, в-третьих, божья коровка - символ экологов. 
                    Фирму ждал коммерческий успех, с момента открытия в 1995 году первого магазина в Милане до 1100 
                    торговых точек по всему миру в 2014 году. Coccinelle выпускает 4 коллекции в год, 
                    основная продукция бренда - женские сумки. В настоящее время председателем правления Coccinelle 
                    является Андреа Бальдо (Andrea Baldo), пришедший на смену старшему сыну основателя фирмы Анжело 
                    Маццьери (Angelo Mazzieri), который возглавлял Coccinelle более 15 лет.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};