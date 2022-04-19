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
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$conv=new convers_encode();

$sql = "SELECT SUBSTR(s.recdate,1,11) recdate,SUBSTR(s.recdate,12,18) rectime,u.name,sp.ps_name
FROM jvl_save s
left outer join opduser u on u.loginname = s.recorder
inner join jvl_save_place sp on sp.ps_id = s.place
WHERE s.vn = '".$data."' ORDER BY s.recdate desc limit 1";

    $connDB->imp_sql($sql);
    $save = $connDB->select_a();
      
    $endate =   DateThai1($save['recdate']);
    $save['recdate'] = $endate;
    $enname =   $conv->tis620_to_utf8($save['name']);
    $save['name'] = $enname;
    $enps_name =   $conv->tis620_to_utf8($save['ps_name']);
    $save['ps_name'] = $enps_name;
    // array_push($save,$enS3);
    // unset($save[0]['s3_text']);
    //print_r($save);

    print json_encode($save);
$connDB->close_PDO();
?>