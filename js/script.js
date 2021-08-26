const inputClr = document.querySelectorAll('.input-clr');
const gradientValue = document.getElementById('gradient-value');

// init linear gradient:
inputClr[0].value = '#f00';
inputClr[1].value = '#00f';
var clr1 = inputClr[0].value, clr2 = inputClr[1].value;
document.body.style.backgroundImage = `linear-gradient( to right, ${clr1}, ${clr2})`;

// change linear gradient:
inputClr.forEach(inpt => {
    inpt.addEventListener('input', _ => {
        if (inpt.classList.contains('inpt-clr-1')) clr1 = inpt.value;
        else clr2 = inpt.value;
        document.body.style.backgroundImage = `linear-gradient( to right, ${clr1}, ${clr2})`;
        let red1 = parseInt(clr1.substr(1, 2), 16);
        let red2 = parseInt(clr2.substr(1, 2), 16);
        let green1 = parseInt(clr1.substr(3, 2), 16);
        let green2 = parseInt(clr2.substr(3, 2), 16);
        let blue1 = parseInt(clr1.substr(5, 2), 16);
        let blue2 = parseInt(clr2.substr(5, 2), 16);
        gradientValue.innerHTML = `linear-gradient( to right, 
                                   rgb(${red1}, ${green1}, ${blue1}), 
                                   rgb(${red2}, ${green2}, ${blue2}))`;
    });
});