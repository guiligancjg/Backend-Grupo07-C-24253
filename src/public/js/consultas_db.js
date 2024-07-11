//const PORT = 3000;
//const SERVER_URL = `http://localhost:${PORT}`;
const SERVER_URL = `https://backend-grupo07-c-24253.onrender.com/`;
//eliminar el token
//sessionStorage.removeItem('authToken');

document.addEventListener("DOMContentLoaded", () => {
  const authToken = JSON.parse(sessionStorage.getItem("authToken"));

  if (!authToken) {
    alert("Por favor, inicia sesión primero");
    window.location.href = "../login.html";
    return;
  }

  fetch(`${SERVER_URL}/protected`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken.token}`,
      auth: authToken.auth
    }
  })
    .then(response => {
      if (!response.ok) {
        //window.location.href = '../login.html';
        //throw new Error('Error al acceder a la ruta protegida');
        console.log("Error al acceder a la ruta protegida");
      }
      return response.json({ mensaje: "Se realizo con exito" });
    })
    .then(data => {
      const id = data.id;

      fetch(`${SERVER_URL}/pedidos/${id}`)
        .then(response => response.json())
        .then(pedidos => {
          const pedidosContainer = document.getElementById("pedidosUsuario");

          pedidos.forEach(pedido => {
            const card = document.createElement("div");
            card.classList.add("card", "mb-4");
            card.style.width = "24rem";

            const img = document.createElement("img");
            img.src =
              pedido.menu_imagen ||
              "https://via.placeholder.com/150";
            img.classList.add("card-img-top");
            img.alt = pedido.menu_nombre;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = `Pedido #${pedido.pedido_id}`;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerHTML = `
            Fecha: ${pedido.fecha_pedido}<br>
            Total: $${pedido.total_pedido}<br>
            Estado: ${pedido.estado_pedido}
        `;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

            const listGroup = document.createElement("ul");
            listGroup.classList.add("list-group", "list-group-flush");

            
              const listItem = document.createElement("li");
              listItem.classList.add("list-group-item");
              listItem.innerHTML = `
                <strong>${pedido.menu_nombre}</strong><br>
                ${pedido.menu_descripcion}<br>
                Cantidad: ${pedido.cantidad_menu}<br>
                Precio: $${pedido.precio_menu}
            `;
              listGroup.appendChild(listItem);
           

            const cardBodyLinks = document.createElement("div");
            cardBodyLinks.classList.add("card-body");

            const cardLink1 = document.createElement("a");
            cardLink1.href = "#";
            cardLink1.classList.add("card-link");
            cardLink1.textContent = "Reordenar";

            const cardLink2 = document.createElement("a");
            cardLink2.href = "#";
            cardLink2.classList.add("card-link");
            cardLink2.textContent = "Detalles";

            cardBodyLinks.appendChild(cardLink1);
            cardBodyLinks.appendChild(cardLink2);

            card.appendChild(img);
            card.appendChild(cardBody);
            card.appendChild(listGroup);
            card.appendChild(cardBodyLinks);
            pedidosContainer.appendChild(card);
          });
        })
        .catch(error => console.error("Error:", error));
    })
    .catch(error => {
      console.log("Error: ", error);
      //window.location.href = '../login.html';
      alert("Error al inica444r");
    });
});
