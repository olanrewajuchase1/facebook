
let bar = document.querySelector('.bar')
let barcont = document.querySelector('.barcont')
let sidecont = document.querySelector('.sidecont')


// sidecont && window.addEventListener('click', (event) => {
//     if(sidecont !== null) {
//         if(sidecont.contains(event.target)) {
//             sidecont.style.display = 'flex'
//         }
//     }
// },true)


document.querySelector('.bar').addEventListener('click', (e) => {
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')
        barcont.style.display = 'flex'
    }else {
        e.target.classList.remove('active')
        barcont.style.display = 'none'
    }
})