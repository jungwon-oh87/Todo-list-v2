const input = document.getElementById("input");
const add_btn = document.getElementById("add-btn");
const lists = document.getElementById("lists");

function addDOM(e) {
  e.preventDefault();
  const input_value = input.value;

  const div_el = document.createElement("div");
  div_el.classList.add("list_div");

  const list = document.createElement("li");
  list.innerText = input_value;
  div_el.appendChild(list);

  const btn = document.createElement("button");
  btn.classList.add("trash-btn");
  btn.innerHTML = '<i class="fas fa-trash"></i>';

  div_el.appendChild(btn);

  lists.appendChild(div_el);
  init();
}

function deleteList(e) {
  const item = e.target;
  console.log(item);
  if (item.classList[0] === "trash-btn") {
    const list_div = item.parentElement;
    list_div.remove();
  }
}

function init() {
  input.value = "";
  input.focus();
}

init();
add_btn.addEventListener("click", addDOM);
lists.addEventListener("click", deleteList);
