const addH2 = () => {
    // create new H2 element
    let h2 = document.createElement("h2");
    h2.innerText = "A New h2 for you!";
    document.querySelector("body").append(h2);
};

const changeH2 = () => {
    // select the element and change it
    document.getElementsByTagName("h2")[0].innerText = "Getting warmed up!";
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Bonjour! from your JS file");
    addH2();
    changeH2();
    // generate 100 divs with a loop
    for (let i = 1; i <= 100; i++) {
        console.log(i);
        // create a new DOM element
        let square = document.createElement('div');
        // give the div the css class "square"
        square.classList.add('square');
        // append it to the page
        square.innerText = i;
        document.querySelector('body').appendChild(square);
    }
});
