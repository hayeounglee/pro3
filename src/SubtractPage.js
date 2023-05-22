import React from 'react';
import { useParams } from 'react-router-dom';

const SubtractPage = () => {
    const { a, b } = useParams();

    const result = parseInt(a) - parseInt(b);

    return (
        <div>
            <h1>A - B page</h1>
            <p>{`${a} - ${b} = ${result}`}</p>
        </div>
    );
};

export default SubtractPage;
