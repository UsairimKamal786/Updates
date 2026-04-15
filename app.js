fetch("assets/updates.json?v=" + new Date().getTime())
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("updates");

    data.reverse().forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card", item.type);

      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="date">📅 ${item.date}</div>
      `;

      container.appendChild(card);
    });
  });
