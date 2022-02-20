const scroll = () => {
    const btn = document.querySelector('.smooth-scroll')
    window.onscroll = () => {
        if(window.scrollY > 300) {
            btn.style.display = 'flex'
        } else {
            btn.style.display = 'none'
        }
    }

    btn.onclick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}

export default scroll