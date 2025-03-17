const dondurButton = document.querySelector(".flip-button");
const sifirlaButton = document.querySelector(".reset-button");
const paraDiv = document.querySelector(".resimler");
const turaYazisi = document.querySelector("#turaYazisi");
const yaziYazisi = document.querySelector("#yaziYazisi");
const resim = document.querySelector(".para");

//
//
let tura = 0;
let yazi = 0;

runEvents();

function runEvents() {
    dondurButton.addEventListener("click", belirle)
    sifirlaButton.addEventListener("click", sifirla)
}
function belirle() {
    let kimYendi = Math.floor(Math.random() * 2);
    paraDiv.classList.add("active");
    setTimeout(() => {
        paraDiv.classList.remove("active");
        if (kimYendi === 0) {
            resim.setAttribute("src", "./tura.png");
            tura = tura + 1;
            turaYazisi.textContent = `Tura: ${tura}`;
        }
        else {
            resim.setAttribute("src", "./yazi.png");
            yazi = yazi + 1;
            yaziYazisi.textContent = `Yazi: ${yazi}`
        }
    }, 300);
}
function sifirla() {
    tura = 0;
    yazi = 0;
    yaziYazisi.textContent = `Yazi: ${yazi}`
    turaYazisi.textContent = `Tura: ${tura}`;
}

