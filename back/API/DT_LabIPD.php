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
$conv=new convers_encode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
$rslt = array();
$series = array();
//$data1 = isset($_POST['data1'])?$_POST['data1']:$_GET['data1'];
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql0 = "SELECT an FROM an_stat WHERE vn ='".$data."' ";
$conn_DB->imp_sql($sql0);
$sel_an = $conn_DB->select_a();
//print_r($sel_an);
$an = $sel_an['an'];

$sql = "SELECT lh.report_date,li.sub_group_list,li.lab_items_name,lo.lab_order_result,li.lab_items_unit,li.lab_items_normal_value
FROM lab_head lh
inner join lab_order lo on lo.lab_order_number = lh.lab_order_number
inner join lab_items li on li.lab_items_code = lo.lab_items_code
where lh.vn = '".$an."'  and lh.department = 'IPD' and !ISNULL(lh.report_date)";

$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();
for($i=0;$i<count($num_risk);$i++){
  $series['report_date'] = DateThai1($num_risk[$i]['report_date']);
  $series['sub_group_list'] = $conv->tis620_to_utf8($num_risk[$i]['sub_group_list']);
  $series['lab_items_name'] = $conv->tis620_to_utf8($num_risk[$i]['lab_items_name']);
  $series['lab_order_result'] = $conv->tis620_to_utf8($num_risk[$i]['lab_order_result']);
  $series['lab_items_unit'] = $conv->tis620_to_utf8($num_risk[$i]['lab_items_unit']);
  $series['lab_items_normal_value'] = $conv->tis620_to_utf8($num_risk[$i]['lab_items_normal_value']);
array_push($rslt, $series);    
}
    print json_encode($rslt);
$conn_DB->close_PDO();
?>