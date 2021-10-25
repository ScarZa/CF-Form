<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$conv=new convers_encode();

$sql = "SELECT s.* FROM jvl_save s WHERE s.vn ='".$data."' and s.place = 1 ORDER BY s.save_id desc limit 1";

    $connDB->imp_sql($sql);
    $save = $connDB->select();
      
    $enS3 =   $conv->tis620_to_utf8($save[0]['s3_text']);
    $save[0]['s3_text'] = $enS3;
    // array_push($save,$enS3);
    // unset($save[0]['s3_text']);
    //print_r($save);

    print json_encode($save);
$connDB->close_PDO();
?>