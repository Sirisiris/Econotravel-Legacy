const experiences = [
    {
    "experiences": [
        {
            "id": 1,
            "title": "Paseo en bicicleta por el Montseny",
            "description": "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una maravillosa comida casera con butifarra blanca y negra y munxetes del Montseny.",
            "price": 250,
            "duration": 5,
            "img": "https://cdn.pixabay.com/photo/2020/05/16/17/23/cycling-5178398_960_720.jpg",
            "accessibility": "Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg).",
            "tag1": "Montaña",
            "tag2": "Bicicleta",
            "tag3": "Excursión larga"
        },
        {
            "id": 2,
            "title": "Descubre la costa en barco de vela",
            "description": "Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días más calurosos del año. Descubre los encantadores alrededores de la ciudad de Barcelona y visita desde el mar sus más impresionantes playas y calas. Comenzaremos la excursión en el Puerto de Barcelona, desde donde partiremos hacia el norte para visitar playas como la Mar Bella, la Playa de la Mora y la Playa de los Pescadores. A bordo de la embarcación podremos disfrutar de una selección de quesos y embutidos catalanes acompañada de cava brut y zumos de frutas. Asimismo, pararemos cerca de la Playa de Montgat para realizar una actividad de buceo de superficie que nos permitirá apreciar la diversidad de la fauna marítima local y su ecosistema. Finalizaremos la excursión en el mismo puerto del que partimos.",
            "price": 280,
            "duration": 4,
            "img": "https://images.unsplash.com/photo-1529551739587-e242c564f727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
            "accessibility": "Actividad disponible para todas las edades. Pasarela para silla de ruedas disponible bajo reserva.",
            "tag1": "Playa",
            "tag2": "Barco",
            "tag3": "Excursión larga"
        },
        {
            "id": 3,
            "title": "Barcelona modernista de noche",
            "description": "Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. En esta excursión de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. El tour incluye visita guiada al interior de la Casa Batlló y la Sagrada Familia, así como parada para cenar en el restaurante típico catalán Can Masiá, donde disfrutaremos de las mejores carnes de la región acompañadas de vinos de las tierras del Baix Empordá. El restaurante también ofrece opciones vegetarianas y veganas así como menú para niños. Cava aparte.",
            "price": 200,
            "duration": 4,
            "img": "https://images.unsplash.com/photo-1617119525631-2bee044d6020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "accessibility": "Actividad disponible para todas las edades. Accesibilidad garantizada para sillas de ruedas.",
            "tag1": "Ciudad",
            "tag2": "Barco",
            "tag3": "Excursión larga"
        },
        {
            "id": 4,
            "title": "Del huerto a la mesa",
            "description": "Comparte con los más pequeños las maravillas de la naturaleza. En esta excursión breve de tres horas, podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig. Durante una hora y media, aprenderéis a cuidar de vuestro propio huerto, plantaréis y abonaréis vuestras propias plantas, y también recogeréis parte de los ingredientes que los expertos chefs de Can Gilabert utilizarán para preparar la posterior cena, donde disfrutaréis de la experiencia de consumir productos recién recogidos de la tierra con vuestras propias manos. Actividad ideal para familiarizar a los más pequeños de la familia con el estilo de vida rural y la agricultura sostenible. Asimismo, obtendréis como obsequio una botella de aceite virgen extra cultivado y preparado en Can Gilabert, obra de la familia Gilabert, que lleva más de 80 años cultivando olivos. ",
            "price": 145,
            "duration": 4,
            "img": "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            "accessibility": "Actividad disponible para todas las edades. El acceso al huerto en silla de ruedas está garantizado",
            "tag1": "Montaña",
            "tag2": "A pie",
            "tag3": "Excursión larga"
        },
        {
            "id": 5,
            "title": "Arte en la montaña sagrada",
            "description": "Disfruta de la impresionante Montaña de Montserrat donde encontraréis el Museo con las salas modernistas de Puig i Cadafalch, lugar que acoge colecciones de gran valor en el corazón de la emblemática montaña. En el Museo encontraréis pinturas del Renacimiento y del Barroco que conviven con autores de los siglos XIX y XX, objetos del Próximo Oriente y orfebrería. Además de disfrutar de un paseo guiado por la montaña y el Museo, esta actividad incluye tentempié variado acompañado de vino espumoso, cava brut o refresco.",
            "price": 125,
            "duration": 2,
            "img": "https://images.unsplash.com/photo-1597463345118-6ab31a16e9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "accessibility": "Actividad disponible para todas las edades. El acceso al museo y al restaurante en silla de ruedas está garantizado",
            "tag1": "Montaña",
            "tag2": "A pie",
            "tag3": "Excursión corta"
        },
        {
            "id": 6,
            "title": "Barcelona urbana en bicicleta",
            "description": "Descubre las maravillas modernistas de la ciudad de Barcelona en un fantástico tour en bicicleta acompañado por un rider experto. Transita el bullicioso Paseo de Gracia, con sus icónicos edificios guadianos, relájate en el fantástico Paseo Marítimo de la Barceloneta y disfruta de la ciudad de una manera eco-friendly y cero residuos. El tour finaliza en la emblemática cantina “Can Culleretes”, fundada en 1786, donde disfrutaremos de un auténtico “soparet catalá” con los manjares típicos de la región acompañados de un vino del Alto Penedés.",
            "price": 150,
            "duration": 3,
            "img": "https://images.unsplash.com/photo-1566376799975-ad0a084926fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",
            "accessibility": "Actividad disponible para todas las edades. Las personas que requieran bicicleta adaptada deben avisar con antelación para garantizar su disponibilidad.",
            "tag1": "Ciudad",
            "tag2": "Bicicleta",
            "tag3": "Excursión corta"
        },
        {
            "id": 7,
            "title": "De playa en playa",
            "description": "¿Qué es mejor que visitar una playa? ¡Visitar muchas playas! Disfruta de esta novedosa experiencia “de playa en playa”, donde descubriremos las mejores playas de la costa barcelonesa. Deléitate con seis horas de sol, arena y mar salada y descubre por qué la Costa Catalana es uno de los destinos favoritos de los españoles. Desde la Playa del Fórum hasta la Playa de San Sebastián, recorreremos la línea acuática a pie y en lancha, para terminar tomando un cóctel y un aperitivo en el chiringuito Manel de la playa de San Sebastián, especialistas en cócteles afrutados y delicias del mar.",
            "price": 320,
            "duration": 6,
            "img": "https://images.unsplash.com/photo-1599484233778-5bdc6b69bbe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80",
            "accessibility": "Actividad disponible para todas las edades. Las personas que requieran adaptaciones de movilidad deberán informar a la organización con anterioridad.",
            "tag1": "Ciudad",
            "tag2": "A pie",
            "tag3": "Excursión larga"
        },
        {
            "id": 8,
            "title": "Actividad especial Pride 2022",
            "description": "Barcelona es una de las ciudades más diversas del mundo, y eso incluye también a la población LGTBI. La ciudad está plagada de lugares icónicos para el colectivo LGTBI, con bares, discotecas y restaurantes específicamente pensados para que la población LGTBI pueda disfrutar de una experiencia única. Recorre los lugares más emblemáticos de la ciudad, adéntrate en los locales más icónicos, y descubre una parte de Barcelona que desconocías hasta ahora. ¡No te pierdas esta experiencia única que coincide con la celebración estatal del Orgullo LGTBI! Sólo disponible de junio a agosto de 2022.",
            "price": 400,
            "duration": 8,
            "img": "https://images.unsplash.com/photo-1628538060442-0e54be1d2497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "accessibility": "Actividad disponible para todas las edades. Las personas que requieran adaptaciones de movilidad deberán informar a la organización con anterioridad.",
            "tag1": "Ciudad",
            "tag2": "A pie",
            "tag3": "Excursión larga"
        },
        {
            "id": 9,
            "title": "Montjuic inolvidable",
            "description": "Observa Barcelona desde varias perspectivas. Descubre el casco antiguo a pie y disfruta de las vistas desde el teleférico y el castillo de Montjuic. Disfruta de un snack saludable desde las alturas y consigue fotografías únicas y recuerdos que durarán toda una vida. Llega al castillo de Montjuic para disfrutar de una visita privada solo para tu pequeño grupo. Descubre cómo el castillo de Montjuic ha sido una fortaleza militar desde sus inicios, siendo testigo del cambio de poder político en la ciudad. Entra en las mazmorras de los varios presos políticos que han marcado la historia de la ciudad. Recibe acceso a la Torre del Castillo, desde donde puedes admirar vistas de 360 grados de Barcelona. Aprovecha la oportunidad única de tomar tus mejores fotos de Barcelona al atardecer. Termina el recorrido caminando hasta el Magic Fountain Show, uno de los lugares imprescindibles para ver en Barcelona. La experiencia incluye los billetes de todas las actividades y atracciones.",
            "price": 180,
            "duration": 4,
            "img": "https://images.unsplash.com/photo-1591729740672-e555dacede09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "accessibility": "Actividad disponible para todas las edades. Las personas que requieran adaptaciones de movilidad deberán informar a la organización con anterioridad.",
            "tag1": "Montaña",
            "tag2": "A pie",
            "tag3": "Excursión larga"
        }
    ]
}
]

export default experiences;


