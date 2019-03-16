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
$data = isset($_GET['data'])?$_GET['data']:$_POST['data'];
$sql="select p.pname,p.fname,p.lname,p.hn,o1.vstdate,o1.vn
from ovst o1
left outer join patient p on p.hn = o1.hn
where o1.vn = :vn";
$conn_DB->imp_sql($sql);
$execute=array(':vn' => $data);
$rslt=$conn_DB->select_a($execute);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $pname=$conv->tis620_to_utf8( $rslt['pname']);
    $fname=$conv->tis620_to_utf8( $rslt['fname']);
    $lname=$conv->tis620_to_utf8( $rslt['lname']);
    $series['pname'] = $pname;
    $series['fname'] = $fname;
    $series['lname'] = $lname;
    $series['hn'] = $rslt['hn'];
    $series['vstdate'] = DateThai1($rslt['vstdate']);
    $series['vn'] = $rslt['vn'];
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>