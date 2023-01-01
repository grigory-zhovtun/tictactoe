import React from 'react';
import './GameBoard.scss';
import {Square} from "./Square/Square";

type GameBoardPropsType = {
    gameBoard: number[]
}

export const GameBoard = ({gameBoard}: GameBoardPropsType) => {
    const SquaresComponent = gameBoard.map((square, index) => {
        return <Square key={index} squareNumber={index}/>
    })

    return (
        <div className="GameBoard">
            {SquaresComponent}
        </div>
    );
};