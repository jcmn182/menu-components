import {options} from '../controllers/data.index'
let content = document.getElementById('root');

const router = (route) =>{
        content.innerHTML = '';
    switch (route){
        case '#Premium':
            return content.appendChild(options.premium);
        case '#Especiales':
            return content.appendChild(options.especiales);
        case '#Clasicas':
                return content.appendChild(options.clasicas); 
        case '#Hot_Dogs':
                return content.appendChild(options.hotdogs);
        case '#Snacks':
                return content.appendChild(options.snacks);
        case '#Paquetes':
                return content.appendChild(options.paquetes);
        default:
            return console.log('404 not found')                                  
    }
}

export {router}