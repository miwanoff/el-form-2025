const labels = document.querySelectorAll(".form label");

for (let i = 0; i < labels.length; i++) {
  console.log(labels[i].innerHTML);
  let letters = labels[i].innerHTML.split("");
  let newInnerHTML = "";
  console.log(letters);
  for (let j = 0; j < letters.length; j++) {
    const element =`<span style="transition-delay:200ms;">${letters[j]}</span>`;
    newInnerHTML += element;
  }
  labels[i].innerHTML = newInnerHTML;
}
