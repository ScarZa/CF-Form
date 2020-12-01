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
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
//$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
// if(empty($data2)){
//     $sql1 = "SELECT an
//     FROM an_stat 
//     WHERE vn = :vn";
//     $conn_DB->imp_sql($sql1);
//     $execute=array(':vn' => $data);
//     $rslt=$conn_DB->select_a($execute);
//     $data2 = empty($rslt['an'])?'':$rslt['an'];
// }
$sql="select p.hn,v.vn,v.vstdate,p.pname,p.fname,p.lname,p.sex,p.cid,p.birthday,concat(v.age_y,' ปี ',v.age_m,' เดือน ') age,v.vn,v.pdx,v.dx0,v.dx1,v.dx2,v.dx3,v.dx4,v.dx5
,pt.name ptname,oc.pmh,oc.cc,oc.hpi,cgi.cgis_score,ds.depression_score,ds.suicide_score
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480070' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine100
,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480070' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine100Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480069' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine25
,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480069' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine25Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1000059' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Carbamazepine200
,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1000059' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Carbamazepine200Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480107' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)LithiumCarbonate300
,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480107' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)LithiumCarbonate300Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1460332' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200
,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1460332' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200Date
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1570044' and ((op.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200CHRONO
,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1570044' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200CHRONODate
,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1540021' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate500
,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1540021' and ((o1.vn = :vn 
and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate500Date
,smi.chk_1,smi1.smiv_result smi1_1,smi2.smiv_result smi1_2,smi3.smiv_result smi1_3,smi4.smiv_result smi1_4,smi5.smiv_result smi1_5,smi6.smiv_result smi1_6,smi7.smiv_result smi1_7,smi8.smiv_result smi1_8
    ,smi9.smiv_result smi1_9,smi10.smiv_result smi1_10,smi11.smiv_result smi1_11,smi12.smiv_result smi1_12,smi.t1_12
    ,smi.chk_2,smi13.smiv_result smi2_1,smi14.smiv_result smi2_2,smi15.smiv_result smi2_3,smi16.smiv_result smi2_4,smi17.smiv_result smi2_5,smi18.smiv_result smi2_6,smi19.smiv_result smi2_7,smi20.				 smiv_result smi2_8
    ,smi21.smiv_result smi2_9,smi22.smiv_result smi2_10,smi23.smiv_result smi2_11,smi24.smiv_result smi2_12,smi.t2_12
    ,smi.chk_3,smi25.smiv_result smi3_1,smi26.smiv_result smi3_2,smi27.smiv_result smi3_3,smi.t3_3
    ,smi.chk_4,smi28.smiv_result smi4_1,smi29.smiv_result smi4_2,smi30.smiv_result smi4_3,smi31.smiv_result smi4_4
    ,smi.chk_5,smi32.smiv_result smi5_1,smi33.smiv_result smi5_2,smi34.smiv_result smi5_3,smi35.smiv_result smi5_4
    ,smi.smiv_class
    from patient p 
    LEFT OUTER JOIN vn_stat v ON v.hn=p.hn
    left outer join opdscreen oc on oc.vn=v.vn
    left outer join pttype pt on v.pttype=pt.pttype
    left outer join cgi on cgi.vn = v.vn
      left outer join depression_screen ds on ds.vn=v.vn
      LEFT OUTER join jvlsmiv_regis smiv on smiv.hn=p.hn
      LEFT OUTER join jvl_smiv smi on smiv.hn = smi.hn
		LEFT OUTER join jvl_result_smiv smi1 on smi1.Rsmiv_id = smi.smiv1_1
            LEFT OUTER join jvl_result_smiv smi2 on smi2.Rsmiv_id = smi.smiv1_2
            LEFT OUTER join jvl_result_smiv smi3 on smi3.Rsmiv_id = smi.smiv1_3
            LEFT OUTER join jvl_result_smiv smi4 on smi4.Rsmiv_id = smi.smiv1_4
            LEFT OUTER join jvl_result_smiv smi5 on smi5.Rsmiv_id = smi.smiv1_5
            LEFT OUTER join jvl_result_smiv smi6 on smi6.Rsmiv_id = smi.smiv1_6
            LEFT OUTER join jvl_result_smiv smi7 on smi7.Rsmiv_id = smi.smiv1_7
            LEFT OUTER join jvl_result_smiv smi8 on smi8.Rsmiv_id = smi.smiv1_8
            LEFT OUTER join jvl_result_smiv smi9 on smi9.Rsmiv_id = smi.smiv1_9
            LEFT OUTER join jvl_result_smiv smi10 on smi10.Rsmiv_id = smi.smiv1_10
            LEFT OUTER join jvl_result_smiv smi11 on smi11.Rsmiv_id = smi.smiv1_11
            LEFT OUTER join jvl_result_smiv smi12 on smi12.Rsmiv_id = smi.smiv1_12
            LEFT OUTER join jvl_result_smiv smi13 on smi13.Rsmiv_id = smi.smiv2_1
            LEFT OUTER join jvl_result_smiv smi14 on smi14.Rsmiv_id = smi.smiv2_2
            LEFT OUTER join jvl_result_smiv smi15 on smi15.Rsmiv_id = smi.smiv2_3
            LEFT OUTER join jvl_result_smiv smi16 on smi16.Rsmiv_id = smi.smiv2_4
            LEFT OUTER join jvl_result_smiv smi17 on smi17.Rsmiv_id = smi.smiv2_5
            LEFT OUTER join jvl_result_smiv smi18 on smi18.Rsmiv_id = smi.smiv2_6
            LEFT OUTER join jvl_result_smiv smi19 on smi19.Rsmiv_id = smi.smiv2_7
            LEFT OUTER join jvl_result_smiv smi20 on smi20.Rsmiv_id = smi.smiv2_8
            LEFT OUTER join jvl_result_smiv smi21 on smi21.Rsmiv_id = smi.smiv2_9
            LEFT OUTER join jvl_result_smiv smi22 on smi22.Rsmiv_id = smi.smiv2_10
            LEFT OUTER join jvl_result_smiv smi23 on smi23.Rsmiv_id = smi.smiv2_11
            LEFT OUTER join jvl_result_smiv smi24 on smi24.Rsmiv_id = smi.smiv2_12
            LEFT OUTER join jvl_result_smiv smi25 on smi25.Rsmiv_id = smi.smiv3_1
            LEFT OUTER join jvl_result_smiv smi26 on smi26.Rsmiv_id = smi.smiv3_2
            LEFT OUTER join jvl_result_smiv smi27 on smi27.Rsmiv_id = smi.smiv3_3
            LEFT OUTER join jvl_result_smiv smi28 on smi28.Rsmiv_id = smi.smiv4_1
            LEFT OUTER join jvl_result_smiv smi29 on smi29.Rsmiv_id = smi.smiv4_2
            LEFT OUTER join jvl_result_smiv smi30 on smi30.Rsmiv_id = smi.smiv4_3
            LEFT OUTER join jvl_result_smiv smi31 on smi31.Rsmiv_id = smi.smiv4_4
            LEFT OUTER join jvl_result_smiv smi32 on smi32.Rsmiv_id = smi.smiv5_1
            LEFT OUTER join jvl_result_smiv smi33 on smi33.Rsmiv_id = smi.smiv5_2
            LEFT OUTER join jvl_result_smiv smi34 on smi34.Rsmiv_id = smi.smiv5_3
            LEFT OUTER join jvl_result_smiv smi35 on smi35.Rsmiv_id = smi.smiv5_4
    where v.vn = :vn GROUP BY v.vn";

