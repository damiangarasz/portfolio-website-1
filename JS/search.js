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
    szerokoscSrarchBara();
  });
  //podmiana dataset po kliknięciu poza lsearch box
  document.addEventListener("click", function clickOutside(event) {
    if (!elArr.some((el) => el.contains(event.target))) {
      elArr.forEach((el) => {
        el.dataset.state = "off";
      });
    }
  });
}

//dynamimczna szerokość search bara/wrappera i umieszczenie arrow buttona plus animacja otwierania
function szerokoscSrarchBara() {
  const searchBarChwytak = document.querySelector(".search-wrapper");
  const searchBarButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-bar-input");
  const szerokoscOkna = window.innerWidth;

  console.log("szerokoscOkna");
  const szerokoscDocelowa = 1;
}
