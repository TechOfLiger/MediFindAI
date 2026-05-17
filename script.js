const hospitals = {

  gas: [

    {
      name: "Apollo Gastro Care",
      rating: 4.9,
      reviews: 2500,
      distance: 3,
      experience: 18,
      area: "Hazratganj",
      specialist: "Gastroenterologist",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
      features: [
        "24/7 Emergency",
        "ICU",
        "Insurance",
        "Online Booking"
      ]
    },

    {
      name: "Digestive Health Institute",
      rating: 4.7,
      reviews: 1800,
      distance: 6,
      experience: 14,
      area: "Gomti Nagar",
      specialist: "Digestive Specialist",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Advanced Endoscopy",
        "Ambulance",
        "Cashless"
      ]
    }

  ],

  heart: [

    {
      name: "Heart Plus Hospital",
      rating: 4.9,
      reviews: 3200,
      distance: 4,
      experience: 20,
      area: "Indira Nagar",
      specialist: "Cardiologist",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Heart Surgery",
        "Cath Lab",
        "Emergency"
      ]
    }

  ],

  skin: [

    {
      name: "Derma Care Clinic",
      rating: 4.8,
      reviews: 1600,
      distance: 5,
      experience: 12,
      area: "Aliganj",
      specialist: "Dermatologist",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=1200&auto=format&fit=crop",
      features: [
        "Laser Therapy",
        "Cosmetic Care",
        "Allergy Testing"
      ]
    }

  ],

  fever: [

    {
      name: "General Health Hospital",
      rating: 4.6,
      reviews: 1900,
      distance: 2,
      experience: 15,
      area: "Charbagh",
      specialist: "General Physician",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
      features: [
        "24/7",
        "Pathology",
        "Pharmacy"
      ]
    }

  ],

  eye: [

    {
      name: "Vision Eye Center",
      rating: 4.8,
      reviews: 2200,
      distance: 7,
      experience: 17,
      area: "Mahanagar",
      specialist: "Eye Specialist",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
      features: [
        "LASIK",
        "Retina Care",
        "Eye Testing"
      ]
    }

  ]

};

let currentData = [];

function createHospitalCard(hospital) {

  return `

    <div class="hospital-card">

      <img src="${hospital.image}" />

      <div class="card-content">

        <div class="card-top">

          <h3>${hospital.name}</h3>

          <div class="rating">
            ⭐ ${hospital.rating}
          </div>

        </div>

        <div class="info">
          📍 ${hospital.area}
        </div>

        <div class="info">
          👨‍⚕️ ${hospital.specialist}
        </div>

        <div class="info">
          📝 ${hospital.reviews} Reviews
        </div>

        <div class="info">
          📏 ${hospital.distance} KM Away
        </div>

        <div class="info">
          🏥 ${hospital.experience}+ Years Experience
        </div>

        <div class="features">

          ${hospital.features.map(feature => `
            <span>${feature}</span>
          `).join('')}

        </div>

        <div class="card-buttons">

          <button class="primary-btn">
            Book Appointment
          </button>

          <button class="secondary-btn">
            View Details
          </button>

        </div>

      </div>

    </div>

  `;

}

function displayHospitals(data) {

  const results = document.getElementById('results');

  results.innerHTML = '';

  if (data.length === 0) {

    results.innerHTML = `
      <h2>No Hospitals Found</h2>
    `;

    return;
  }

  data.forEach(hospital => {

    results.innerHTML += createHospitalCard(hospital);

  });

}

function searchHospital() {

  const input = document
    .getElementById('searchInput')
    .value
    .toLowerCase()
    .trim();

  if (hospitals[input]) {

    currentData = [...hospitals[input]];

    currentData.sort((a, b) => b.rating - a.rating);

    displayHospitals(currentData);

  } else {

    document.getElementById('results').innerHTML = `

      <div class="hospital-card">

        <div class="card-content">

          <h2>No Results Found</h2>

          <p class="info">
            Try searching:
            gas, heart, skin, fever, eye
          </p>

        </div>

      </div>

    `;

  }

}

function quickSearch(type) {

  document.getElementById('searchInput').value = type;

  searchHospital();

}

function applyFilters() {

  if (currentData.length === 0) return;

  const rating = parseFloat(
    document.getElementById('ratingFilter').value
  );

  const distance = parseFloat(
    document.getElementById('distanceFilter').value
  );

  const sort = document
    .getElementById('sortFilter')
    .value;

  let filtered = currentData.filter(hospital => {

    return (
      hospital.rating >= rating &&
      hospital.distance <= distance
    );

  });

  if (sort === 'rating') {

    filtered.sort((a, b) => b.rating - a.rating);

  }

  else if (sort === 'distance') {

    filtered.sort((a, b) => a.distance - b.distance);

  }

  else if (sort === 'experience') {

    filtered.sort((a, b) => b.experience - a.experience);

  }

  displayHospitals(filtered);

}

window.onload = () => {

  currentData = [...hospitals['gas']];

  displayHospitals(currentData);

};
//  buttons
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

function openLogin() {
  const popup = document.getElementById("loginPopup");
  if (popup) popup.style.display = "flex";
}

function closeLogin() {
  const popup = document.getElementById("loginPopup");
  if (popup) popup.style.display = "none";
}