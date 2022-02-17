const form = (idForm) => {
    const forms = document.querySelectorAll('form')

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
    
    forms.forEach(formInput => {
        formInput.addEventListener('submit', (event) => {
            event.preventDefault()

            const formData = new FormData(formInput)
            const formBody = {}

            formData.forEach((val, key) => {
                formBody[key] = val
            })

            console.log('submit');

            sendData(formBody).then(data => {
                console.log(data);
            })
        })
    });
}

export default form