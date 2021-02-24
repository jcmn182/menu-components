import {data} from '../db/dataItems'

const getData =  () =>{
const response =  data
return response
}

export default   () =>{
   const data = getData();
   console.log(data.slice(0,4))
}
