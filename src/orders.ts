/** Описание товара. */
export interface Order { 
    /** Название товара. */
    name?: string;
    /** Описание товара. */
    showdescription?: string;
    /** Ссылка на изображение товара. */
    imgSrc?: string;
     /** Описание товара. */
     fuldescription?: string;
};

/** Список женских сумок. */
export const womensbags: Order[] = [
    { name: 'Braccialini', showdescription: 'Молочный коктель 5000 рублей', fuldescription: 'Материал: натуральная кожа. Цвет: бежевый. Гарантия 2 года. Ремень на плечо регулируемый. Размеры: 34x27x14 см.  Высота ручки: 13 см.  Вес: 0.76 кг.', imgSrc: '/images/womensbags/womensbags1.jpg' },
    { name: 'Braccialini', showdescription: 'Небесный лайм 3900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: светло-голубой.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 36x21x14 см.  Высота ручки: 18 см.  Вес: 0.68 кг.', imgSrc: '/images/womensbags/womensbags2.jpg' },
    { name: 'Braccialini', showdescription: 'Шоппер в черном цвете 3700 рублей',  fuldescription: 'Материал: натуральная кожа.  Цвет: чёрный.  Гарантия 2 года.  Размеры: 42x30x15 см.  Высота ручки: 32 см.  Вес: 0.96 кг.', imgSrc:'/images/womensbags/womensbags3.jpg' },
    { name: 'Braccialini', showdescription: 'Сумка на плечо 2900 рублей',  fuldescription: 'Материал: натуральная кожа.  Цвет: белый.  золотой.  Гарантия 2 года.  Размеры: 26x18x8 см.  Высота ручки: 50 см.  Вес: 0.38 кг.', imgSrc: '/images/womensbags/womensbags4.jpg' },
    { name: 'Braccialini', showdescription: 'Сумка рюкзак 6900 рублей', fuldescription: 'Материал: натуральная кожа.  замша.  Цвет: чёрный.  Гарантия 2 года.  Размеры: 26x31x11 см.  Высота ручки: 7 см.  Вес: 0.48 кг.', imgSrc: '/images/womensbags/womensbags5.jpg' },
    { name: 'Braccialini', showdescription: 'Летняя сумка 3900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: жёлтый.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 28x21x13 см.  Высота ручки: 12 см.  Вес: 0.54 кг.', imgSrc: '/images/womensbags/womensbags6.jpg' },
    { name: 'Braccialini', showdescription: 'Шопер в белом цвете 4900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: белый.  Гарантия 2 года.  Размеры: 43x29x13 см.  Высота ручки: 24 см.  Вес: 0.96 кг.', imgSrc: '/images/womensbags/womensbags7.jpg' },
    { name: 'Braccialini', showdescription: 'Синяя сумка 2500 рублей', fuldescription: 'Материал: Поливинилхлорид (ПВХ).  Цвет: синий.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 37x27x15 см.  Высота ручки: 12 см.  Вес: 0.84 кг.', imgSrc: '/images/womensbags/womensbags8.jpg' },
    { name: 'COCCINELLE', showdescription: 'Белая сумка 6900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: белый.  Гарантия 2 года.  В комплекте ремень на плечо.  Размеры: 36x27x10 см.  Высота ручки: 15 см.  Вес: 0.87 кг.', imgSrc: '/images/womensbags2/womensbagsC1.jpg' },
    { name: 'COCCINELLE', showdescription: 'Оранжевая сумка 5400 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: оранжевый.  Гарантия 2 года.  В комплекте ремень на плечо.  Размеры: 31x33x13 см.  Высота ручки: 15 см.  Вес: 0.95 кг.', imgSrc: '/images/womensbags2/womensbagsC2.jpg' },
    { name: 'COCCINELLE', showdescription: 'Белая сумка 4900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: белый.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 31.5x32.5x10 см.  Высота ручки: 10 см.  Вес: 0.8 кг.', imgSrc: '/images/womensbags2/womensbagsC3.jpg' },
    { name: 'COCCINELLE', showdescription: 'Белая сумка 7900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: белый.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 18x24x14 см.  Высота ручки: 15 см.  Вес: 0.56 кг.', imgSrc: '/images/womensbags2/womensbagsC4.jpg' },
    { name: 'COCCINELLE', showdescription: 'Кросс-боди 3900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: чёрный.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 17x15x5 см.  Вес: 0.35 кг.', imgSrc: '/images/womensbags2/womensbagsC5.jpg' },
    { name: 'COCCINELLE', showdescription: 'Сумка 5900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: фиолетовый.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 19x15x8 см.  Вес: 0.48 кг.', imgSrc: '/images/womensbags2/womensbagsC6.jpg' },
    { name: 'COCCINELLE', showdescription: 'Сумка 5900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: зелёный.  Гарантия 2 года.  В комплекте ремень на плечо.  Размеры: 29x17x9 см.  Вес: 0.8 кг.', imgSrc: '/images/womensbags2/womensbagsC7.jpg' },
];

