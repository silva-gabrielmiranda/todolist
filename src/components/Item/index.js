import React, { Component } from 'react';
import './styles.css';

export default class Item extends Component {
    handleChange(event){
        console.log("Mudança - Checkbox");
    }
    render() {

        const dados = this.props.dados;

        return (
            <div className="item">
                <h1>{dados.titulo}</h1>
                <p>{dados.descricao}</p>
                <ul>
                    { dados.items.map(item => <li><input type="checkbox" onChange={this.handleChange}/>{item}</li>) }
                </ul>
            </div>
        )
    }
}