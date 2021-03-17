import {data} from '../db/dataItems';
import view from '../views/template.html';

const viewElement = document.createElement('div');
viewElement.innerHTML = view
const templateItem = viewElement.querySelector('#items-template').content
const response =  data.slice(0,4)
const fragment = document.createDocumentFragment();


export default   () =>{
   
   response.forEach(data =>{
      templateItem.querySelector('h5').textContent = data.name;
      templateItem.querySelectorAll('p')[0].textContent = data.descripcion;
      templateItem.querySelectorAll('p')[2].textContent = data.precio;
      const clone = templateItem.cloneNode(true);
      fragment.appendChild(clone)
})
   return fragment
}
