<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
include '../plugins/funcDateThai.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$conv=new convers_encode();
$sql = "SELECT level_risk,num,name FROM level_risk";

    $connDB->imp_sql($sql);
    $LevelRisk = $connDB->select();
    //print_r($LevelRisk);
    for($i=0;$i<count($LevelRisk);$i++){
    $enname =   $conv->tis620_to_utf8($LevelRisk[$i]['name']);
    $LevelRisk[$i]['name'] = $enname;
    }
    print json_encode($LevelRisk);
$connDB->close_PDO();
?>