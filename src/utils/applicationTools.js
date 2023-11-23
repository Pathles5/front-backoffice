const updateHeaderH1 = (title = 'Index') => {
    // console.log(title)
    // console.log(document.getElementById('headerH1'));
    if (document.getElementById('headerH1'))
        document.getElementById('headerH1').innerHTML = title;
};

export { updateHeaderH1 };