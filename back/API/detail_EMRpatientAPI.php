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
$conv=new convers_encode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
if(!empty($data2)){
    $sql="select p.hn,p.pname,p.fname,p.lname,p.sex,p.informaddr,p.cid,p.birthday,concat(v.age_y,' ปี ',v.age_m,' เดือน ') age,m.name as mrname,a.an,a.pdx,a.dx0,a.dx1,a.dx2,a.dx3,a.dx4,a.dx5,w.name,pt.name ptname
    from patient p 
    LEFT OUTER JOIN an_stat a ON a.hn=p.hn
    left outer join marrystatus m on p.marrystatus=m.code 
    inner join ward w on w.ward = a.ward
    left outer join pttype pt on a.pttype=pt.pttype
    where a.an= :an";
    $conn_DB->imp_sql($sql);
    $execute=array(':an'=>$data2);
    $rslt=$conn_DB->select_a($execute);
    $ward = $conv->tis620_to_utf8( $rslt['name']);
    $series['ward'] = 'Admit ที่ : '.$ward;
}else {
    $sql="select oap.nextdate,v1.vn,v1.hn,v1.pttype_expire,re.expire_date,v1.age_y,v1.age_m,o1.vstdate,SUBSTR(o1.vsttime,1,5)vsttime,hos.Dhospital
    ,s.bw,s.height,s.bmi,s.pmh,s.cc,s.hpi,s.temperature,s.pulse,s.rr,s.bps,s.bpd
    ,p.pname,p.fname,p.lname
    ,CASE
        WHEN p.sex = 1 THEN 'ชาย'
		ELSE 'หญิง' END as sex
    ,p.hometel,p.informaddr,p.informtel,p.cid,p.birthday,p.bloodgrp,p.drugallergy,ill.cc_persist_disease disease
    ,n.name nation_name,r.name religion_name,e.name edu_name,occ.name occ_name
    ,p.addrpart,p.moopart,t3.name tambon,t2.name ampher,t1.name changwat
    ,concat(v1.pdx,' ',ic1.name)as dxname1,concat(v1.dx0,' ',ic2.name) as dxname2,concat(v1.dx1,' ',ic3.name) as dxname3
    ,concat(v1.dx2,' ',ic4.name) as dxname4 ,c.name clinic,h.name as refername,ovs.name as ovstistname,d.name as docName,pt1.name ptname1,pt2.name ptname2,cgi.cgis_score,ds.depression_score,ds.suicide_score
    from vn_stat v1 
    left outer join ovst o1 on o1.vn=v1.vn
    left outer join ovstist ovs on ovs.ovstist = o1.ovstist
    left outer join opdscreen s on s.vn = v1.vn
    left outer join oapp oap on oap.vn=v1.vn
    left outer join referin re on re.vn=v1.vn
    left outer join hospcode h on h.hospcode = re.hospcode
    left outer join patient p on p.hn=v1.hn
    left outer join nationality n on n.nationality = p.nationality
    left outer join religion r on r.religion = p.religion
    left outer join education e on e.education = p.educate
    left outer join occupation occ on occ.occupation = p.occupation
    left outer join icd101 ic1 on ic1.code=v1.pdx
    left outer join icd101 ic2 on ic2.code=v1.dx0
    left outer join icd101 ic3 on ic3.code=v1.dx1
    left outer join icd101 ic4 on ic4.code=v1.dx2
    left outer join clinicmember cl on cl.hn = v1.hn
    left outer join clinic c on c.clinic = cl.clinic
    left outer join doctor d on d.code = v1.dx_doctor
    left outer join pttype pt1 on p.pttype=pt1.pttype
    left outer join pttype pt2 on o1.pttype=pt2.pttype
    left outer join cgi on cgi.vn = v1.vn
    left outer join depression_screen ds on ds.vn=v1.vn
    left outer join dbhospital hos on hos.idhospital = v1.hospmain
    left outer join thaiaddress t1 on t1.chwpart=p.chwpart and
         t1.amppart='00' and t1.tmbpart='00'
    left outer join thaiaddress t2 on t2.chwpart=p.chwpart and
         t2.amppart=p.amppart and t2.tmbpart='00'
    left outer join thaiaddress t3 on t3.chwpart=p.chwpart and
         t3.amppart=p.amppart and t3.tmbpart=p.tmbpart
    left outer JOIN thaiaddress t4 ON t4.chwpart=p.chwpart
    left outer join opd_ill_history ill on ill.hn = p.hn
    where v1.vn= :vn GROUP BY v1.vn";
    $conn_DB->imp_sql($sql);
    $execute=array(':vn'=>$data);
    $rslt=$conn_DB->select_a($execute);
}

