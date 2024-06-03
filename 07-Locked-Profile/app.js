const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
        button.addEventListener('click', lockedProfile)})


/*function lockedProfile(event) {
    const currBtn = event.target;
    if (!currBtn.parentNode.children[2].checked) {
        if (currBtn.textContent === "Show more") {
            currBtn.textContent = "Hide it";
            currBtn.previousElementSibling.style.display = 'inline';
        } else {
            currBtn.textContent = "Show more";
            currBtn.previousElementSibling.style.display = 'none';
        }
    }
    
}*/

function lockedProfile(event) {
   const currBtn = event.target;
   const profile = currBtn.parentElement;
   const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;
   const hiddenFields = profile.querySelector('div')

   if (!isLocked) {
    if (currBtn.textContent === "Show more") {
        currBtn.textContent = "Hide it";
        hiddenFields.style.display = 'inline';
    } else {
        currBtn.textContent = "Show more";
        hiddenFields.style.display = 'none';
    }
    
   }
}