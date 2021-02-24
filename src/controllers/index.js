import premium from './premium.controller'
import especiales from './especiales.controller'
import clasicas from './clasicas.controller'
import hotdogs from './hotdogs.controller'
import snacks from './snacks.controller'
import paquetes from './paquetes.controller'


const options = {
    premium : premium,
    especiales: especiales,
    clasicas: clasicas,
    hotdogs: hotdogs,
    snacks: snacks,
    paquetes: paquetes
}

export {options}