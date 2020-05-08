function AssSMIV(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมิน SMI-V";
    $("li#page").empty().text(title)
    //$("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    
    if($.cookie("an")!=''){
        $("#home").attr("onclick", "AssMENUIPD('#index_content');$('div#SW').hide();");
    }else{$("#home").attr("onclick", "AssMENU('#index_content');$('div#SW').hide();");}
    
    //$("li#prev").show();
    //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    $("#prev").hide();
    $("span.card-title").empty().append(title);
    $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmSMIV' id='frmSMIV' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            //+ "<div class='card border-dark'>"
            //+ "<div class='card-header'><b>ข้อมูลคนไข้</b></div>"
            //+ "<div id='P-data' class='card-body'></div></div><p>"
            + "<div id='P-data'></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $.getJSON('../back/API/detail_DoctorpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
            $("#P-data").append($("<div class='card border-primary'><div class='card-header'><b>ข้อมูลทั่วไป</b></div><div id='P-data' class='card-body'>"
                                    +"<div class='row'><div class='row col-lg-12'><div class='row col-lg-10'>"
                                    +"<span  class='row col-lg-12' id='DP'>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ชื่อ-สกุล : </b></div><div class='row col-lg-3'> <b>"+data[0].fullname+"</b></div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>HN : </b></div><div class='row col-lg-4'> <b>"+data[0].hn+"</b></div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>เลขบัตรประชาชน : </b></div><div class='row col-lg-2'> "+data[0].cid+"</div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>วันเกิด : </b></div><div class='row col-lg-2'> "+data[0].birthday+"</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>อายุ : </b></div><div class='row col-lg-2'> "+data[0].age+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>สถานะภาพ : </b></div><div class='row col-lg-2'> "+data[0].mrname+"</div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>สิทธิการรักษา : </b></div><div class='row col-lg-6'> "+data[0].ptname+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ที่อยู่ : </b></div><div class='row col-lg-9'> "+data[0].informaddr+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>การวินิจฉัย : </b></div><div class='row col-lg-9'> "+data[0].pdx+" "+data[0].dx0
                                    +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"</div></div>" 
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>น้ำหนัก : </b></div><div class='row col-lg-2'>"+data[0].bw+" ก.ก.</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>สูง : </b></div><div class='row col-lg-2'> "+data[0].height+" ซ.ม. </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b></b>BMI : </b></div><div class='row col-lg-2'> "+data[0].bmi+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>Temp. : </b></div><div class='row col-lg-2'>"+data[0].temp+"  ํc</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>PR : </b></div><div class='row col-lg-2'> "+data[0].pr+" /min. </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>RR : </b></div><div class='row col-lg-2'> "+data[0].rr+" /min. </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>BP : </b></div><div class='row col-lg-2'> "+data[0].bps+"/"+data[0].bpd+" mmHg. </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>CGI-S : </b></div><div class='row col-lg-2'>"+data[0].cgi+"</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>9Q : </b></div><div class='row col-lg-2'> "+data[0].Q9+"</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>8Q : </b></div><div class='row col-lg-2'> "+data[0].Q8+"</div></div></span></div> "
                                    
                                    +"<div class='col-lg-2 block'> <img src='../back/API/show_image.php?hn="+$.cookie("hn")+"' width='150' /></div></div>"
                                    +"<div class='row col-lg-12'>&nbsp;</div>"
                                    +"<div class='col-lg-12'>"
                                    +"<p class='col-lg-12 alert alert-info'><b>CC : </b>"+data[0].cc+"</p>"
                                    +"<p class='col-lg-12 alert alert-primary' role='alert'><b>HPI : </b>"+data[0].hpi+"</p>"
                                    +"<p class='col-lg-12'><b>PMH : </b>"+data[0].pmh+"</p></div></div></div></div><p></p>")
                                ,$("<div class='row'><div class='col-lg-4 col-md-4 col-sm-12'><label><b>ผู้ประเมิน : </b></lable><select name='recorder' class='form-control select2' id='recorder' required></select></div>"
                                    +"<div class='col-lg-8 col-md-8 col-sm-12'><label class='col-lg-12'><b>วันที่ประเมิน : </b></lable><input type='text' name='assdate' class='' id='assdate' required></div></div>") 
                                ,$("<div class='row'><div class='col-lg-12' id='ass-SMIV'></div></div>"))
            $("#ass-SMIV").append($("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>1. ผู้ป่วยจิตเวชที่มีความเสี่ยงสูงพบมีประวัติทำร้ายตนเองด้วยวิธีรุนแรงมุ่งหวังให้เสียชีวิต </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group1'></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>2. มีประวัติทำร้ายผู้อื่นด้วยวิธีรุนแรง/ก่อเหตุการณ์รุนแรงในชุมชน </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group2'></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>3. มีอาการหลงผิด มีความคิดทำร้ายผู้อื่นให้ถึงกับชีวิต หรือมุ่งทำร้ายผู้อื่นให้ถึงกับชีวิต </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group3'></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>4. เคยมีประวัติก่อคดีอาญารุนแรง (ฆ่า พยายามฆ่า ข่มขืน วางเพลิง) </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group4'></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>5. มีอาการหลงผิด มีความคิดหมกมุ่นผิดปกติที่เกี่ยวข้องแบบเฉพาะเจาะจงกับราชวงศ์ จนเกิดพฤติกรรมวุ่นวาย รบกวนในงานพิธีสำคัญ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group5'></div>"
                                    +"</div></div><p></p>")
              , $("<div class='form-group row'><label class='col-sm-3 col-form-label'><b>กลุ่มผู้ป่วย SMI-V</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='smiv_class' value='1'checked required><span class='lbl'> เฝ้าระวัง</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='smiv_class' value='2' required><span class='lbl'> ติดตามในระบบ</span></label></div></div>")
              ,$("<div class='form-group row'><label class='col-sm-1 col-form-label'><b>หมายเหตุ </b></label><div class='col-sm-11'><input class='form-control' type='text' name='comment' value=''></div></div>")
                                );
                                selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน', $.cookie("user"));
                                var DP = new DatepickerThai();
                                DP.GetDatepicker("#assdate");

                                for (var c = 1; c <= 5; c++){ 
                                  $.getJSON('../back/API/Q_SMIV_Data.php', { data: c }, function (data) {
                                    var ii = 0; 
                                    for (var i = 1; i <= data.length;i++){
                                    $("div#SMIV_group"+data[ii].smiv_group).append($("<div class='col-lg-1'>&nbsp;&nbsp;</div><div class='col-lg-11'><input class='ace' type='checkbox' name='smiv"+data[ii].smiv_group+"_"+i+"' value='"+data[ii].Rsmiv_id+"' ><span id='Re"+data[ii].smiv_group+"_"+i+"'> "+data[ii].smiv_result+" &nbsp;&nbsp;</span></div></div><br>"))
                                      if(data[ii].smiv_result =='อื่นๆ'){ $("#Re"+data[ii].smiv_group+"_"+i).append($(" <input type='text' name='T"+data[ii].smiv_group+"_"+i+"' class='sm' placeholder='ระบุ'>"))}
                                      ii++;
                                    } 
                                })
                            }
                                                        

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_SMIV'>"));


            //$("#nav-general-tab").on('onclick', (function (e) { e.preventDefault();  
                //AssDocGeneral("#nav-general");
                
            //}))
                               
        $("#frmSMIV").on('submit', (function (e) {
            e.preventDefault();
            // if($("#dep_send").val() == $("#dep_res").val()){
            //     alert("หน่วยงานที่ส่งและหน่วยงานที่รับซ้ำกันครับ กรุณาตรวจสอบด้วย !!!!");
            // }else{
            var dataForm = new FormData(this);
            console.log(dataForm)
            // for (var keys of dataForm.keys()) {
            //     console.log(keys);
            // }
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcSMIVAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            $('#index_content').empty().append("<center><img src='images/waiting.gif'></center>");
            $.ajax(settings).done(function (result) {
                alert(result.messege);
                $('#index_content').empty();
                AssMENU('#index_content');$('div#SW').hide();
            });
        //}
        }));
    });

//         $("input[type=submit][name=submit]").click(function (e) { console.log('1234');
// $.ajax({
// type: "POST",
// url: "../back/API/prcSocialAPI.php",
//                    data: $("#frmsocial").serialize(),
// success: function(result) {
//     alert(result.messege);
//     $("#body_text").empty();
//     AssSocial('#index_content',$.cookie('hn'));
// }
// });e.preventDefault();
             
// });

}
