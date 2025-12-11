 <?php
        // ==========================================
        // PARTIE 1 : VARIABLES CHAÎNES DE CARACTÈRES
        
        echo "<h2> 1 Variables Chaînes de Caractères</h2>";
        
        // Déclaration de variables de type string (texte)
        // En PHP, toutes les variables commencent par $
        $etablissement = "Université Caddi Ayyad - Marrakech";
        $module = "Programmation Web 2";
        $annee = "2025-2026";
        
        // Affichage avec echo
        echo "<div class='info-box'>";
        echo "<strong>Établissement :</strong> $etablissement<br>";
        echo "<strong>Module :</strong> $module<br>";
        echo "<strong>Année :</strong> $annee";
        echo "</div>";
        
        // ==========================================
        // PARTIE 2 : VARIABLES ENTIÈRES
        
        echo "<h2> 2 Variables Entières</h2>";
        
        // Déclaration de variables de type integer (nombres entiers)
        $nombreEtudiants = 100;
        $nombreTPs = 6;
        $dureeTP = 2; // en heures
        
        // Affichage
        echo "<div class='info-box'>";
        echo "<strong>Nombre d'étudiants :</strong> $nombreEtudiants<br>";
        echo "<strong>Nombre de TPs :</strong> $nombreTPs<br>";
        echo "<strong>Durée d'un TP :</strong> $dureeTP heures";
        echo "</div>";
        
        
        // ==========================================
        // PARTIE 3 : CALCULS SIMPLES
        
        echo "<h2> 3 Calculs Simples</h2>";
        
        // ADDITION
        $nombre1 = 10;
        $nombre2 = 5;
        $somme = $nombre1 + $nombre2;
        
        echo "<div class='calcul-box'>";
        echo "<strong>Addition :</strong> $nombre1 + $nombre2 = $somme";
        echo "</div>";
        
        // SOUSTRACTION
        $difference = $nombre1 - $nombre2;
        
        echo "<div class='calcul-box'>";
        echo "<strong>Soustraction :</strong> $nombre1 - $nombre2 = $difference";
        echo "</div>";
        
        // MULTIPLICATION
        $produit = $nombre1 * $nombre2;
        
        echo "<div class='calcul-box'>";
        echo "<strong>Multiplication :</strong> $nombre1 x $nombre2 = $produit";
        echo "</div>";
        
        // DIVISION
        $quotient = $nombre1 / $nombre2;
        
        echo "<div class='calcul-box'>";
        echo "<strong>Division :</strong> $nombre1 ÷ $nombre2 = $quotient";
        echo "</div>";
       ?>
        