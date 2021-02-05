// Model

// View
pageView();
function pageView() {
    document.getElementById('app').innerHTML = `
        <div class="container">
            <div id="header">
                <img id="logoImage" src="images/sparkLogo.png"/>
                <p id="signUp">sign up</p>
            </div>
            <div id="main">
                <h1>People who <br/> care about<br/> your growth</h1>
                <p>
                    <span>
                        <button id="blackBtn" >
                            <a href="https://www.linkedin.com/in/jonas-wilhelmsen-84a57a169/">Get started</a>
                        </button>
                    </span>
                    <span>
                        <a id="smallLink" href="https://github.com/Arthurthe4">Try platform for free</a>    
                    </span>
                </p>
            </div>
            <div id="bigImage">
                <img id="largeImage" src="images/bigLandingPageImage.png" />
            </div>
        </div>
    `;
}

// Controller
alert("Links only goes to mye socials")