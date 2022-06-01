const slider = document.querySelectorAll('.swiper')
const content = document.querySelectorAll('.hidden')
const contentVis = document.querySelectorAll('.visibl')
const service = document.querySelector('.service-hide__btn')
const click = document.querySelector('.service-hide')

service.addEventListener("click", () => {
    for(let i = 0; i < content.length; i++){
        content[i].classList.toggle('hidden')
        if(service.value === 'Показать все'){
            click.classList.add('click')
            service.value = "Скрыть"
        }else{
            service.value = 'Показать все'
            click.classList.remove('click')
        }
    }
    for(let b = 0; b < contentVis.length; b++){
        contentVis[b].classList.toggle('visibl')
        if (document.documentElement.clientWidth < 1119 ){

        }else{

        }
    }
})
const resize = () =>{
    const width = window.innerWidth
    console.log(width)
    swiperWidth(width)
}
window.addEventListener('resize', resize)
function swiperWidth(width){
    if(width < 768 ){
        const swiper = new Swiper('.swiper', {
            loop: true,
            slidesPerView: 'auto',
         pagination: {
            el: '.swiper-pagination',
             clickable: true,
         },
        })
    }
}


