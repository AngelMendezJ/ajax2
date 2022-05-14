<?php
	include 'conexion.php';
	$nombre = strip_tags($_POST['nombre']);
	$apaterno = strip_tags($_POST['apaterno']);
	$amaterno = strip_tags($_POST['amaterno']);
	$ciudad = strip_tags($_POST['ciudad']);

	if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $nombre)){
		if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $apaterno)){
	        	if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $amaterno)){
                        	if(preg_match('/[A-Za-z áéíóúñ]{2,50}/i', $ciudad)){
                        		$insercion= "insert into usuario(nombre,apaterno,amaterno,ciudad) values('$nombre','$apaterno','$amaterno','$ciudad')";
        				$query = pg_query($con,$insercion);
        				if($query){
                				echo "Se ha almacenado en la base de datos de forma correcta";
                				echo "Bienvenido ".$nombre." ".$apaterno." ".$amaterno." originario de ".$ciudad;
        				} else {
                				echo "No se ha podido almacenar en la base de datos";
        				}

        				pg_close($con);
	
                		}
	                }
        	}

	}
	else {
		echo "Los datos no son validos";

	}	


?>
