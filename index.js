const selectAll = document.getElementById("select-all")
const inboxCheckboxes = document.querySelectorAll(".inbox-checkboxes")
const $search = document.getElementById('search')
const $box = document.getElementsByClassName('searchable')


function changeBackground() {
    for(let i = 0; i < inboxCheckboxes.length; i++){
        inboxCheckboxes[i].addEventListener('change', (e) => {
            const changeBg = document.getElementById(e.target.id)
            changeBg.parentElement.classList.toggle('bg-lightgrey')
        })
    }
}

changeBackground()

selectAll.addEventListener('change',function(_){
    inboxCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAll.checked
        if(checkbox.checked){
            checkbox.parentElement.classList.add('bg-lightgrey')
        }
        else{
            checkbox.parentElement.classList.remove('bg-lightgrey')
        }
    })
})

$search.addEventListener('input', (event) => {
    const searchText = event.target.value
    const regex = new RegExp(searchText, 'gi')

    Array.from($box).forEach((element) => {
        let text = element.innerHTML
        if(text.length <= 2) return
        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '')
        const newText = text.replace(regex, '<mark class="highlight">$&</mark>')
        element.innerHTML = newText
    })
})