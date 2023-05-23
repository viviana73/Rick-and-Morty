import React from "react";
import SearchBar from "../searchBar/SearchBar";
import style from './nav.module.css';

export default function Nav({onSearch, onRandom}){
    
        return ( <nav className={style.nav}>
            <SearchBar onSearch={onSearch} onRandom={onRandom}/>
        </nav>
    )}

 
