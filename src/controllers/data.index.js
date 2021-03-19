import {data} from '../db/dataItems';
import {getData} from './controller'




const options = {
    premium : getData(premium),
    especiales: getData(especiales),
    clasicas: getData(clasicas),
    hotdogs: getData(hotdogs),
    snacks: getData(snacks),
    paquetes: getData(paquetes)
}

const premium = data.slice(0,4);
const especiales = data.slice(5,11);
const clasicas = data.slice(11,17);
const hotdogs =  data.slice(17,21);
const snacks =  data.slice(21,31);
const paquetes =  data.slice(31);

export {options}