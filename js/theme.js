let dBtn = document.querySelector('#theme')
let lBtn = document.querySelector('#themeLight')

let infoContainer = document.querySelector('#info')
let infoIcon = document.querySelector('#icon')
let infoHeading = document.querySelector('#ih')
let infoParagraph = document.querySelector('#ip')


let msgLeftCore = document.querySelector('.msgLCore')
let msgLeftSvg = document.querySelector('.msgLSvg')

let msgRightCore = document.querySelector('.msgRCore')
let msgRightSvg = document.querySelector('.msgRSvg')

let options = document.querySelector('#options')
let mainOptions = document.querySelector('#mainOptions')

let micro = document.querySelector('.mic')

let actionBack = document.querySelector('#aback')

let actionIcon = document.querySelector('.aicon')

let chat = document.querySelector('.chat');

dBtn.addEventListener('click', ()=>{

    document.querySelector('body').classList.remove('bg-gray-50')
    document.querySelector('body').classList.add('bg-gray-900')

    infoContainer.classList.add('bg-gray-800')
    infoContainer.classList.remove('shadow-sm')

    infoIcon.classList.add('bg-opacity-10')

    infoHeading.classList.remove('text-gray-800')
    infoHeading.classList.add('text-white')

    infoParagraph.classList.remove('text-gray-600')
    infoParagraph.classList.add('text-gray-300')


    msgLeftCore.classList.remove('bg-gray-200', 'text-gray-600')
    msgLeftCore.classList.add('bg-indigo-500', 'text-white')

    msgLeftSvg.classList.remove('text-gray-200')
    msgLeftSvg.classList.add('text-indigo-500')


    msgRightCore.classList.remove('text-gray-600')
    msgRightCore.classList.add('text-white')

    msgRightSvg.classList.remove('text-gray-50')
    msgRightSvg.classList.add('text-gray-900')

    options.classList.remove('bg-white')
    options.classList.add('bg-gray-800')

    mainOptions.classList.remove('bg-white', 'shadow-md')
    mainOptions.classList.add('bg-gray-900')

    micro.classList.add('hover:bg-opacity-5')

    actionBack.classList.remove('text-gray-600', 'hover:text-gray-700')
    actionBack.classList.add('text-gray-400', 'hover:text-gray-200')

    actionIcon.classList.remove('hover:bg-opacity-5')
    actionIcon.classList.add('hover:bg-opacity-10')

    dBtn.classList.add('hidden')
    lBtn.classList.remove('hidden')
})

lBtn.addEventListener('click', ()=>{

    document.querySelector('body').classList.remove('bg-gray-900')
    document.querySelector('body').classList.add('bg-gray-50')

    infoContainer.classList.remove('bg-gray-800')
    infoContainer.classList.add('shadow-sm', 'bg-white')

    infoIcon.classList.remove('bg-opacity-10')

    infoHeading.classList.add('text-gray-800')
    infoHeading.classList.remove('text-white')

    infoParagraph.classList.add('text-gray-600')
    infoParagraph.classList.remove('text-gray-200')


    msgLeftCore.classList.add('bg-gray-200', 'text-gray-600')
    msgLeftCore.classList.remove('bg-indigo-500', 'text-white')

    msgLeftSvg.classList.add('text-gray-200')
    msgLeftSvg.classList.remove('text-indigo-500')


    msgRightCore.classList.add('text-gray-600')
    msgRightCore.classList.remove('text-white')

    msgRightSvg.classList.add('text-gray-50')
    msgRightSvg.classList.remove('text-gray-900')

    options.classList.add('bg-white')
    options.classList.remove('bg-gray-800')

    mainOptions.classList.add('bg-white', 'shadow-md')
    mainOptions.classList.remove('bg-gray-900')

    actionBack.classList.add('text-gray-600', 'hover:text-gray-700')
    actionBack.classList.remove('text-gray-400', 'hover:text-gray-200')

    actionIcon.classList.add('hover:bg-opacity-5')
    actionIcon.classList.remove('hover:bg-opacity-10')

    lBtn.classList.add('hidden')
    dBtn.classList.remove('hidden')
})