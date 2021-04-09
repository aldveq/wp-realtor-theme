const { registerBlockType } = wp.blocks;

registerBlockType('shepard-realtors/search-form', {
    title: 'Search Form',
    description: 'Shepard Realtors Search Form Block', 
    icon: 'search',
    category: 'shepard-realtors',
    edit: () => {

        return(
            <section className="search-form-container">
                <div className="container">
                    <div className="search-form-container__first-box-container">
                        <div className="search-form-container__first-box-input-container">
                            <input type="text" className="input" placeholder="Search for a location..." />
                        </div>
                        <div className="search-form-container__first-box-button-container">
                            <button className="button button__filled button__icon button__filled--search">Search<span></span></button>
                        </div>
                    </div>
                    <div className="search-form-container__second-box-container">
                        <div className="search-form-container__second-box-input-container">
                            <select class="input input__select">
                                <option value="Bathrooms">Bathrooms</option>
                                <option value="Bathrooms Two">Bathrooms Two</option>
                                <option value="Bathrooms Three">Bathrooms Three</option>
                            </select>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <select class="input input__select">
                                <option value="Bedrooms">Bedrooms</option>
                                <option value="Bedrooms Two">Bedrooms Two</option>
                                <option value="Bedrooms Three">Bedrooms Three</option>
                            </select>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <input type="text" class="input" placeholder="Min. Price"></input>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <input type="text" class="input" placeholder="Max. Price"></input>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <button class="button button__text button__text--grey">Advanced Search</button>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <button class="button button__text button__text--grey">Map Search</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    },
    save: () => {

        return(
            <section className="search-form-container">
                <div className="container">
                    <div className="search-form-container__first-box-container">
                        <div className="search-form-container__first-box-input-container">
                            <input type="text" className="input" placeholder="Search for a location..." />
                        </div>
                        <div className="search-form-container__first-box-button-container">
                            <button className="button button__filled button__icon button__filled--search">Search<span></span></button>
                        </div>
                    </div>
                    <div className="search-form-container__second-box-container">
                        <div className="search-form-container__second-box-input-container">
                            <select class="input input__select">
                                <option value="Bathrooms">Bathrooms</option>
                                <option value="Bathrooms Two">Bathrooms Two</option>
                                <option value="Bathrooms Three">Bathrooms Three</option>
                            </select>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <select class="input input__select">
                                <option value="Bedrooms">Bedrooms</option>
                                <option value="Bedrooms Two">Bedrooms Two</option>
                                <option value="Bedrooms Three">Bedrooms Three</option>
                            </select>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <input type="text" class="input" placeholder="Min. Price"></input>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <input type="text" class="input" placeholder="Max. Price"></input>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <button class="button button__text button__text--grey">Advanced Search</button>
                        </div>
                        <div className="search-form-container__second-box-input-container">
                            <button class="button button__text button__text--grey">Map Search</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});