import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom"; //'BorwserRouter' es el que engloba toda la funcionalidad de Router, 'Route' es donde defino cada ruta y 'Routes' en donde defino por cuales rutas puedo intercambiar
import App from "../App";
import Dishes from "./dishes";
import Dish from "./dish";
import Countries from "./countries";
import NotFound from "./notFound";

const Router = () => (

    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<App/>}/>
            <Route path = "/platillos" element = {<Dishes/>}/> {/* se hace referencia a los componentes respectivos para las diferentes rutas*/}
            <Route path = "/platillo/:name" /*en esta ruta refereciamos el componente Dish, pero tambien podemos acceder al valor que tenemos en 'name'*/ element = {<Dish/>}/>
            <Route exact path = "/paises" element = {<Countries/>}/>
            <Route element = {<NotFound/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router;