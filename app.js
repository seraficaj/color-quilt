const addH2 = () => {
    // create new H2 element
    let h2 = document.createElement('h2');
    h2.innerText = 'A New h2 for you!';
    document.querySelector('body').append(h2);
}

const changeH2 = () => {
    // select the element and change it
    document.getElementsByTagName('h2')[0].innerText = 'Getting warmed up!';
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Bonjour! from your JS file')
    addH2();
    changeH2();
});

