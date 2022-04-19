<?php

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();


    $sql = "SELECT vn FROM jvl_smiv ORDER BY smiv_id asc";
    $connDB->imp_sql($sql);
    $result = $connDB->select();

    for($i=0;$i<count($result);$i++){
      if($result[$i]['vn'] != 'undefined'){
        $sql = "SELECT hn FROM vn_stat where vn = '".$result[$i]['vn']."'";
      $connDB->imp_sql($sql);
      $hn = $connDB->select_a();
        //echo $result[$i]['id']."<br>";
    $data = array($hn['hn']);
    $field=array("hn");
    $table = "jvl_smiv";
    $where="vn=:vn";
    $execute=array(':vn' => $result[$i]['vn']);
    $WarpR=$connDB->update($table, $data, $where, $field, $execute);
      }
    }
    $connDB->close_PDO();