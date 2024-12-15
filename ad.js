document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    let adSites = new Map();

    adSites.set(0, {
        link: "https://flebooks.netlify.app",
        logo: "https://flebooks.netlify.app/img/icon.png",
        title: "Flebooks",
        color: "#fddf89",
        description: "Read or download any ebooks for free in Flebooks. You can suggest books, and this site contains books in Malayalam, English, Hindi, and more.",
    });

    adSites.set(1, {
        link: "https://flesearch.netlify.app",
        logo: "https://flesearch.netlify.app/img/icon.png",
        title: "Flesearch",
        color: "#36ffbf",
        description: "Search for anything in the world for free on this website. You can search for books, movies, and more.",
    });

    function showPopup() {
        // Prevent multiple popups from being created
        if (document.getElementById('popup')) return;

        let randomNo = Math.floor(Math.random() * 2);
        let adSite = adSites.get(randomNo);

        console.log(randomNo);
        console.log("Title: " + adSite.title);
        console.log("Logo src: " + adSite.logo);
        console.log("Link: " + adSite.link);
        console.log("Description: " + adSite.description);

        let popup = document.createElement('div');
        popup.id = 'popup';
        popup.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    font-family: "Poppins", sans-serif;
                    transition: all 0.3s;
                }

                #popup {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: 1000;
                    position: fixed;
                    top: 0;
                    left: 0;
                }

                .popup-container {
                    width: 300px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: space-around;
                    background: #fff;
                    box-shadow: 0 0 50px rgba(0, 0, 0, 0.15);
                    gap: 20px;
                    padding: 2rem 1rem;
                    border-radius: 20px;
                }

                .popup-container header {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }

                .popup-container header img {
                    width: 70px;
                    border-radius: 10px;
                }

                .popup-container p {
                    width: 80%;
                    text-align: center;
                }

                .popup-container .actions {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }

                .popup-container .actions button, .popup-container .actions a {
                    width: 40%;
                    height: 50px;
                    font-size: 16px;
                    background: #fff;
                    border: 0.5px solid rgba(0, 0, 0, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #000;
                    text-decoration: none;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                }

                .popup-container .actions button:hover, .popup-container .actions a:hover {
                    transform: scale(1.05);
                }

                .popup-container .actions a:hover {
                    background: ${adSite.color};
                }

                hr {
                    width: 40%;
                }
            </style>
            <div class='popup-container'>
                <header>
                    <img src='${adSite.logo}' alt='icon'>
                    <h1>${adSite.title}</h1>
                </header>
                <hr>
                <p>${adSite.description}</p>
                <hr>
                <div class='actions'>
                    <button onclick='closePopup();'>Close</button>
                    <a href='${adSite.link}' target='_blank'>Visit</a>
                </div>
            </div>
        `;
        body.appendChild(popup);
    }

    // Show popup every 100 seconds
    setInterval(showPopup, 1000);
});

// Define closePopup globally
function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.remove();
}
