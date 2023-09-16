const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navg');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('actives');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('actives');
    })
}
