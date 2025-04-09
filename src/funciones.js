//FETCH DE AGENTES: ---------------------------------------------------------------------------------------------------------------

//1º Recoger el archivo JSON
fetch('componentes/agentes.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la carga del archivo JSON');
    }
    return response.json(); // Parseamos la respuesta a formato JSON
  })

 //2º Manejar datos con un for each 
  .then(data => {
    // Aquí ya tenemos los datos del JSON, procedemos a trabajar con ellos:
    data.forEach(agent => {
      
    // Crear un contenedor para la tarjeta del agente
    const agentCard = document.createElement('article');

    // Al ARTICLE, le añadimos estas clases:
    agentCard.classList.add('card', 'flex', 'gap-5', 'p-4', 'bg-white', 'rounded-lg', 'shadow-lg', 'my-4', 't:flex-wrap', 't:text-center', 't:items-center', 't:flex-col');

      // Añadir contenido HTML a la tarjeta del agente
      agentCard.innerHTML = `
        <img class="aspect-square h-full max-h-52 object-cover rounded-2xl" src="${agent.image}" alt="${agent.name}">
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-3 t:text-center">
            <h2 class="text-2xl font-bold t:text-center">${agent.name}</h2>
            <p class="text-gray-700">${agent.description}</p>
            <p class="text-gray-500 flex gap-2 items-center justify-center">
              <i class="bi bi-star-fill text-lime-400"></i>
              <span class="text-black font-bold text-xl">${agent.rating}</span> (${agent.reviews} reviews)
            </p>
          </div>
          <div>
            <p class="text-gray-500">
              <span class="text-black font-bold">${agent.price_range}</span> price ratings
            </p>
            <p class="text-gray-500">Sales last 12 months: ${agent.sales_last_12_months}</p>
          </div>
        </div>
      `;

      // Agregar la tarjeta al contenedor principal (suponiendo que tengas un div con id 'agents-container')
      document.getElementById('agentes').appendChild(agentCard);
    });
  })
  .catch(error => {
    console.error('Hubo un problema con el fetch:', error);
  });


// MENÚ DESPLEGABLE: ---------------------------------------------------------------------------------------------------------------

// JavaScript para abrir y cerrar el menú con if y else
const boton = document.getElementById("boton");
const menu = document.getElementById("menu");
const body = document.getElementById("body");

boton.addEventListener("click", function() {
  // Verificar si el menú está oculto o visible
  if (menu.style.display === "none" || menu.style.display === "") {
    // Si está oculto, mostrarlo
    menu.style.display = "block";
    
  } else {
    // Si está visible, ocultarlo
    menu.style.display = "none";
  }
});