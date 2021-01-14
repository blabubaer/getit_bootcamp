var shapeDiv = document.getElementById('shape');
var border = document.getElementById('border');
var borderRadius = document.getElementById('borderRadius');
var borderColorChooser = document.getElementById('borderColorChooser');
var colorChooser = document.getElementById('colorChooser');
var sizeSlider = document.getElementById('sizeSlider');
var borderLeftSlider = document.getElementById('borderLeftSlider');
var borderRightSlider = document.getElementById('borderRightSlider');
var borderBottomSlider = document.getElementById('borderBottomSlider');

showDiv();

function showDiv() {
    shapeDiv.innerHTML = '<div style="'
        + 'border: ' + border.value + ';'
        + 'border-radius: ' + borderRadius.value + 'px;'
        + 'border-color: ' + borderColorChooser.value + ';'
        + 'background-color: ' + colorChooser.value + ';'
        + 'width: ' + sizeSlider.value + 'px;'
        + 'height: ' + sizeSlider.value + 'px;'
        + 'border-left: ' + borderLeftSlider.value + 'px solid transparent;'
        + 'border-right: ' + borderRightSlider.value + 'px solid transparent;'
        + 'border-bottom: ' + borderBottomSlider.value + 'px solid #000;'
        + '"></div>';
}

        
// put border on/off            circle/square/triangle

// put on border color          circle/square/triangle

// put on color fill            circle/square/triangle

// height and width on shape    circle/square/triangle