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
if ($method == 'add_ER') {
    $vn = $_POST['vn'];
    $hn = $_POST['hn'];
    $relative = isset($_POST['relative'])?$conv->utf8_to_tis620($_POST['relative']):'';
    $police_name = isset($_POST['police_name'])?$conv->utf8_to_tis620($_POST['police_name']):'';
    $weapon_chk = $conv->utf8_to_tis620($_POST['weapon_chk']);
    $weapon = isset($_POST['weapon'])?$conv->utf8_to_tis620($_POST['weapon']):'';
    $detain_chk = $conv->utf8_to_tis620($_POST['detain_chk']);
    $detain = isset($_POST['detain'])?$conv->utf8_to_tis620($_POST['detain']):'';
    $typeP_1 = isset($_POST['typeP_1'])?$_POST['typeP_1']:'';
    $typeP_2 = isset($_POST['typeP_2'])?$_POST['typeP_2']:'';
    $typeP_3 = isset($_POST['typeP_3'])?$_POST['typeP_3']:'';
    $typeP_4 = isset($_POST['typeP_4'])?$_POST['typeP_4']:'';
    $typeP_5 = isset($_POST['typeP_5'])?$_POST['typeP_5']:'';
    $typeP_6 = isset($_POST['typeP_6'])?$_POST['typeP_6']:'';
    $typeP_7 = isset($_POST['typeP_7'])?$_POST['typeP_7']:'';
    $smi4_chk = $conv->utf8_to_tis620($_POST['smi4_chk']);
    $smi4_1 = isset($_POST['smi4_1'])?$_POST['smi4_1']:'';
    $smi4_2 = isset($_POST['smi4_2'])?$_POST['smi4_2']:'';
    $smi4_3 = isset($_POST['smi4_3'])?$_POST['smi4_3']:'';
    $smi4_4 = isset($_POST['smi4_4'])?$_POST['smi4_4']:'';
    $lawpsych_chk = $conv->utf8_to_tis620($_POST['lawpsych_chk']);
    $lawpsych = isset($_POST['lawpsych'])?$conv->utf8_to_tis620($_POST['lawpsych']):'';
    $sleep_chk = $conv->utf8_to_tis620($_POST['sleep_chk']);
    $sleep = isset($_POST['sleep'])?$conv->utf8_to_tis620($_POST['sleep']):'';
    $IC_chk = $conv->utf8_to_tis620($_POST['IC_chk']);
    $IC = isset($_POST['IC'])?$conv->utf8_to_tis620($_POST['IC']):'';
    $med_chk = $conv->utf8_to_tis620($_POST['med_chk']);
    $med = isset($_POST['med'])?$conv->utf8_to_tis620($_POST['med']):'';
    $accident_chk = $conv->utf8_to_tis620($_POST['accident_chk']);
    $accident = isset($_POST['accident'])?$conv->utf8_to_tis620($_POST['accident']):'';
    $wound_chk = $conv->utf8_to_tis620($_POST['wound_chk']);
    $wound = isset($_POST['wound'])?$conv->utf8_to_tis620($_POST['wound']):'';
    $surgery_chk = $conv->utf8_to_tis620($_POST['surgery_chk']);
    $surgery = isset($_POST['surgery'])?$conv->utf8_to_tis620($_POST['surgery']):'';
    $cigarette_chk = $conv->utf8_to_tis620($_POST['cigarette_chk']);
    $D_cigarette = isset($_POST['D_cigarette'])?$conv->utf8_to_tis620($_POST['D_cigarette']):'';
    $last_useC = isset($_POST['last_useC'])?$_POST['last_useC']:'';
    $alcohol_chk = $conv->utf8_to_tis620($_POST['alcohol_chk']);
    $alcohol_type = isset($_POST['alcohol_type'])?$_POST['alcohol_type']:'';
    $alcohol_vol = isset($_POST['alcohol_vol'])?$_POST['alcohol_vol']:'';
    $last_useA = isset($_POST['last_useA'])?$_POST['last_useA']:'';
    $dope_chk = $conv->utf8_to_tis620($_POST['dope_chk']);
    $dope_type = isset($_POST['dope_type'])?$_POST['dope_type']:'';
    $last_useD = isset($_POST['last_useD'])?$_POST['last_useD']:'';
    $marihuana_chk = $conv->utf8_to_tis620($_POST['marihuana_chk']);
    $D_marihuana = isset($_POST['D_marihuana'])?$conv->utf8_to_tis620($_POST['D_marihuana']):'';
    $last_useM = isset($_POST['last_useM'])?$conv->utf8_to_tis620($_POST['last_useM']):'';
    $ADL = $_POST['ADL'];
    $work = $_POST['work'];
    $menses_chk = isset($_POST['menses_chk'])?$conv->utf8_to_tis620($_POST['menses_chk']):'';
    $menses = isset($_POST['menses'])?$conv->utf8_to_tis620($_POST['menses']):'';
    $recorder = $conv->utf8_to_tis620($_POST['user']);
    $recdate = date('Y-m-d H:i:s');


    $data = array($hn,$vn,$relative,$police_name,$weapon_chk,$weapon,$detain_chk,$detain,$typeP_1,$typeP_2,$typeP_3,$typeP_4
    ,$typeP_5,$typeP_6,$typeP_7,$smi4_chk,$smi4_1,$smi4_2,$smi4_3,$smi4_4,$lawpsych_chk,$lawpsych,$sleep_chk,$sleep,$IC_chk,$IC,$med_chk,$med
    ,$accident_chk,$accident,$wound_chk,$wound,$surgery_chk,$surgery,$cigarette_chk,$D_cigarette,$last_useC,$alcohol_chk,$alcohol_type,$alcohol_vol,$last_useA
    ,$dope_chk,$dope_type,$last_useD,$marihuana_chk,$D_marihuana,$last_useM,$ADL,$work,$menses_chk,$menses,$recdate,$recorder);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "jvlER_regis";
    $ER_regis = $connDB->insert($table, $data);
    $res = array("messege"=>$ER_regis);
if($ER_regis===false){
    $res = array("messege"=>'ไม่สามารถบันทึกการบริการผู้ป่วยจิตเวชฉุกเฉิน ได้!!!!');
}else{
    $res = array("messege"=>'บันทึกการบริการผู้ป่วยจิตเวชฉุกเฉิน สำเร็จ!!!!',"id"=>$ER_regis);
}
    print json_encode($res);
    $connDB->close_PDO();
}elseif ($method == 'edit_lotitem') {
    $lot_price=0;
    $li_id = $_POST['li_id'];
    $lot_id = $_POST['lot_id'];
    $db_id = $_POST['db_id'];
    $item_price = $_POST['item_price'];
    $item_amount = $_POST['item_amount'];
    $sell_price = $_POST['sell_price'];
    $expire_date = insert_date($_POST['expire_date']);

    $sql = "select receive,sell from drug_brand where db_id= :db_id";
    $connDB->imp_sql($sql);
    $execute=array(':db_id' => $db_id);
    $receive=$connDB->select_a($execute);
    // $total_receive = (int) $item_amount + (int) $receive['receive'];
    // $total_now = $total_receive - (int) $receive['sell'];

    $sql = "select item_price,item_amount from lot_item where li_id= :li_id";
    $connDB->imp_sql($sql);
    $execute=array(':li_id' => $li_id);
    $amount=$connDB->select_a($execute);
    $total_receive = (int) $item_amount + ((int) $receive['receive']-$amount['item_amount']);
    $total_now = $total_receive - (int) $receive['sell'];

    $data = array($db_id,$item_price,$item_amount,$sell_price,$expire_date,$total_now);
    $field = array("db_id","item_price","item_amount","sell_price","expire_date","total_now");
    $table = "lot_item";
    $where="li_id=:li_id";
    $execute=array(':li_id' => $li_id);
    $edit_lot_item = $connDB->update($table, $data, $where, $field, $execute);

    if($edit_lot_item){
        $data2 = array($total_receive);
        $field = array("receive");
        $table2 = "drug_brand";
        $where="db_id=:db_id";
        $execute2=array(':db_id' => $db_id);
        $edit_drug_brand=$connDB->update($table2, $data2, $where, $field, $execute2); 

        $lot_price += $item_price*$item_amount;
    }
    else if(!$add_lot_item){
        $res = array("messege"=>'เพิ่มรายการไม่สำเร็จ!!!! '.$edit_lot_item->errorInfo());
        print json_encode($res);
    }
    $sql = "SELECT lot_price,lot_amount FROM lot WHERE lot_id= :lot_id";
    $connDB->imp_sql($sql);
    $execute=array(':lot_id' => $lot_id);
    $chk_lot=$connDB->select_a($execute);

    $lot_price = ($chk_lot['lot_price']-($amount['item_price']*$amount['item_amount'])+$lot_price);
    $lot_amount = $chk_lot['lot_amount'];

    $data3 = array($lot_price,$lot_amount);
    $field3 = array("lot_price","lot_amount");
    $table3 = "lot";
    $where3="lot_id=:lot_id";
    $execute3=array(':lot_id' => $lot_id);
    $edit_lot=$connDB->update($table3, $data3, $where3, $field3, $execute3); 

    $res = array("messege"=>'เพิ่มรายการสำเร็จ!!!!');
    print json_encode($res);
    $connDB->close_PDO();
}