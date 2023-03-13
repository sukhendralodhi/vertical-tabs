const btns = document.querySelectorAll(".btn");

const showTab = (eve, city) => {

  document.querySelectorAll(".box").forEach((element) => {
    element.style.display = "none";
  });

  let cityStr = city.toString();
  const secEle = document.getElementById(cityStr);
  secEle.style.display = "block";
};

btns.forEach((btn) => {

  btn.addEventListener("click", (eve) => {

    let val = eve.currentTarget.innerText;

    showTab(eve, val);
  });
});

// console.log(btns);
document.getElementById('defaultOpen').click();
