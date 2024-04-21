import "../css/background.css";
const element = document.querySelector("#polygons") as Element;

function changePosition() {
  const points = new Array(16)
    .fill(0)
    .map(() => [Math.random(), Math.random()]);

  const polyValues = points
    .map(([x, y]) => `${x * 100}% ${y * 100}%`)
    .join(", ");

  element.setAttribute("style", `clip-path: polygon(${polyValues})`);
}

export async function start() {
  changePosition();
  setTimeout(start, 2000 + Math.random() * 1000);
}

start();
// Rerun transition in order to not flush on page mount load.
setTimeout(changePosition);
