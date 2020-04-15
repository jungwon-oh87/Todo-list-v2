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

  const complete_btn = document.createElement("button");
  complete_btn.classList.add("complete_btn");
  complete_btn.innerHTML = '<i class="fas fa-check"></i>';
  div_el.appendChild(complete_btn);

  const trash_btn = document.createElement("button");
  trash_btn.classList.add("trash_btn");
  trash_btn.innerHTML = '<i class="fas fa-trash"></i>';
  div_el.appendChild(trash_btn);

  lists.appendChild(div_el);
  init();
}

function deleteList(e) {
  const item = e.target;

  if (item.classList[0] === "trash_btn") {
    const list_div = item.parentElement;
    list_div.classList.add("fall");

    list_div.addEventListener("transitionend", () => {
      list_div.remove();
    });
  } else if (item.classList[0] === "complete_btn") {
    const list_div = item.parentElement;
    list_div.classList.toggle("completed");
  }
}

function init() {
  input.value = "";
  input.focus();
}

init();
add_btn.addEventListener("click", addDOM);
lists.addEventListener("click", deleteList);
