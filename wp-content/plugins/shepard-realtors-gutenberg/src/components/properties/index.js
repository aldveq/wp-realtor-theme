const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;
const { Placeholder, Spinner } = wp.components;
import PropertiesContainer from '../../containers/PropertiesContainer';

registerBlockType('shepard-realtors/properties', {
    title: 'Properties', 
    description: 'Shepard Realtors Properties Block', 
    icon: 'admin-multisite',
    category: 'shepard-realtors',
    edit: withSelect((select) => {
        const { getEntityRecords } = select('core');
        const propertyQuery = {
            per_page: 3
        }
    
        return {
            propertiesList: getEntityRecords('postType', 'property', propertyQuery)
        }
    })(props => {
        const { propertiesList } = props;
        const hasPosts = Array.isArray(propertiesList) && propertiesList.length;
    
        if (!hasPosts) {
            return(
                <Placeholder> 
                    { ! Array.isArray(propertiesList) ? <Spinner /> : 'No properties found.'}
                </Placeholder>
            );
        }
    
        return <PropertiesContainer properties={propertiesList} />;
    }),
    save: () => {
        return null;
    }
});