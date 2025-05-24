function searchFood() {
    const foodInput = document.getElementById('foodInput').value;
    if (!foodInput) {
        alert('Please enter a food item');
        return;
    }

    const appId = '75d27972';
    const appKey = '7d4dac8976a38a9fef75e8f710707254';
    const apiUrl = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(foodInput)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const calorieResult = document.getElementById('calorieResult');
            const calories = data.calories;
            calorieResult.textContent = `Calories in ${foodInput}: ${calories.toFixed(2)} calories`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again later.');
        });
}
