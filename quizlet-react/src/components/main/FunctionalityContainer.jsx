import React from 'react';
import search from '../../images/search-icon.png';
import card from '../../images/addcard.png';
import comment from '../../images/comment.png';
import { NavLink } from 'react-router-dom';

export default function FunctionalityContainer() {
  return (
    <div className="block">
        <div className="menu-list__search ">
            <img className="menu-list__search-image" src={search} alt="" />
            <input type="search" className="menu-list__search-input" />
        </div>
 
        <NavLink to='/new-card' className="a-img" title="Add new card" >
        {/* <a className="a-img" href="html/add.html"  title="Add new card"> */}
            <img className="menu-list__search-image" src={card} alt="" />
        {/* </a> */}
        </NavLink>

        <NavLink to='/new-comment ' className="a-img" title="Add comment" >
        {/* <a className="a-img" href="html/comment.html" title="Add comment"> */}
            <img className="menu-list__search-image" src={comment} alt="" />
        {/* </a> */}
        </NavLink>
    </div>
  )
}
