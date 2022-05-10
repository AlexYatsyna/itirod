import React from 'react'

export default function CommentContainer(props) {
  return (
    <div>
        <hr/>
        
        <div className="comment-block">      
             <p className="category-form__name">Comments:</p>        
        </div>

        <ul id="comments-table">
            {props.data.map((comment) => {
                return (
                    <li className="comment-element" key={comment.id}>
                        <article className="comment-card">
                            <p className="comment-card__name">
                                User email
                            </p>
                            <p className="comment-card__text">
                                {comment.message}
                            </p>
                        </article>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