/** Список мужских сумок. */
export const mensbags: Order[] = [
    { name: 'PIQUADROV', showdescription: 'Рюкзак 9900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: чёрный.  Гарантия 2 года.  Размеры: 33x42x14.5 см.  Высота ручки: 4 см.  Вес: 1.1 кг.', imgSrc: '/images/mensbags/mensbags1.jpg' },
    { name: 'PIQUADROV', showdescription: 'Молодежная через плечо 4900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: чёрный.  Гарантия 2 года.  Размеры: 20x38.5x7 см.  Вес: 0.4 кг.', imgSrc: '/images/mensbags/mensbags2.jpg' },
    { name: 'PIQUADROV', showdescription: 'Кросс-боди 4500 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: оранжевый.  В комплекте ремень на плечо.  Размеры: 23.5x27x5 см.  Вес: 0.48 кг.', imgSrc: '/images/mensbags/mensbags3.jpg' },
    { name: 'PIQUADROV', showdescription: 'Кросс-боди 5900 рублей', fuldescription: 'Материал: натуральная кожа.  Цвет: чёрный.  В комплекте ремень на плечо.  Размеры: 21.5x24.5x5 см.  Вес: 0.49 кг.', imgSrc: '/images/mensbags/mensbags4.jpg' },
];

/** Список детских сумок. */
export const childrensbags: Order[] = [
    { name: 'Braccialini', showdescription: 'Зайка 3900 рублей', fuldescription: 'Материал: Поливинилхлорид (ПВХ).  Цвет: бежевый.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 12x16x20 см.  Высота ручки: 11 см.  Вес: 0.54 кг.', imgSrc: '/images/childrensbags/childrensbags1.jpg' },
    { name: 'Braccialini', showdescription: 'Молочный коктель 3900 рублей', fuldescription: 'Поливинилхлорид (ПВХ).  Цвет: мультиколор.  Гарантия 2 года.  Размеры: 15x27x6 см.  Высота цепочки: 55 см.  Вес: 0.45 кг.', imgSrc: '/images/childrensbags/childrensbagsmilk2.jpg' },
    { name: 'Braccialini', showdescription: 'Пингвин 3900 рублей', fuldescription: 'Материал: Поливинилхлорид (ПВХ).  Цвет: чёрный.  Гарантия 2 года.  Размеры: 18x19x11 см.  Высота цепочки: 55 см.  Вес: 0.47 кг.', imgSrc: '/images/childrensbags/childrensbagspin3.jpg' },
    { name: 'Braccialini', showdescription: 'Попкорн 3900 рублей', fuldescription: 'Материал: Поливинилхлорид (ПВХ).  Цвет: чёрный.  мультиколор.  Гарантия 2 года.  Размеры: 17x28x8 см.  Высота ручки: 12 см.  Вес: 0.47 кг.',  imgSrc: '/images/childrensbags/childrensbagspop4.jpg' },
    { name: 'Braccialini', showdescription: 'Сладость 3900 рублей', fuldescription: 'Материал: Поливинилхлорид (ПВХ).  Цвет: серебристый.  Гарантия 2 года.  Размеры: 18x13x8 см.  Высота цепочки: 55 см.  Вес: 0.45 кг.', imgSrc: '/images/childrensbags/childrensbagssweet5.jpg' },
    { name: 'Braccialini', showdescription: 'тигренок 3900 рублей', fuldescription: 'Материал: Поливинилхлорид (ПВХ).  Цвет: белый.  мультиколор.  Гарантия 2 года.  Ремень на плечо регулируемый.  Размеры: 20x12x9 см.  Высота ручки: 3 см.  Вес: 0.44 кг.', imgSrc: '/images/childrensbags/childrensbagstiger6.jpg' },
];
