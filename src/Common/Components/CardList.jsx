import React from 'react';
import Card from './Card'

export default function CardList(props) {
  return (
    <div className="card-container">
      {/* {props.cards.map(item => (
        <Card key={item.name} item={item} />
      ))} */}
      {props.cards}
    </div>
  )
}