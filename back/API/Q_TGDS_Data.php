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
$sql = "SELECT * FROM jvl_tgds15q order by tgds_id asc";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    $user = $connDB->select();
    for($i=0;$i<count($user);$i++){
        $series['tgds_id'] = $conv->tis620_to_utf8($user[$i]['tgds_id']);
        $series['tgds_q'] = $conv->tis620_to_utf8($user[$i]['tgds_q']);
        $series['yes'] = $conv->tis620_to_utf8($user[$i]['yes']);
        $series['no'] = $conv->tis620_to_utf8($user[$i]['no']);
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>