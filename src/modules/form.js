const form = (idForm) => {
    const forms = document.querySelectorAll('form')
    const validate = (list) => {
        console.log(list);
    }

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

            const formElements = formInput.querySelectorAll('input')
            const formData = new FormData(formInput)
            const formBody = {}

            formData.forEach((val, key) => {
                formBody[key] = val
            })

            console.log('submit');

            validate(formElements)

            sendData(formBody).then(data => {
                formElements.forEach(input => {
                    input.value = ''
                })
                console.log(data);
            })
        })
    });
}

export default form