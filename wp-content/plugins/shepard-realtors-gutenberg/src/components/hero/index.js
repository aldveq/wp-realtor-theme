const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.blockEditor;
const { Button } = wp.components;
import { setDefaultImage } from '../../utilities';

registerBlockType('shepard-realtors/hero', {
    title: 'Hero',
    description: 'Shepard Realtors Hero Image Block', 
    icon: 'format-image',
    category: 'shepard-realtors',
    attributes: {
        heroImage: {
            type: 'string',
            selector: '.hero-image-section'
        },
        heroImageTitle: {
            type: 'string',
            source: 'html', 
            selector: '.hero-image-section h5'
        }, 
        heroImageDescription: {
            type: 'string',
            source: 'html', 
            selector: '.hero-image-section p'
        }
    },  
    edit: (props) => {
        const { attributes: { heroImage, heroImageTitle, heroImageDescription }, setAttributes } = props;

        const getHeroImageTitle = newTitle => {
            setAttributes({heroImageTitle: newTitle});
        }

        const getHeroImageDescription = newDescription => {
            setAttributes({heroImageDescription: newDescription});
        }

        const selectHeroImage = image => {
            setAttributes({heroImage: image.sizes.full.url});
        }

        return(
            <section class="hero-image-section" style={{backgroundImage: `url(${setDefaultImage(heroImage)})`}}>
                <div class="container container-separation-y">
                    <MediaUpload 
                        onSelect={selectHeroImage}
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
                    <h5>
                        <RichText 
                            placeholder="Add your title"
                            onChange={getHeroImageTitle}
                            value={heroImageTitle}
                        />
                    </h5>
                    <p>
                        <RichText 
                            placeholder="Add your description"
                            onChange={getHeroImageDescription}
                            value={heroImageDescription}
                        />
                    </p>
                </div>
            </section>
        )
    },
    save: (props) => {

        const { attributes: { heroImage, heroImageTitle, heroImageDescription } } = props;

        return(
            <section class="hero-image-section" style={{backgroundImage: `url(${setDefaultImage(heroImage)})`}}>
                <div class="container container-separation-y">
                    <h5>
                        <RichText.Content value={heroImageTitle} />
                    </h5>
                    <p>
                        <RichText.Content value={heroImageDescription} />
                    </p>
                </div>
            </section>
        )
    }
});