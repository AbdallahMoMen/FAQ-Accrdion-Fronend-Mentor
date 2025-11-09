const controllers = document.querySelectorAll(".icons img");
const questions = document.querySelectorAll(".q");
const answers = document.querySelectorAll(".ans");
const closeBtns = document.querySelectorAll(".icons img:last-child");

console.log(closeBtns);

questions.forEach((ele) => {
  ele.addEventListener("click", () => {
    const tarQ = ele.nextElementSibling;
    const closeBtn = ele.children[1].children[1];

    if (tarQ.classList.contains("open")) {
      setTimeout(() => {
        tarQ.classList.remove("dis");
      }, 300);
      tarQ.classList.remove("open");
      closeBtn.classList.remove("show");
    } else {
      answers.forEach((ans) => {
        if (ans.classList.contains("open")) {
          ans.classList.remove("open");
          setTimeout(() => {
            ans.classList.remove("dis");
          }, 401);
        }
      });
      closeBtns.forEach((btn) => {
        btn.classList.remove("show");
      });

      tarQ.classList.add("dis");
      setTimeout(() => {
        tarQ.classList.toggle("open");
      }, 0);
      closeBtn.classList.add("show");
    }
  });
});
