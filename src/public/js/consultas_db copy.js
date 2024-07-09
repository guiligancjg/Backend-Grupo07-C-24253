
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://backend-grupo07-c-24253.onrender.com/menus')
        .then(response => response.json())
        .then(menus => {
            const container = document.querySelector('.pedidosUsuario');
            menus.forEach(menu => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.style.width = '18rem';


                const img = document.createElement('img');
                img.src = menu.imagen || 'default-image.jpg';
                img.classList.add('card-img-top');
                img.alt = menu.nombre;

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = menu.nombre;

                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.textContent = menu.descripcion;

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);

                const listGroup = document.createElement('ul');
                listGroup.classList.add('list-group');
                listGroup.classList.add('list-group-flush');

                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.textContent = `Precio: $${menu.precio}`;

                listGroup.appendChild(listItem);

                const cardBodyLinks = document.createElement('div');
                cardBodyLinks.classList.add('card-body');

                const cardLink1 = document.createElement('a');
                cardLink1.href = '#';
                cardLink1.classList.add('card-link');
                cardLink1.textContent = 'Card link';

                const cardLink2 = document.createElement('a');
                cardLink2.href = '#';
                cardLink2.classList.add('card-link');
                cardLink2.textContent = 'Another link';

                cardBodyLinks.appendChild(cardLink1);
                cardBodyLinks.appendChild(cardLink2);

                card.appendChild(img);
                card.appendChild(cardBody);
                card.appendChild(listGroup);
                card.appendChild(cardBodyLinks);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
});