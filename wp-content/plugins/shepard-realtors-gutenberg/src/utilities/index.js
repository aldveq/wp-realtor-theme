const setDefaultImage = image => {
    if (image !== undefined) {
        return image;
    } else {
        return 'https://adrianahoyos.com/ahcatalogodigital_v2/wp-content/uploads/2021/01/1-SK-SALA-SERPENT-2.png';
    }
}

export { setDefaultImage };