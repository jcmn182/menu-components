import './main.css';
import './views/styles/menu.style.css'

import {router} from './router/router.js'

router(window.location.hash)

window.addEventListener('hashchange',()=>{
    router(window.location.hash)  
})