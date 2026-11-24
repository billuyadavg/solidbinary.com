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

  // Contact form: submit to Google Apps Script without leaving the page
  var form = document.getElementById('inquiry-form');
  if (form && window.fetch && window.URLSearchParams) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var btn = form.querySelector('button[type="submit"]');
      var status = form.querySelector('.form-status');
      btn.disabled = true;
      btn.textContent = 'Sending…';
      status.textContent = '';
      var body = new URLSearchParams(new FormData(form));
      fetch(form.action, { method: 'POST', mode: 'no-cors', body: body })
        .then(function () {
          form.hidden = true;
          var ok = document.getElementById('inquiry-success');
          if (ok) { ok.hidden = false; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = 'Submit Project Inquiry';
          status.textContent = 'Something went wrong. Please check your connection and try again.';
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
