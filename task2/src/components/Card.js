import React from 'react';

const Card = ({ name, email, id, lname}) => {
  //Displays all the information in a card format
    return (
      <div className='tc grow bg-red br1 pa4 ma2 dib bw1 shadow-10'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div>
		  <h3>{name} {lname}</h3>
		  <h4>{email}</h4>
        </div>
      </div>
    );
  }

export default Card;