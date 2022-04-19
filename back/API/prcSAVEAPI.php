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
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}
$conv=new convers_encode();
$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'add_SAVE') {
        $process = isset($_POST['process'])?$_POST['process']:'';
        $vn = $_POST['vn'];
        
        $place = $_POST['place'];
        $s1_1 = isset($_POST['s1_1'])?$_POST['s1_1']:0;
        $s1_2 = isset($_POST['s1_2'])?$_POST['s1_2']:0;
        $s1_3 = isset($_POST['s1_3'])?$_POST['s1_3']:0;
        $s1_4 = isset($_POST['s1_4'])?$_POST['s1_4']:0;

            $s2 = isset($_POST['s2'])?$_POST['s2']:0;
            $s3 = isset($_POST['s3'])?$_POST['s3']:0;
            $s3_text = isset($_POST['s3_text'])?$conv->utf8_to_tis620($_POST['s3_text']):''; 
            $s4_1 = isset($_POST['s4_1'])?$_POST['s4_1']:0;
            $s4_2 = isset($_POST['s4_2'])?$_POST['s4_2']:0;
            $s4_3 = isset($_POST['s4_3'])?$_POST['s4_3']:0;
            $s5_1 = isset($_POST['s5_1'])?$_POST['s5_1']:0;
            $s5_2 = isset($_POST['s5_2'])?$_POST['s5_2']:0;
            $s5_3 = isset($_POST['s5_3'])?$_POST['s5_3']:0;
        
        $totals = isset($_POST['totals'])?$_POST['totals']:0;
        $sresult = isset($_POST['sresult'])?$_POST['sresult']:0;
        $a1_1 = isset($_POST['a1_1'])?$_POST['a1_1']:0;
        $a1_2 = isset($_POST['a1_2'])?$_POST['a1_2']:0;
        $a1_3 = isset($_POST['a1_3'])?$_POST['a1_3']:0;
        $a1_4 = isset($_POST['a1_4'])?$_POST['a1_4']:0;
        $a2_1 = isset($_POST['a2_1'])?$_POST['a2_1']:0;
        $a2_2 = isset($_POST['a2_2'])?$_POST['a2_2']:0;
        $a2_3 = isset($_POST['a2_3'])?$_POST['a2_3']:0;
        $a2_4 = isset($_POST['a2_4'])?$_POST['a2_4']:0;
        $a2_5 = isset($_POST['a2_5'])?$_POST['a2_5']:0;
        $totala = isset($_POST['totala'])?$_POST['totala']:0;
        $aresult = isset($_POST['aresult'])?$_POST['aresult']:0;
        $v1 = isset($_POST['v1'])?$_POST['v1']:0;
        $v2_1 = isset($_POST['v2_1'])?$_POST['v2_1']:0;
        $v2_2 = isset($_POST['v2_2'])?$_POST['v2_2']:0;
        $v2_3 = isset($_POST['v2_3'])?$_POST['v2_3']:0;
        $v3_1 = isset($_POST['v3_1'])?$_POST['v3_1']:0;
        $v3_2 = isset($_POST['v3_2'])?$_POST['v3_2']:0;
        $v4_1 = isset($_POST['v4_1'])?$_POST['v4_1']:0;
        $v4_2 = isset($_POST['v4_2'])?$_POST['v4_2']:0;
        $v4_3 = isset($_POST['v4_3'])?$_POST['v4_3']:0;
        $v5_1 = isset($_POST['v5_1'])?$_POST['v5_1']:0;
        $v5_2 = isset($_POST['v5_2'])?$_POST['v5_2']:0;
        $v5_3 = isset($_POST['v5_3'])?$_POST['v5_3']:0;
        $totalv = isset($_POST['totalv'])?$_POST['totalv']:0;
        $vresult = isset($_POST['vresult'])?$_POST['vresult']:0;
        $e1 = isset($_POST['e1'])?$_POST['e1']:0;
        $e2 = isset($_POST['e2'])?$_POST['e2']:0;
        $e3 = isset($_POST['e3'])?$_POST['e3']:0;
        $e4 = isset($_POST['e4'])?$_POST['e4']:0;
        $e5_1 = isset($_POST['e5_1'])?$_POST['e5_1']:0;
        $e5_2 = isset($_POST['e5_2'])?$_POST['e5_2']:0;
        $e5_3 = isset($_POST['e5_3'])?$_POST['e5_3']:0;
        $e5_4 = isset($_POST['e5_4'])?$_POST['e5_4']:0;
        $totale = isset($_POST['totale'])?$_POST['totale']:0;
        $eresult = isset($_POST['eresult'])?$_POST['eresult']:0;
        $recdate = date('Y-m-d H:i:s');
        $recorder = $conv->utf8_to_tis620($_POST['user']);

        $sql = "select hn from vn_stat where vn= :vn";
        $connDB->imp_sql($sql);
        $execute=array(':vn' => $vn);
        $sel_hn=$connDB->select_a($execute);
        $hn = $sel_hn['hn'];

        if($place==3){
        $data = array($hn,$vn,$place
                    ,$s1_1,$s1_2,$s1_3,$s1_4,$s5_1,$s5_2,$s5_3
                    ,$totals,$sresult,$a1_1,$a1_2,$a1_3,$a1_4,$a2_1,$a2_2,$a2_3,$a2_4,$a2_5,$totala,$aresult
                    ,$v1,$v2_1,$v2_2,$v2_3,$v3_1,$v3_2,$v4_1,$v4_2,$v4_3,$v5_1,$v5_2,$v5_3,$totalv,$vresult
                    ,$e1,$e2,$e3,$e4,$e5_1,$e5_2,$e5_3,$e5_4,$totale,$eresult,$recdate,$recorder);
        
        $field = array('hn','vn','place'
                        ,'s1_1','s1_2','s1_3','s1_4','s5_1','s5_2','s5_3'
                        ,'totals','sresult','a1_1','a1_2','a1_3','a1_4','a2_1','a2_2','a2_3','a2_4','a2_5','totala','aresult'
                        ,'v1','v2_1','v2_2','v2_3','v3_1','v3_2','v4_1','v4_2','v4_3','v5_1','v5_2','v5_3','totalv','vresult'
                        ,'e1','e2','e3','e4','e5_1','e5_2','e5_3','e5_4','totale','eresult','recdate','recorder');
        
    }else{
        $data = array($hn,$vn,$place
        ,$s1_1,$s1_2,$s1_3,$s1_4,$s2,$s3,$s3_text,$s4_1,$s4_2,$s4_3
        ,$totals,$sresult,$a1_1,$a1_2,$a1_3,$a1_4,$a2_1,$a2_2,$a2_3,$a2_4,$a2_5,$totala,$aresult
        ,$v1,$v2_1,$v2_2,$v2_3,$v3_1,$v3_2,$v4_1,$v4_2,$v4_3,$v5_1,$v5_2,$v5_3,$totalv,$vresult
        ,$e1,$e2,$e3,$e4,$e5_1,$e5_2,$e5_3,$e5_4,$totale,$eresult,$recdate,$recorder);

        $field = array('hn','vn','place'
                    ,'s1_1','s1_2','s1_3','s1_4','s2','s3','s3_text','s4_1','s4_2','s4_3'
                    ,'totals','sresult','a1_1','a1_2','a1_3','a1_4','a2_1','a2_2','a2_3','a2_4','a2_5','totala','aresult'
                    ,'v1','v2_1','v2_2','v2_3','v3_1','v3_2','v4_1','v4_2','v4_3','v5_1','v5_2','v5_3','totalv','vresult'
                    ,'e1','e2','e3','e4','e5_1','e5_2','e5_3','e5_4','totale','eresult','recdate','recorder');

    }
    $table = "jvl_save";
    $save = $connDB->insert($table, $data,$field);

    if($sresult >=3){ $typeP_3 = 3;}else{$typeP_3 = 0;}
    if($aresult >=3){ $typeP_4 = 4;}else{$typeP_4 = 0;}
    if($vresult >=3){ $typeP_5 = 5;}else{$typeP_5 = 0;}
    if($eresult >=3){ $typeP_2 = 2;}else{$typeP_2 = 0;}
    $data = array($typeP_2,$typeP_3,$typeP_4,$typeP_5);
            
        if($process = 'ER'){
            $sql="SELECT count(*) chk_vn FROM jvl_save WHERE vn = '".$vn."'"; 
            $connDB->imp_sql($sql);
            $chk_vn = $connDB->select();
            if($chk_vn['chk_vn'] > 0){
                $field = array("typeP_2","typeP_3","typeP_4","typeP_5");
                $table = "jvlER_regis";
                $where="vn=:vn";
                $execute=array(':vn' => $vn);
                $edit_jvlER_regis = $connDB->update($table, $data, $where, $field, $execute);
            }
        }
        if($process = 'FR'){
            $field = array("typep_2","typep_3","typep_4","typep_5");
            $table = "jvl_ipd_first_rec";
            $where="vn=:vn and chk_update = 0";
            $execute=array(':vn' => $vn);
            $edit_jvlER_regis = $connDB->update($table, $data, $where, $field, $execute);
            $table2 = "jvl_head_alert";
            $edit_HA = $connDB->update($table2, $data, $where, $field, $execute);
        }
        if($process = 'IPD'){
            $field = array("typep_2","typep_3","typep_4","typep_5");
            $table = "jvl_head_alert";
            $where="vn=:vn and chk_update = 0";
            $execute=array(':vn' => $vn);
            $edit_HA = $connDB->update($table, $data, $where, $field, $execute);
        }
        
        if($save===false){
            $res = array("messege"=>'ไม่สามารถบันทึก SAVE ได้!!!!');
        }else{
            $res = array("messege"=>'บันทึก SAVE สำเร็จ!!!!');
            }
        print json_encode($res);
        $connDB->close_PDO();
    }