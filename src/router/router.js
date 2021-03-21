import {data} from '../db/dataItems';
import {getData, getDataTwo} from '../controllers/controller';

let content = document.getElementById('root');
const premium = data.slice(0,4);
const especiales = data.slice(5,11);
const clasicas = data.slice(11,17);
const hotdogs =  data.slice(17,21);
const snacks =  data.slice(21,31);
const paquetes =  data.slice(31);

const router = (route) =>{
        content.innerHTML = '';
    switch (route){
        case '#Premium':
            return content.appendChild(getData(premium));
        case '#Especiales':
            return content.appendChild(getData(especiales));
        case '#Clasicas':
                return content.appendChild(getData(clasicas)); 
        case '#Hot_Dogs':
                return content.appendChild(getDataTwo(hotdogs));
        case '#Snacks':
                return content.appendChild(getData(snacks));
        case '#Paquetes':
                return content.appendChild(getData(paquetes));
        default:
            return console.log('404 not found')                                  
    }
}

export {router}