const data = [   
    {   // premium
        id:1, 
        name: "Doronchis Suprema",
        precio: 140,
        descripcion: "1/4 de carne gratinada, queso chedar envuelta en tocino y coronada con un popper"
            },
    {   id:2, 
        name: "Lobo",
        precio: 120,
        descripcion: "Doble carne, jamon de pierna, tocino y la salsa de su eleccion",
        salsas:
                {   bufalo: "bufalo",
                    bbq: "bbq",
                    velvet: "velvet" }
             },
    {   id:3, 
        name: "Camaron burger",
        precio: 105,
        descripcion: "Camaron empanizado gratinado, aros de cebolla y salsa hakuna matata"
            },
    { 
        id:4, 
        name: "Arrachera",
        precio: 110,
        descripcion: "Hecha con una porcion de deliciosos 150 gramos de arrachera gratinada"
            },
    {itemFIVE: {   
        //especiales
        id:5, 
        name: "Arrachera",
        precio: 110,
        descripcion: "Hecha con una porcion de deliciosos 150 gramos de arrachera gratinada"    
            }},
    {   id:6, 
        name: "Avocado",
        precio: 99,
        descripcion: "Tocino aros de cebolla y guacamole "
            },
    {   id:7, 
        name: "Grou",
        precio: 99,
        descripcion: "Chile güero a la plancha relleno de queso y envuelto en tocinon"
            },
    {   id:8, 
        name: "Grou",
        precio: 99,
        descripcion: "Chile güero a la plancha relleno de queso y envuelto en tocinon"
            },
    {   id:9, 
        name: "Chiken hottie",
        precio: 95,
        descripcion: "Pechuga de pollo empanizada bañada en salsa bufalo"
            },
    {   id:10, 
        name: "Burger bites",
        precio: 99,
        descripcion: "tres mini hamburguesitas con queso gratinado"
            },
    {   id:11, 
        name: "Burger bites",
        precio: 99,
        descripcion: "tres mini hamburguesitas con queso gratinado"
            },
    {   
        //clasicas
        id:12, 
        name: "Chuls burger",
        precio: 90,
        descripcion: "sencilla"
            },
    {   id:13, 
        name: "Charlies burger",
        precio: 95,
        descripcion: "Bbq, tocino y aros de cebolla"
            },
    {   id:14, 
        name: "Champs burger",
        precio: 95,
        descripcion: "Chamiñon, morron y cebolla"
            },
    {   id:15, 
        name: "Maracas burger",
        precio: 95,
        descripcion: "Piña, jamon y salsa maracas"
            },
    {   id:16, 
        name: "Moritas burger",
        precio: 95,
        descripcion: "Chile morita y cebolla caramelizada"
            },
    {   id:17, 
        name: "Americana clasica",
        precio: 95,
        descripcion: "Doble carne, queso gratinado, cebolla y pepinillos"
            },
    {   //hot-dogs   
        id:18, 
        name: "Simple",
        precio: [
            {frankfurt:"frank-furt", precio:65},
            {Bratwurst:"bratwurst", precio:80}
        ],
        descripcion: "Pan, salchicha y mayonesa"
            },
    {   id:19, 
        name: "Chicago",
        precio: [
            {frankfurt:"frank-furt", precio:75},
            {Bratwurst:"bratwurst", precio:90}
        ],
        descripcion: "Paepinillo dulce, pimiento, pimienta y mostaza"
            },
    {   id:20, 
        name: "Pipeco",
        precio: [
            {frankfurt:"frank-furt", precio:90},
            {Bratwurst:"bratwurst", precio:105}
        ],
        descripcion: "Tocino y costra de queso con guacamole, cebolla caramelizada y un jalapeño a la plancha"
            },
    {   id:21, 
        name: "Momia",
        precio: [
            {frankfurt:"frank-furt", precio:80},
            {Bratwurst:"bratwurst", precio:95}
        ],
        descripcion: "Envuelto en queso y tocino"
            },
    {//snacks
            id: "22",
            name: "alitas",
            descripcion:"10 alitas , escoje alguna de nuestras ricas salsas",
            precio:99,
            chicas: 55,
            salsas:["ajo parmesano","lemon peper","bufalo hot","bbq","velvet","frutos rojos","911","maracas (salsa de piña)","mango tango (chile de arbol)","rin rin (tamarindo)","hakuna matata(parmesano cremoso)"]                   
        },
         
        {id:"23", name:"Boneless", descripcion:"boneless (250 gr)", precio:90},
        {id:"24", name:"Pop corn", descripcion:"pop corn (250 gr)", precio:85},
        {id:"25", name:"Dedos de queso", descripcion:"dedos de queso (8 pzas)", precio:80},
        {id:"26", name:"Poppers", descripcion:"jalapeños rellenos de queso philadelphia", precio:80},
        {id:"27", name:"Aros de cebolla", descripcion:" crujientes aros de cebolla (250 gr)", precio:55},
        {id:"28", name:"Papas jago",descripcion:"300 gr", precio:50},
        {id:"29", name:"Papas a la francesa",descripcion:"300 gr", precio:50},
        {id:"30", name:"Papas camote", descripcion:"300 gr", precio:50},
        {id:"31", name:"Texas fries", descripcion:"papas a la francesa con queso, jalapeño y tocino ", precio:75},
    {
        //paquetes
            id: "31",
            precio:99,
            name:"combo",
            descripcion:"escoge dos snacks mas una bebida",
            alitas:"alitas",
            salsas:["ajo parmesano","lemon peper","bufalo hot","bbq","velvet","frutos rojos","911","maracas (salsa de piña)","mango tango (chile de arbol)","rin rin (tamarindo)","hakuna matata(parmesano cremoso)"],
            palomitas:"pop-corn",
            queso:"dedos de queso",
            popers:"popers",
            cebolla:"aros de cebolla",
            gajo:"papas gajo",
            francesa:"papas a la francesa",
            camote:"papas camote"
        },
        {   id: "33",
            precio:145,
            name:"trio",
            descripcion:"arma tu trio perfecto con tres de nuestros ricos snacks",
            alitas:"alitas",
            salsas:["ajo parmesano","lemon peper","bufalo hot","bbq","velvet","frutos rojos","911","maracas (salsa de piña)","mango tango (chile de arbol)","rin rin (tamarindo)","hakuna matata(parmesano cremoso)"],
            palomitas:"pop-corn",
            queso:"dedos de queso",
            popers:"popers",
            cebolla:"aros de cebolla",
            gajo:"papas gajo",
            francesa:"papas a la francesa",
            camote:"papas camote"
        },
        {   id: "34",
            precio:165,
            name:"Party snacks",
            descripcion:"escoge dos de nuestros ricos snacks",
            alitas:"alitas",
            salsas:["ajo parmesano","lemon peper","bufalo hot","bbq","velvet","frutos rojos","911","maracas (salsa de piña)","mango tango (chile de arbol)","rin rin (tamarindo)","hakuna matata(parmesano cremoso)"],
            palomitas:"pop-corn",
            queso:"dedos de queso",
            popers:"popers",
            cebolla:"aros de cebolla",
            gajo:"papas gajo",
            francesa:"papas a la francesa",
            camote:"papas camote"
        },
        {   id: "35",
            precio:80,
            name:"kids",
            descripcion:"para los consentidos de la casa, escoje tres snacks mas un rico jugito",
            alitas:"alitas",
            salsas:["ajo parmesano","lemon peper","bufalo hot","bbq","velvet","frutos rojos","911","maracas (salsa de piña)","mango tango (chile de arbol)","rin rin (tamarindo)","hakuna matata(parmesano cremoso)"],
            palomitas:"pop-corn",
            queso:"dedos de queso",
            popers:"popers",
            cebolla:"aros de cebolla",
            gajo:"papas gajo",
            francesa:"papas a la francesa",
            camote:"papas camote"
        }]
    
