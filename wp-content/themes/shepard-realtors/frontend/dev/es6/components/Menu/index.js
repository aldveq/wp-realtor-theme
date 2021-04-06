const Menu = () => {
    
    document.getElementById('hamburguerMenuButton').addEventListener('click', e => {
        e.stopPropagation();

        const buttonTarget = e.target;
        buttonTarget.classList.toggle('show');
        showResponsiveMenu();
    });

    menuDropdownListener();
}

const showResponsiveMenu = () => {
    document.querySelector('ul.shepard-realtors-header__nav-list').classList.toggle('show');
}

const menuDropdownListener = () => {
    const allDropdowns = Array.from(document.querySelectorAll('li.menu-item-has-children'));

    allDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', e => {
            e.stopPropagation();

            
            const itemTarget = (e.target).tagName;
            const dropdownChildrens = dropdown.children;
            const dropdownList = dropdownChildrens[1];
            
            if (itemTarget === 'LI') {
                
                disableAllDropdowns(dropdown);
                
                dropdownList.classList.toggle('show');
                dropdown.classList.toggle('show');
                
            }

        })
    })
}

const disableAllDropdowns = currentDropdownItem => {
    const allDropdowns = Array.from(document.querySelectorAll('li.menu-item-has-children'));
    
    allDropdowns.forEach(dropdown => {
        const dropdownChildrens = dropdown.children;
        const dropdownList = dropdownChildrens[1];

        if ((currentDropdownItem.firstElementChild.textContent).toLowerCase() !== (dropdown.firstElementChild.textContent).toLowerCase()) {            
            dropdownList.classList.remove('show');
            dropdown.classList.remove('show');
        }

    })
}

export default Menu;