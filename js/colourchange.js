const inp = document.querySelectorAll("body input");

function changeHandler(){
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
}

inp.forEach(inps => inps.addEventListener('change', changeHandler));