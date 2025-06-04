async function fetchOffices() {
    try {
        const response = await fetch('https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/offices.json');
        const data = await response.json();
        displayOffices(data);
    } catch (error) {
        console.error('Hiba a feldolgozásban:', error);
    }
}

function displayOffices(offices) {
    const container = document.getElementById('office-list');
    offices.forEach(office => {
        const card = document.createElement('div');
        card.className = 'office-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${office.image}" alt="${office.name}" />
      </div>
      <div class="card-content">
        <h3>${office.name}</h3>
        <p><strong>Cím:</strong> ${office.address}</p>
        <p><strong>Alapterület:</strong> ${office.area_m2} m²</p>
        <p><strong>Alapdíj:</strong> ${office.base_fee} USD</p>
        <p><strong>Napi ár:</strong> ${office.daily_price} USD</p>
        <button class="rent-btn" onclick="alert('Bérlés kezdeményezve: ${office.name}')">Bérlés</button>
      </div>
        `;
        container.appendChild(card);
    });
}

window.onLoad = fetchOffices();