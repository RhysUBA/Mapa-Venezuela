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
  },
  "Distrito Capital": {
    capital: "Caracas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Distrito_Capital_in_Venezuela.svg/300px-Distrito_Capital_in_Venezuela.svg.png",
    cultura: [
      "Festival de la Virgen de la Divina Pastora",
      "Quema de Judas",
      "Gastronomía criolla: arepas, pabellón"
    ],
    turismo: [
      "Panteón Nacional",
      "Parque Nacional El Ávila",
      "Museo de Bellas Artes"
    ],
    datosCuriosos: [
      "Sede de los poderes públicos nacionales",
      "Fundada en 1567 por Diego de Losada",
      "Cuna de Simón Bolívar"
    ]
  },
  "Falcón": {
    capital: "Coro",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Falcon_in_Venezuela.svg/300px-Falcon_in_Venezuela.svg.png",
    cultura: [
      "Tambor coriano",
      "Fiesta de los Tambores de San Juan",
      "Artesanía en arcilla"
    ],
    turismo: [
      "Parque Nacional Médanos de Coro",
      "Península de Paraguaná",
      "Ciudad de Coro (Patrimonio de la Humanidad)"
    ],
    datosCuriosos: [
      "Tiene el único desierto de Venezuela",
      "Primera capital histórica de Venezuela",
      "Posee importantes refinerías de petróleo"
    ]
  },
  "Guárico": {
    capital: "San Juan de los Morros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Guarico_in_Venezuela.svg/300px-Guarico_in_Venezuela.svg.png",
    cultura: [
      "Joropo central",
      "Toros coleados",
      "Festival del Joropo Recio"
    ],
    turismo: [
      "Parque Nacional Aguaro-Guariquito",
      "Monumento al Cristo de los Morros",
      "Aguas termales de San Juan"
    ],
    datosCuriosos: [
      "Corazón de los llanos centrales",
      "Mayor productor de arroz del país",
      "Tiene formaciones rocosas únicas"
    ]
  },
  "Lara": {
    capital: "Barquisimeto",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Lara_in_Venezuela.svg/300px-Lara_in_Venezuela.svg.png",
    cultura: [
      "Tamunangue (baile folklórico)",
      "Feria Internacional de Barquisimeto",
      "Gastronomía: olleta de gallo, majarete"
    ],
    turismo: [
      "Monumento al Sol Naciente",
      "Parque Nacional Yacambú",
      "Jardín Botánico de Barquisimeto"
    ],
    datosCuriosos: [
      "Conocida como la capital musical de Venezuela",
      "Cuna de compositores como Alí Primera",
      "Cuarto estado más poblado del país"
    ]
  },
  "Mérida": {
    capital: "Mérida",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Merida_in_Venezuela.svg/300px-Merida_in_Venezuela.svg.png",
    cultura: [
      "Feria del Sol",
      "Festival de la Virgen de la Inmaculada Concepción",
      "Gastronomía andina: pizca andina, arepas de trigo"
    ],
    turismo: [
      "Teleférico de Mérida (más alto y largo del mundo)",
      "Pico Bolívar",
      "Parque Nacional Sierra Nevada"
    ],
    datosCuriosos: [
      "Tiene las montañas más altas de Venezuela",
      "Ciudad universitaria por excelencia",
      "Fundada en 1558"
    ]
  },
  "Miranda": {
    capital: "Los Teques",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Miranda_in_Venezuela.svg/300px-Miranda_in_Venezuela.svg.png",
    cultura: [
      "Diablos Danzantes de Yare (Patrimonio de la Humanidad)",
      "Parranda de San Pedro",
      "Gastronomía: pan de jamón, hallacas"
    ],
    turismo: [
      "Playas de Barlovento",
      "Parque Nacional El Ávila",
      "Colonia Tovar"
    ],
    datosCuriosos: [
      "Segundo estado más poblado de Venezuela",
      "Tiene importante diversidad climática",
      "Cuna del prócer Francisco de Miranda"
    ]
  },
  "Monagas": {
    capital: "Maturín",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Monagas_in_Venezuela.svg/300px-Monagas_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de la Cruz de Mayo",
      "Velorios de Cruz",
      "Gastronomía: casabe, sancocho de guaraguara"
    ],
    turismo: [
      "Parque Nacional Cueva del Guácharo",
      "Monumento al Samán de Güere",
      "Aguas termales de Miraflores"
    ],
    datosCuriosos: [
      "Importante zona petrolera",
      "Tiene la cueva más grande de Venezuela",
      "Lugar de nacimiento de José Tadeo Monagas"
    ]
  },
  "Nueva Esparta": {
    capital: "La Asunción",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nueva_Esparta_in_Venezuela.svg/300px-Nueva_Esparta_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de la Virgen del Valle",
      "Danza del Carite",
      "Tradiciones de pescadores"
    ],
    turismo: [
      "Playas de Porlamar y Pampatar",
      "Parque Nacional Laguna de La Restinga",
      "Castillo de San Carlos de Borromeo"
    ],
    datosCuriosos: [
      "Único estado insular de Venezuela",
      "Formado por tres islas principales",
      "Llamada 'Tierra de Gracia' por Colón"
    ]
  },
  "Portuguesa": {
    capital: "Guanare",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Portuguesa_in_Venezuela.svg/300px-Portuguesa_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de la Virgen de Coromoto",
      "Festival del Joropo Llanero",
      "Gastronomía llanera"
    ],
    turismo: [
      "Santuario Nacional de la Virgen de Coromoto",
      "Parque Nacional Dinira",
      "Río Guanare"
    ],
    datosCuriosos: [
      "Capital espiritual de Venezuela",
      "Importante productor agrícola",
      "Lugar de la aparición de la Virgen de Coromoto"
    ]
  },
  "Sucre": {
    capital: "Cumaná",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sucre_in_Venezuela.svg/300px-Sucre_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de la Cruz de Mayo",
      "Tambores de Cumaná",
      "Gastronomía basada en mariscos"
    ],
    turismo: [
      "Parque Nacional Mochima",
      "Castillo de San Antonio de la Eminencia",
      "Playas del Golfo de Cariaco"
    ],
    datosCuriosos: [
      "Primera ciudad fundada en América del Sur (1515)",
      "Cuna del Gran Mariscal de Ayacucho",
      "Tiene importantes reservas de gas natural"
    ]
  },
  "Táchira": {
    capital: "San Cristóbal",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Tachira_in_Venezuela.svg/300px-Tachira_in_Venezuela.svg.png",
    cultura: [
      "Feria Internacional de San Sebastián",
      "Gastronomía andina: pizca andina, mute",
      "Música andina"
    ],
    turismo: [
      "Páramo El Zumbador",
      "Pueblo de San Pedro del Río",
      "Parque Nacional Chorro El Indio"
    ],
    datosCuriosos: [
      "Fronterizo con Colombia",
      "Cuna de varios presidentes venezolanos",
      "Región cafetalera por excelencia"
    ]
  },
  "Trujillo": {
    capital: "Trujillo",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Trujillo_in_Venezuela.svg/300px-Trujillo_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de la Virgen de la Paz",
      "Danza de los Pastores del Niño Jesús",
      "Gastronomía: quesos andinos, miche"
    ],
    turismo: [
      "Monumento a la Virgen de la Paz",
      "Parque Nacional Dinira",
      "Páramo de Guaramacal"
    ],
    datosCuriosos: [
      "Tiene el monumento más alto de América (Virgen de la Paz)",
      "Lugar donde se firmó el Decreto de Guerra a Muerte",
      "Importante productor de café y cambur"
    ]
  },
  "Vargas": {
    capital: "La Guaira",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vargas_in_Venezuela.svg/300px-Vargas_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de San Juan Bautista",
      "Tambores de la costa",
      "Gastronomía a base de pescado"
    ],
    turismo: [
      "Playas de Catia La Mar",
      "Puerto de La Guaira",
      "Camino de los Españoles"
    ],
    datosCuriosos: [
      "Principal puerto de Venezuela",
      "Creación reciente (1998)",
      "Vulnerable a deslaves naturales"
    ]
  },
  "Yaracuy": {
    capital: "San Felipe",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Yaracuy_in_Venezuela.svg/300px-Yaracuy_in_Venezuela.svg.png",
    cultura: [
      "Fiesta de San Juan Bautista",
      "Danza de la Sanjuanera",
      "Gastronomía: casabe, dulces criollos"
    ],
    turismo: [
      "Parque Nacional Yurubí",
      "Monumento al Cacique Yaracuy",
      "Centro de Artes La Sirena"
    ],
    datosCuriosos: [
      "Llamado 'Tierra de María Lionza'",
      "Importante zona agrícola",
      "Tiene reservas minerales importantes"
    ]
  },
  "Zulia": {
    capital: "Maracaibo",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Zulia_in_Venezuela.svg/300px-Zulia_in_Venezuela.svg.png",
    cultura: [
      "Gaita zuliana",
      "Feria de La Chinita",
      "Danza de Las Turas"
    ],
    turismo: [
      "Lago de Maracaibo",
      "Puente General Rafael Urdaneta",
      "Páramo El Rosal"
    ],
    datosCuriosos: [
      "Principal región petrolera de Venezuela",
      "Tiene el lago más grande de Sudamérica",
      "Región con identidad cultural muy marcada"
    ]
  }
};