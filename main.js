

const btn22 = document.querySelector('.btn2022');
const btn25 = document.querySelector('.btn2025');
const portfolio_2022 = document.querySelector('.portfolio_22');
const portfolio_2025 = document.querySelector('.portfolio_25');

// PORTFOLIO 2022
btn22.addEventListener('mouseover', () => {
    portfolio_2022.classList.remove('hidden');
})

btn22.addEventListener('mouseout', () => {
    portfolio_2022.classList.add('hidden');
})

function goToOldPortfolio(){
    btn_2022.addEventListener('click', (url) =>{
    window.open( './portfolio2022/portfolio_2022.html', '_self')
    })

}

//PORTFOLIO 2025

btn25.addEventListener('mouseover', () => {
    portfolio_2025.classList.remove('hidden');
})

btn25.addEventListener('mouseout', () => {
    portfolio_2025.classList.add('hidden');
})


function goToNewPortfolio(){
    btn_2025.addEventListener('click', (url) =>{
    window.open( './portfolio2025/portfolio_2025.html', '_self')
    })

}

