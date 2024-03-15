document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("result");
    let input = "";
    let mem = 0;

    function updateDisplay() {
        display.querySelector(".input").innerText = input;
    }
    
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(event) {
        const button = event.target;
        const buttonText = button.id;

        if (button.id === "ac")
            input = "";
        else if (button.id === "bs")
            input = input.slice(0, -1)
        else if (button.id === "mr")
            input += mem;
        else if (button.id === "m+") {
            try {
                const currentValue = eval(input);
                if (typeof currentValue === 'number') {
                    mem += currentValue;
                }
            } catch (error) {}
        }
        else if (button.id === "m-") {
            try {
                const currentValue = eval(input);
                if (typeof currentValue === 'number') {
                    mem -= currentValue;
                }
            } catch (error) {}
        }
        else if (button.id === "mc")
            mem = 0;
        else if (button.id === "=") {
            try {
                const result = eval(input);
                if (typeof result === 'number') {
                    if (Number.isInteger(result))
                        input = result.toString();
                    else
                        input = result.toFixed(2);
                } else
                    input = result.toString();
            } catch (error) {
                input = "Error";
            }
        } else
            input += buttonText;

        updateDisplay();
    }
});