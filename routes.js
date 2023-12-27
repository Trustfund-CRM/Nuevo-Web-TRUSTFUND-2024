const routes = ['/', '/ConsultasYReclamos', '/InmobiliariasYPropietarios', '/nuestra-garantia', '/ObteneTuGarantia', '/Servicios', '/Promocion'];

function isValidRoute(path){
    return routes.includes(path);
}

module.exports = { routes, isValidRoute };