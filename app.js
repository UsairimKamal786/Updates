fetch("updates.json?v=" + Date.now())
  .then(res => {
    if (!res.ok) throw new Error("File not found");
    return res.json();
  })
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
  })
  .catch(err => console.error(err));
