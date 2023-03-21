const showBtn = document.querySelectorAll(".show-btn");
const boxInfo = document.querySelectorAll(".card-text");
const disPlayFunc = function () {
  const showBox = function (e) {
    const previousSibling = e.target.previousElementSibling;
    previousSibling.classList.toggle("hide");
  };
  showBtn.forEach((box) => {
    box.addEventListener("click", showBox);
  });
};

disPlayFunc();
