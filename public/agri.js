const crops = [
  { name: "Tomato", price: "rs25/kg", location: "Bangalore" ,img:"tom.jpg"},
  { name: "Wheat", price: "rs22/kg", location: "Mysore",img:"wheat.jpg" },
  { name: "Onion", price: "rs30/kg", location: "Hubli" ,img:"oni.jpg"},
   { name: "Rice", price: "rs50/kg", location: "raichur" ,img:"download.jpg"}
];

const cropList = document.getElementById("cropList");
const ordersList = document.getElementById("ordersList");


crops.forEach(crop => {
  let div = document.createElement("div");
  div.className = "crop-card";
  div.innerHTML = `
    <img src="${crop.img}" alt="${crop.name}" width="150">
    <h3>${crop.name}</h3>
    <p>Price: ${crop.price}</p>
    <p>Location: ${crop.location}</p>
    <button onclick="buyCrop('${crop.name}', '${crop.price}')">Buy Now</button>
    <button onclick="makeOffer('${crop.name}')">Make Offer</button>
  `;
  cropList.appendChild(div);
});

function buyCrop(name, price) {
  let li = document.createElement("li");
  li.textContent = `Ordered ${name} at ${price}`;
  ordersList.appendChild(li);
}

function makeOffer(name) {
  let offer = prompt("Enter your offer price for " + name);
  if (offer) {
    let li = document.createElement("li");
    li.textContent = `Offer made for ${name} at rs${offer}/kg`;
    ordersList.appendChild(li);
  }
}
