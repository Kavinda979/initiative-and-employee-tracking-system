import './SearchUser.css'
import Table from './SearchUserCom/Table';
import { Users } from './users';
import React, { useEffect, useState } from "react";

function SearchUser(){
    const[query,setQuery] = useState("");
    const keys=["first_name","last_name","email"];

    const search = (data) => {
        return data.filter((item)=>
            keys.some((key) => item[key].toLowerCase().includes(query))
         );
    };
    
    return(
        <div className='box1'>
            <div className='sbar'>
                <input type='text' 
                placeholder='Search ....' 
                className='search' 
                onChange={(e)=>setQuery(e.target.value)}/>
                <Table data={search(Users)}/>
            </div>   
        </div>
    )
}
export default SearchUser;