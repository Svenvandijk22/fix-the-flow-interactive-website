/*filterknop aanroepen*/

// Stap 1
let filterButton = document.querySelector('.filterDoelgroep');
// Stap 2
filterButton.addEventListener('click', function() {
console.log(filterButton)

    // Stap 3
    document.querySelector('.OverzichtFilteren').classList.toggle('OverzichtFilteren-visible');
});