//print_r($rslt);

//for($i=0;$i<count($rslt);$i++){
    $series['nextdate'] = isset($rslt['nextdate'])?DateThai1($rslt['nextdate']):'';
    $series['pttype_expire'] = isset($rslt['pttype_expire'])?DateThai1($rslt['pttype_expire']):'';
    $series['expire_date'] = isset($rslt['expire_date'])?DateThai1($rslt['expire_date']):'';
    $series['vstdate'] = DateThai2($rslt['vstdate']);
    $series['vsttime'] = $rslt['vsttime'];
    $series['Dhospital'] = $conv->tis620_to_utf8( $rslt['Dhospital']);
    $pname=$conv->tis620_to_utf8( $rslt['pname']);
    $fname=$conv->tis620_to_utf8( $rslt['fname']);
    $lname=$conv->tis620_to_utf8( $rslt['lname']);
    $series['fullname'] = $pname.$fname.' '.$lname;
    $series['hn'] = $rslt['hn'];
    $series['vn'] = $rslt['vn'];
    $series['sex'] = $conv->tis620_to_utf8($rslt['sex']);
    $series['address'] = $rslt['addrpart'].' ม.'.$rslt['moopart'].' ต.'. $conv->tis620_to_utf8( $rslt['tambon']).' อ.'. $conv->tis620_to_utf8( $rslt['ampher']).' จ.'. $conv->tis620_to_utf8( $rslt['changwat']);
    $series['hometel'] = $conv->tis620_to_utf8($rslt['hometel']);
    $series['informaddr'] = $conv->tis620_to_utf8( $rslt['informaddr']);
    $series['informtel'] = $conv->tis620_to_utf8($rslt['informtel']);
    $series['cid'] = $rslt['cid'];
    $series['birthday'] = DateThai1($rslt['birthday']);
    $series['bloodgrp'] = $conv->tis620_to_utf8($rslt['bloodgrp']);
    $series['drugallergy'] = $conv->tis620_to_utf8( $rslt['drugallergy']);
    $series['disease'] = $conv->tis620_to_utf8( $rslt['disease']);
    $series['age'] = $conv->tis620_to_utf8($rslt['age_y']).' ปี '.$conv->tis620_to_utf8($rslt['age_m']).' เดือน';
    $series['nation_name'] = $conv->tis620_to_utf8( $rslt['nation_name']);
    $series['religion_name'] = $conv->tis620_to_utf8( $rslt['religion_name']);
    $series['edu_name'] = $conv->tis620_to_utf8( $rslt['edu_name']);
    $series['occ_name'] = $conv->tis620_to_utf8( $rslt['occ_name']);
    $series['dxname1'] = $conv->tis620_to_utf8( $rslt['dxname1']);
    $series['dxname2'] = $conv->tis620_to_utf8( $rslt['dxname2']);
    $series['dxname3'] = $conv->tis620_to_utf8( $rslt['dxname3']);
    $series['dxname4'] = $conv->tis620_to_utf8( $rslt['dxname4']);
    $series['ptname1'] = $conv->tis620_to_utf8( $rslt['ptname1']);
    $series['ptname2'] = $conv->tis620_to_utf8( $rslt['ptname2']);
    $series['refername'] = $conv->tis620_to_utf8( $rslt['refername']);
    $series['clinic'] = $conv->tis620_to_utf8( $rslt['clinic']);
    $series['ovstistname'] = $conv->tis620_to_utf8( $rslt['ovstistname']);
    $series['docName'] = $conv->tis620_to_utf8( $rslt['docName']);
    $series['bw'] = round($rslt['bw'],2);
    $series['height'] = $rslt['height'];
    $series['bmi'] = round($rslt['bmi'],2);
    $series['pmh'] = $conv->tis620_to_utf8( $rslt['pmh']);
    $series['cc'] = $conv->tis620_to_utf8( $rslt['cc']);
    $series['hpi'] = $conv->tis620_to_utf8( $rslt['hpi']);
    $series['temp'] = round($rslt['temperature'],1);
    $series['pr'] = round($rslt['pulse']);
    $series['rr'] = round($rslt['rr']);
    $series['bps'] = round($rslt['bps']);
    $series['bpd'] = round($rslt['bpd']);
    $series['Q9'] = isset($rslt['depression_score'])?$rslt['depression_score']:'-';
    $series['Q8'] = isset($rslt['suicide_score'])?$rslt['suicide_score']:'-';
    $series['cgi'] = isset($rslt['cgis_score'])?$rslt['cgis_score']:'-';
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>