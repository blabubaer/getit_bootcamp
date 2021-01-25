// Model
// View
updateView()
function updateView() {
    document.getElementById('app').innerHTML = `
        <h1>Light Bulb</h1>
        <img id="myImage" 
        onclick="changeImage()" 
        src="https://www.w3schools.com/js/pic_bulboff.gif" 
        width="100" 
        height="180">
    `;
}
// Controller
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}

// Når lyse skrus på så ser du et fadet bilde i bakgrunn 
// og for vær 5 gange du skrur lyse av og på så nytt bilde