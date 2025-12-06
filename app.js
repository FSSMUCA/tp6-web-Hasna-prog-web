// Script JavaScript pour la calculatrice web
const nombreA = document.getElementById('nombreA');        // Input du premier nombre
const nombreB = document.getElementById('nombreB');        // Input du second nombre
const operation = document.getElementById('operation');    // Menu déroulant des opérations
const btnCalculer = document.getElementById('btnCalculer'); // Bouton "Calculer"
const errorMessage = document.getElementById('errorMessage'); // Zone d'affichage des erreurs
const historiqueList = document.getElementById('historiqueList'); // Liste de l'historique

// === TABLEAU POUR STOCKER L'HISTORIQUE ===
let historique = [];
// === FONCTION D'AFFICHAGE DES ERREURS ===
function afficherErreur(message) {
    // textContent insère du texte brut (sécurisé, pas de HTML)
    errorMessage.textContent = message;
    
    // classList.add() ajoute une classe CSS à l'élément
    // La classe 'show' rend l'élément visible (display: block)
    errorMessage.classList.add('show');
}

// === FONCTION POUR CACHER L'ERREUR ===
function cacherErreur() {
    // classList.remove() retire la classe CSS
    errorMessage.classList.remove('show');
    
    // Vide le contenu du message
    errorMessage.textContent = '';
}

// === FONCTION DE VALIDATION DES DONNÉES ===
/**
 * Vérifie que les données saisies sont valides
 * @param {string} a - Valeur du premier nombre (string car vient d'un input)
 * @param {string} b - Valeur du second nombre
 * @param {string} op - Opération choisie (+, -, *, /)
 * @returns {boolean} - true si valide, false sinon
 */
function validerDonnees(a, b, op) {
    // === Vérification 1 : Champs vides ===
    if (a === '' || b === '') {
        afficherErreur('Veuillez remplir tous les champs !');
        return false; // Arrête la fonction et retourne false
    }

    // === Vérification 2 : Nombres valides ===
    // parseFloat() convertit une chaîne en nombre décimal
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    // isNaN() = "is Not a Number" - vérifie si ce n'est PAS un nombre
    if (isNaN(numA) || isNaN(numB)) {
        afficherErreur(' Veuillez entrer des nombres valides !');
        return false;
    }

    // === Vérification 3 : Division par zéro ===
    if (op === '/' && numB === 0) {
        afficherErreur('Division par zéro impossible !');
        return false;
    }

    // Si toutes les vérifications passent, on cache l'erreur et on retourne true
    cacherErreur();
    return true;
}

// === FONCTION DE CALCUL ===
function calculer(a, b, op) {
    // Conversion des chaînes en nombres
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    // switch/case : structure de contrôle pour tester plusieurs valeurs
    // Plus lisible que plusieurs if/else pour ce cas
    switch (op) {
        case '+':
            // Addition
            return numA + numB;
        
        case '-':
            // Soustraction
            return numA - numB;
        
        case '*':
            // Multiplication
            return numA * numB;
        
        case '/':
            // Division
            // Note : on a déjà vérifié que numB n'est pas zéro dans validerDonnees()
            return numA / numB;
        
        default:
            // Cas par défaut (ne devrait jamais arriver)
            return 0;
    }
}

// === FONCTION D'AFFICHAGE DE L'HISTORIQUE ===
function afficherHistorique() {
    // === Vider la liste actuelle ===
    // innerHTML = '' supprime tout le contenu HTML de l'élément
    historiqueList.innerHTML = '';

    // === Si l'historique est vide ===
    if (historique.length === 0) {
        // Créer un élément <li> pour le message "vide"
        const li = document.createElement('li');
        li.style.color = '#999';
        li.style.fontStyle = 'italic';
        li.textContent = 'Aucune opération effectuée';
        
        // appendChild() ajoute l'élément comme enfant de historiqueList
        historiqueList.appendChild(li);
        return; // Arrête la fonction ici
    }

    // === Parcourir chaque opération dans l'historique ===
    // forEach() exécute une fonction pour chaque élément du tableau
    // (item, index) => { } est une fonction fléchée (syntaxe ES6)
    // item = l'élément actuel, index = sa position (0, 1, 2...)
    historique.forEach((item, index) => {
        // Créer un élément <li> pour chaque opération
        const li = document.createElement('li');
        
        // Ajouter la classe CSS pour le style
        li.className = 'operation-card';

        // === Déterminer le symbole à afficher ===
        let symbole = item.operation;
        // Remplacer * par × et / par ÷ pour un affichage plus lisible
        if (item.operation === '*') symbole = '×';
        if (item.operation === '/') symbole = '÷';

        // === Créer le contenu HTML de la carte ===
        // innerHTML permet d'insérer du HTML
        // Les backticks ` ` permettent d'écrire sur plusieurs lignes
        // ${variable} insère la valeur de la variable (template literal)
        li.innerHTML = `
            <div class="calcul">
                ${item.a} ${symbole} ${item.b}
            </div>
            <div class="resultat">
                = ${item.resultat}
            </div>
        `;

        // Ajouter l'élément <li> à la liste
        historiqueList.appendChild(li);
    });
}

// === ÉVÉNEMENT DU BOUTON CALCULER ===
btnCalculer.addEventListener('click', function() {
    // === 1. Récupérer les valeurs des champs ===
    // .value récupère la valeur saisie dans un input
    const valeurA = nombreA.value;
    const valeurB = nombreB.value;
    const op = operation.value;

    // === 2. Valider les données ===
    // Si la validation échoue, on arrête la fonction
    if (!validerDonnees(valeurA, valeurB, op)) {
        return; // Arrête l'exécution ici
    }

    // === 3. Effectuer le calcul ===
    const resultat = calculer(valeurA, valeurB, op);

    // === 4. Arrondir le résultat ===
    // Math.round() arrondit à l'entier le plus proche
    // * 100 puis / 100 permet d'arrondir à 2 décimales
    // Exemple : 15.678 → 15.68
    const resultatArrondi = Math.round(resultat * 100) / 100;

    // === 5. Ajouter l'opération dans l'historique ===
    // push() ajoute un élément à la fin du tableau
    // { } crée un objet JavaScript avec des propriétés
    historique.push({
        a: parseFloat(valeurA),      // Premier nombre
        b: parseFloat(valeurB),      // Second nombre
        operation: op,                // Opérateur
        resultat: resultatArrondi    // Résultat calculé
    });

    // === 6. Mettre à jour l'affichage ===
    afficherHistorique();

    // === OPTIONNEL : Vider les champs après calcul ===
    // Décommenter les lignes ci-dessous si vous voulez effacer les champs
    // nombreA.value = '';
    // nombreB.value = '';
    
    // Mettre le focus sur le premier champ (curseur dans le champ)
    // nombreA.focus();
});

// === INITIALISATION ===
// Affiche l'historique au chargement de la page (vide au début)
afficherHistorique();

// === BONUS : Calculer avec la touche Entrée ===
// Ajoute la possibilité de calculer en appuyant sur Entrée
document.addEventListener('keypress', function(event) {
    // event.key contient la touche pressée
    // Si c'est "Enter" (touche Entrée), on déclenche le calcul
    if (event.key === 'Enter') {
        btnCalculer.click(); // Simule un clic sur le bouton
    }
});

// === CONSOLE LOG POUR DÉBOGAGE ===
// Message dans la console pour confirmer que le script est chargé
console.log('Script app.js chargé avec succès !');
console.log('Historique initialisé :', historique);