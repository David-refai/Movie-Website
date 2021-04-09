import React from 'react'

export default function Rating(props) {
    const {rating} = props;
    return (
        <div>
             <div className="rating">
            <span><i className={rating >= 1 ?"fa fa-star" : rating >=0.5? "fa fa-star-half-alt": "fa fa-star-o"}></i></span>
            <span><i className={rating >= 2 ?"fa fa-star" : rating >=1.5? "fa fa-star-half-alt": "fa fa-star-o"}></i></span>
            <span><i className={rating >= 3 ?"fa fa-star" : rating >=2.5? "fa fa-star-half-alt": "fa fa-star-o"}></i></span>
            <span><i className={rating >= 4 ?"fa fa-star" : rating >=3.5? "fa fa-star-half-alt": "fa fa-star-o"}></i></span>
            <span><i className={rating >= 5 ?"fa fa-star" : rating >=4.5? "fa fa-star-half-alt": "fa fa-star-o"}></i></span>
            <span><i className={rating >= 6 ?"fa fa-star" : rating >=5.5? "fa fa-star-half-alt": "fa fa-star-o"}></i></span>
            <span><i className={rating >= 7 ?"fa fa-star" : rating >=6.5? "fa fa-star-half-alt": "fa fa-star-o"}></i></span>
            <span><i className={rating >= 8 
                ?'fa fa-star' 
                : rating >=7.5
                ? 'fa fa-star-half-alt'
                : 'fa fa-star-o'}></i>
                </span>
           <span>{rating + '  Rating'}</span>
         </div>
        </div>
    )
}
