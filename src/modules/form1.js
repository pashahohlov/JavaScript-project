const form = (idForm) => {
    const forms = document.querySelectorAll('form')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка!'
    const successText = 'Данные успешно отправлены. Наш менеджер с вами свяжется'

    const validate = (list) => {
        
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

            statusBlock.textContent = loadText
            formInput.append(statusBlock)

            formData.forEach((val, key) => {
                formBody[key] = val
            })

            console.log('submit');

            if (validate(formElements)) {
                sendData(formBody).then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                    console.log(data);
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
            } else {
                alert('Данные не валидны!')
            }

        })
    });
}

export default form