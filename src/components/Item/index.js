import React, { Component } from 'react';
import './styles.css';

export default class Item extends Component {
    render() {

        const dados = this.props.dados;
        console.log(dados);
        return (
            <div className="item">
                <h1>{dados.titulo}</h1>
                <p>{dados.descricao}</p>
                <ul>
                    {dados.items.map(item => <li>{item}</li>)}
                </ul>
                <div className="right-button">
                    <button>+</button>
                </div>
            </div>
        )
    }
}