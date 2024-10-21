// logika odpowiadająca za działanie search bara jeszcze nie gotowa
//TODO
export function search() {
  const form = document.querySelector(".search-bar");
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
      const searchBarChwytak = document.querySelector(".search-wrapper");
      searchBarChwytak.style.width = "50px";
    }
  });
}

//dynamimczna szerokość search bara/wrappera i umieszczenie arrow buttona plus animacja otwierania

const searchBarChwytak = document.querySelector(".search-wrapper");
let szerokoscOkna = window.innerWidth;
const szerokoscDocelowa = szerokoscOkna * 0.1;

setInterval(sprAktualnegoRozmiaruOkna, 1100);

function sprAktualnegoRozmiaruOkna() {
  szerokoscOkna = window.innerWidth;
  console.log(szerokoscOkna);
}

// searchBarChwytak.style.width = szerokoscOkna * 0.1 + "px";

function smoothBarGrow() {
  let aktualnaSerokosc = 50;
  //to linia, która wymusza przerysowanie elementu w przeglądarce.
  //Oznacza to, że przeglądarka będzie musiała ponownie obliczyć styl elementu, zanim zacznie stosować jakiekolwiek inne zmiany stylu.
  searchBarChwytak.offsetWidth;

  //metoda na możliwośc dodania wyłącznika setInterval
  let intervalID = setInterval(powiekszanieBara, 1);

  function powiekszanieBara() {
    searchBarChwytak.style.width = aktualnaSerokosc + "px";
    aktualnaSerokosc++;
  }

  setInterval(zatrzymanieIntervala, 100);

  function zatrzymanieIntervala() {
    if (szerokoscDocelowa <= aktualnaSerokosc) {
      clearInterval(intervalID);
    } else {
      //tutaj gdy zwiększe okno poinnno przeliczyć pasek jeszcze raz
      powiekszanieBara();
    }
  }
}
