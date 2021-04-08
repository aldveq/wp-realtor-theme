const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, URLInputButton, InspectorControls } = wp.blockEditor;
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
            selector: '.dreamHouseDescriptionOne'
        },
        dreamHouseDescriptionTwo: {
            type: 'string',
            source: 'html', 
            selector: '.dreamHouseDescriptionTwo'
        },
        dreamHouseDescriptionThree: {
            type: 'string',
            source: 'html', 
            selector: '.dreamHouseDescriptionThree'
        },
        dreamHouseImageOne: {
            type: 'string',
            selector: '.dreamHouseImageOne'
        },
        dreamHouseImageOneAltText: {
            type: 'string',
            selector: '.dreamHouseImageOne'
        },
        dreamHouseImageTwo: {
            type: 'string',
            selector: '.dreamHouseImageTwo'
        },
        dreamHouseImageTwoAltText: {
            type: 'string',
            selector: '.dreamHouseImageTwo'
        },
        dreamHouseImageThree: {
            type: 'string',
            selector: '.dreamHouseImageThree'
        },
        dreamHouseImageThreeAltText: {
            type: 'string',
            selector: '.dreamHouseImageThree'
        },
        dreamHouseLinkOne: {
            type: 'string',
            source: 'attribute',
            selector: 'a.dreamHouseLinkTitleOne',
            attribute: 'href'
        },
        dreamHouseLinkTwo: {
            type: 'string',
            source: 'attribute',
            selector: 'a.dreamHouseLinkTitleTwo',
            attribute: 'href'
        },
        dreamHouseLinkThree: {
            type: 'string',
            source: 'attribute',
            selector: 'a.dreamHouseLinkTitleThree',
            attribute: 'href'
        },
        dreamHouseLinkTitleOne: {
            type: 'string',
            source: 'text',
            selector: 'a.dreamHouseLinkTitleOne',
        },
        dreamHouseLinkTitleTwo: {
            type: 'string',
            source: 'text',
            selector: 'a.dreamHouseLinkTitleTwo',
        },
        dreamHouseLinkTitleThree: {
            type: 'string',
            source: 'text',
            selector: 'a.dreamHouseLinkTitleThree',
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
                    
                    <PanelBody title={'Dream House Settings First'} initialOpen={true}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <URLInputButton 
                                    placeholder="Add link"
                                    onChange={getDreamHouseLinkOne}
                                    url={dreamHouseLinkOne}
                                />
                                <br/>
                                <RichText 
                                    placeholder="Add link title"
                                    onChange={getDreamHouseLinkTitleOne}
                                    value={dreamHouseLinkTitleOne}
                                />
                            </div>
                        </div>
                    </PanelBody>

                    <PanelBody title={'Dream House Settings Second'} initialOpen={false}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <URLInputButton 
                                    placeholder="Add link"
                                    onChange={getDreamHouseLinkTwo}
                                    url={dreamHouseLinkTwo}
                                />
                                <br/>
                                <RichText 
                                    placeholder="Add link title"
                                    onChange={getDreamHouseLinkTitleTwo}
                                    value={dreamHouseLinkTitleTwo}
                                />
                            </div>
                        </div>
                    </PanelBody>

                    <PanelBody title={'Dream House Settings Third'} initialOpen={false}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <URLInputButton 
                                    placeholder="Add link"
                                    onChange={getDreamHouseLinkThree}
                                    url={dreamHouseLinkThree}
                                />
                                <br/>
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
                            <img src={setDefaultImage(dreamHouseImageOne)} className="card__image" className="dreamHouseImageOne" alt={dreamHouseImageOneAltText} />
                            <div className="card__item card__flexible">
                                <p className="dreamHouseDescriptionOne">
                                    <RichText 
                                        placeholder="Add your description"
                                        onChange={getDreamHouseDescriptionOne}
                                        value={dreamHouseDescriptionOne}
                                    />
                                </p>
                            </div>
                            <div className="card__footer">
                                <a className="button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleOne" target="_self" rel="noopener" href={dreamHouseLinkOne}>{dreamHouseLinkTitleOne}<span></span></a>
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
                            <img src={setDefaultImage(dreamHouseImageTwo)} className="card__image" className="dreamHouseImageTwo" alt={dreamHouseImageTwoAltText} />
                            <div className="card__item card__flexible">
                                <p className="dreamHouseDescriptionTwo">
                                    <RichText 
                                        placeholder="Add your description"
                                        onChange={getDreamHouseDescriptionTwo}
                                        value={dreamHouseDescriptionTwo}
                                    />
                                </p>
                            </div>
                            <div className="card__footer">
                                <a className="button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleTwo" target="_self" rel="noopener" href={dreamHouseLinkTwo}>{dreamHouseLinkTitleTwo}<span></span></a>
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
                            <img src={setDefaultImage(dreamHouseImageThree)} className="card__image" className="dreamHouseImageThree" alt={dreamHouseImageThreeAltText} />
                            <div className="card__item card__flexible">
                                <p className="dreamHouseDescriptionThree">
                                    <RichText 
                                        placeholder="Add your description"
                                        onChange={getDreamHouseDescriptionThree}
                                        value={dreamHouseDescriptionThree}
                                    />
                                </p>
                            </div>
                            <div className="card__footer">
                                <a className="button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleThree" target="_self" rel="noopener" href={dreamHouseLinkThree} >{dreamHouseLinkTitleThree}<span></span></a>
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
                        <img src={setDefaultImage(dreamHouseImageOne)} className="card__image" className="dreamHouseImageOne" alt={dreamHouseImageOneAltText} />
                        <div className="card__item card__flexible">
                            <p className="dreamHouseDescriptionOne">
                                <RichText.Content value={dreamHouseDescriptionOne} />
                            </p>
                        </div>
                        <div className="card__footer">
                            <a className="button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleOne" target="_self" rel="noopener" href={dreamHouseLinkOne}>{dreamHouseLinkTitleOne}<span></span></a>
                        </div>
                    </div>
                </div>
                    
                <div className="card__wrap--inner">
                    <div className="card">
                        <img src={setDefaultImage(dreamHouseImageTwo)} className="card__image" className="dreamHouseImageTwo" alt={dreamHouseImageTwoAltText} />
                        <div className="card__item card__flexible">
                            <p className="dreamHouseDescriptionTwo">
                                <RichText.Content value={dreamHouseDescriptionTwo} />
                            </p>
                        </div>
                        <div className="card__footer">
                            <a className="button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleTwo" target="_self" rel="noopener" href={dreamHouseLinkTwo} >{dreamHouseLinkTitleTwo}<span></span></a>
                        </div>
                    </div>
                </div>
                    
                <div className="card__wrap--inner">
                    <div className="card">
                        <img src={setDefaultImage(dreamHouseImageThree)} className="card__image" className="dreamHouseImageThree" alt={dreamHouseImageThreeAltText} />
                        <div className="card__item card__flexible">
                            <p className="dreamHouseDescriptionThree">
                                <RichText.Content value={dreamHouseDescriptionThree} />
                            </p>
                        </div>
                        <div className="card__footer">
                            <a className="button button__outline button__icon button__outline--right-arrow card__button dreamHouseLinkTitleThree" target="_self" rel="noopener" href={dreamHouseLinkThree} >{dreamHouseLinkTitleThree}<span></span></a>
                        </div>
                    </div>
                </div>
        
            </div>
        )
    }
});