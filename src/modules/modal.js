const modal = () => {
    const modal = document.querySelector('.header-modal')
    const overlay = document.querySelector('.overlay')
    const button = document.querySelectorAll('.header-modal__btn')
    const closeBtn = modal.querySelector('.header-modal__close')

    button.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex'
            overlay.style.display = 'flex'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        overlay.style.display = 'none'
    })
}

export default modal