import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TittleContainer() {
    return (
        <div className="header-item">
            <NavLink to='/' className="header-item__title">Quizlet</NavLink>
            {/* <a href='' className="header-item__title">Quizlet</a> */}
        </div>
  )
}
