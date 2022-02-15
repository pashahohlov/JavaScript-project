const servicesModal = () => {
    const servicesModal = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')
    const button = document.querySelectorAll('.btn-sm')
    const closeBtn = servicesModal.querySelector('.services-modal__close')

    button.forEach(btn => {
        btn.addEventListener('click', () => {
            servicesModal.style.display = 'flex'
            overlay.style.display = 'flex'
        })
    })

    closeBtn.addEventListener('click', () => {
        servicesModal.style.display = 'none'
        overlay.style.display = 'none'
    })
}

export default servicesModal