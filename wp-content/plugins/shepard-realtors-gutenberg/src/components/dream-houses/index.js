const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInputButton, InspectorControls } = wp.blockEditor;
// const LinkControl = __experimentalLinkControl;
const { Button, PanelBody } = wp.components;
import { setDefaultImage } from '../../utilities';

registerBlockType('shepard-realtors/dream-houses', {
    title: 'Dream Houses',
    description: 'Shepard Realtors Dream Houses Block', 
    icon: 'admin-multisite',
    category: 'shepard-realtors',
    attributes: {
        dreamHouseDescriptionOne: {
            type: 'string',
            source: 'html', 
            selector: '#dreamHouseDescriptionOne'
        },
        dreamHouseDescriptionTwo: {
            type: 'string',
            source: 'html', 
            selector: '#dreamHouseDescriptionTwo'
        },
        dreamHouseDescriptionThree: {
            type: 'string',
            source: 'html', 
            selector: '#dreamHouseDescriptionThree'
        },
        dreamHouseImageOne: {
            type: 'string',
            selector: '#dreamHouseImageOne'
        },
        dreamHouseImageOneAltText: {
            type: 'string',
            selector: '#dreamHouseImageOne'
        },
        dreamHouseImageTwo: {
            type: 'string',
            selector: '#dreamHouseImageTwo'
        },
        dreamHouseImageTwoAltText: {
            type: 'string',
            selector: '#dreamHouseImageTwo'
        },
        dreamHouseImageThree: {
            type: 'string',
            selector: '#dreamHouseImageThree'
        },
        dreamHouseImageThreeAltText: {
            type: 'string',
            selector: '#dreamHouseImageThree'
        },
        dreamHouseLinkOne: {
            type: 'string',
            source: 'attribute',
            attribute: 'href'
        },
        dreamHouseLinkTwo: {
            type: 'string',
            source: 'attribute',
            attribute: 'href'
        },
        dreamHouseLinkThree: {
            type: 'string',
            source: 'attribute',
            attribute: 'href'
        },
        dreamHouseLinkTitleOne: {
            type: 'string',
            selector: '#dreamHouseLinkTitleOne'
        },
        dreamHouseLinkTitleTwo: {
            type: 'string',
            selector: '#dreamHouseLinkTitleTwo'
        },
        dreamHouseLinkTitleThree: {
            type: 'string',
            selector: '#dreamHouseLinkTitleThree'
        }
    },  
    edit: (props) => {
        const { 
            attributes: { 
                dreamHouseDescriptionOne, 
                dreamHouseDescriptionTwo, 
                dreamHouseDescriptionThree, 
                dreamHouseImageOne, 
                dreamHouseImageOneAltText, 
                dreamHouseImageTwo, 
                dreamHouseImageTwoAltText,
                dreamHouseImageThree, 
                dreamHouseImageThreeAltText,
                dreamHouseLinkOne,
                dreamHouseLinkTwo,
                dreamHouseLinkThree,
                dreamHouseLinkTitleOne,
                dreamHouseLinkTitleTwo,
                dreamHouseLinkTitleThree
            }, 
            setAttributes 
        } = props;

        const getDreamHouseDescriptionOne = textOne => {
            setAttributes({dreamHouseDescriptionOne: textOne});
        }

        const getDreamHouseDescriptionTwo = textTwo => {
            setAttributes({dreamHouseDescriptionTwo: textTwo});
        }

        const getDreamHouseDescriptionThree = textThree => {
            setAttributes({dreamHouseDescriptionThree: textThree});
        }

        const selectDreamHouseImageOne = imageOne => {
            setAttributes({dreamHouseImageOne: imageOne.sizes.full.url});
            setAttributes({dreamHouseImageOneAltText: imageOne.alt});
        }

        const selectDreamHouseImageTwo = imageTwo => {
            setAttributes({dreamHouseImageTwo: imageTwo.sizes.full.url});
            setAttributes({dreamHouseImageTwoAltText: imageTwo.alt});
        }

        const selectDreamHouseImageThree = imageThree => {
            setAttributes({dreamHouseImageThree: imageThree.sizes.full.url});
            setAttributes({dreamHouseImageThreeAltText: imageThree.alt});
        }

        const getDreamHouseLinkOne = linkOne => {
            setAttributes({dreamHouseLinkOne: linkOne});
        }

        const getDreamHouseLinkTwo = linkTwo => {
            setAttributes({dreamHouseLinkTwo: linkTwo});
        }

        const getDreamHouseLinkThree = linkThree => {
            setAttributes({dreamHouseLinkThree: linkThree});
        }

        const getDreamHouseLinkTitleOne = linkTitleOne => {
            setAttributes({dreamHouseLinkTitleOne: linkTitleOne});
        }

        const getDreamHouseLinkTitleTwo = linkTitleTwo => {
            setAttributes({dreamHouseLinkTitleTwo: linkTitleTwo});
        }

        const getDreamHouseLinkTitleThree = linkTitleThree => {
            setAttributes({dreamHouseLinkTitleThree: linkTitleThree});
        }

        return(
            <>
                <InspectorControls>
                    
                    <PanelBody title={'Link Options One'} initialOpen={true}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">
                                    Link Options One
                                </label>
                                <URLInputButton 
                                    onChange={getDreamHouseLinkOne}
                                    url={dreamHouseLinkOne}
                                />
                                <RichText 
                                    placeholder="Add link title"
                                    onChange={getDreamHouseLinkTitleOne}
                                    value={dreamHouseLinkTitleOne}
                                />
                            </div>
                        </div>
                    </PanelBody>

                    <PanelBody title={'Link Options Two'} initialOpen={false}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">
                                    Link Options Two
                                </label>
                                <URLInputButton 
                                    onChange={getDreamHouseLinkTwo}
                                    url={dreamHouseLinkTwo}
                                />
                                <RichText 
                                    placeholder="Add link title"
                                    onChange={getDreamHouseLinkTitleTwo}
                                    value={dreamHouseLinkTitleTwo}
                                />
                            </div>
                        </div>
                    </PanelBody>

                    <PanelBody title={'Link Options Three'} initialOpen={false}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">
                                    Link Options Three
                                </label>
                                <URLInputButton 
                                    onChange={getDreamHouseLinkThree}
                                    url={dreamHouseLinkThree}
                                />
                                <RichText 
                                    placeholder="Add link title"
                                    onChange={getDreamHouseLinkTitleThree}
                                    value={dreamHouseLinkTitleThree}
                                />
                            </div>
                        </div>
                    </PanelBody>

                </ InspectorControls>
                <div className="card__wrap--outer">

                    <div className="card__wrap--inner">
                        <div className="card">
                            <MediaUpload 
                                onSelect={selectDreamHouseImageOne}
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
                            <img src={setDefaultImage(dreamHouseImageOne)} className="card__image" id="dreamHouseImageOne" alt={dreamHouseImageOneAltText} />
                            <div className="card__item card__flexible">
                                <p id="dreamHouseDescriptionOne">
                                    <RichText 
                                        placeholder="Add your description"
                                        onChange={getDreamHouseDescriptionOne}
                                        value={dreamHouseDescriptionOne}
                                    />
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href={dreamHouseLinkOne} className="button button__outline button__icon button__outline--right-arrow card__button" target="_self" id="dreamHouseLinkTitleOne">{dreamHouseLinkTitleOne}<span></span></a>
                            </div>
                        </div>
                    </div>
    
                    <div className="card__wrap--inner">
                        <div className="card">
                            <MediaUpload 
                                onSelect={selectDreamHouseImageTwo}
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
                            <img src={setDefaultImage(dreamHouseImageTwo)} className="card__image" id="dreamHouseImageTwo" alt={dreamHouseImageTwoAltText} />
                            <div className="card__item card__flexible">
                                <p id="dreamHouseDescriptionTwo">
                                    <RichText 
                                        placeholder="Add your description"
                                        onChange={getDreamHouseDescriptionTwo}
                                        value={dreamHouseDescriptionTwo}
                                    />
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href={dreamHouseLinkTwo} className="button button__outline button__icon button__outline--right-arrow card__button" target="_self" id="dreamHouseLinkTitleTwo">{dreamHouseLinkTitleTwo}<span></span></a>
                            </div>
                        </div>
                    </div>
    
                    <div className="card__wrap--inner">
                        <div className="card">
                            <MediaUpload 
                                onSelect={selectDreamHouseImageThree}
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
                            <img src={setDefaultImage(dreamHouseImageThree)} className="card__image" id="dreamHouseImageThree" alt={dreamHouseImageThreeAltText} />
                            <div className="card__item card__flexible">
                                <p id="dreamHouseDescriptionThree">
                                    <RichText 
                                        placeholder="Add your description"
                                        onChange={getDreamHouseDescriptionThree}
                                        value={dreamHouseDescriptionThree}
                                    />
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href={dreamHouseLinkThree} className="button button__outline button__icon button__outline--right-arrow card__button" target="_self" id="dreamHouseLinkTitleThree">{dreamHouseLinkTitleThree}<span></span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    },
    save: (props) => {

        const { 
            attributes: { 
                dreamHouseDescriptionOne, 
                dreamHouseDescriptionTwo, 
                dreamHouseDescriptionThree, 
                dreamHouseImageOne, 
                dreamHouseImageOneAltText, 
                dreamHouseImageTwo, 
                dreamHouseImageTwoAltText,
                dreamHouseImageThree, 
                dreamHouseImageThreeAltText,
                dreamHouseLinkOne,
                dreamHouseLinkTwo,
                dreamHouseLinkThree,
                dreamHouseLinkTitleOne,
                dreamHouseLinkTitleTwo,
                dreamHouseLinkTitleThree
            }
        } = props;

        return(
            <div className="card__wrap--outer">

                <div className="card__wrap--inner">
                    <div className="card">
                        <img src={setDefaultImage(dreamHouseImageOne)} className="card__image" id="dreamHouseImageOne" alt={dreamHouseImageOneAltText} />
                        <div className="card__item card__flexible">
                            <p id="dreamHouseDescriptionOne">
                                <RichText.Content value={dreamHouseDescriptionOne} />
                            </p>
                        </div>
                        <div className="card__footer">
                            <a href={dreamHouseLinkOne} className="button button__outline button__icon button__outline--right-arrow card__button" target="_self" id="dreamHouseLinkTitleOne">{dreamHouseLinkTitleOne}<span></span></a>
                        </div>
                    </div>
                </div>
                    
                <div className="card__wrap--inner">
                    <div className="card">
                        <img src={setDefaultImage(dreamHouseImageTwo)} className="card__image" id="dreamHouseImageTwo" alt={dreamHouseImageTwoAltText} />
                        <div className="card__item card__flexible">
                            <p id="dreamHouseDescriptionTwo">
                                <RichText.Content value={dreamHouseDescriptionTwo} />
                            </p>
                        </div>
                        <div className="card__footer">
                            <a href={dreamHouseLinkTwo} className="button button__outline button__icon button__outline--right-arrow card__button" target="_self" id="dreamHouseLinkTitleTwo">{dreamHouseLinkTitleTwo}<span></span></a>
                        </div>
                    </div>
                </div>
                    
                <div className="card__wrap--inner">
                    <div className="card">
                        <img src={setDefaultImage(dreamHouseImageThree)} className="card__image" id="dreamHouseImageThree" alt={dreamHouseImageThreeAltText} />
                        <div className="card__item card__flexible">
                            <p id="dreamHouseDescriptionThree">
                                <RichText.Content value={dreamHouseDescriptionThree} />
                            </p>
                        </div>
                        <div className="card__footer">
                            <a href={dreamHouseLinkThree} className="button button__outline button__icon button__outline--right-arrow card__button" target="_self" id="dreamHouseLinkTitleThree">{dreamHouseLinkTitleThree}<span></span></a>
                        </div>
                    </div>
                </div>
        
            </div>
        )
    }
});