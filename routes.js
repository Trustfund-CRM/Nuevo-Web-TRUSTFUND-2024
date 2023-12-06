const routes = ['/', '/ConsultasYReclamos', '/InmobiliariasYPropietarios', '/nuestra-garantia', '/ObteneTuGarantia', '/Promocion'];

function isValidRoute(path){
    return routes.includes(path);
}

module.exports = { routes, isValidRoute };