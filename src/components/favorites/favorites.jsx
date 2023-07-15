import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Card from '../card/Card'
import { filterCards, orderCards, getFav } from '../redux/action/action'
import { useDispatch } from 'react-redux'

function Favorites({myFavorites}) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFav())
	}, [])
	const handleOrder = (evento) =>{
		dispatch(orderCards(evento.target.value))
	}
	const handleFilter = (evento) =>{
		dispatch(filterCards(evento.target.value))
	}
  return (<div>
	     <div>
			<select name='order' onChange={handleOrder}>
				<option value="A">A</option>
				<option value="D">D</option>
			</select>
			<select name='filter' onChange={handleFilter}>
				<option value= 'All'>All</option>
				<option value= 'Male'>Male</option>
				<option value= 'Female'>Female</option>
				<option value= 'Genderless'>Genderless</option>
				<option value= 'unknown'>unknown</option>
			</select>
		 </div>
	     <div>{myFavorites.map(({id, name, species, gender, image, status, origin})=>
                 (<Card 
						key={id}
						id={id}
						name={name}
						status={status}
						species={species}
						gender={gender}
						origin={origin.name}
						image={image}
					/>))}</div>
  </div>
  
  )
}
export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites);