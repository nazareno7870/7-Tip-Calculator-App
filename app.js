let bill = 0
let tip = 0
let persons = 0

let tipAmount = 0.00
let totalAmount = 0.00



document.addEventListener('DOMContentLoaded', e=>{

    const billInput = document.getElementById('Amount')
    billInput.addEventListener('keyup', e=>{
        bill = e.target.value
        showResults()
        resetUsable()
    })

    const tipButtons = document.getElementsByClassName('btn-tip')
    for( let btn of tipButtons){
        btn.addEventListener('click',handleTip)
    }

    const customTip = document.getElementById('customTip')
    customTip.addEventListener('keyup',handleCustomTip)

    const diners = document.getElementById('diners')
    diners.addEventListener('keyup',e=>{
        persons = e.target.value
        showResults()
        resetUsable()
    })

    showResults() 

    const resetBtn = document.getElementById('resetBtn')
    resetBtn.addEventListener('click',resetAll)

})

const resetSelect = ()=>{

    const tipButtons = document.getElementsByClassName('btn-tip')
    for( let btn of tipButtons){
        btn.classList.remove('selected')
    }

}

const handleTip = e=>{
    resetCustomTip()
    resetSelect()

    const selectBtn = e.target
    selectBtn.classList.add('selected')

    tip = parseInt(selectBtn.textContent)
    showResults()
    resetUsable()
}

const resetCustomTip = ()=>{

    const customTip = document.getElementById('customTip')
    customTip.value = ''
}

const handleCustomTip = e=>{

    resetSelect()

    tip = e.target.value
    if(tip === '' ) tip = 0
    showResults()
    resetUsable()
}

const showResults = ()=>{
    if( bill>0 && persons>0){
        tipAmount = bill / persons * tip / 100
        totalAmount = bill / persons + tipAmount
    }else{
        tipAmount = 0
        totalAmount = 0
    }
    const tipresult = document.getElementById('tipAmount')
    tipresult.textContent = '$'+ parseFloat(tipAmount).toFixed(2)

    const total = document.getElementById('totalAmount')
    total.textContent = '$' + parseFloat(totalAmount).toFixed(2) 
}

const resetAll = ()=>{
    resetSelect()
    resetCustomTip()
    const billInput = document.getElementById('Amount')
    billInput.value = ''
    const diners = document.getElementById('diners')
    diners.value = ''

    bill = 0
    tip = 0
    persons = 0

    const resetBtn = document.getElementById('resetBtn')
    resetBtn.style.backgroundColor = '#0d686d'

    showResults()
}

const resetUsable = ()=>{
    const resetBtn = document.getElementById('resetBtn')
    resetBtn.style.backgroundColor = 'var(--strong-cyan)'
}