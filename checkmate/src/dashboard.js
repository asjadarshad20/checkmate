// dashboard.js
import React, { useState } from 'react';
import ButtonAppBar from './navigation';
import BasicCard from './card';
import "./dashboard.css"

function Dashboard() {
  const [cardCount, setCardCount] = useState(1); // Initial card count

  const handleAddCard = () => {
    setCardCount(prevCount => prevCount + 1); // Increment card count
  };

  const deleteCard = () =>{
    setCardCount(prevCount=> prevCount - 1);
  }

  return (
    <>
      <div className='header'>
        <ButtonAppBar onAddCard={handleAddCard} />
      </div>

      <div className='cardBlock'>
        <div className='cardGrid'>
          {[...Array(cardCount)].map((_, index) => (
            <BasicCard key={index} onDeleteCard={deleteCard} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
