import React from 'react';
function Card({title, content}){
    return(
        <div >
        <h1>{title}</h1>
        <p>{content}</p>
        </div>
    );

};
export default Card;