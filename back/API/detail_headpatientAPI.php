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
    from patient p 
    LEFT OUTER JOIN vn_stat v ON v.hn=p.hn
    left outer join opdscreen oc on oc.vn=v.vn
    left outer join pttype pt on v.pttype=pt.pttype
    left outer join cgi on cgi.vn = v.vn
	  left outer join depression_screen ds on ds.vn=v.vn
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
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>