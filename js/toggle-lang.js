const btn = document.getElementById('langToggle');
let en = true;

btn.onclick = () => {
  en = !en;
  document.getElementById('plans-en').classList.toggle('hidden', !en);
  document.getElementById('plans-ar').classList.toggle('hidden', en);
  document.documentElement.lang = en ? 'en' : 'ar';
  btn.textContent = en ? '🇺🇸 English' : '🇸🇦 العربية';
};

