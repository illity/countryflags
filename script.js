const flags = ['japan', 'france', 'brazil', 'russia', 'portugal', 'spain', 'mexico']
const animationDuration = 1000; 
var flag = document.getElementById(flags[0])
var flagName = document.getElementById('flagName')
var i = 1;
var interval = setInterval(function(){
    flag.id = flags[i];
    flagName.innerHTML = `${flags[i-1].toUpperCase()}-${flags[i].toUpperCase()}`
    i++;
    if(i === flags.length) clearInterval(interval);
}, animationDuration);