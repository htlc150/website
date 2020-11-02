window.onload = function() {

  var diffBulBtn = document.querySelector("#diffBulBtn");
  var bulFrame = document.querySelector('#bulFrame');

  diffBulBtn.addEventListener("click", function() {
    var upcomingText = "Show the bulletin for the upcoming service";
    if (this.innerText === upcomingText) {
      bulFrame.src = "https://docs.google.com/document/d/e/2PACX-1vTthNGqPjJokZ92iV6Gs8QpbR5uSOzlBcIi7bzgXBNfylZidhAQUSyIrtdvmUNpWTK6XCk3VP9prKPM/pub?embedded=true";
      this.innerText = "Show older bulletins";
    } else {
      bulFrame.src = "https://drive.google.com/embeddedfolderview?id=1aCCbjBn5cM2-Py0pynwIlasGsSdM7F7K#list";
      this.innerText = upcomingText;
    }
  });
}
