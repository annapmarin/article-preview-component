const share = document.getElementById("share");
const shareDiv = document.getElementById("share_div");

share.addEventListener("click", changeClass);

function changeClass() {
  share.classList.toggle("active");
  share.classList.toggle("unactive");
  shareDiv.classList.toggle("share_div_unactive");
  shareDiv.classList.toggle("share_div_active");
}