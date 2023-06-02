import React from 'react'
import { connect } from 'react-redux'
import Card from '../cards/Cards'

function favorites({myFavorites}) {
  return (
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
  )
}
export function mapStateToProops(state){
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProops)(favorites);