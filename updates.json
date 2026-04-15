fetch("updates.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("updates");

    data.reverse().forEach(item => {
      const div = document.createElement("div");
      div.classList.add("card", item.type);

      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="date">📅 ${item.date}</div>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Error loading updates:", err);
  });
