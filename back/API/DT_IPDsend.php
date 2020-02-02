<?php
session_save_path("../session/");
session_start(); 
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once '../plugins/function_date.php';
include_once '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql="SELECT tb.send_date,d.department,jc.cons_name,ou.name
,CASE
    WHEN tb.status = 'N' THEN 'ไม่รับเคส'
    WHEN tb.status = 'Y' THEN 'รับเคสแล้ว'
    ELSE 'อยู่ระหว่างดำเนินการ' END as status
FROM jvl_transferBox tb
inner join kskdepartment d on d.depcode = tb.dep_res
inner join jvl_consult jc on jc.cons_id = tb.cons_id
inner join opduser ou on ou.loginname = tb.sender
WHERE tb.hn = '".$data."' order by tb.tB_id desc"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    for($i=0;$i<count($num_risk);$i++){
    $series['send_date'] = DateThai1($num_risk[$i]['send_date']);
    $series['department'] = $conv->tis620_to_utf8($num_risk[$i]['department']);
    $series['cons_name']= $conv->tis620_to_utf8($num_risk[$i]['cons_name']);
    $series['name']= $conv->tis620_to_utf8($num_risk[$i]['name']);
    $series['status']= $num_risk[$i]['status'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();