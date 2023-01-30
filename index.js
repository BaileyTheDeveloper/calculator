let display = document.getElementById('display');

let number = Array.from(document.getElementsByClassName('number'));

number.map(number => {
    number.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = "";
                break;
            case '<-':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'There was an error!';
                }
                break;

            default:
                display.innerText += e.target.innerText
        }
    })
})