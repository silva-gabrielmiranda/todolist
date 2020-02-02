import React, { Component } from 'react';

import './styles.css';

export default class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            novoItemList: "",
        }
        this.addItem = this.addItem.bind(this);
        this.inputHandle = this.inputHandle.bind(this);
    }

    addItem(){
        this.props.addItem({ "_id": this.props.dados._id, "titulo": this.props.dados.titulo, "descricao": this.props.dados.descricao, "items": this.props.dados.items.concat(this.state.novoItemList) }, this.props.dados._id)
    }
    inputHandle(event){
        this.setState({ novoItemList: event.target.value });
    }

    render() {

        const dados = this.props.dados;
        return (
            <div className="item">
                <h1>{dados.titulo}</h1>
                <p>{dados.descricao}</p>
                <ul>
                    {dados.items.map(item => <li>{item}</li>)}
                </ul>
                <input onChange={this.inputHandle}></input>
                <div className="right-button">
                    <button onClick={this.addItem}>+</button>
                </div>
            </div>
        )
    }
}