
window.onload = function () {
  var map = L.map('map').setView([0, -30], 3);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  var dangerZones = [
    {
      name: "Hawksbill Sea Turtle",
      coords: [13.1939, -59.5432],
      description: "Endangered species due to habitat loss and poaching"
    },
    {
      name: "Vaquita",
      coords: [31.4700, -114.7200],
      description: "Critically endangered porpoise found in the Gulf of California"
    },
    {
      name: "Blue Whale",
      coords: [34.0522, -120.2437],
      description: "Largest animal on Earth, threatened by ship strikes and entanglement"
    },
    {
        name: "Napoleon Fish",
        coords: [-0.2346, 130.5212],
        description: "Vulnerable species known for its size and distinctive hump"
    },
    {
        name: "Scalloped Hammerhead Shark",
        coords: [5.5167, -87.0500],
        description: "Overfished species known for its unique head shape"
    },
    {
        name: "Giant Manta Ray",
        coords: [-17, 40.2833],
        description: "Vulnerable species known for its large wingspan and gentle nature"
    },
    {
        name: "Efrei Paris",
        coords: [48.788675, 2.363702],
        description: "A prestigious engineering school in Paris, France, known for its innovation and technology programs."
    }
  ];

  dangerZones.forEach(function(zone) {
    L.marker(zone.coords)
      .addTo(map)
      .bindPopup(`<b>${zone.name}</b><br>${zone.description}`);
  });
};