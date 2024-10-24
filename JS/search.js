// logika odpowiadająca za działanie search bara jeszcze nie gotowa
//TODO dodać podpowiedzi i logikę wyszukiwania artykułów
const form = document.querySelector(".search-bar");
const searchBarChwytak = document.querySelector(".search-wrapper");
let interval;
export function searchFN() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let submit = document.querySelector(".search-bar-input").value;
  });
}

//podmiana dataset po kliknięciu w lupę
const search = document.querySelector(".search-button");
export function searchToggle() {
  const lupa = document.querySelector(".lupa");
  const elArr = [];
  const searchBarImput = document.querySelector(".search-bar-input");

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
  let docelowaSzerokoscSearchBara = aktualnaSzerokoscOkna * 0.13;
  //loop sprawdzający szeokość okna co zadaną ilaść czasu
  interval = setInterval(sprAktualnejSzerokosciOkna, 500);

  function sprAktualnejSzerokosciOkna() {
    aktualnaSzerokoscOkna = window.innerWidth;
    docelowaSzerokoscSearchBara = aktualnaSzerokoscOkna * 0.13;
  }

  //jeżeli window wykryje resize okna to uruchamia na nowo animację requestAnimationFrame(animacjaSearchBara);

  window.addEventListener("resize", resizeFN);

  function resizeFN() {
    requestAnimationFrame(animacjaSearchBara);
  }

  requestAnimationFrame(animacjaSearchBara);

  function animacjaSearchBara() {
    const tolerance = 5;
    if (
      Math.abs(poczatkowaSzerokoscSearchBara - docelowaSzerokoscSearchBara) <
      tolerance
    ) {
      //jezeli Math.abs zwróci true to returnuje całą funkcję co zatrzymuje animacje
      return;
    }

    if (poczatkowaSzerokoscSearchBara < docelowaSzerokoscSearchBara) {
      searchBarChwytak.style.width = poczatkowaSzerokoscSearchBara + "px";
      //logika odpowiedzialna za odpowiednie ustawienie strzełki w searchbar
      search.style.left = poczatkowaSzerokoscSearchBara - 35 + "px";
      //dodaje piksele do początkowej szerokości search bara
      poczatkowaSzerokoscSearchBara += 5;
    } else if (poczatkowaSzerokoscSearchBara > docelowaSzerokoscSearchBara) {
      cancelAnimationFrame(animacjaSearchBara);
      searchBarChwytak.style.width = poczatkowaSzerokoscSearchBara + "px";
      //dodaje piksele do początkowej szerokości search bara
      search.style.left = poczatkowaSzerokoscSearchBara - 35 + "px";
      poczatkowaSzerokoscSearchBara -= 5;
    }

    requestAnimationFrame(animacjaSearchBara);
  }
}
