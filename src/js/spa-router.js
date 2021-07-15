    //Importo las distintas vistas de la pagina (archivos .js en view)
    import LandingPage from "./views/LandingPage.js";
    import RegisterView from "./views/RegisterView.js";
    import LoginView from "./views/LoginView.js";
    import FeedView from "./views/FeedView.js";

const spaRouter = {
    router: async () => {
        // Genero las rutas (routes) "/algo" y a donde iran o sea la vista que muestran
        const routes = [
            { path: "/", view: LandingPage },
            { path: "/register", view: RegisterView },
            { path: "/login", view: LoginView },
            { path: "/feed", view: FeedView }
        ];
        // Debo buscar que el boton que se toque lleve a la ruta que indica el boton en href (busco matches)
        const potentialMatches = routes.map(route => {
            return {
                route: route,
                isMatch: location.pathname === route.path
            };
        });

        // potentialMatches entrega busca en todas las ritas y en todas le pone true or false
        // con match buscamos cual de todas es la una true( o sea la unica ruta a la que debe ir)
        let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

        // de no haber un match, o sea quese toque un href que no exista que te lleve al "/" - landingPage
        if (!match) {
            match = {
                route: routes[0],
                isMatch: true
            }
        }

        // genero la vista con la vista entregada por la variable match y la envio al .html
        const view = new match.route.view();
        document.querySelector("#root").innerHTML = await view.getHtml();

    }

};

export default spaRouter;