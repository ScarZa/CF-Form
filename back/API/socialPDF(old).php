<?php session_save_path("../session/");
session_start();

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}

set_time_limit(0);
$connDB = new TablePDO();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$conv=new convers_encode();?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>แบบการวินิจฉัยทางสังคม</title>
<link rel='SHORTCUT ICON' href='images/icon_set2/compose.ico'>
    <meta charset="UTF-8">
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="../../font/template/bootstrap-4.1.1/css/bootstrap.min.css" crossorigin="anonymous">
    <!-- <link rel="stylesheet" type="text/css" href="plugins/Jprint/print.min.css"> -->
    <link rel="stylesheet" href="../../font/plugins/font-awesome-4.6.3/css/font-awesome.min.css">
    <!-- Select2 -->
    <link rel="stylesheet" href="../../font/plugins/select2/select2.min.css">
    <!-- My tools -->
    <!-- <script src="MyTools/createTableAjax.js" type="text/javascript"></script>
    <script src="MyTools/AJAXCharts.js" type="text/javascript"></script>
    <script src="MyTools/reportLayout.js" type="text/javascript"></script> -->
    <!-- End My tools -->
    <link rel="stylesheet" href="../../font/plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.css" />
    <link rel="stylesheet" href="../../font/plugins/jquery-ui-1.11.4.custom/SpecialDateSheet.css" />
    <!-- <link rel="stylesheet" type="text/css" href="plugins/DataTables/datatables.min.css"/> -->
    <link rel="stylesheet" type="text/css" href="../../font/plugins/DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css" />
   
<style type="text/css">
body {
	margin-top: 50px;
}
</style>
</head>
<?php
include_once ('../plugins/funcDateThai.php');
include '../plugins/function_date.php';
    $id=$_GET['id'];

    $sql=  "SELECT concat(pt.fname,' ',pt.lname)fullname,TIMESTAMPDIFF(year,pt.birthday,NOW())age,sc.hn
    ,sc.contributor,sc.relevance,sc.symptom,sc.psych_comm,hurt_comm,evolu_comm,twitch_comm
    ,ed.eduname,sc.fall_comm,sc.career,sc.marry,sc.addict_comm,sc.accident,sc.sick,sc.habit
    ,sc.family,sc.spend_comm,sc.conge_comm
    ,(SELECT sp.problem_detial FROM jvl_social01 sc inner join jvl_social_problem_list sp on sp.so_problem_id=sc.Sdiag_1 WHERE sc.social_id=".$id.")Sdiag_1
    ,(SELECT sp.problem_detial FROM jvl_social01 sc inner join jvl_social_problem_list sp on sp.so_problem_id=sc.Sdiag_2 WHERE sc.social_id=".$id.")Sdiag_2
    ,(SELECT sp.problem_detial FROM jvl_social01 sc inner join jvl_social_problem_list sp on sp.so_problem_id=sc.Sdiag_3 WHERE sc.social_id=".$id.")Sdiag_3
    ,(SELECT sp.problem_detial FROM jvl_social01 sc inner join jvl_social_problem_list sp on sp.so_problem_id=sc.Sdiag_4 WHERE sc.social_id=".$id.")Sdiag_4
    ,(SELECT sp.problem_detial FROM jvl_social01 sc inner join jvl_social_problem_list sp on sp.so_problem_id=sc.Sdiag_5 WHERE sc.social_id=".$id.")Sdiag_5
    ,sc.help_comm,sc.source_comm,os.name,os.entryposition,sc.vdate
    FROM jvl_social01 sc
    inner join patient pt on sc.hn=pt.hn
    inner join jvl_education ed on ed.education=sc.educate
    inner join opduser os on os.loginname=recorder
    WHERE sc.social_id=".$id;
    $connDB->imp_sql($sql);
    $detial_patient=$connDB->select_a();
    //print_r($detial_patient);
    $fullname = $conv->tis620_to_utf8($detial_patient['fullname']);
    $age = $detial_patient['age'];
    $hn = $detial_patient['hn'];
    $contributor = $conv->tis620_to_utf8($detial_patient['contributor']);
    $relevance = $conv->tis620_to_utf8($detial_patient['relevance']);
    $symptom = $conv->tis620_to_utf8($detial_patient['symptom']);
    $psych_comm = $conv->tis620_to_utf8($detial_patient['psych_comm']); 
    $hurt_comm = $conv->tis620_to_utf8($detial_patient['hurt_comm']);
    $evolu_comm = $conv->tis620_to_utf8($detial_patient['evolu_comm']);
    $twitch_comm = $conv->tis620_to_utf8($detial_patient['twitch_comm']);
    $eduname = $conv->tis620_to_utf8($detial_patient['eduname']);
    $fall_comm = $conv->tis620_to_utf8($detial_patient['fall_comm']);
    $career = $conv->tis620_to_utf8($detial_patient['career']);
    $marry = $conv->tis620_to_utf8($detial_patient['marry']);
    $addict_comm = $conv->tis620_to_utf8($detial_patient['addict_comm']);
    $accident = $conv->tis620_to_utf8($detial_patient['accident']);
    $sick = $conv->tis620_to_utf8($detial_patient['sick']);
    $habit = $conv->tis620_to_utf8($detial_patient['habit']);
    $family = $conv->tis620_to_utf8($detial_patient['family']);
    $spend_comm = $conv->tis620_to_utf8($detial_patient['spend_comm']);
    $conge_comm = $conv->tis620_to_utf8($detial_patient['conge_comm']);
    $Sdiag_1 = '1.) '.$conv->tis620_to_utf8($detial_patient['Sdiag_1']);
    $Sdiag_2 = isset($detial_patient['Sdiag_2'])?'<p> &nbsp;&nbsp;2.) '.$conv->tis620_to_utf8($detial_patient['Sdiag_2']):'';
    $Sdiag_3 = isset($detial_patient['Sdiag_3'])?'<p> &nbsp;&nbsp;3.) '.$conv->tis620_to_utf8($detial_patient['Sdiag_3']):'';
    $Sdiag_4 = isset($detial_patient['Sdiag_4'])?'<p> &nbsp;&nbsp;4.) '.$conv->tis620_to_utf8($detial_patient['Sdiag_4']):'';
    $Sdiag_5 = isset($detial_patient['Sdiag_5'])?'<p> &nbsp;&nbsp;5.) '.$conv->tis620_to_utf8($detial_patient['Sdiag_5']):'';
    $help_comm = $conv->tis620_to_utf8($detial_patient['help_comm']);
    $source_comm = $conv->tis620_to_utf8($detial_patient['source_comm']);
    $name = $conv->tis620_to_utf8($detial_patient['name']);
    $entryposition = $conv->tis620_to_utf8($detial_patient['entryposition']);
    $vdate = Datethai1($detial_patient['vdate']);
 ?>
