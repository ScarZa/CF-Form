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
//$data1 = isset($_POST['data1'])?$_POST['data1']:$_GET['data1'];
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql = "SELECT reg.reg_id
,CASE WHEN reg.role= 1 THEN 'เจ้าหน้าที่ IT' WHEN reg.role = 2 THEN 'แพทย์'  WHEN reg.role = 3 THEN 'พยายบาล' ELSE 'เจ้าหน้าที่สาธารณสุข' END role_name
,inf.hos_name,CONCAT(reg.fname,' ',reg.lname)fullname,regdate 
FROM registration reg
INNER JOIN infirmary inf on inf.inf_id = reg.inf_id
WHERE reg_status = 0 ORDER BY reg_id DESC";

$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();

for($i=0;$i<count($num_risk);$i++){
    $series['reg_id'] = $num_risk[$i]['reg_id'];
    $series['role_name'] = $num_risk[$i]['role_name'];
    $series['hos_name'] = $num_risk[$i]['hos_name'];
    $series['fullname'] = $num_risk[$i]['fullname'];
    $series['regdate'] = DateThai2($num_risk[$i]['regdate']);
array_push($rslt, $series);    
}
    print json_encode($rslt);
$conn_DB->close_PDO();
?>