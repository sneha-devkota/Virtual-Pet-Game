// Fancy Virtual Pet Logic
let hunger = 50;
let happiness = 50;
let energy = 50;
const statusText = document.getElementById("status-text");
const petImage = document.getElementById("pet");

function updateStats() {
    document.getElementById("hunger").innerText = hunger;
    document.getElementById("happiness").innerText = happiness;
    document.getElementById("energy").innerText = energy;

    if (hunger > 80) {
        petImage.src = "hungry.png";  // Change to hungry pet
        statusText.innerText = "Your pet is starving!";
        petImage.style.transform = "scale(1.1)";
    } else if (energy < 20) {
        petImage.src = "tired.png";  // Change to tired pet
        statusText.innerText = "Your pet is exhausted!";
        petImage.style.transform = "rotate(-5deg)";
    } else if (happiness < 30) {
        petImage.src = "sad.png";  // Change to sad pet
        statusText.innerText = "Your pet is feeling lonely!";
        petImage.style.transform = "scale(0.9)";
    } else {
        petImage.src = "happy.png";  // Back to happy pet
        statusText.innerText = "Your pet is happy!";
        petImage.style.transform = "scale(1)";
    }
}

function feedPet() {
    hunger = Math.max(0, hunger - 20);
    happiness += 5;
    energy += 5;
    updateStats();
}

function playWithPet() {
    happiness = Math.min(100, happiness + 20);
    energy -= 10;
    hunger += 10;
    updateStats();
}

function restPet() {
    energy = Math.min(100, energy + 20);
    hunger += 5;
    happiness -= 5;
    updateStats();
}

// 🔹 Slow down hunger/tiredness over time (every 10 seconds)
setInterval(() => {
    hunger = Math.min(100, hunger + 2);
    happiness = Math.max(0, happiness - 2);
    energy = Math.max(0, energy - 2);
    updateStats();
}, 10000);
