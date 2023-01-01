import React, {useState} from 'react';
import './Square.scss';
import './../../style/_shapes.scss';

type SquarePropsType = {
    squareNumber: number
}

export const Square = ({squareNumber}: SquarePropsType) => {

    let [classNames,setClassNames] = useState("Square")

    const onClickHundler = () => {
        classNames += " Zero";
        setClassNames(classNames)
    }

    return (
        <div className={classNames}
            onClick={onClickHundler}
        >

        </div>
    );
};