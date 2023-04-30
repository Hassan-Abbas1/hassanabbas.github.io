const Nav_Link__btn_1 = document.getElementById("Nav-Link__btn-1"),
  Nav_Link__btn_2 = document.getElementById("Nav-Link__btn-2"),
  Nav_Link__btn_3 = document.getElementById("Nav-Link__btn-3"),
  Nav_Link__btn_4 = document.getElementById("Nav-Link__btn-4"),
  btn__1_Blog = document.getElementById("btn__1-Blog"),
  btn__2_Blog = document.getElementById("btn__2-Blog"),
  btn__3_Blog = document.getElementById("btn__3-Blog"),
  Nav_Link__btn_1_function = () => {
    window.location.href = "/index.html";
  },
  Nav_Link__btn_2_function = () => {
    window.location.href = "/contact.html";
  },
  Nav_Link__btn_3_function = () => {
    window.location.href = "/services.html";
  },
  Nav_Link__btn_4_function = () => {
    window.location.href = "/myGames.html";
  },
  btn__1_Blog_function = () => {
    window.location.href = "/blog/How can you Secure Accounts with 2FA.html";
  },
  btn__2_Blog_function = () => {
    window.location.href = "/myGames.html";
  },
  btn__3_Blog_function = () => {
    window.location.href = "/myGames.html";
  };
var modal = document.getElementById("myModal"),
  img = document.getElementById("myImg"),
  img1 = document.getElementById("myImg1"),
  modalImg = document.getElementById("img01"),
  captionText = document.getElementById("caption");
(img.onclick = function () {
  (modal.style.display = "block"),
    (modalImg.src = this.src),
    (captionText.innerHTML = this.alt);
}),
  (img1.onclick = function () {
    (modal.style.display = "block"),
      (modalImg.src = this.src),
      (captionText.innerHTML = this.alt);
  });
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};