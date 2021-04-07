const setDefaultImage = image => {
    if (image !== undefined) {
        return image;
    } else {
        return 'https://wallpapercave.com/wp/wp8179173.jpg';
    }
}

export { setDefaultImage };