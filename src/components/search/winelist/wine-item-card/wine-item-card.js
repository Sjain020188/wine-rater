import React from "react";
import { Link } from "react-router-dom";
import * as images from "../../../../images";
import no_icon_red from "../../../../images/no_icon_red.png";
import "./wine-item-card.scss";
// TODO: ADD LINK TO CARD OR NAME
// TODO: MIXINS FOR MOBILE..

const wineMap = {
  RED: "RØD",
  WHITE: "HVIT",
  ROSÈ: "ROSÈ",
};
// TODO: FUNCTION
const WineItemCard = props => {
  const image = props.image_url ? props.image_url : no_icon_red;
  return (
    <div className="wine-item">
      <div className="card bg-light">
        <div className="card-header">
          <h4>
            <Link to={"/wines/" + props.id}>{props.name}</Link>
          </h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <p className="wine-info-text">{wineMap[props.type]}</p>
              <p className="wine-info-text">{props.year}</p>
            </div>
            <div className="col-md-3 col-xs-12">
              <p className="wine-info-text">
                {props.wineCountry + props.wineRegion}
              </p>
              <p className="wine-info-text">{props.wineGrape}</p>
            </div>
            <div className="col-md-3 col-xs-12">
              <p className="wine-info-text">Ine: {props.ineRating}</p>
              <p className="wine-info-text">Sander: {props.sanderRating}</p>
            </div>
            <div className="col-md-3 col-xs-12">
              <img className="wine-image" alt="wine" src={image}></img>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              {props.fitsTo &&
                props.fitsTo.map(item => {
                  return (
                    <img
                      className="fits-to-image"
                      src={images[item]}
                      alt="wine"
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineItemCard;
