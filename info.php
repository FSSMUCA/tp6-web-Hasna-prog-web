 <?php
        // ==========================================
        // PARTIE 1 : VARIABLES CHAÎNES DE CARACTÈRES
        // ==========================================
        
        echo "<h2> 1 Variables Chaînes de Caractères</h2>";
        
        // Déclaration de variables de type string (texte)
        // En PHP, toutes les variables commencent par $
        $etablissement = "Université Mohammed V";
        $module = "Développement Web";
        $annee = "2024-2025";
        
        // Affichage avec echo
        echo "<div class='info-box'>";
        echo "<strong>Établissement :</strong> $etablissement<br>";
        echo "<strong>Module :</strong> $module<br>";
        echo "<strong>Année :</strong> $annee";
        echo "</div>";
        
        
        // ==========================================
        // PARTIE 2 : VARIABLES ENTIÈRES
        // ==========================================
        
        echo "<h2> 2 Variables Entières</h2>";
        
        // Déclaration de variables de type integer (nombres entiers)
        $nombreEtudiants = 45;
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
        // ==========================================
        
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
        echo "<strong>Multiplication :</strong> $nombre1 × $nombre2 = $produit";
        echo "</div>";
        
        // DIVISION
        $quotient = $nombre1 / $nombre2;
        
        echo "<div class='calcul-box'>";
        echo "<strong>Division :</strong> $nombre1 ÷ $nombre2 = $quotient";
        echo "</div>";
        
        
        // ==========================================
        // PARTIE 4 : CALCULS AVEC LES VARIABLES
        // ==========================================
        
        echo "<h2> 4 Calculs avec Variables</h2>";
        
        // Calcul du volume horaire total
        $volumeHoraire = $nombreTPs * $dureeTP;
        
        echo "<div class='calcul-box'>";
        echo "<strong>Calcul du volume horaire :</strong><br>";
        echo "$nombreTPs TPs × $dureeTP heures = $volumeHoraire heures au total";
        echo "</div>";
        
        // Calcul d'une moyenne
        $note1 = 15;
        $note2 = 17;
        $note3 = 14;
        $moyenne = ($note1 + $note2 + $note3) / 3;
        
        // Arrondir à 2 décimales
        $moyenne = round($moyenne, 2);
        
        echo "<div class='calcul-box'>";
        echo "<strong>Calcul de moyenne :</strong><br>";
        echo "Notes : $note1, $note2, $note3<br>";
        echo "Moyenne = ($note1 + $note2 + $note3) ÷ 3 = $moyenne / 20";
        echo "</div>";
        
        
        // ==========================================
        // PARTIE 5 : AFFICHAGE DE LA DATE
        // ==========================================
        
        echo "<h2> 5 Informations Système</h2>";
        
        // Afficher la date et l'heure actuelles
        $dateActuelle = date("d/m/Y");
        $heureActuelle = date("H:i:s");
        
        echo "<div class='info-box'>";
        echo "<strong>Date :</strong> $dateActuelle<br>";
        echo "<strong>Heure :</strong> $heureActuelle<br>";
        echo "<strong>Version PHP :</strong> " . phpversion();
        echo "</div>";
        
        ?>