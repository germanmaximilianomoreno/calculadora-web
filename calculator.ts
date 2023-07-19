const display:HTMLElement = document.getElementById("display")!;

let buttons:NodeListOf<Element> = document.querySelectorAll(".btn");

buttons.forEach(button => {
    
    button.addEventListener("click", () => {

        const botonApretado:string = button.textContent!;
        
        if (button.id === "c") {
            display.textContent! = "0";
            return
        }
        
        if (button.id === "borrar") {
            if (display.textContent!.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent!.slice(0,-1);
            }
            return
        }

        if (button.id === "igual") {
            try {
                display.textContent = eval(display.textContent!);
            } catch(e) {
                display.textContent = "Error!";
            }
            return;
        };
        
        if (display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = botonApretado;
        } else {
            display.textContent! += botonApretado;
        };
        
    });
});