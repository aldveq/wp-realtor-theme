const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.blockEditor;
const { Button } = wp.components;

registerBlockType('shepard-realtors/brand', {
    title: 'Brand', 
    description: 'Shepard Realtors Brand Block', 
    icon: 'superhero-alt',
    category: 'shepard-realtors',
    attributes: {
        brandDescription: {
            type: 'string',
            source: 'html', 
            selector: '.brand-section h6'
        }, 
        brandImage: {
            type: 'string',
            selector: '.brand-section__image'
        },
        brandImageAltText: {
            type: 'string',
            selector: '.brand-section__image'
        }
    },  
    edit: (props) => {
        const { attributes: { brandDescription, brandImage, brandImageAltText }, setAttributes } = props;

        const getBrandDescription = newDescription => {
            setAttributes({brandDescription: newDescription});
        }

        const selectImage = image => {
            setAttributes({brandImage: image.sizes.full.url});
            setAttributes({brandImageAltText: image.alt});
        }

        return(
            <section className="brand-section">
                <div className="container container-separation-y">
                    <MediaUpload 
                        onSelect={selectImage}
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
                    <img src={brandImage} class="brand-section__image" alt={brandImageAltText} />
                    <h6>
                        <RichText 
                            placeholder="Add your brand description"
                            onChange={getBrandDescription}
                            value={brandDescription}
                        />
                    </h6>
                </div>
            </section>
        )
    },
    save: (props) => {

        const { attributes: { brandDescription, brandImage, brandImageAltText } } = props;

        return(
            <section className="brand-section">
                <div className="container container-separation-y">
                    <img src={brandImage} class="brand-section__image" alt={brandImageAltText} />
                    <h6>
                        <RichText.Content value={brandDescription} />
                    </h6>
                </div>
            </section>
        )
    }
});