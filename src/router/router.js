import {options} from '../controllers/index'


const router = (route) =>{
    switch (route){
        case '#Premium':
            return options.premium();
        case '#Especiales':
            return options.especiales();
        case '#Clasicas':
                return options.clasicas(); 
        case '#Hot_Dogs':
                return options.hotdogs();
        case '#Snacks':
                return options.snacks();
        case '#Paquetes':
                return options.paquetes();
        default:
            return console.log('404 not found')                                  
    }
}

export {router}