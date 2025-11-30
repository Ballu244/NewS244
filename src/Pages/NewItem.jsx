import React from "react";

export default function NewItem(props) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6" >
      <div className="card ">
        <img src={props.pic?props.pic:"/image/noimage.webp"} height={200} className="card-img-top  " alt="..." />
        <div className="card-body">
          <h5 className="card-title " height={200}>{props.title} </h5>
          <div className="card-source">
            <p>{new Date (props.date).toLocaleDateString()}</p>
            <p>{props.source}</p>
          </div>
          <p className="card-text">
           {props.description}
          </p>
          <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary w-100">
           Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
}
