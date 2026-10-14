/* GLR Media Creative — offline les-timer (kleurenleer)
   Gebruik: <div class="timer" data-timer="30:00"> met daarin .t-prog, .t-time,
   .t-start en .t-reset. Vanilla JS, geen externe libs. */
(function () {
  function parseTime (t) {
    var parts = String(t || '20:00').split(':');
    var m = parseInt(parts[0], 10) || 0;
    var s = parts[1] ? parseInt(parts[1], 10) : 0;
    return m * 60 + s;
  }
  function fmt (sec) {
    sec = Math.max(0, sec);
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }
  function initTimer (el) {
    var total = parseTime(el.getAttribute('data-timer'));
    var remaining = total;
    var running = false, tick = null;
    var prog = el.querySelector('.t-prog');
    var timeEl = el.querySelector('.t-time');
    var btnStart = el.querySelector('.t-start');
    var btnReset = el.querySelector('.t-reset');
    var R = 54, C = 2 * Math.PI * R;
    prog.style.strokeDasharray = C.toFixed(1);
    function render () {
      timeEl.textContent = fmt(remaining);
      var frac = total > 0 ? remaining / total : 0;
      prog.style.strokeDashoffset = (C * (1 - frac)).toFixed(1);
    }
    function stop () {
      if (tick) { clearInterval(tick); tick = null; }
      running = false;
      btnStart.textContent = 'Start';
    }
    function start () {
      if (running || remaining <= 0) return;
      running = true;
      btnStart.textContent = 'Pauze';
      tick = setInterval(function () {
        remaining -= 1;
        render();
        if (remaining <= 0) { stop(); el.classList.add('t-done'); }
      }, 1000);
    }
    btnStart.addEventListener('click', function () { running ? stop() : start(); });
    btnReset.addEventListener('click', function () {
      stop(); remaining = total; el.classList.remove('t-done'); render();
    });
    render();
  }
  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('.timer'), initTimer);
  });
})();
