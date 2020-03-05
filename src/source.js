const restaurants = [
    {
        id: "0001",
        name: "Navat",
        image: "https://restolife.kz/upload/information_system_6/2/2/6/item_22696/small_information_items_property_26518.jpg",
        menu: [
            {
                id: "nnn1",
                name: "Margelan patty",
                price: 1800,
                ingredients: ["Tender marinated lamb", "ribs fried in cauldron", "golden potatoes", "pickled onions", "cornichons", "cherry tomatoes"],
            },
            {
                id: "nnn2",
                name: "Dapandzhi",
                price: 1700,
                ingredients: ["Large pieces of chicken", "potatoes and boiled dough fried in piquant spices"]
            },
            {
                id: "nnn3",
                name: "Grilled kozu",
                price: 1000,
                ingredients: ["Marinated by author's recipe in fresh herbs and flavory spices of young mutton baked until golden crust in tandoor",
                    "It is decorated with fresh vegetables and herbs"]
            },
            {
                id: "nnn4",
                name: "Quail fantasy",
                price: 3200,
                ingredients: ["Quails", "bonfile", "lamb ribs", "stuffed pepper", "cheese", "lavash"]
            },
            {
                id: "nnn5",
                name: "Saddle of lamb on spit",
                price: 2700,
                ingredients: ["Moist saddle of lamb marinated in piquant spices baked with sheep fat on spit", "Served with baked vegetables"]
            }
        ],
        reviews: [
            {
                id: "ncc1",
                text: "Хорошее место, хороший персонал, но цены превышают ожидаемость, ставлю 3 за обслуживание и место",
                rating: 3
            },
            {
                id: "ncc2",
                user: "Dina Berdiyarova",
                text: "Классный спасибо\n" +
                    "😍😍😍😍😍☝️",
                rating: 5
            },
            {
                id: "ncc3",
                user: "Кыял Жээналиева",
                text: "Были сегодня ,очень вкусно и приятный персонал .Особенно мантыыыы 🤪🤪🤪",
                rating: 5
            },
            {
                id: "ncc4",
                user: "Александра Костерин",
                text: "Отличное заведение, всем рекомендую! Очень вкусно, вежливый персонал",
                rating: 4
            },
            {
                id: "ncc5",
                user: "​Joker .",
                text: "Атмосферное место. Вкусный бешбармак с кониной, боорсоки понравились. Порадовал музыкант.\n" +
                    "Из минусов:\n" +
                    "- навязчивые официанты\n" +
                    "- слабенький лагман и манты",
                rating: 3
            }
        ]
    },
    {
        id: "0002",
        name: "Улица Мясная",
        image: "https://scontent.ffru5-1.fna.fbcdn.net/v/t1.0-9/s960x960/52598110_821214931564017_8483389746310021120_o.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_ohc=ai0oM7OmqfcAX-hRdVZ&_nc_ht=scontent.ffru5-1.fna&_nc_tp=7&oh=599990b7bc168052f6339e6cd3e5482e&oe=5E803AA3",
        menu: [
            {
                id: "umumum1",
                name: "Margelan patty",
                price: 1800,
                ingredients: ["Tender marinated lamb", "ribs fried in cauldron", "golden potatoes", "pickled onions", "cornichons", "cherry tomatoes"],
            },
            {
                id: "umumum2",
                name: "Steak",
                price: 500,
                ingredients: ["Говядина", "овощи", "рис"],
            },
            {
                id: "umumum3",
                name: "Burger",
                price: 100,
                ingredients: ["Говядина", "сыр", "овощи"],
            },
            {
                id: "umumum4",
                name: "Kuurdak",
                price: 320,
                ingredients: ["Кортошка", "говядина", "лук"],
            },
            {
                id: "umumum5",
                name: "Курица по-мароккански",
                price: 270,
                ingredients: ["Курица", "овощами", "сливочный соус"],
            }
        ],
        reviews: [
            {
                id: "umcc1",
                user: "Aigul Jumashalieva",
                text: "Всё очень вкусно. Особенно метр шашлыка. Мясо просто тает во рту. Прекрасный интерьер. Всегда какие-то приятные акции. Любой праздник здесь пройдет на ура.",
                rating: 5
            },
            {
                id: "umcc2",
                user: "​Eva Miss",
                text: "Блюда вкусные, удобное место, персонал вежливый",
                rating: 4
            },
            {
                id: "umcc3",
                text: "Отметила свой день рождения именно в этом месте из-за: невероятно вкусного метрового мяса, очень интересного интерьера и приятной атмосферы, дружелюбного персонала и хороших цен.",
                rating: 5
            },
            {
                id: "umcc4",
                user: "divaeff.r.r",
                text: "Понравилось: атмосфера, обслуживание, супы. Не на 100% удовлетворен выбором пива, приготовлением шашлыка. Публика вполне интересная.\n" +
                    "Не хватает нескольких сортов хорошего пива.",
                rating: 4
            },
            {
                id: "umcc5",
                user: "​Евгений Ибрагимов",
                text: "Пришли с женой попить пива 10 июля, не первый раз были в этом месте. Решили попробовать что-то новое, в меню значится примерно следующее: овощи с зеленью в лаваше, обжаренные.. - ок, заказываем. Приносят эти жареные конвертики из лаваша, овощей очень мало, но много лапши внутри, о которой в меню ни слова. Лапша в лаваше, короче. Зовём официанта, просим забрать блюдо, т.к. оно значительно не соответствует описанию. Приходит администратор, выслушивает доводы, соглашается. Мы заказываем другое блюдо, которое мы знаем - крылышки буффало. Оно вдвое дороже первого, от которого мы отказались. Нам приносят полпорции - 5 малюсеньких фрагментов крылышек и ножек, да ещё и без соуса, который должен был прилагаться. По цене полноценного блюда, разумеется. Отлично, ребята, вы отбили цену первого блюда! Так потом ещё из чека не с первого раза удалили первое блюдо. Что вам сказать? Мы к вам больше не придём.",
                rating: 2
            }
        ]
    },
    {
        id: "0003",
        name: "Chicken star",
        image: "https://cafe.kg/wp-content/uploads/2019/04/IMG_5338.jpg",
        menu: [
            {
                id: "cscscs1",
                name: "БИБИМПАБ",
                price: 330,
                ingredients: ["Салатные листья", "говядина", "морковь", "огурцы", "яйцо", "рис", "кунжутное масло", "корейская паста из перца"],
            },
            {
                id: "cscscs2",
                name: "ЖАРЕНЫЙ РИС С КУРИЦЕЙ",
                price: 260,
                ingredients: ["Жареные грудки", "перец", "лук", "грибы", "рис", "устричный соус"],
            },
            {
                id: "cscscs3",
                name: "КИМЧИ ПЛОВ",
                price: 290,
                ingredients: ["Рис", "грибы", "устричный", "соус", "лук", "яйцо"],
            },
            {
                id: "cscscs4",
                name: "ФИРМЕННАЯ ЧИКЕН СТАР",
                price: 320,
                ingredients: ["КУРОЧКА"],
            },
            {
                id: "cscscs5",
                name: "ЛАНЧ СЕТ А",
                price: 290,
                ingredients: ["Хрустящие грудки в чесночном соусе", "овощной кимбаб", "тогкочи", "жареная картошка", "маринад и свежий салат"],
            }
        ],
        reviews: [
            {
                id: "cscc1",
                user: "Любовь Зайцева",
                text: "Были в первый раз, все понравилось, очень вкусная курица.",
                rating: 5
            },
            {
                id: "cscc2",
                user: "Азамат Алмасбеков",
                text: "Отличное, атмосферное место с вкусной курочкой и прекрасной музыкой. Отлично географически расположенное в центре города, рядом с бульваром.",
                rating: 5
            },
            {
                id: "cscc3",
                user: "Amiko Ami",
                text: "Хорошая атмосфера и вкусная еда👍",
                rating: 5
            },
            {
                id: "cscc4",
                text: "Были сегодня на обеде с коллегами. Вкусно, уютно. Советую всем.",
                rating: 4
            },
            {
                id: "cscc5",
                user: "​Roger Valentin",
                text: "Good Chicken & good wine ! I love this place ! )))",
                rating: 5
            }
        ]
    }
]

export default restaurants