// "select p.pname,p.fname,p.lname,p.hn,o1.vstdate,o1.vn,p.sex,p.birthday
// ,vt.pdx,vt.dx0,vt.dx1,vt.dx2,vt.dx3
// ,(SELECT concat(di.name,' ',di.strength) FROM patient p inner join ovst o1 on p.hn = o1.hn inner join opitemrece op on op.hn = p.hn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480070' and ((o1.vn = :vn and op.vn > vt.lastvisit_vn and op.rxdate < o1.vstdate and op.income = '03') or (op.an = :an and op.income = '19')) GROUP BY op.icode)Clozapine100
// ,(SELECT concat(di.name,' ',di.strength) FROM patient p inner join ovst o1 on p.hn = o1.hn inner join opitemrece op on op.hn = p.hn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480069' and ((o1.vn = :vn and op.vn > vt.lastvisit_vn and op.rxdate < o1.vstdate and op.income = '03') or (op.an = :an and op.income = '19')) GROUP BY op.icode)Clozapine25
// ,(SELECT concat(di.name,' ',di.strength) FROM patient p inner join ovst o1 on p.hn = o1.hn inner join opitemrece op on op.hn = p.hn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1000059' and ((o1.vn = :vn and op.vn > vt.lastvisit_vn and op.rxdate < o1.vstdate and op.income = '03') or (op.an = :an and op.income = '19')) GROUP BY op.icode)Carbamazepine200
// ,(SELECT concat(di.name,' ',di.strength) FROM patient p inner join ovst o1 on p.hn = o1.hn inner join opitemrece op on op.hn = p.hn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480107' and ((o1.vn = :vn and op.vn > vt.lastvisit_vn and op.rxdate < o1.vstdate and op.income = '03') or (op.an = :an and op.income = '19')) GROUP BY op.icode)LithiumCarbonate300
// ,(SELECT concat(di.name,' ',di.strength) FROM patient p inner join ovst o1 on p.hn = o1.hn inner join opitemrece op on op.hn = p.hn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1460332' and ((o1.vn = :vn and op.vn > vt.lastvisit_vn and op.rxdate < o1.vstdate and op.income = '03') or (op.an = :an and op.income = '19')) GROUP BY op.icode)SodiumValproate200
// ,(SELECT concat(di.name,' ',di.strength) FROM patient p inner join ovst o1 on p.hn = o1.hn inner join opitemrece op on op.hn = p.hn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1570044' and ((op.vn = :vn and op.vn > vt.lastvisit_vn and op.rxdate < o1.vstdate and op.income = '03') or (op.an = :an and op.income = '19')) GROUP BY op.icode)SodiumValproate200CHRONO
// ,(SELECT concat(di.name,' ',di.strength) FROM patient p inner join ovst o1 on p.hn = o1.hn inner join opitemrece op on op.hn = p.hn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1540021' and ((o1.vn = :vn and op.vn > vt.lastvisit_vn and op.rxdate < o1.vstdate and op.income = '03') or (op.an = :an and op.income = '19')) GROUP BY op.icode)SodiumValproate500
// from patient p
// inner join ovst o1 on p.hn = o1.hn
// inner join vn_stat vt on vt.vn = o1.vn
// where o1.vn = :vn";

