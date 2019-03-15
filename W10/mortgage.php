<?php
   $apr = $_REQUEST['APR'];
   $term = $_REQUEST['term'];
   $amount =$_REQUEST['amount'];
   
   echo "<!DOCTYPE html> <html lang="en-us">";
   echo("APR = " . $apr . "<br/>");
   echo("TERM = " . $term . "<br/>");
   echo("AMOUUNT = " . $amount . "<br/>");
   echo "</html>";
   
?>