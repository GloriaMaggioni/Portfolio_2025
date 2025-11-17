const btn_2022 = document.getElementById('btn_2022');
const btn_2025 = document.getElementById('btn_2025');
const portfolio_2022 = document.querySelector('.portfolio_22');
const portfolio_2025 = document.querySelector('.portfolio_25');

btn_2022.addEventListener('mouseover', () => {
    portfolio_2022.classList.remove('hidden');
})

btn_2022.addEventListener('mouseout', () => {
    portfolio_2022.classList.add('hidden');
})

btn_2025.addEventListener('mouseover', () => {
    portfolio_2025.classList.remove('hidden');
})

btn_2025.addEventListener('mouseout', () => {
    portfolio_2025.classList.add('hidden');
})
