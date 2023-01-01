import React from 'react';
import './App.scss'
import {Button} from "../Button/Button";
import {GameBoard} from "../GameBoard/GameBoard";

export const App = () => {

    const gameBoard = [
        -1, -1, -1,
        -1, -1, -1,
        -1, -1, -1,
    ]

    return (
        <div className="App">
            <Button/>
            <GameBoard gameBoard={gameBoard}/>
        </div>
    );
};