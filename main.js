

const btn22 = document.getElementById('btn_2022');
const btn25 = document.getElementById('btn_2025');
 const portfolio_2022 = document.querySelector('.portfolio_22');
 const portfolio_2025 = document.querySelector('.portfolio_25');

const preview22 = document.getElementById("preview22");
 const preview25 = document.getElementById("preview25");

// PORTFOLIO 2022
btn22.addEventListener("mouseenter", () => {
      preview22.classList.remove("opacity-0", "pointer-events-none");
      preview22.classList.add("opacity-100");
});
btn22.addEventListener("mouseleave", () => {
      preview22.classList.add("opacity-0", "pointer-events-none");
       preview22.classList.remove("opacity-100");
});

function goToOldPortfolio(){
    btn22.addEventListener('click', (url) =>{
    window.open( './portfolio2022/portfolio_2022.html', '_self')
})

}

//PORTFOLIO 2025

 btn25.addEventListener("mouseenter", () => {
      preview25.classList.remove("opacity-0", "pointer-events-none");
       preview25.classList.add("opacity-100");
});   
btn25.addEventListener("mouseleave", () => {
      preview25.classList.add("opacity-0", "pointer-events-none");
      preview25.classList.remove("opacity-100");   
 });

function goToNewPortfolio(){
    btn25.addEventListener('click', (url) =>{
    window.open( './portfolio2025/portfolio_2025.html', '_self')
 })

}

