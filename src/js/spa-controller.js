import spaRouter from "./spa-router.js";
const router = spaRouter.router;

// necesito que la pagina se este fijando cuando se hace click en cualquier link con la extencion data-link
document.addEventListener("DOMContentLoaded", () => {
    // watches for the links que tienen "datalink", es el event listener de cuando hago click en algun datalink (its delegated)
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    // run the function for the routes
    router();
});

// La navegacion debe guardar el history api, o sea que se pueda retroceder y avanzar en las paginas y quede guardado
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// popstate se refiere a que cuando navego las historias debo volver a recorrer la funcion router
window.addEventListener("popstate", router);
