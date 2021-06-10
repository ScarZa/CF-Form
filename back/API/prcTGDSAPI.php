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
if ($method == 'add_TGDS') {
       
        $vn = $_POST['vn'];
        $hn = $_POST['hn'];
        $tgdsq1 = isset($_POST['tgdsq1'])?$_POST['tgdsq1']:0;
        $tgdsq2 = isset($_POST['tgdsq2'])?$_POST['tgdsq2']:0;
        $tgdsq3 = isset($_POST['tgdsq3'])?$_POST['tgdsq3']:0;
        $tgdsq4 = isset($_POST['tgdsq4'])?$_POST['tgdsq4']:0;
        $tgdsq5 = isset($_POST['tgdsq5'])?$_POST['tgdsq5']:0;
        $tgdsq6 = isset($_POST['tgdsq6'])?$_POST['tgdsq6']:0;
        $tgdsq7 = isset($_POST['tgdsq7'])?$_POST['tgdsq7']:0;
        $tgdsq8 = isset($_POST['tgdsq8'])?$_POST['tgdsq8']:0;
        $tgdsq9 = isset($_POST['tgdsq9'])?$_POST['tgdsq9']:0;
        $tgdsq10 = isset($_POST['tgdsq10'])?$_POST['tgdsq10']:0;
        $tgdsq11 = isset($_POST['tgdsq11'])?$_POST['tgdsq11']:0;
        $tgdsq12 = isset($_POST['tgdsq12'])?$_POST['tgdsq12']:0;
        $tgdsq13 = isset($_POST['tgdsq13'])?$_POST['tgdsq13']:0;
        $tgdsq14 = isset($_POST['tgdsq14'])?$_POST['tgdsq14']:0;
        $tgdsq15 = isset($_POST['tgdsq15'])?$_POST['tgdsq15']:0;
        $tgsd_score = isset($_POST['total'])?$_POST['total']:0;
        $recdate = date('Y-m-d H:i:s');
        $recorder = $conv->utf8_to_tis620($_POST['recorder']);
        $user = $conv->utf8_to_tis620($_POST['user']);

        $data = array($hn,$vn,$tgdsq1,$tgdsq2,$tgdsq3,$tgdsq4,$tgdsq5,$tgdsq6,$tgdsq7,$tgdsq8,$tgdsq9,$tgdsq10,$tgdsq11,$tgdsq12,$tgdsq13,$tgdsq14,$tgdsq15
                    ,$tgsd_score,$recdate,$recorder,$user);
        $table = "jvl_tgds_result";
        // $field = array('hn','vn','education','Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10'
        // ,'Q11','Q12','Q13','Q14','Q15','Q16','Q17','Q18','Q19','Q20','Q21','Q22','Q23','Q24','Q25','Q26','Q27','Q28','Q29','Q30','total','recdate','recorder','user');
        $TGDS = $connDB->insert($table, $data);
        if($TGDS===false){
            $res = array("messege"=>'ไม่สามารถบันทึก TGDS-15 ได้!!!!');
        }else{
            $res = array("messege"=>'บันทึก TGDS-15 สำเร็จ!!!!');
            }
        print json_encode($res);
        $connDB->close_PDO();
    }