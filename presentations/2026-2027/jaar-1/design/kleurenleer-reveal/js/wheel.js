/* GLR Media Creative — tekent de mini-kleurenwielen (svg) voor de harmonieën.
   Gebruik: <span class="harm-wheel" data-hues="0,6"></span>
   data-hues = de 12-uurs indexen (0..11) die oplichten.
   data-shades="1" = monochromatisch (één tint, meerdere helderheden). */
(function () {
  var N = 12, R = 33;
  function pt (i, r) {
    var a = (i * 30 - 90) * Math.PI / 180;
    return [50 + r * Math.cos(a), 50 + r * Math.sin(a)];
  }
  function build (el) {
    var shades = el.getAttribute('data-shades') === '1';
    var hues = (el.getAttribute('data-hues') || '').split(',')
      .map(function (s) { return parseInt(s, 10); })
      .filter(function (n) { return !isNaN(n); });
    var s = '<svg viewBox="0 0 100 100" aria-hidden="true">';
    s += '<circle cx="50" cy="50" r="' + R + '" fill="none" stroke="#E5E7EB" stroke-width="7"/>';
    /* verbindingslijnen tussen de gekozen kleuren */
    if (!shades && hues.length > 1) {
      var d = hues.map(function (i, k) {
        var p = pt(i, R);
        return (k ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1);
      }).join(' ');
      s += '<path d="' + d + ' Z" fill="none" stroke="rgba(17,17,17,.30)" stroke-width="1.6"/>';
    }
    /* de 12 kleurstippen op de ring */
    for (var i = 0; i < N; i++) {
      var p = pt(i, R), fill, sel;
      if (shades) {
        var l = 24 + (i / (N - 1)) * 54;            /* 24% -> 78% helderheid */
        fill = 'hsl(210,58%,' + l.toFixed(0) + '%)';
        sel = (i % 3 === 0);
      } else {
        fill = 'hsl(' + (i * 30) + ',68%,55%)';
        sel = hues.indexOf(i) >= 0;
      }
      s += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' +
        (sel ? 7.5 : 5) + '" fill="' + fill + '"' +
        (sel ? ' stroke="#111111" stroke-width="2.4"' : ' opacity="0.5"') + '/>';
    }
    s += '</svg>';
    el.innerHTML = s;
  }
  function run () {
    Array.prototype.forEach.call(document.querySelectorAll('.harm-wheel'), build);
  }
  document.addEventListener('DOMContentLoaded', run);
})();
