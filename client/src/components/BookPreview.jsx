import { useState } from "react";

export default function BookPreview(props) {
    let previewDisplay = 
        <div className="previewDisplay">
            <h3>No preview yet. Search for a book or fill in the info fields.</h3>
        </div>
    
    if (props.title && props.author && props.publisher && props.pubYear && props.imgUrl) {
        previewDisplay = 
            <div className="previewDisplay">
                <div className='preview'>
                    <h3>{props.title} ({props.pubYear})</h3>
                    <p><em>By {props.author}</em></p>
                    <p>Publisher: {props.publisher}</p>
                    <img src={props.imgUrl} alt={props.title} />
                </div>
                <select>
                    <option value=''>--Select a reading status--</option>
                    <option value='Want to Read'>Want to Read</option>
                    <option value='Currently Reading'>Currently Reading</option>
                    <option value='Finished Reading'>Finished Reading</option>
                </select>
                <button>Add Book!</button>
            </div>
    };
    
    return (
        <div className="BookPreviews">
            {previewDisplay}
        </div>
    );
};