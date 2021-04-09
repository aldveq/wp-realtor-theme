const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { Placeholder, Spinner, PanelBody, TextControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

import PropertiesContainer from '../../containers/PropertiesContainer';

registerBlockType('shepard-realtors/properties', {
    title: 'Properties', 
    description: 'Shepard Realtors Properties Block', 
    icon: 'admin-multisite',
    category: 'shepard-realtors',
    attributes: {
        propertiesTitle: {
            type: 'string',
            default: 'Properties Title'
        }
    },
    edit: withSelect((select, props) => {
        const { getEntityRecords } = select('core');
        const propertyQuery = {
            per_page: 6
        }

        const { setAttributes } = props;

        const getPropertiesTitle = newTitle => {
            setAttributes({propertiesTitle: newTitle});
        }
    
        return {
            propertiesList: getEntityRecords('postType', 'property', propertyQuery),
            getPropertiesTitle
        }
    })(props => {
        const { attributes: { propertiesTitle }, propertiesList, getPropertiesTitle } = props;
        const hasPosts = Array.isArray(propertiesList) && propertiesList.length;
    
        if (!hasPosts) {
            return(
                <Placeholder> 
                    { ! Array.isArray(propertiesList) ? <Spinner /> : 'No properties found.'}
                </Placeholder>
            );
        }
    
        return (
            <>
                <InspectorControls>
                    <PanelBody title={'Properties Title'} initialOpen={true} >
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <TextControl 
                                    onChange={getPropertiesTitle}
                                    value={propertiesTitle}
                                />
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>
                <PropertiesContainer properties={propertiesList} propertiesTitle={propertiesTitle} />
            </>
        );
    }),
    save: () => {
        return null;
    }
});