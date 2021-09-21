import "./style.css";

// md test
// import "./index.md"; // TODO

// lazy load
const btn = document.createElement("button");
btn.innerHTML = "114514";
document.body.appendChild(btn);

// add paragraph
const p = document.createElement("p");
p.className = "test";
p.innerHTML = "I am purple";
document.body.appendChild(p);

btn.onclick = async () => {
  const { helloUser } = await import("./user");
  console.log(helloUser());
};
