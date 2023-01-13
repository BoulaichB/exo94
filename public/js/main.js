// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
console.log(document.getElementsByTagName('div')[0].firstElementChild);
// ### 2. Affiche le titreNiv3
console.log(document.getElementsByTagName('h3')[1]);
// ### 3. Affiche l'élément qui précède le titreNiv3
console.log(document.getElementsByTagName('h3')[1].previousElementSibling);
// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
console.log(document.getElementsByTagName('p')[1].nextElementSibling);
// ### 5. Affiche le parent des éléments ayant comme class "important" 
console.log(document.querySelector('.important').parentElement);
// ### 6. Affiche le premier enfant, du parent de "listElements"
console.log(document.getElementById('listElements').parentElement.firstElementChild);
// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
console.log(document.getElementsByClassName('important')[document.getElementsByClassName('important').length - 1].nextElementSibling);
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
console.log(document.getElementById('textGeneral').nextElementSibling);
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
console.log(document.getElementsByTagName('span')[document.getElementsByTagName('span').length - 1].parentElement.previousElementSibling.firstElementChild);
// ### 10. En partant de Nicolas, affiche Primo
console.log(document.getElementsByTagName('span')[document.getElementsByTagName('span').length - 1].firstElementChild.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild);
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle