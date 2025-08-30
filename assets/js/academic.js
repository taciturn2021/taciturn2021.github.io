// Tabs behavior for the Academic page
(function(){
  const btns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const id = btn.getAttribute('data-tab');
    const panel = document.getElementById(id);
    if (panel) panel.classList.add('active');
  }));
})();
