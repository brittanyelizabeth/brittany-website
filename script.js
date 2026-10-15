const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('appointment-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Appointment enquiry for Brittany');
  const body = encodeURIComponent(
    `Hello Brittany,\n\nI'd like to enquire about an appointment.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\nPreferred date/time: ${data.get('date') || 'Not specified'}\nMessage: ${data.get('message') || 'None'}\n\nThank you.`
  );
  document.getElementById('form-status').textContent = 'Your email app should open with the enquiry prepared. Please review and send it there.';
  window.location.href = `mailto:BrittanyElizabeth20072005@gmail.com?subject=${subject}&body=${body}`;
});
