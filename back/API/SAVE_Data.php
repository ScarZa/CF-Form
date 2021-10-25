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

$sql = "SELECT rs.save_group,rs.save_focus,rs.save_name FROM jvl_result_save rs
WHERE rs.save_group = ".$data." ORDER BY rs.rsave_id asc";

    $connDB->imp_sql($sql);
    $user = $connDB->select();
      
       for($i=0;$i<count($user);$i++){
          $series['save_group'] = $conv->tis620_to_utf8($user[$i]['save_group']);
          $series['save_focus'] = $conv->tis620_to_utf8($user[$i]['save_focus']);
          $series['save_name'] = $conv->tis620_to_utf8($user[$i]['save_name']);
          array_push($rslt, $series);
      }
      
    //print_r($rslt);
    print json_encode($rslt);
$connDB->close_PDO();
?>