import './main.scss';

import {router} from './router/router.js'

router(window.location.hash)

window.addEventListener('hashchange',()=>{
    router(window.location.hash) 
})

