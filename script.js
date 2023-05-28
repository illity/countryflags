var flag = document.getElementById('russia')
var flagName = document.getElementById('flagName')
var transitionCount = 0;
flag.id = 'brazil';
flagName.innerHTML = 'RUSSIA->BRAZIL'

function handleTransitionEnd() {
    transitionCount++;
    console.log(transitionCount);
    if (transitionCount === 15) { // Adjust the count based on the number of transitions
        flagName.innerHTML = 'BRAZIL->SPAIN'
        flag.id = 'spain';
    }      
    if (transitionCount === 31) { // Adjust the count based on the number of transitions
        flagName.innerHTML = 'SPAIN->FRANCE'
        flag.id = 'france';
    }
}
  
flag.addEventListener('transitionend', handleTransitionEnd);