//echo $sql;
$conn_DB->imp_sql($sql);
// $execute=array(':vn' => $data,':an'=>$data2);
$execute=array(':vn' => $data);
$rslt=$conn_DB->select_a($execute);
//print_r($rslt);
$conv=new convers_encode();
//for($i=0;$i<count($rslt);$i++){
    $pname=$conv->tis620_to_utf8( $rslt['pname']);
    $fname=$conv->tis620_to_utf8( $rslt['fname']);
    $lname=$conv->tis620_to_utf8( $rslt['lname']);
    $series['fullname'] = $pname.$fname.' '.$lname;
    $series['hn'] = $rslt['hn'];
    $series['vstdate'] = $rslt['vstdate'];
    $series['tvstdate'] = DateThai1($rslt['vstdate']);
    $series['vn'] = $rslt['vn'];
    $series['cid'] = $rslt['cid'];
    $series['sex'] = $rslt['sex'];
    $series['birthday'] = $rslt['birthday'];
    $series['bd'] = DateThai1($rslt['birthday']);
    $series['age'] = $rslt['age'];
    $series['pdx'] = $rslt['pdx'];
    $series['dx0'] = $rslt['dx0'];
    $series['dx1'] = $rslt['dx1'];
    $series['dx2'] = $rslt['dx2'];
    $series['dx3'] = $rslt['dx3'];
    $series['dx4'] = $rslt['dx4'];
    $series['dx5'] = $rslt['dx5'];
    $series['ptname'] = $conv->tis620_to_utf8( $rslt['ptname']);
    $series['Q9'] = isset($rslt['depression_score'])?$rslt['depression_score']:'-';
    $series['Q8'] = isset($rslt['suicide_score'])?$rslt['suicide_score']:'-';
    $series['cgi'] = isset($rslt['cgis_score'])?$rslt['cgis_score']:'-';
    $series['pmh'] = $conv->tis620_to_utf8( $rslt['pmh']);
    $series['cc'] = $conv->tis620_to_utf8( $rslt['cc']);
    $series['hpi'] = $conv->tis620_to_utf8( $rslt['hpi']);
    $series['Clozapine100'] = $rslt['Clozapine100'];
    $series['Clozapine100Date'] = isset($rslt['Clozapine100Date'])?DateThai1($rslt['Clozapine100Date']):'';
    $series['Clozapine25'] = $rslt['Clozapine25'];
    $series['Clozapine25Date'] = isset($rslt['Clozapine25Date'])?DateThai1($rslt['Clozapine25Date']):'';
    $series['Carbamazepine200'] = $rslt['Carbamazepine200'];
    $series['Carbamazepine200Date'] = isset($rslt['Carbamazepine200Date'])?DateThai1($rslt['Carbamazepine200Date']):'';
    $series['LithiumCarbonate300'] = $rslt['LithiumCarbonate300'];
    $series['LithiumCarbonate300Date'] = isset($rslt['LithiumCarbonate300Date'])?DateThai1($rslt['LithiumCarbonate300Date']):'';
    $series['SodiumValproate200'] = $rslt['SodiumValproate200'];
    $series['SodiumValproate200Date'] = isset($rslt['SodiumValproate200Date'])?DateThai1($rslt['SodiumValproate200Date']):'';
    $series['SodiumValproate200CHRONO'] = $rslt['SodiumValproate200CHRONO'];
    $series['SodiumValproate200CHRONODate'] = isset($rslt['SodiumValproate200CHRONODate'])?DateThai1($rslt['SodiumValproate200CHRONODate']):'';
    $series['SodiumValproate500'] = $rslt['SodiumValproate500'];
    $series['SodiumValproate500Date'] = isset($rslt['SodiumValproate500Date'])?DateThai1($rslt['SodiumValproate500Date']):'';
    $series['chk_1'] = $rslt['chk_1'];
    $series['smi1_1'] = $conv->tis620_to_utf8($rslt['smi1_1']);
    $series['smi1_2'] = $conv->tis620_to_utf8($rslt['smi1_2']);
    $series['smi1_3'] = $conv->tis620_to_utf8($rslt['smi1_3']);
    $series['smi1_4'] = $conv->tis620_to_utf8($rslt['smi1_4']);
    $series['smi1_5'] = $conv->tis620_to_utf8($rslt['smi1_5']);
    $series['smi1_6'] = $conv->tis620_to_utf8($rslt['smi1_6']);
    $series['smi1_7'] = $conv->tis620_to_utf8($rslt['smi1_7']);
    $series['smi1_8'] = $conv->tis620_to_utf8($rslt['smi1_8']);
    $series['smi1_9'] = $conv->tis620_to_utf8($rslt['smi1_9']);
    $series['smi1_10'] = $conv->tis620_to_utf8($rslt['smi1_10']);
    $series['smi1_11'] = $conv->tis620_to_utf8($rslt['t1_12']);
    $series['t1_12'] = $conv->tis620_to_utf8($rslt['smi1_1']);
    $series['chk_2'] = $rslt['chk_2'];
    $series['smi2_1'] = $conv->tis620_to_utf8($rslt['smi2_1']);
    $series['smi2_2'] = $conv->tis620_to_utf8($rslt['smi2_2']);
    $series['smi2_3'] = $conv->tis620_to_utf8($rslt['smi2_3']);
    $series['smi2_4'] = $conv->tis620_to_utf8($rslt['smi2_4']);
    $series['smi2_5'] = $conv->tis620_to_utf8($rslt['smi2_5']);
    $series['smi2_6'] = $conv->tis620_to_utf8($rslt['smi2_6']);
    $series['smi2_7'] = $conv->tis620_to_utf8($rslt['smi2_7']);
    $series['smi2_8'] = $conv->tis620_to_utf8($rslt['smi2_8']);
    $series['smi2_9'] = $conv->tis620_to_utf8($rslt['smi2_9']);
    $series['smi2_10'] = $conv->tis620_to_utf8($rslt['smi2_10']);
    $series['smi2_11'] = $conv->tis620_to_utf8($rslt['smi2_11']);
    $series['t2_12'] = $conv->tis620_to_utf8($rslt['t2_12']);
    $series['chk_3'] = $rslt['chk_3'];
    $series['smi3_1'] = $conv->tis620_to_utf8($rslt['smi3_1']);
    $series['smi3_2'] = $conv->tis620_to_utf8($rslt['smi3_2']);
    $series['t3_3'] = $conv->tis620_to_utf8($rslt['t3_3']);
    $series['chk_4'] = $rslt['chk_4'];
    $series['smi4_1'] = $conv->tis620_to_utf8($rslt['smi4_1']);
    $series['smi4_2'] = $conv->tis620_to_utf8($rslt['smi4_2']);
    $series['smi4_3'] = $conv->tis620_to_utf8($rslt['smi4_3']);
    $series['smi4_4'] = $conv->tis620_to_utf8($rslt['smi4_4']);
    $series['smi5_1'] = $conv->tis620_to_utf8($rslt['smi5_1']);
    $series['smi5_2'] = $conv->tis620_to_utf8($rslt['smi5_2']);
    $series['smi5_3'] = $conv->tis620_to_utf8($rslt['smi5_3']);
    $series['smi5_4'] = $conv->tis620_to_utf8($rslt['smi5_4']);
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>