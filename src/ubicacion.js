import { readable } from "svelte/store";

let prefijo = 'http://localhost';

let core = prefijo + '/SIE2023/backend/Controller';

let assets = prefijo + '/SIE2023/backend/Assets';

const ubicaciones = {
    'serverUrl':prefijo,
    'core':core,
    'assets':assets
};

export let ubicacion = readable(ubicaciones);