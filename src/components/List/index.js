import React, { Component } from 'react';
import Item from '../Item';

export default class List extends Component {
    state = {
        item: { titulo: "Criar APP em React", descricao: "Criar um aplicativo utilizando React, um framework de javascipt", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] },
    };
    render() {
        return (
            <div>
                <Item dados={this.state.item} />
                <Item dados={this.state.item} />
                <Item dados={this.state.item} />
                <Item dados={this.state.item} />
                <Item dados={this.state.item} />
            </div>
        )
    }
}