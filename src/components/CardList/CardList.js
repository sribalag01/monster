import React from 'react';
import Card from '../Card/Card';

function CardList(props) {
const {transfer} = props;
    return (
        <div className="overall">
         {transfer.map(x=>{
             return  <Card  key={x.id} monster={x}></Card>
         })}
    
        </div>
       
       
     
    )
}
export default CardList