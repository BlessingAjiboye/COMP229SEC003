<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$age = $_POST['age'];
$pw1 = $_POST['pw1'];
$pw2 = $_POST['pw2'];
$emailbox = $_POST['emailbox'];
$address = $_POST['address'];
$city = $_POST['city'];
$province = $_POST['province'];
$postalcode = $_POST['postalcode'];

$conn = new mysqli('localhost', 'root', '', 'memberships');
if($conn->connect_error){
	die('Connection Failed : '.$conn->connect_error);
}else{
	$stmt = $conn->prepare("insert into registration(fname, lname, age, pw1,pw2, emailbox, address, city, province, postalcode)
	values(?,?,?,?,?,?,?,?,?,?)");
	$stmt->bind_param("ssisssssss",$fname,$lname,$age,$pw1,$pw2,$emailbox,$address,$city,$province,$postalcode)
	$stmt->execute();
	echo "registration SUccessfully...";
	$stmt->close();
	$conn->close();
}


?>