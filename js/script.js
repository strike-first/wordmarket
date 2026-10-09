document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const navOverlay = document.getElementById('navOverlay');
  const navBackdrop = document.getElementById('navBackdrop');

  if (menuBtn && navOverlay) {
    // 右上の三本線（/ ×）を押したときにメニューを開閉
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navOverlay.classList.toggle('active');
      if (navBackdrop) {
        navBackdrop.classList.toggle('active');
      }
    });

    // 暗い背景部分をクリックした時にもメニューを閉じる
    if (navBackdrop) {
      navBackdrop.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navOverlay.classList.remove('active');
        navBackdrop.classList.remove('active');
      });
    }
  }
});