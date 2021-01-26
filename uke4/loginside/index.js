// Model. Null HTML I MODEL
let errorMessage = null;

//View. HTML SKAL BLI SENDT TIL ID'APP'
showLoginForm();
function showLoginForm() {
    document.getElementById('app').innerHTML = `
        <div id="error" style="color: red">
        ${errorMessage === null ? '' : errorMessage}
        </div>
        Username:<br/>
        <input id="username" type="text"><br/>
        Password:<br/>
        <input id="password" type="password" type="text"><br/>
        <button onclick="logIn()">Login</button>
    `;
}

// Controller. HER SKAL MESTEPARTEN AV JAVASCRIPT VÆRE

// function logIn() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     if(username==='jonas'&&password==='secret') {
//         document.getElementById('app').innerHTML = 'Du er logget inn.'
//     } else {
//         document.getElementById('error').innerHTML = 'Feil Brukernavn eller Passord. Prøv igjen.'
//     }
// }