const dataOptions = { acompañamientos:
            {   acompañamientoONE: "papas a la francesa",
                acompañamientoTWO: "papas a la gajo",
                acompañamientoTHREE: "papas a camote",
                acompañamientoFOUR: "ensalada"},
        bebidas:
            { 
                cocacola:{refresco:"coca-cola", precio:25},
                seven:{refresco:"seven-up", precio:25},
                fanta:{refresco:"fanta", precio:25},
                modelo:{cerveza:"modelo", precio:35},
                heineken:{heineken:"heniken", precio:35},
                xx:{xx:"xx-lager", precio:35},
                aguaNatural:{agua:"natural", precio:20},
                aguaJamaica:{jamaica:"agua de jamaica", precio:20},
                aguaOrchata:{"orchata":"agua de orchata", "precio":20}
            },
            extras:
                {
                    carne:{"carne":"carne", "precio":35},
                    aguacate:{"avocado":"aguacate", "precio":25},
                    queso:{"extraQueso":"", "precio":25},
                    bacon:{"tocino":"tocino", "precio":35},
                    papasFrancesa:{francesas:"papas a la francesa", "precio":35},
                    papasGajo:{"gajo":"papas gajo", "precio":35},
                    arosCebolla:{"cebolla":"aros de cebolla", "precio":30},
                    texasfries:{"fries":"texas fries", "precio":40}
                }}    

    export {data,dataOptions}

