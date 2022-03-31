window.addEventListener('DOMContentLoaded' , () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = 0.7
        setTimeout(() => {
            loader.style.opacity = 0.4
            setTimeout(() => {
                loader.style.opacity = 0
                loader.style.display = 'none'
            },300)
        },700)
    },1000)
})