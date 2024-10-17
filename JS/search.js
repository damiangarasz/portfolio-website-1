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
    //loop który zamienia dataset na przeciwny
    // for (let i = 0; i < elArr.length; i++) {
    //   const temp = elArr[i].dataset.state;
    //   if (temp == "off") {
    //     elArr[i].dataset.state = "on";
    //   } else if (temp == "on") {
    //     elArr[i].dataset.state = "off";
    //   } else {
    //     new Error("co sie stanęło??");
    //   }
    // }

    elArr.forEach((el) => {
      el.dataset.state = "on";
    });
    event.stopPropagation();
  });

  document.addEventListener("click", function clickOutside(event) {
    if (!elArr.some((el) => el.contains(event.target))) {
      elArr.forEach((el) => {
        el.dataset.state = "off";
      });
    }
  });
}
