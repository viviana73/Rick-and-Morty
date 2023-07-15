import React from 'react';
import Card from '../card/Card';
import style from './cards.module.css';

export default function Cards({characters,onClose}) {
   
   return (
    <div className={style.container} >
	  
      {characters.map(({ id, name, status, species, origin, gender, image }) => {
				return (
					<Card
						key={id}
						id={id}
						name={name}
						status={status}
						species={species}
						gender={gender}
						origin={origin.name}

						image={image}
						onClose={onClose}
					/>
				)
			})}
   </div>);
}
