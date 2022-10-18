import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Pages/Error";
import LocationPage from "../Pages/HomesLocation";
// instancier la fonction route en utilisant Router via l'import dans le react-router-dom et l'importer dans la view page qui est App.js et vérifier avec l'index.js que le rendu est bon sinon utiliser directement la page Router.js en rendu à la place de l'import effectué dans App.js


function RouterApp() {
    return (
        <BrowserRouter>
                {/* enveloper le composant Route dans le parent composant Routes pour la new version react */}
                <Routes>
                    <Route path= {"/home"}  exact={true} element={<Home title="Home" />} />
                    <Route path= {"/about"} exact={true} element={<About title="About"  />} />
                    <Route path= {"/"}  exact={true} element={<Home />} />
                    <Route path= {"*"} element={<Error />} />
                    <Route path= {"/locations/:id/*"} exact={true}  element={<LocationPage />} />
                </Routes>
        </BrowserRouter>
    );
}

export default RouterApp