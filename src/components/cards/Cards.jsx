import Card from '../card/Card';
import style from './cards.module.css';

export default function Cards({characters}) {
   const onClose = () => window.alert('Emulamos que se cierra la card')
   return (
    <div className={style.container} >
      {characters.map(({ id, name, status, species, origin, gender, image }) => {
				return (
					<Card
						key={id}
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
