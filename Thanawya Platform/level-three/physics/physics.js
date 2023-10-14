let $pageContent = document.querySelectorAll(".video");
let $btnsConainter = document.querySelectorAll(".tabs");

for (let i = 0; i < $btnsConainter.length; i++) {
  $btnsConainter[i].addEventListener("click", (e) => {
    let $clickedELement = e.target;
    let clickedTab = $clickedELement.getAttribute("data-tab-name");

    if (clickedTab !== null) {
      document
        .querySelectorAll("div")
        .forEach((b) => b.removeAttribute("video-is-active"));
      $clickedELement.setAttribute("video-is-active", "true");
      for (let i = 0; i < $pageContent.length; i++) {
        para = $pageContent[i].getAttribute("data-panel-of");
        if (clickedTab === para) {
          $pageContent[i].setAttribute("video-is-active", "true");
        }
      }
    } else {
      document
        .querySelectorAll("div")
        .forEach((b) => b.removeAttribute("video-is-active"));
    }
  });
}

console.log($btnsConainter.length);
