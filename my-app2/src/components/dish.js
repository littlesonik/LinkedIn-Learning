import React, { Component, Fragment } from "react";
//'Fragment' nos permite fragmentar partes de código sin generar una nueva división

//Se recomienda un componente por archivo
//Esto solo se recomienda solo si hay pequeñas lineas de código que no se utilizarán demasiado

export class Flag extends Component {
    render(){
        return (
            <div>
                <h1>Bandera</h1>
            </div>
        )
    };
}

export class Ingredient extends Component {
    render(){
        return (
            <Fragment> {/* al agregar estas etiquetas, solo importo el h1, sin generar una nueva división en el componente padre */}
                <h4>Ingrediente</h4>
                <h4>Ingrediente</h4>
            </Fragment>
        )
    };
}


class Dish extends Component {
    render(){
        return (
            <div>
                <h1>Platillo 1</h1>
                <Ingredient/> {/* Se puede añadir un componente del archivo dentro de otro componente,
                                Tambien se puede añadir etiquetas vacías para no generar un nuevo div */}
            </div>
        );
    }
}

export default Dish;