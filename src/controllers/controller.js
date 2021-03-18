import {data} from '../db/dataItems';
import view from '../views/template.html';

const premium = data.slice(0,4);
const especiales = data.slice(5,11);
const clasicas = data.slice(11,17);
const hotdogs =  data.slice(17,21);
const snacks =  data.slice(21,31);
const paquetes =  data.slice(31);

function getData(data) {
    
    const viewElement = document.createElement('div');
    viewElement.innerHTML = view
    const templateItem = viewElement.querySelector('#items-template').content
    const fragment = document.createDocumentFragment();

    data.forEach(data =>{
        templateItem.querySelector('h5').textContent = data.name;
        templateItem.querySelectorAll('p')[0].textContent = data.descripcion;
        templateItem.querySelectorAll('p')[2].textContent = data.precio;
        const clone = templateItem.cloneNode(true);
        fragment.appendChild(clone)
  })
  return fragment
}

const options = {
    premium : getData(premium),
    especiales: getData(especiales),
    clasicas: getData(clasicas),
    hotdogs: getData(hotdogs),
    snacks: getData(snacks),
    paquetes: getData(paquetes)
}

export {options}