(function() {
    let screen = document.querySelector('#calcScreen');
    let buttons = document.querySelectorAll('.btn');
    let equalBtn = document.querySelector('.equal-btn');
    let clearBtn = document.querySelector('.clear-btn');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equalBtn.addEventListener('click', function(e){
        if(screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clearBtn.addEventListener('click', function(e){
        screen.value = "";
    })

})();