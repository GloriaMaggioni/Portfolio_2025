const btn_2022 = document.getElementById('btn_2022');
const btn_2025 = document.getElementById('btn_2025');
const portfolio_2022 = document.querySelector('.portfolio_22');
const portfolio_2025 = document.querySelector('.portfolio_25');

// PORTFOLIO 2022
btn_2022.addEventListener('mouseover', () => {
    portfolio_2022.classList.remove('hidden');
})

btn_2022.addEventListener('mouseout', () => {
    portfolio_2022.classList.add('hidden');
})

function goToOldPortfolio(){
    btn_2022.addEventListener('click', (url) =>{
    window.open( './portfolio2022/portfolio_2022.html', '_self')
    })

}

//PORTFOLIO 2025

btn_2025.addEventListener('mouseover', () => {
    portfolio_2025.classList.remove('hidden');
})

btn_2025.addEventListener('mouseout', () => {
    portfolio_2025.classList.add('hidden');
})


function goToNewPortfolio(){
    btn_2025.addEventListener('click', (url) =>{
    window.open( './portfolio2025/portfolio_2025.html', '_self')
    })

}

