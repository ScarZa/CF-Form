<?php
session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
$rslt = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql = "SELECT recdate,total FROM jvl_adl WHERE hn like '%".$data."' ORDER BY adl_id desc";

$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();
for($i=0;$i<count($num_risk);$i++){
    $series['recdate'] = DateThai2($num_risk[$i]['recdate']);
    $series['total'] = $num_risk[$i]['total'];
array_push($rslt, $series);    
}
    print json_encode($rslt);
$conn_DB->close_PDO();
?>