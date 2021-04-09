const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, InspectorControls } = wp.blockEditor;
const { Button, PanelBody, TextControl } = wp.components;
import { setDefaultImage } from '../../utilities';

registerBlockType('shepard-realtors/house-card', {
    title: 'House Card', 
    description: 'Shepard Realtors House Card Block', 
    icon: 'admin-home',
    category: 'shepard-realtors',
    attributes: {
        houseLocation: {
            type: 'string',
            source: 'html', 
            selector: 'p.card-house__location'
        }, 
        houseImage: {
            type: 'string',
            selector: '.card-house__image'
        },
        houseImageAltText: {
            type: 'string',
            selector: '.card-house__image'
        },
        buttonText: {
            type: 'string',
            default: 'View Listings'
        }
    },  
    edit: (props) => {
        const { attributes: { houseLocation, houseImage, houseImageAltText, buttonText }, setAttributes } = props;

        const getHouseLocation = newHouseLocation => {
            setAttributes({houseLocation: newHouseLocation});
        }

        const selectHouseImage = newHouseImage => {
            setAttributes({houseImage: newHouseImage.sizes.full.url});
            setAttributes({houseImageAltText: newHouseImage.alt});
        }

        const getButtonText = newButtonText => {
            setAttributes({buttonText: newButtonText});
        }

        return(
            <>
                <InspectorControls>
                    <PanelBody title={'Button Settings'} initialOpen={true}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <TextControl 
                                    onChange={getButtonText}
                                    value={buttonText}
                                />
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>
                <div className="card card-house">
                    <MediaUpload 
                        onSelect={selectHouseImage}
                        type='image'
                        render={({open}) => (
                            <Button 
                                className="upload-button-image"
                                onClick={open}
                                icon="format-image"
                                showTooltip="true"
                                label="Change image"
                            />
                        )}
                    />
                    <img src={setDefaultImage(houseImage)} className="card-house__image" alt={houseImageAltText} />
                    <div className="card__item card__flexible">
                        <p className="card-house__location">
                            <RichText 
                                placeholder="Add location"
                                onChange={getHouseLocation}
                                value={houseLocation}
                            />
                        </p>
                    </div>
                    <div className="card__footer card-house__footer">
                        <button className="button button__outline button__outline--small">{buttonText}</button>
                    </div>
                </div>
            </>
        )
    },
    save: (props) => {

        const { attributes: { houseLocation, houseImage, houseImageAltText, buttonText } } = props;

        return(
            <div className="card card-house">
                <img src={setDefaultImage(houseImage)} className="card-house__image" alt={houseImageAltText} />
                <div className="card__item card__flexible">
                    <p className="card-house__location">
                        <RichText.Content value={ houseLocation } />
                    </p>
                </div>
                <div className="card__footer card-house__footer">
                    <button className="button button__outline button__outline--small">{buttonText}</button>
                </div>
            </div>
        )
    }
});