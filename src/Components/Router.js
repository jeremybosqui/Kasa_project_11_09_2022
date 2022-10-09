import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Pages/Error";
import LocationPage from "../Pages/Homes_Component";
// instancier la fonction route en utilisant Router via l'import dans le react-router-dom et l'importer dans la view page qui est App.js et vérifier avec l'index.js que le rendu est bon sinon utiliser directement la page Router.js en rendu à la place de l'import effectué dans App.js
function RouterApp() {
    return (
        <BrowserRouter>
                {/* enveloper le composant Route dans le parent composant Routes pour la new version react */}
                <Routes>
                    <Route path={"/home"} exact={true} element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path={'*'} element={<Error />} />
                    <Route path="/locations/:id" element={<LocationPage />} />
                </Routes>
            {/* <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/locations/:id">
                    <LocationPage />
                </Route>
                <Route render={() => <Error/>}/>
            </Switch> */}
        </BrowserRouter>
    );
}

export default RouterApp
