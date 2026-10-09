document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const navOverlay = document.getElementById('navOverlay');

  if (menuBtn && navOverlay) {
    // 右上の三本線（/ ×）を押したときにメニューを開閉
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navOverlay.classList.toggle('active');
    });
  }
});