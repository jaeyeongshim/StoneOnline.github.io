function showContent(contentId) {
  // 모든 내용을 숨김
  const contents = document.querySelectorAll(".contents");
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  // 선택한 내용만 보임
  const activeContent = document.getElementById(contentId);
  activeContent.classList.add("active");
}
