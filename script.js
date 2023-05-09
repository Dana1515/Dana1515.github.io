const body=document.querySelector('body'),
      burger=document.querySelector('.burger'),
      burgerMenuNav=document.querySelector('.burger-menu-nav'),
      mainLink=document.querySelectorAll('.main-link'),
      accordionBtn=document.querySelectorAll('.accordion-btn'),
      accordionText=document.querySelectorAll('.accordion-text');







// БУРГЕР____________________________________________________________________________________________
burger.addEventListener('click', function(){
  this.classList.toggle('active');
  burgerMenuNav.classList.toggle('open');
  
})

for (let item of mainLink){
    item.addEventListener('click', function(){
    burger.classList.remove('active');
    burgerMenuNav.classList.remove('open');
    
  })
};

// АККОРДЕОН____________________________________________________________________________________________



// for (){
//        accordionBtn.addEventListener('click', function(){
//         accordionBtn.classList.toggle('open');
      
//   })
  
// };




// let i = 1;
//     for(let cards of document.querySelectorAll('.cards')) {
//       arrowCards.addEventListener('click', function(){
//         cards.style.position = 'relative';
//         cards.insertAdjacentHTML('beforeend', `${'.card-1'}`);
//         i++;

//       })

//     }




// ----------------------- ФОРМА------------------------//



const form = document.querySelector('.form-reviews');

const openModal = document.querySelector('.btn-review'),
    closeModal = document.querySelector('.modal-btn-close'),
    modal = document.querySelector('.modal');

form.addEventListener('submit', getFormValue);

function getFormValue(event) {
  event.preventDefault();
  
     
 openModal.addEventListener('click', function(e){
  const name = form.querySelector('[name="name"]'), review=form.querySelector('[name="review"]');
  let data = [{name: name.value},{review: review.value}];
  const title= document.querySelector('.modal__title');
  data.forEach(item =>{
    title.insertAdjacentHTML('beforebegin',
                  `<h2 class="modal__title"> ${item.name},</h2>` );
  })

    modal.classList.add('active');
    modal.classList.add('open');
    
 })

  closeModal.addEventListener('click',function(){
    modal.classList.remove('active');
    modal.classList.remove('open');
    location.reload();
  })    
    
}







 

   