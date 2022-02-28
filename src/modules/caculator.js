const calculator = () => {
    const calcBlock = document.querySelector('#calc')
    const calcType = document.querySelector('#calc-type')
    const calcTypeMaterial = document.querySelector('#calc-type-material')
    const calcSquare = document.querySelector('#calc-input')
    const calcTotal = document.querySelector('#calc-total')

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value
        const calcSquareValue = calcSquare.value
        let calcTotalValue = 0

        if (calcType.value && calcTypeMaterial.value && calcSquare.value) {
            calcTotalValue = calcTypeValue * calcTypeMaterialValue * calcSquareValue
        } else {
            calcTotalValue = 0
        }

        calcTotal.value = calcTotalValue
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcSquare) {
            countCalc()
        }
    })
}

export default calculator