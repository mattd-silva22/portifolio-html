let hamBtn = document.querySelector('#hambtn')
let menu = document.querySelector('#navbar-mobile')

hamBtn.addEventListener('click', ()=>{
    
    if (menu.style.display =='none') {
        menu.style.display ='inline'
        
    } else {
        menu.style.display ='none'
    }
})
