function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let output = document.getElementById('extra');

     if (button.textContent === "More") {
        output.style.display = 'block';
        button.textContent = "Less";
     } else {
        output.style.display = 'none';
        button.textContent = "More";
     }
}