import React, { Component, Fragment } from "react";
//'Fragment' nos permite fragmentar partes de código sin generar una nueva división
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import ScatterPlot from "@mui/icons-material/ScatterPlot";

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
ingredients = ["Tortilla", "Carne", "Cebolla"];

contarIngredientes(){
    return this.ingredients.length;
}

    render(){
        //const { params } = this.props.match; ESTO NO ME ESTA FUNCIONANDO
        return (
            // <div className="dish"> {/* Como es una mezcla entre JS y HTML el class de la etiqueta se cambia a className */}
            //     {/*<h1>{params.name}</h1> NO ME ESTA FUNCIONANDO*/}
            //     <h1>{this.props.name}</h1> {/*con 'this.props' se accede a la propiedad que definí en la clase padre*/}
            //     <h3>{this.contarIngredientes()}</h3>

            //     <ul>
            //         {this.ingredients.map(ingredient => (
            //             <li>{ingredient}</li>
            //         ))}
            //     </ul>
            //     {/*<Ingredient/>*/} {/* Se puede añadir un componente del archivo dentro de otro componente,
            //                     Tambien se puede añadir etiquetas vacías para no generar un nuevo div */}
                
            //     <Button variant="contained">Ordenar</Button>

                <Card className="card">
                    <CardContent>
                    <List
                        component="nav"
                        subheader={
                        <ListItem component="div">{this.props.name}</ListItem>
                        }
                    >
                        {this.props.ingredients.map((ingredient, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                            <ScatterPlot />
                            </ListItemIcon>
                            <ListItemText inset primary={ingredient} />
                        </ListItem>
                        ))}
                    </List>
                    </CardContent>
                </Card>
            // </div>
        );
    }
}

export default Dish;