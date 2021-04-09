import React from 'react';
import PropertiesItem from '../../components/propertiesItem';

const PropertiesContainer = ({properties, propertiesTitle}) => {
    return (
        <section className="properties-container">
            <div className="container">
                <h2 class="properties-container__main-title">{propertiesTitle}</h2>
                <div class="card__wrap--outer properties-container__cards-wrapper">
                    {properties.map(propData => (
                        <PropertiesItem key={propData.id} propData={propData} />
                    ))}
                </div>
            </div>
        </section>
    );
};  

export default PropertiesContainer;