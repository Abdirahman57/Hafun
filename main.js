const openBtn= document.querySelector('.open-btn');
const header= document.querySelector('header');
const closeBtn= document.querySelector('.close-btn');


openBtn.addEventListener('click', ()=>{
   
    header.classList.add('header');
    closeBtn.classList.add('show-closebtn');
    openBtn.classList.add('hide-open-btn');


});
closeBtn.addEventListener('click',()=>{
    header.classList.remove('header');
    closeBtn.classList.remove('show-closebtn');
    openBtn.classList.remove('hide-open-btn');
});
const Close = ()=> {
    header.classList.remove('header');
    closeBtn.classList.remove('show-closebtn');
    openBtn.classList.remove('hide-open-btn');
};

document.addEventListener('click',(event) => {
    let isClicked= closeBtn.contains(event.target) 
    let isClickede= openBtn.contains(event.target)
    if(!isClicked,!isClickede){
        Close()
    }

});
