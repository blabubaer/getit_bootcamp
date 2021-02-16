// Id is displayGame
// 
view();
function view() {
    var menu_div = document.getElementById('Menu')
    //Main Menu
    if(menu) {
        
        var ul = `<ul>`
        for (var i in menu) {
            if (i == activecursor) {
                ul += ('<li> >'+ menu[i]+'</li>')
            }
            else {
                ul +=('<li>' + menu[i] + '</li>')
            }
        }
        menu_div.innerHTML = ul
    }
    else {
            // Text Display
        menu_div.innerHTML = text
    }
    



}