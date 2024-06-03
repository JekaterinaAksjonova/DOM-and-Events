function create(words = []) {

   let output = document.getElementById('content');
   for (const word of words) {
      let newDiv = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      newDiv.appendChild(p);

      newDiv.addEventListener('click', function() {
         p.style.display = 'block';
      })

      output.appendChild(newDiv);
   }
}