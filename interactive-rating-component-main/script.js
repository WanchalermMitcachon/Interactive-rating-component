const ratingContainer=document.querySelector('.ratings-container')
const ratings=document.querySelectorAll('.rating')
const submitBtn=document.getElementById('submit')
const panel=document.getElementById('panel')
const scoreCon=document.querySelector('.score-container')
const score=document.getElementById('score')

let selected;
ratingContainer.addEventListener('click', (e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active')
        selected=e.target.innerHTML
        console.log(selected)
    }
})

function removeActive(){
    for(let i=0; i<ratings.length;i++){
        ratings[i].classList.remove('active')
    }
}

submitBtn.addEventListener('click',()=>{
    panel.style.display='none'
    scoreCon.style.display='block'
    score.innerText=`You selected ${selected} out of 5`


    
})