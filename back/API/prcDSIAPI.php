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
if ($method == 'add_DSI') {
       
        $vn = $_POST['vn'];
        $hn = $_POST['hn'];
        $agegroup = $_POST['agegroup'];
        $qdsi00 = isset($_POST['Qdsi00'])?$_POST['Qdsi00']:0;
        $qdsi01 = isset($_POST['Qdsi01'])?$_POST['Qdsi01']:0;
        $qdsi02 = isset($_POST['Qdsi02'])?$_POST['Qdsi02']:0;
        $qdsi03 = isset($_POST['Qdsi03'])?$_POST['Qdsi03']:0;
        $qdsi04 = isset($_POST['Qdsi04'])?$_POST['Qdsi04']:0;
        $qdsi05 = isset($_POST['Qdsi05'])?$_POST['Qdsi05']:0;
        $qdsi06 = isset($_POST['Qdsi06'])?$_POST['Qdsi06']:0;
        $qdsi07 = isset($_POST['Qdsi07'])?$_POST['Qdsi07']:0;
        $qdsi08 = isset($_POST['Qdsi08'])?$_POST['Qdsi08']:0;
        $qdsi09 = isset($_POST['Qdsi09'])?$_POST['Qdsi09']:0;
        $qdsi010 = isset($_POST['Qdsi010'])?$_POST['Qdsi010']:0;
        $qdsi011 = isset($_POST['Qdsi011'])?$_POST['Qdsi011']:0;
        $total_age0 = isset($_POST['total_age0'])?$_POST['total_age0']:0;
        $qdsi10 = isset($_POST['Qdsi10'])?$_POST['Qdsi10']:0;
        $qdsi11 = isset($_POST['Qdsi11'])?$_POST['Qdsi11']:0;
        $qdsi12 = isset($_POST['Qdsi12'])?$_POST['Qdsi12']:0;
        $qdsi13 = isset($_POST['Qdsi13'])?$_POST['Qdsi13']:0;
        $qdsi14 = isset($_POST['Qdsi14'])?$_POST['Qdsi14']:0;
        $qdsi15 = isset($_POST['Qdsi15'])?$_POST['Qdsi15']:0;
        $qdsi16 = isset($_POST['Qdsi16'])?$_POST['Qdsi16']:0;
        $qdsi17 = isset($_POST['Qdsi17'])?$_POST['Qdsi17']:0;
        $qdsi18 = isset($_POST['Qdsi18'])?$_POST['Qdsi18']:0;
        $qdsi19 = isset($_POST['Qdsi19'])?$_POST['Qdsi19']:0;
        $qdsi110 = isset($_POST['Qdsi110'])?$_POST['Qdsi110']:0;
        $qdsi111 = isset($_POST['Qdsi111'])?$_POST['Qdsi111']:0;
        $total_age1 = isset($_POST['total_age1'])?$_POST['total_age1']:0;
        $qdsi20 = isset($_POST['Qdsi20'])?$_POST['Qdsi20']:0;
        $qdsi21 = isset($_POST['Qdsi21'])?$_POST['Qdsi21']:0;
        $qdsi22 = isset($_POST['Qdsi22'])?$_POST['Qdsi22']:0;
        $qdsi23 = isset($_POST['Qdsi23'])?$_POST['Qdsi23']:0;
        $qdsi24 = isset($_POST['Qdsi24'])?$_POST['Qdsi24']:0;
        $qdsi25 = isset($_POST['Qdsi25'])?$_POST['Qdsi25']:0;
        $qdsi26 = isset($_POST['Qdsi26'])?$_POST['Qdsi26']:0;
        $qdsi27 = isset($_POST['Qdsi27'])?$_POST['Qdsi27']:0;
        $qdsi28 = isset($_POST['Qdsi28'])?$_POST['Qdsi28']:0;
        $qdsi29 = isset($_POST['Qdsi29'])?$_POST['Qdsi29']:0;
        $qdsi210 = isset($_POST['Qdsi210'])?$_POST['Qdsi210']:0;
        $qdsi211 = isset($_POST['Qdsi211'])?$_POST['Qdsi211']:0;
        $total_age2 = isset($_POST['total_age2'])?$_POST['total_age2']:0;
        $qdsi30 = isset($_POST['Qdsi30'])?$_POST['Qdsi30']:0;
        $qdsi31 = isset($_POST['Qdsi31'])?$_POST['Qdsi31']:0;
        $qdsi32 = isset($_POST['Qdsi32'])?$_POST['Qdsi32']:0;
        $qdsi33 = isset($_POST['Qdsi33'])?$_POST['Qdsi33']:0;
        $qdsi34 = isset($_POST['Qdsi34'])?$_POST['Qdsi34']:0;
        $qdsi35 = isset($_POST['Qdsi35'])?$_POST['Qdsi35']:0;
        $qdsi36 = isset($_POST['Qdsi36'])?$_POST['Qdsi36']:0;
        $qdsi37 = isset($_POST['Qdsi37'])?$_POST['Qdsi37']:0;
        $qdsi38 = isset($_POST['Qdsi38'])?$_POST['Qdsi38']:0;
        $qdsi39 = isset($_POST['Qdsi39'])?$_POST['Qdsi39']:0;
        $qdsi310 = isset($_POST['Qdsi310'])?$_POST['Qdsi310']:0;
        $qdsi311 = isset($_POST['Qdsi311'])?$_POST['Qdsi311']:0;
        $total_age3 = isset($_POST['total_age3'])?$_POST['total_age3']:0;
        $qdsi40 = isset($_POST['Qdsi40'])?$_POST['Qdsi40']:0;
        $qdsi41 = isset($_POST['Qdsi41'])?$_POST['Qdsi41']:0;
        $qdsi42 = isset($_POST['Qdsi42'])?$_POST['Qdsi42']:0;
        $qdsi43 = isset($_POST['Qdsi43'])?$_POST['Qdsi43']:0;
        $qdsi44 = isset($_POST['Qdsi44'])?$_POST['Qdsi44']:0;
        $qdsi45 = isset($_POST['Qdsi45'])?$_POST['Qdsi45']:0;
        $qdsi46 = isset($_POST['Qdsi46'])?$_POST['Qdsi46']:0;
        $qdsi47 = isset($_POST['Qdsi47'])?$_POST['Qdsi47']:0;
        $qdsi48 = isset($_POST['Qdsi48'])?$_POST['Qdsi48']:0;
        $qdsi49 = isset($_POST['Qdsi49'])?$_POST['Qdsi49']:0;
        $qdsi410 = isset($_POST['Qdsi410'])?$_POST['Qdsi10']:0;
        $qdsi411 = isset($_POST['Qdsi411'])?$_POST['Qdsi411']:0;
        $total_age4 = isset($_POST['total_age4'])?$_POST['total_age4']:0;
        $recdate = date('Y-m-d H:i:s');
        $recorder = $conv->utf8_to_tis620($_POST['user']);
        $user = $conv->utf8_to_tis620($_POST['user']);

        $data = array($hn,$vn,$agegroup
                    ,$qdsi00,$qdsi01,$qdsi02,$qdsi03,$qdsi04,$qdsi05,$qdsi06,$qdsi07,$qdsi08,$qdsi09,$qdsi010,$qdsi011,$total_age0
                    ,$qdsi10,$qdsi11,$qdsi12,$qdsi13,$qdsi14,$qdsi15,$qdsi16,$qdsi17,$qdsi18,$qdsi19,$qdsi110,$qdsi111,$total_age1
                    ,$qdsi20,$qdsi21,$qdsi22,$qdsi23,$qdsi24,$qdsi25,$qdsi26,$qdsi27,$qdsi28,$qdsi29,$qdsi210,$qdsi211,$total_age2
                    ,$qdsi30,$qdsi31,$qdsi32,$qdsi33,$qdsi34,$qdsi35,$qdsi36,$qdsi37,$qdsi38,$qdsi39,$qdsi310,$qdsi311,$total_age3
                    ,$qdsi40,$qdsi41,$qdsi42,$qdsi43,$qdsi44,$qdsi45,$qdsi46,$qdsi47,$qdsi48,$qdsi49,$qdsi410,$qdsi411,$total_age4
                    ,$recdate,$recorder,$user);
        $table = "jvl_dsi300";
        // $field = array('hn','vn','service_place_type','patient_type','ts_id','pg_id','Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10'
        // ,'Q11','Q12','Q13','Q14','Q15','Q16','Q17','Q18','Q19','Q20','Q21','Q22','Q23','Q24','Q25','Q26','Q27','total','recdate','recorder','user');
        $dsi = $connDB->insert($table, $data);
        if($dsi===false){
            $res = array("messege"=>'ไม่สามารถบันทึก DSI 300 ได้!!!!');
        }else{
            $res = array("messege"=>'บันทึก DSI 300 สำเร็จ!!!!');
            }
        print json_encode($res);
        $connDB->close_PDO();
    }