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
            alitas:{
            cinco:55,
            diez: 99,
            salsas:["ajo parmesano","lemon peper","bufalo hot","bbq","velvet","frutos rojos","911","maracas (salsa de piña)","mango tango (chile de arbol)","rin rin (tamarindo)","hakuna matata(parmesano cremoso)"]                   
        },
        snacks:[ 
        {boneless:"boneless (250 gr)", precio:90},
        {popCorn:"pop corn (250 gr)", precio:85},
        {queso:"dedos de queso (8 pzas)", precio:80},
        {poppers:"poppers , jalapeños rellenos de queso philadelphia", precio:80},
        {cebolla:"aros de cebolla (250 gr)", precio:55},
        {gajo:"papas gajo (300 gr)", precio:50},
        {francesa:"papas a la francesa (300 gr)", precio:50},
        {camote:"papas camote (300 gr)", precio:50},
        {fries:"texas fries (papas a la francesa con queso, jalapeño y tocino ", precio:75}]}
    ,
    {
        //paquetes
            id: "23",
            precio:99,
            paquete:"combo",
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
        {   id: "24",
            precio:145,
            paquete:"combo",
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
        {   id: "25",
            precio:165,
            paquete:"combo",
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
        {   id: "26",
            precio:80,
            paquete:"combo",
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
    

    export {data}

