import React from 'react';
import { ReactComponent as BedroomsQuantityImage } from '../../images/icons/bedrooms-quantity.svg';
import { ReactComponent as BathroomsQuantityImage } from '../../images/icons/bathrooms-quantity.svg';
import { ReactComponent as SqFtImage } from '../../images/icons/sq-ft.svg';
import { ReactComponent as AcreLotImage } from '../../images/icons/acre-lot.svg';


const PropertiesItem = ({propData}) => {
    const { 
        featured_image, 
        property_address_one, 
        property_address_two,
        property_price,
        property_bedrooms_quantity,
        property_bathrooms_quantity,
        property_sq_ft,
        property_acre_lot
     } = propData;

    return (
        <div className="card__wrap--inner properties-container__cards-inner-wrapper">
            <div className="card properties-container__card">
                <img src={featured_image} className="card__image properties-container__image" />
                <div className="card__item card__flexible properties-container__flexible">
                    <div className="properties-container__address-container">
                        <span className="properties-container__address-one">{property_address_one}</span>
                        <span className="properties-container__address-two">{property_address_two}</span>
                    </div>
                    <div className="properties-container__price-container">
                        <span className="properties-container__price">{property_price}</span>
                    </div>
                </div>
                <div className="card__footer properties-container__footer">
                    <div className="properties-container__details-container">
                        <BedroomsQuantityImage className="properties-container__detail-svg-image" />
                        <span className="properties-container__details-text">{property_bedrooms_quantity}</span>
                    </div>
                    <div className="properties-container__details-container">
                        <BathroomsQuantityImage className="properties-container__detail-svg-image" />
                        <span className="properties-container__details-text">{property_bathrooms_quantity}</span>
                    </div>
                    <div className="properties-container__details-container">
                        <SqFtImage className="properties-container__detail-svg-image" />
                        <span className="properties-container__details-text">{property_sq_ft}</span>
                        <span className="properties-container__details-text">Sq Ft</span>
                    </div>
                    <div className="properties-container__details-container">
                        <AcreLotImage className="properties-container__detail-svg-image" />
                        <span className="properties-container__details-text">{property_acre_lot}</span>
                        <span className="properties-container__details-text">Acre lot</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesItem;