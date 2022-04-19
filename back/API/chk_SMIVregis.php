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
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
    $sql="SELECT * FROM jvlsmiv_regis WHERE hn= :hn order by smi4_id desc limit 1";
    $conn_DB->imp_sql($sql);
    $execute=array(':hn'=>$data);
    $rslt=$conn_DB->select_a($execute);

//print_r($rslt);

    $series['hn'] = isset($rslt['hn'])?$rslt['hn']:'N';
    $series['smi4_type'] = $rslt['smi4_type'];
print json_encode($series);
$conn_DB->close_PDO();
?>