<?php
class connection
{
	 public function getConnection()
	 {
		
	  $conn = mysqli_connect("localhost:81","db1","root","");
      if (!$conn) 
     {
      die("Connection failed: " . mysqli_connect_error());
     }
	 return($conn);
	 
 }
 public function getlistoffriends()
 {
	 
	 
	 
 }
}
?>