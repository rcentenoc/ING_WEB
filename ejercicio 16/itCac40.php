<?php
    $path = "http://download.finance.yahoo.com/d/quotes.csv?s=%5EFCHI&f=l1";
    $yahooquote = fopen($path, "r");
    $line = fgets($yahooquote); // Récupération du CAC 40
    echo "<br /><br />Le CAC 40 vaut ".$line. "points."; // Affichage
    fclose($yahooquote);
?>