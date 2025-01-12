// Dynamically add new skills
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />

const skills = [
    { name: "HTML", experience: "4 years", logo: "html-logo.png" },
    { name: "JavaScript", experience: "3 years", logo: "javascript-logo.png" },
    { name: "CSS", experience: "4 years", logo: "css-logo.png" },
    { name: "Node.js", experience: "4 years", logo: "node-logo.png" },
    { name: "React", experience: "4 years", logo: "react-logo.png" },
];

const container = document.querySelector('.skills-container');
skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');
    skillCard.innerHTML = `
        <img src="${skill.logo}" alt="${skill.name} Logo" class="skill-logo">
        <h3>${skill.name}</h3>
        <p>${skill.experience} experience</p>
    `;
    container.appendChild(skillCard);
});
