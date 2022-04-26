import React from 'react';
import { useParams } from 'react-router-dom';

export const OneArticle = () => {

    const param = useParams()

    console.log(param)

    return (
        <div>
            Статья мать вашу!!!
        </div>
    );
};