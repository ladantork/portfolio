import React from 'react';
function Card({title, title2, content}){
    return(
        <div >
        <h1>{title}</h1>
        <h2>{title2}</h2>
        <p>{content}</p>
       
        </div>
    );

};
export default Card;