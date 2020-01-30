import React, { Component } from 'react';
import Item from '../Item';

export default class List extends Component {
    state = {
        item: [
            { _id: 1, titulo: "Criar APP em Javascript", descricao: "Criar um aplicativo utilizando React, um framework de javascipt", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] },
            { _id: 2, titulo: "Criar APP em React", descricao: "Criar um aplicativo utilizando React, um framework de javascipt", items: ["Aprender Javacript Nativo", "Aprender ES6", "Criar um aplicativo de lista"] }
        ],
    };

    createNewItem(newItem) {
        let item = this.state.item;
        item.push(newItem);
        // this.setState({item: item});
        console.log(this.state.item);
    }

    render() {
        return (
            <div>
                {this.state.item.map(bloco => <Item dados={bloco} />)}
                <button onClick={
                    this.createNewItem({
                        _id: 3,
                        titulo: "Criar APP em React Native",
                        descricao: "Criar um aplicativo utilizando React, um framework de javascipt",
                        items: [
                            "Aprender Javacript Nativo",
                            "Aprender ES6",
                            "Criar um aplicativo de lista"
                        ]
                    })
                }>Adicionar</button>
            </div>
        )
    }
}