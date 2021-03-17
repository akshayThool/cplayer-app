import React from 'react'
import  { useState, useEffect } from 'react'

export default function Card(props) {
  // const[description,setdescription]=useState('');
  // const[id,setid]=useState('');
  // useEffect(() => {
  //  setdescription(props.description);
  //  setid(props.id);
  //     });
  
  const saveFav = () => {
    const newCard={
      author:props.author,
      title:props.title,
      description:props.description,
      url:props.url,
      urlToImage:props.urlToImage
    }
    props.readLater(newCard);
};
    return (
        <div className="card-inline" style={{width:"17rem" ,border:"1px solid black" ,margin:"5px" }}>
        <div className="card-body ">
        <div className="card-image-myimg" ><img className="myimg" src={props.urlToImage}/> </div>
        <p className="card-title" >{props.title}</p>
        <p className="card-author"><b>{props.author}</b></p>
        <button type="submit" className="btn btn-primary" onClick={() => {
                    saveFav();
                }}>
                    Add to Favourites
        </button>
        <button type="submit" className="btn btn-primary" onClick={() => {
                    saveFav();
                }}>
                    Stats
        </button>
      </div>
    </div>
    )
}