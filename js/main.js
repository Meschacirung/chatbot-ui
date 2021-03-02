let form = document.querySelector('form')

let dots = document.querySelector('.dots');
let mic = document.querySelector('.mic')

mic.addEventListener('click', ()=>{
    mic.classList.remove('flex')
    mic.classList.add('hidden')


    dots.classList.remove('hidden')
    dots.classList.add('gap-2')
})