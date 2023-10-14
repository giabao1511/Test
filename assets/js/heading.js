const countDownDate = new Date("June 10, 2022 11:13:30").getTime();

// Update the count down every 1 second
const countDate = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("js-count").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "left";

  if (distance < 0) {
    clearInterval(countDate);
    handleAppear();
  }
}, 1000);

function handleAppear() {
  let headingResponse = localStorage.getItem("headingResponse");

  if (!headingResponse) {
    const hello = prompt("Helloooo");
    const interact = prompt("Tương tác với anh trên màn hình nhé");
    const lets_go = prompt("okayy let's gooo");
    const experience = prompt(
      "À mà quên nhớ mở bằng laptop (fullscreen) để có trải nghiệm tốt nhất nhó. Giờ thì vào thuiii"
    );
    headingResponse = {
      hello,
      interact,
      lets_go,
      experience,
    };
    localStorage.setItem("headingResponse", JSON.stringify(headingResponse));
  }
  document.getElementById("timer").innerHTML = "Đến giờ rùiii !! <3";
  document.getElementById("birthday").style.display = "block";
  document.getElementById("move-btn").style.display = "block";
  document.getElementById("move-btn").onclick = () => {
    prompt("Are u readyyyy!!!");
  };
}

localStorage.clear()