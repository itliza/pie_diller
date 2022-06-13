
const bluredItems = document.querySelectorAll('.makeBlured');
const buttons = document.querySelectorAll('.btn__arr');

const buttonOpenMore = document.querySelectorAll('.btn__more');

const callBack = document.querySelector('.call_back');

const form = document.querySelector('.form');

const btnClose = document.querySelector('.btn__close');

// console.log(bluredItems);

bluredItems.forEach((item, itemIndex) =>{
    item.addEventListener('click', () =>{
        item.classList.add('activated');
        
        buttons.forEach((btn, btnIndex)=>{
            if(itemIndex === btnIndex)
            btn.hidden = false;
        })

    })
})

buttons.forEach((btn, btnIndex) =>{
    btn.addEventListener('click', ()=>{
        bluredItems.forEach((item, itemIndex)=>{
            if(btnIndex === itemIndex){
                item.classList.remove('activated');
                btn.hidden = true;
            }
        })
    })
    
})


buttonOpenMore.forEach((btnMore, btnMoreIndex) =>{
    btnMore.addEventListener('click', ()=>{
        window.open('menu.html', '_blank');
    })
})

callBack.addEventListener('click', ()=>{
    form.hidden = false;

    btnClose.addEventListener('click', ()=>{
        form.hidden = true;
    })
})


