import React from "react";
import NavLink from "../navLink/NavLink";
import SearchBar from "../searchBar/SearchBar";
import style from './nav.module.css';

export default function Nav({onSearch, onRandom}){
    
        return ( <nav className={style.nav}>
            <NavLink to={'/about'} ><span>About</span></NavLink>
            <NavLink to={'/home'}><span>Home</span></NavLink>
            <NavLink to={'/favorites'}><span>Favorites</span></NavLink>
            <SearchBar onSearch={onSearch} onRandom={onRandom}/>
        </nav>
    )}

 
