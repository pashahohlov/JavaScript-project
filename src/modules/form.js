const form = (idForm) => {
    const nameForms = document.querySelectorAll('input[name=fio]')
    const numberForms = document.querySelectorAll('input[name=number]')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка!'
    const successText = 'Данные успешно отправлены. Наш менеджер с вами свяжется'

    const validateName = (list) => {
        const namePattern = /[A-Za-zA-Яа-яЁё]/
        if (namePatttern) {
            validateName = true
        } else {
            validateName = false
        }
    }

    const validateNumber = (list) => {
        const numberPattern = /[0-9]/
        if (numberPatttern) {
            validateNumber = true
        } else {
            validateNumber = false
        }
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
    
    nameForms.forEach(formInput => {
        formInput.addEventListener('submit', (event) => {
            event.preventDefault()

            const formElements = formInput.querySelectorAll('input[name=fio]')
            const formData = new FormData(formInput)
            const formBody = {}

            statusBlock.textContent = loadText
            formInput.append(statusBlock)

            formData.forEach((val, key) => {
                formBody[key] = val
            })

            console.log('submit');

            if (validateName(formElements)) {
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

    numberForms.forEach(formInput => {
        formInput.addEventListener('submit', (event) => {
            event.preventDefault()

            const formElements = formInput.querySelectorAll('input[name=number]')
            const formData = new FormData(formInput)
            const formBody = {}

            statusBlock.textContent = loadText
            formInput.append(statusBlock)

            formData.forEach((val, key) => {
                formBody[key] = val
            })

            console.log('submit');

            if (validateNumber(formElements)) {
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