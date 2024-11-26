// Principal
import Inicio from './Principal/Inicio.svelte'


// Titulacion
import MenuTitulacion from './Titulacion/MenuTitulacion.svelte'
import Pendientes from './Titulacion/Pendientes.svelte'
import Titulados from './Titulacion/Titulados.svelte'


// Componentes
import Login from './Componentes/Login.svelte'
import Perfil from './Componentes/Perfil.svelte'


// Error
import Error404 from './Errores/Error404.svelte'


const routes = {

    // Principal
    '/' : Inicio,

    // Titulacion
    '/MenuTitulacion' : MenuTitulacion,
    '/Pendientes' : Pendientes,
    '/Titulados' : Titulados,

    // Componentes
    '/Login' : Login,
    '/Perfil' : Perfil,

    // Error
    '/*' : Error404

}

export default routes

