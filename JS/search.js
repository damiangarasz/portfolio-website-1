// logika odpowiadająca za działanie search bara jeszcze nie gotowa
//TODO
const form = document.querySelector(".search-bar");
const searchBarChwytak = document.querySelector(".search-wrapper");
let interval;
export function search() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let submit = document.querySelector(".search-bar-input").value;
  });
}

//podmiana dataset po kliknięciu w lupę
export function searchToggle() {
  const lupa = document.querySelector(".lupa");
  const elArr = [];
  const searchBarImput = document.querySelector(".search-bar-input");
  const search = document.querySelector(".search-button");

  elArr.push(lupa, searchBarImput, search);
  lupa.addEventListener("click", function lupaClick(event) {
    elArr.forEach((el) => {
      el.dataset.state = "on";
    });
    searchBarImput.focus();
    event.stopPropagation();
    smoothBarGrow();
  });
  //podmiana dataset po kliknięciu poza lsearch box
  document.addEventListener("click", function clickOutside(event) {
    if (!elArr.some((el) => el.contains(event.target))) {
      elArr.forEach((el) => {
        el.dataset.state = "off";
      });
      //na twardo ustawiam spowrotem poczatkowy rozmiar search bara
      searchBarChwytak.style.width = "50px";
      clearInterval(interval);
    }
  });
}

function smoothBarGrow() {
  //sprawdzanie szerokości okna podczas załadowania storny
  let aktualnaSzerokoscOkna = window.innerWidth;
  let poczatkowaSzerokoscSearchBara = 50;
  let docelowaSzerokoscSearchBara = aktualnaSzerokoscOkna * 0.1;
  //loop sprawdzający szeokość okna co zadaną ilaść czasu
  interval = setInterval(sprAktualnejSzerokosciOkna, 500);

  function sprAktualnejSzerokosciOkna() {
    aktualnaSzerokoscOkna = window.innerWidth;
    docelowaSzerokoscSearchBara = aktualnaSzerokoscOkna * 0.1;
    console.log(docelowaSzerokoscSearchBara);
  }

  requestAnimationFrame(animacjaSearchBara);

  function animacjaSearchBara() {
    if (poczatkowaSzerokoscSearchBara < docelowaSzerokoscSearchBara) {
      searchBarChwytak.style.width = poczatkowaSzerokoscSearchBara + "px";
      poczatkowaSzerokoscSearchBara += 4;
    } else if (poczatkowaSzerokoscSearchBara >= docelowaSzerokoscSearchBara) {
      cancelAnimationFrame(animacjaSearchBara);
    }

    requestAnimationFrame(animacjaSearchBara);
  }
}
