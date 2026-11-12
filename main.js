const search = document.getElementById('navSearch');
const links = [...document.querySelectorAll('#sideNav a')];

search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  links.forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
  document.querySelectorAll('.nav-group').forEach(group => {
    const visible = [...group.querySelectorAll('a')].some(a => a.style.display !== 'none');
    group.style.display = visible || !query ? 'block' : 'none';
  });
});

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(item => item.classList.remove('selected'));
    link.classList.add('selected');
  });
});