<body>
    <?php
require_once('../plugins/library/mpdf60/mpdf.php'); //ที่อยู่ของไฟล์ mpdf.php ในเครื่องเรานะครับ
ob_start(); // ทำการเก็บค่า html นะครับ*/
?>
    <div class="col-lg-12" align="center"><b valign="bottom">เครื่องมือสำหรับงานสังคมสงเคราะห์จิตเวช</b></div>
            <div align="left"><b>แบบวินิจฉัยทางสังคมแบบผู้ป่วยนอก (สำหรับผู้ป่วยจิตเวชทั่วไป)</b></div>
            <div class="col-lg-12">
                 
                <table width='100%' border='0' cellspacing='' cellpadding='' frame='below' class='divider'> 
                    <tr>
                        <td height="25">ชื่อ-สกุลผู้ป่วย <u> &nbsp;&nbsp;<?= $fullname?>&nbsp;&nbsp; </u> อายุ <u> &nbsp;&nbsp;<?= $age?>&nbsp;&nbsp; </u> ปี  HN <u> &nbsp;&nbsp;<?= $hn?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">ผู้ให้ประวัติ <u> &nbsp;&nbsp;<?= $contributor?>&nbsp;&nbsp; </u> เกี่ยวข้องเป็น <u> &nbsp;&nbsp;<?= $relevance?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">1. อาการสำคัญ <u> &nbsp;&nbsp;<?= $symptom?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">2. ประวัติการเจ็บป่วยทางจิตเวชและการรับการรักษา <u> &nbsp;&nbsp;<?= $psych_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">3. ประวัติการทำร้ายตนเอง <u> &nbsp;&nbsp;<?= $hurt_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">ประวัติส่วนตัว</td>
                    </tr>
                    <tr>
                        <td height="25">4. การตั้งครรภ์/การคลอด/พัฒนาการในวัยเด็ก/ประวัติการชัก <u> &nbsp;&nbsp;<?= $evolu_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">5. ด้านการศึกษา/ผลการศึกษา/ประวัติการสอบตกซ้ำชั้น <u> &nbsp;&nbsp;<?= $fall_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">6. ด้านการประกอบอาชีพ/ความสัมพันธ์กับเพื่อนร่วมงาน <u> &nbsp;&nbsp;<?= $career?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">7. ด้านชีวิตสมรส/ความสัมพันธ์กับคู่สมรส และบุตร <u> &nbsp;&nbsp;<?= $marry?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">8. ประวัติการใช้สารเสพติด <u> &nbsp;&nbsp;<?= $addict_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">9. ด้านอุบัติเหตุ/การผ่าตัด/การถูกทำร้ายร่างกาย <u> &nbsp;&nbsp;<?= $accident?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">10. ประวัติการเจ็บป่วยด้วยโรคทางกาย <u> &nbsp;&nbsp;<?= $sick?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">11. บุคลิกภาพ/อุปนิสัย <u> &nbsp;&nbsp;<?= $habit?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="55">12. ประวัติครอบครัว(ประวัติที่เกี่ยวข้องกับบิดา-มารดา : อุปนิสัย อาชีพ ความสัมพันธ์ในครอบครัว ความสัมพันธ์ระหว่างพี่น้อง ความคาดหวังที่ญาติมีต่อผู้ป่วย)
                        <u> &nbsp;&nbsp;<?= $family?>&nbsp;&nbsp; </u>
                        </td>
                    </tr>
                    <tr>
                        <td height="25">13. ฐานะทางครอบครัว <u> &nbsp;&nbsp;<?= $spend_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="55">14. ประวัติทางกรรมพันธุ์ (หากมีคนในครอบครัวเจ็บป่วยด้วยโรคทางจิต มีผลกระทบต่อครอบครัวอย่างไร และความสัมพันธ์ระหว่างบุคคลที่ป่วยกับผู้ป่วยเป็นอย่างไร
                        <u> &nbsp;&nbsp;<?= $conge_comm?>&nbsp;&nbsp; </u>    
                        </td>
                    </tr>
                    <tr>
                        <td height="75">15. การวินิจฉัยปัญหาทางสังคม <u> &nbsp;&nbsp;<?= $Sdiag_1?> <?= $Sdiag_2?> <?= $Sdiag_3?> <?= $Sdiag_4?> <?= $Sdiag_5?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">16. การให้ความช่วยเหลือ <u> &nbsp;&nbsp;<?= $help_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                    <tr>
                        <td height="25">17. แหล่งสนับสนุนทางสังคม <u> &nbsp;&nbsp;<?= $source_comm?>&nbsp;&nbsp; </u></td>
                    </tr>
                </table>
            </div><br><br>
            <table border="0" width="100%">
                                         <tr>
                                             <td width='50%' align="center">&nbsp;</td>
                                             <td width='50%' align="center">
                                     ลงชื่อ.........................................................<br><br>
                                     ( <?= $name?> )<br>
                                     ตำแหน่ง <?= $entryposition?> <br>วันที่ <?= $vdate?></td>
                                     
                                         </tr>
                                         <tr>
                                         <td width='50%' align="center">&nbsp;</td>
                                         <td width='50%' align="right">F-SO-023</td></tr>
                                     </table>
<?php
$html = ob_get_contents();
ob_clean();

$pdf = new mPDF('tha2','A4','11','');
$pdf->autoScriptToLang = true;
$pdf->autoLangToFont = true;
$pdf->SetDisplayMode('fullpage');

$pdf->WriteHTML($html, 2);
$pdf->Output("../SCPDF/Social.pdf");
echo "<meta http-equiv='refresh' content='0;url=../SCPDF/Social.pdf' />";
?>
<script src="../plugins/jquery-ui-1.11.4.custom/jquery-ui-1.11.4.custom.js"></script>
</body>
</html>