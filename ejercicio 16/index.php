<?php
    include "debut.htm";
?>
    <article id="corps">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio modi, labore debitis rerum inventore eligendi ab facilis aspernatur iste excepturi, at veniam omnis nemo earum repellat eius deleniti sunt aperiam!
        <span id="cac40"></span>
            <script>
                $(function(){
                    function afficheCac40(){
                        $('#cac40').load('./itCac40.php');
                    }
                    setInterval(afficheCac40,1000);
                });
            </script>
    </article>

<?php
    include "fin.htm";
?>