import React from 'react'
import { NavLink } from 'react-router-dom';

export default function CategoryContainer(props) {
    return (
        <ul className="table">
          {props.data.map((category) => {
              let path = '/category/' + category.id;
              return (
                <li className="table-item" key={category.id}>
                    <NavLink to={path} className="table-item__category" id={category.id}>
                    {/* <a href="/category" className="table-item__category"> */}
                            <p className="category-form__name">{category.name}</p>
                            <p className="category-form__description">
                                {category.description}
                            </p>
                    {/* </a> */}
                    </NavLink>
                </li>
              )
          })}      
        </ul>
    )
}
