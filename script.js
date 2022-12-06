const ratings=document.querySelectorAll('.number');
const submitBtn=document.querySelector('.submit');
const ratingContainer=document.querySelector('.container');
const thankuContainer=document.querySelector('.thanku_container');
const selectedRatings=document.querySelector('#selected_rating');
const rateAgain=document.querySelector('.rate_again');

submitBtn.addEventListener('click', function(){
    ratingContainer.style.display = 'none';
    thankuContainer.classList.remove('hidden');
   
 });

 rateAgain.addEventListener('click',()=>{
    thankuContainer.classList.add('hidden');
    ratingContainer.style.display='block';
 })
 ratings.forEach((rate)=>{
    rate.addEventListener('click',()=>{
        selectedRatings.innerHTML=rate.innerHTML;
    })
 })