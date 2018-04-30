import React, { Component } from 'react';
import Card from './Card.js';
import { Button } from 'antd';
import './App.css';


const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

const color = [
    { id: 1, color: 'RED' },
    { id: 2, color: 'RED' },
    { id: 3, color: 'BLUE' },
    { id: 4, color: 'BLUE' },
    { id: 5, color: 'GREEN' },
    { id: 6, color: 'GREEN' },
    { id: 7, color: 'PURPLE' },
    { id: 8, color: 'PURPLE' },
    { id: 9, color: 'PINK' },
    { id: 10, color: 'PINK' },
];

class Portfolio extends Component {
    state = {
        color: shuffle(color)
    };
    handleClick = () => {
        this.setState({
            color: shuffle(color)
        });
    }


    render() {
        const { color } = this.state;
        const cards = color.map(c => <Card id={c.id} color={c.color} />
        );
        return (
            <div className="container">


                {cards}
                <div style={{ marginTop: 20, textAlign: 'center' }}>
                    <button type="primary"
                        onClick={this.handleClick}
                        className="new-deck"
                    >
                        NEW DECK
                    </button>
                    <h1 className="Colorf">ENJOIN YOUR CARD</h1>

                </div>

            </div>

        );
    }
}

export default Portfolio;