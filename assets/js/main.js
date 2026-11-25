(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Preselect service on the contact form from ?service=
  var select = document.getElementById('service');
  if (select && window.URLSearchParams) {
    var wanted = new URLSearchParams(window.location.search).get('service');
    if (wanted) {
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].text === wanted) { select.selectedIndex = i; break; }
      }
    }
  }

  // Analytics helper: works with Plausible or GA4 if either is configured, otherwise does nothing
  function track(name) {
    try {
      if (window.plausible) window.plausible(name);
      if (window.gtag) window.gtag('event', name);
    } catch (e) {}
  }
  document.addEventListener('click', function (ev) {
    var el = ev.target.closest ? ev.target.closest('[data-track]') : null;
    if (el) track(el.getAttribute('data-track'));
  });

  // Contact form: submit to Google Apps Script without leaving the page.
  // The script answers with JSON ({"ok": true}) and CORS headers, so failures are visible.
  var form = document.getElementById('inquiry-form');
  if (form && window.fetch && window.URLSearchParams) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var btn = form.querySelector('button[type="submit"]');
      var status = form.querySelector('.form-status');
      var fallback = form.querySelector('.form-fallback');
      var label = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';
      status.textContent = '';
      var body = new URLSearchParams(new FormData(form));
      fetch(form.action, { method: 'POST', body: body })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.text().then(function (text) {
            var data = null;
            try { data = JSON.parse(text); } catch (e) {}
            if (data && data.ok === false) throw new Error(data.error || 'Rejected');
          });
        })
        .then(function () {
          track('inquiry_submitted');
          form.hidden = true;
          var ok = document.getElementById('inquiry-success');
          if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        })
        .catch(function () {
          track('inquiry_failed');
          btn.disabled = false;
          btn.textContent = label;
          status.textContent = "Sorry, your inquiry didn't go through. Please try again in a moment.";
          if (fallback) fallback.hidden = false;
        });
    });
  }

  // Subtle reveal on scroll
  if ('IntersectionObserver' in window) {
    var items = document.querySelectorAll('.card, .service-row, .process-step, .cta-band');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
