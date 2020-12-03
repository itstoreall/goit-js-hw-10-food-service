import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
   body: document.querySelector("body"),
   toggle: document.querySelector('#theme-switch-toggle'),
};

refs.toggle.addEventListener("change", changeTheme);

loadData();

function changeTheme(e) {
   const checked = e.target.checked;
   
   return checked
      ? (
         refs.body.classList.add(Theme.DARK),
         refs.body.classList.remove(Theme.LIGHT),
         saveData(checked),
         console.log(checked)
      ) : (
         refs.body.classList.add(Theme.LIGHT),
         refs.body.classList.remove(Theme.DARK),
         saveData(checked),
         console.log(checked)
      );
};

function loadData() {
   localStorage.getItem("theme") === "dark-theme"
      ? (refs.body.classList.add("dark-theme"),
         refs.toggle.setAttribute("checked", true)
      )
      : refs.body.classList.add("light-theme")
};

function saveData(checked) {
   checked
      ? localStorage.setItem("theme", "dark-theme")
      : localStorage.setItem("theme", "light-theme")
};

// console.log(localStorage.getItem("theme"));