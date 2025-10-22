
const estadosInfo = {
  "Amazonas": {
    capital: "Puerto Ayacucho",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Amazonas_in_Venezuela.svg/300px-Amazonas_in_Venezuela.svg.png",
    cultura: [
      "Pueblos indígenas como Yanomami, Piaroa y Guahibo",
      "Festival del Casabe",
      "Artesanía con semillas y fibras naturales"
    ],
    turismo: [
      "Parque Nacional Yapacana",
      "Río Orinoco",
      "Cerro Autana (árbol de la vida)"
    ],
    datosCuriosos: [
      "Es el estado más grande de Venezuela",
      "Más del 50% de su territorio está protegido",
      "Hogar de la cascada más alta del mundo: Salto Ángel"
    ]
  },
  "Anzoátegui": {
    capital: "Barcelona",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Anzoategui_in_Venezuela.svg/300px-Anzoategui_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de la Cruz de Mayo",
      "Velorios de Cruz",
      "Gastronomía basada en pescados y mariscos"
    ],
    turismo: [
      "Playas de Puerto Píritu y Cangrejo",
      "Parque Nacional Mochima",
      "Museo de la Tradición de Barcelona"
    ],
    datosCuriosos: [
      "Importante zona petrolera",
      "Tiene las playas más hermosas del oriente venezolano",
      "Cuna del poeta Andrés Eloy Blanco"
    ]
  },
  "Apure": {
    capital: "San Fernando de Apure",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Apure_in_Venezuela.svg/300px-Apure_in_Venezuela.svg.png",
    cultura: [
      "Joropo llanero",
      "Coleo de toros",
      "Festival del Alma Llanera"
    ],
    turismo: [
      "Parque Nacional Santos Luzardo",
      "Río Apure",
      "Hatos llaneros para observar fauna"
    ],
    datosCuriosos: [
      "Conocido como el 'Estado Llanero'",
      "Tiene la mayor población de chigüires del país",
      "Escenario de la novela 'Doña Bárbara' de Rómulo Gallegos"
    ]
  },
  "Aragua": {
    capital: "Maracay",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Aragua_in_Venezuela.svg/300px-Aragua_in_Venezuela.svg.png",
    cultura: [
      "Fiestas de San Juan Bautista",
      "Danza de los Diablos de Turiamo",
      "Gastronomía: empanadas de cazón y dulces criollos"
    ],
    turismo: [
      "Parque Nacional Henri Pittier",
      "Playas de Choroní y Ocumare de la Costa",
      "Lago de Valencia"
    ],
    datosCuriosos: [
      "Primer parque nacional de Venezuela (Henri Pittier)",
      "Maracay es conocida como la 'Ciudad Jardín'",
      "Centro militar e industrial del país"
    ]
  },
  "Barinas": {
    capital: "Barinas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Barinas_in_Venezuela.svg/300px-Barinas_in_Venezuela.svg.png",
    cultura: [
      "Música llanera",
      "Festival Internacional de Música Llanera Elorza",
      "Fiesta de la Virgen del Pilar"
    ],
    turismo: [
      "Parque Nacional Sierra Nevada (sector Barinas)",
      "Río Santo Domingo",
      "Balneario La Acequia"
    ],
    datosCuriosos: [
      "Cuna del expresidente Hugo Chávez",
      "Conocida como 'Puerta de los Andes'",
      "Importante zona agrícola y ganadera"
    ]
  },
  "Bolívar": {
    capital: "Ciudad Bolívar",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Bolivar_in_Venezuela.svg/300px-Bolivar_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de la Cruz de Mayo",
      "Festival del Calipso de El Callao (Patrimonio Cultural de la Humanidad)",
      "Gastronomía minera y guayanesa"
    ],
    turismo: [
      "Salto Ángel",
      "Parque Nacional Canaima",
      "Roraima Tepuy"
    ],
    datosCuriosos: [
      "Es el estado más rico en recursos minerales",
      "En Canaima se filmaron escenas de la película 'Up'",
      "Posee el mayor parque nacional del país"
    ]
  },
  "Carabobo": {
    capital: "Valencia",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Carabobo_in_Venezuela.svg/300px-Carabobo_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de San Esteban",
      "Carnavales de Guacara",
      "Festival Internacional de Teatro de Valencia"
    ],
    turismo: [
      "Campo de Carabobo",
      "Lago de Valencia",
      "Montañas del Parque Nacional San Esteban"
    ],
    datosCuriosos: [
      "Lugar de la Batalla de Carabobo (1821)",
      "Centro industrial del país",
      "Valencia fue una de las primeras capitales de Venezuela"
    ]
  },
  "Cojedes": {
    capital: "San Carlos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cojedes_in_Venezuela.svg/300px-Cojedes_in_Venezuela.svg.png",
    cultura: [
      "Fiestas patronales de San Carlos",
      "Música llanera",
      "Feria Agroindustrial"
    ],
    turismo: [
      "Río Tirgüa",
      "Balneario El Baúl",
      "Cerro Platillón"
    ],
    datosCuriosos: [
      "Importante productor de ganado",
      "Zona de transición entre los llanos y los Andes",
      "Cuenta con una biodiversidad notable"
    ]
  },
  "Delta Amacuro": {
    capital: "Tucupita",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Delta_Amacuro_in_Venezuela.svg/300px-Delta_Amacuro_in_Venezuela.svg.png",
    cultura: [
      "Tradiciones del pueblo warao",
      "Fiesta de San Rafael",
      "Pesca artesanal"
    ],
    turismo: [
      "Delta del Orinoco",
      "Comunidades Warao",
      "Río Grande"
    ],
    datosCuriosos: [
      "Región compuesta por miles de caños y ríos",
      "El idioma warao es hablado por miles de personas",
      "Importante reserva ecológica"
    ]
  }
};
