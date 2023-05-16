import style from './card.module.css'

export default function Card({name, species, gender, image, onClose, status, origin}) {
   return (
      <div className={style.container}>
          <button onClick={onClose} className= {style.buttonX}>X</button>
          <img src={image} className= {style.image} alt='name'/>
         <h2> name:{name}</h2>
         <h2> especie:{species}</h2>
         <h2>genero:{gender}</h2>
         <h2>status:{status}</h2>
         <h2>origen:{origin} </h2>
         
      </div>
   );
}
