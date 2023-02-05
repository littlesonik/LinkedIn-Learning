import React, { Component } from "react";
import Button from '@mui/material/Button';
import Restaurant from "@mui/icons-material/Restaurant";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import data from "../assets/data/dishes.json";
import Dish from "./dish.js";

export class Dishes extends Component {
    goBack = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {
        return (
        <div>
            <h1>Platillos</h1>
            <Button variant="contained" color = "secondary" 
            onClick = {this.goBack}>
                Regresar
            </Button>

            {/* {data.dishes.map(dish => (
            <div>
                <div>{dish.name}</div>
                <div>{dish.ingredients}</div>
                <br />
            </div>
            ))} */}

        {/* <List
            component="nav"
            subheader={<ListSubheader component="div">Platillos</ListSubheader>}
            >
            {data.dishes.map((dish, index) => (
                <ListItem button key={index}>
                <ListItemIcon>
                    <Restaurant />
                </ListItemIcon>
                <ListItemText inset primary={dish.name} />
                </ListItem>
            ))}
        </List> */}
        <List
            component="nav"
            subheader={<ListItem component="div">Platillos</ListItem>}
            >
            {data.dishes.map((dish, index) => (
                <Dish key={index} name={dish.name} ingredients={dish.ingredients} />
            ))}
        </List>
        </div>
        );
    }
}

export default Dishes;
