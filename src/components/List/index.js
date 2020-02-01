import React, { Component } from 'react';
import Item from '../Item';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
                { _id: 1, titulo: "Criar APP em Javascript", descricao: "Criar um aplicativo utilizando React, um framework de javascipt", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] },
                { _id: 2, titulo: "Criar APP em React", descricao: "Criar um aplicativo utilizando React, um framework de javascipt", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] }
            ],
            newItem: {},
        };
        this.createNewItem = this.createNewItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.verificaEstado = this.verificaEstado.bind(this);
    }

    createNewItem() {
        // let newItem = { _id: 3, titulo: "Criar APP em React Native", descricao: "Criar um aplicativo utilizando React, um framework de javascipt", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] };
        let newItem = this.state.item.concat(this.state.newItem);
        this.setState({item: newItem});
        console.log("State: ");
        console.log(this.state.item);
        // console.log("Item: ");
        // console.log(item);
        console.log("newItem: ");
        console.log(this.state.newItem);
    }

    handleChange(event){
        this.setState({newItem: JSON.parse(event.target.value)});
        console.log(this.state.newItem);
    }
    verificaEstado(){
        console.log("Verifica state", this.state)
    }

    render() {
        return (
            <div>
                {this.state.item.map(bloco => <Item dados={bloco} />)}
                <input onChange={this.handleChange} />
                <button onClick={this.createNewItem}>Adicionar</button>
                <button onClick={this.verificaEstado}>Verifica State</button>
            </div>
        )
    }
}