const body = document.querySelector('body');

let adSites = new Map();

adSites.set(0, {
  link: "https://flebooks.netlify.app",
  logo: "https://flebooks.netlify.app/img/icon.png",
  title: "Flebooks",
  color: "#fddf89",
  description: "Read or download any ebooks for free in flebooks. You can Suggest books, And this site contains books in Malayalam english, Hindi and etc.",
});

adSites.set(1, {
  link: "https://flesearch.netlify.app",
  logo: "https://flesearch.netlify.app/img/icon.png",
  title: "Flesearch",
  color: "#36ffbf",
  description: "Search for anything in the world for free in this website. you can search Books, Movies etc.",
});




function showPopup() {
  let randomNo = Math.floor(Math.random() * 2);

  let adSite = adSites.get(randomNo);
  console.log(randomNo)
  console.log("Title: " + adSite.title);
  console.log("Logo src: " + adSite.logo);
  console.log("Link: " + adSite.link);
  console.log("Description: " + adSite.description);

  let popup = document.createElement('div');
  popup.id = 'popup'
  popup.innerHTML = `
  <style>

        *{
            margin: 0;
            padding: 0;
            font-family: "Poppins";
            transition: all 0.3s;
        }

        #popup {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #00000079;
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
            box-shadow: 0 0 50px #00000015;
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
        }

        .popup-container .actions {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .popup-container .actions button,a {
            width: 40%;
            height: 50px;
            font-size: 20px;
            background: #fff;
            border: 0.5px solid #00000030;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000000;
            text-decoration: none;
            border-radius: 10px;
            box-shadow: 0 0 20px #00000015;
        }

        .popup-container .actions button:hover,a:hover {
            transform: scale(1.05);
        }
        .popup-container .actions a:hover {
            background: ${adSite.color};
        }

        hr {
            width: 40%;
        }
    </style>
    <div id='popup'>
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
            <a href='${adSite.link}'>Visit</a>
            </div>
        </div>
    </div>
  `;
  body.appendChild(popup);
  
}  

setInterval(showPopup, 100000);

function closePopup() {
    body.removeChild(document.getElementById('popup'));
}


