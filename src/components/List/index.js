import React, { Component } from 'react';
import Item from '../Item';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
                { _id: 1, titulo: "Javascript", descricao: "Linguagem de programação", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] },
                { _id: 2, titulo: "React", descricao: "Framework do javascript", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] }
            ],
            newItem: {},
        };
        this.createNewItem = this.createNewItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.verificaEstado = this.verificaEstado.bind(this);
        this.addItemLista = this.addItemLista.bind(this);
    }

    createNewItem() {
        let newItem = this.state.item.concat(this.state.newItem);
        this.setState({ item: newItem });
    }

    handleChange(event) {
        this.setState({ newItem: JSON.parse(event.target.value) });
        console.log(this.state.newItem);
    }
    verificaEstado() {
        console.log("Verifica state", this.state)
    }
    addItemLista(novoItem, id) {
        console.log("Objeto: ", novoItem);
        console.log("id", id);
        let oldItem = this.state.item.filter(item => item._id !== id).concat(novoItem);
        console.log("Item filtrado pelo ID: " + id, oldItem);
        console.log("novoItem após alteração" + id, novoItem);
        oldItem.sort((a,b) => a - b);
        this.setState({item: oldItem});
    }

    render() {
        return (
            <div>
                {this.state.item.map(bloco => <Item dados={bloco} addItem={this.addItemLista} />)}
                <input onChange={this.handleChange} />
                <button onClick={this.createNewItem}>Adicionar</button>
                <button onClick={this.verificaEstado}>Verifica State</button>
            </div>
        )
    }
}