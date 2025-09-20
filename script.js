
document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
if (toggle){
  toggle.addEventListener('click', ()=>{
    const show = menu.classList.toggle('show');
    toggle.setAttribute('aria-expanded', show ? 'true':'false');
  });
}

const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let ok = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const msg = document.getElementById('message');
    const nameErr = document.getElementById('nameErr');
    const emailErr = document.getElementById('emailErr');
    const msgErr = document.getElementById('msgErr');
    nameErr.textContent = emailErr.textContent = msgErr.textContent = '';
    if (!name.value.trim()){ nameErr.textContent = 'Name is required'; ok=false; }
    if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)){ emailErr.textContent = 'Valid email required'; ok=false; }
    if (!msg.value.trim()){ msgErr.textContent = 'Message required'; ok=false; }
    if (ok){
      document.getElementById('formStatus').textContent = 'Thanks! Your message has been (pretend) sent.';
      form.reset();
    }
  });
}
