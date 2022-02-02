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

const randColorRGB = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const generateQuilt = (numOfSquares) => {
    // generate numOfSquares divs with a loop
    for (let i = 1; i <= numOfSquares; i++) {
        console.log(i);
        // create a new DOM element
        let square = document.createElement("div");
        // give the div the css class "square"
        square.classList.add("square");
        // add a randomly generated color
        square.style.backgroundColor = randColorRGB();
        // append it to the page
        document.querySelector("body").appendChild(square);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Bonjour! from your JS file");
    addH2();
    changeH2();
    generateQuilt(10);
});
