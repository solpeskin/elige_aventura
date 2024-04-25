const nombre = sessionStorage.getItem('nombre');
const papel = document.querySelector('.papel');
const parrafo1 = document.createElement('p');
parrafo1.textContent = `${nombre}, esta historia  es un poco trágica...`;
parrafo1.classList.add('show');
papel.appendChild(parrafo1);
