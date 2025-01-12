// script.js
document.getElementById('addRecommendationButton').addEventListener('click', function() {
    const newRecommendation = `
        <div class="recommendation-card">
            <p>
                “ Jane is a great person to work with. She is very knowledgeable in Front-end development. ”
            </p>
        </div>
    `;

    const container = document.getElementById('recommendationsContainer');
    container.insertAdjacentHTML('beforeend', newRecommendation);
});
