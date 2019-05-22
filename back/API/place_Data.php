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
$sql = "SELECT pp_special_service_place_type_id as place_id
,pp_special_service_place_type_name as place_name
FROM pp_special_service_place_type";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    $place = $connDB->select();
    for($i=0;$i<count($place);$i++){
        $series['place_id'] = $conv->tis620_to_utf8($place[$i]['place_id']);
        $series['place_name'] = $conv->tis620_to_utf8($place[$i]['place_name']);
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>