import React from 'react';
import './Sidebar.css'

function sidebar(){
    return(
     <div className="display1">
        <div className="sideBar">
          <div className="userDetails">
            <img src="user_image.jpg"  className="userImage"></img>
            <div className="userImageDetails">
              <h2>Name</h2>
              <h3>Admin</h3>
            </div>
          </div>
          <div className="sideBarList">
            <ul>
              <li><p>Dashboard</p></li>
              <li><p>Add User</p></li>
              <li><p>Search User</p></li>
              <li><p>Innovative</p></li>
            </ul>
          </div>
        </div>
    </div>
    )
}
export default sidebar;

