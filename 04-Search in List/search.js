function search() {
   let input = document.getElementById('searchText').value.toLowerCase();
   let towns = document.getElementsByTagName('li');
   let output = document.getElementById('result');

   let count = 0;

   for (let i = 0; i < towns.length; i++) {
         towns[i].style.fontWeight = 'normal';
         towns[i].style.textDecoration = 'none';
      if (towns[i].textContent.toLowerCase().includes(input)) {
         towns[i].style.fontWeight = 'bold';
         towns[i].style.textDecoration = 'underline';
         count++;
      }
   }

   output.textContent = `${count} matches found`;

}
