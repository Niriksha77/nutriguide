document.addEventListener("DOMContentLoaded", function() {
    generateTable();
});

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function generateTable() {
    let tableBody = document.getElementById("trackerTable");
    tableBody.innerHTML = "";

    days.forEach(day => {
        let row = `<tr>
            <td>${day}</td>
            <td><input type="checkbox" id="${day}-breakfast"></td>
            <td><input type="checkbox" id="${day}-lunch"></td>
            <td><input type="checkbox" id="${day}-snack"></td>
            <td><input type="checkbox" id="${day}-dinner"></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function saveData() {
    let childId = document.getElementById("childId").value.trim();
    if (!childId) {
        alert("Enter a valid Child ID!");
        return;
    }

    let foodData = {};
    days.forEach(day => {
        foodData[day] = {
            breakfast: document.getElementById(${day}-breakfast).checked,
            lunch: document.getElementById(${day}-lunch).checked,
            snack: document.getElementById(${day}-snack).checked,
            dinner: document.getElementById(${day}-dinner).checked
        };
    });

    localStorage.setItem(food_${childId}, JSON.stringify(foodData));
    alert("Food data saved successfully!");
}

function loadData() {
    let childId = document.getElementById("childId").value.trim();
    if (!childId) {
        alert("Enter a valid Child ID!");
        return;
    }

    let storedData = JSON.parse(localStorage.getItem(food_${children,id}));
    if (storedData) {
        days.forEach(day => {
            document.getElementById(${day}-breakfast).checked = storedData[day]?.breakfast || false;
            document.getElementById(${day}-lunch).checked = storedData[day]?.lunch || false;
            document.getElementById(${day}-snack).checked = storedData[day]?.snack || false;
            document.getElementById(${day}-dinner).checked = storedData[day]?.dinner || false;
        });
        alert("Data loaded successfully!");
    } else {
        alert("No data found for this Child ID.");
    }
}

function calculateProgress() {
    let childId = document.getElementById("childId").value.trim();
    if (!childId) {
        alert("Enter a valid Child ID!");
        return;
    }

    let storedData = JSON.parse(localStorage.getItem(food_${childId}));
    if (!storedData) {
        alert("No data available to calculate progress.");
        return;
    }

    let totalMeals = 0, completedMeals = 0;
    days.forEach(day => {
        Object.values(storedData[day]).forEach(status => {
            totalMeals++;
            if (status) completedMeals++;
        });
    });

    let progress = ((completedMeals / totalMeals) * 100).toFixed(2);
    document.getElementById("progressOutput").innerText =Weekly Meal Completion: ${progress}%;
}
