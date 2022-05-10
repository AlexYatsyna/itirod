import React from 'react';
import inst from '../../images/insta.png';
import vk from '../../images/vk.png';

export default function ContactContainer() {
  return (
    <ul className="menu-list"> 
        <li className="menu-list__item">
            <a href='https://www.instagram.com/'>
                <img className="menu-list__search-image" src={inst} alt=""/>
            </a>
        </li>
        <li className="menu-list__item">
            <a href='https://www.vk.com/' >
                <img className="menu-list__search-image" src={vk} alt=""/>
            </a>
        </li>
    </ul>

  )
}
