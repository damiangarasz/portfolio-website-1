// logika odpowiadająca za działanie search bara jeszcze nie gotowa
//TODO
export function search() {
  const form = document.querySelector(".search-bar");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let submit = document.querySelector(".search-bar-input").value;
    console.log(submit);
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

//dynamimczna szerokość search bara/wrappera i umieszczenie arrow buttona
export function szerokoscSrarchBara() {
  const searchBarChwytak = document.querySelector(".search-wrapper");
  const searchBarButton = document.querySelector(".search-button");

  setInterval(rozmiarOkna, 1000);
  function rozmiarOkna() {
    let rozmiar = window.innerWidth;
    searchBarChwytak.style.width = rozmiar * 0.15 + "px";

    let rozmiarBara = rozmiar * 0.15;
    searchBarButton.style.left = rozmiarBara - 35 + "px";
  }
}
