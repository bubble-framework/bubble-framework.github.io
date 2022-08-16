const words = ["builds", "deploys", "manages", "destroys"];
let i = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  document.getElementById("spin").innerHTML = `${words[i]}&nbsp;`;
};

setInterval("_changeText()", 1000);
