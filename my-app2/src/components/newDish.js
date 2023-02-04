import React, { Component, createRef } from "react";
import { Fab, TextField } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

class NewDish extends Component {

    //constructor() {
    //  super(); //con el super accedo a las opciones disponibles en Component pero desde esta clase
    //this.addDish = this.addDish.bind(this); //con el bind ligo la clase (this) al metodo
    //}

    newDish = createRef(); //

    addDish = event => {
        console.log("Agregar platillo");
        event.preventDefault(); {/*Con esto se evita que la pagina se recargue al activar onSubmit y se pierda la informacion*/}
        // console.log(this.newDish.current.value); //para usarlo con el input nativo de HTML
        console.log(this.newDish.value); {/*Al utilizar este metodo como una Arrow Function se puede acceder a la función 'this' porque accedemos directamente a la aplicación*/}
        //aqui podemos ver el valor que ingresamos en el input
    }

    render() {
    return (
        <form autoComplete="off" onSubmit={this.addDish}> {/*onSubmit se activa al pulsar Enter en el teclado*/}
            {/* <input ref={this.newDish} /> */}  
            
            <TextField
            label="Platillo..."
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={e => (this.newDish = e)} //aqui obtenemos acceso al valor que ingresamos en el input
            />
            <Fab color="primary" size="medium"
            className="dish-form-icon" onClick={this.addDish}> {/*Dentro del componente Fab, al hacer click se ejecuta el metodo addDish*/}
                <AddIcon />
            </Fab>
        </form>
        );
    }
}

export default NewDish;
