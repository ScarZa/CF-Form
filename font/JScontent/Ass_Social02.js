function AssSocial02(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบการวินิจฉัยทางสังคม (สำหรับผู้ป่วยจิตเวชเด็ก)";
    $("li#page").empty().text(title)
    $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
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

        $("#contentGr").empty().append($("<form action='' name='frmsocial' id='frmsocial' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>ข้อมูลการรักษา</b></div>"
            + "<div id='treat' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>ประวัติส่วนตัว</b></div>"
            + "<div id='Profile' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>สรุปผลการวินิจฉัย</b></div>"
            + "<div id='diagnose' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>การให้ความช่วยเหลือ</b></div>"
            + "<div id='assist' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>การดำเนินการส่งต่อ</b></div>"
            + "<div id='refer' class='card-body'></div></div>"
            + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $("#treat").append($("<div class='col-lg-12 row'><div class='row col-lg-6'><input type='text' name='contributor' class='form-control' placeholder='ผู้ให้ประวัติ' required></div> <div class='col-lg-6'> <input type='text' name='relevance' class='form-control' placeholder='เกี่ยวข้องเป็น' required></div></div><p>")
                                    ,$("<textarea name='symptom' class='form-control' placeholder='อาการสำคัญ' required></textarea>"));

            $("#Profile").append($("<label class='col-sm-5 col-form-label'>ประวัติการเลี้ยงดู </label><textarea name='aliment' class='form-control' placeholder='ประวัติการเลี้ยงดู' required></textarea><hr>")
                                    ,$("<label class='col-sm-5 col-form-label'>ความสัมพันธ์ในครอบครัว และความเป็นอยู่ในปัจจุบัน </label><textarea name='relationship' class='form-control' placeholder='ความสัมพันธ์ในครอบครัว และความเป็นอยู่ในปัจจุบัน' required></textarea>"));
                                    
            $("#diagnose").append($("<div class='form-group row'><label class='col-sm-5 col-form-label'>ปัญหาการอบรมเลี้ยงดู </label><div class='col-sm-1'><input type='radio' name='issue_ali' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='issue_ali' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='ali_comm' id='ali_comm' class='form-control' placeholder='รายละเอียดปัญหาการอบรมเลี้ยงดู'></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ปัญหาการเรียน </label><div class='col-sm-1'><input type='radio' name='issue_edu' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='issue_edu' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='edu_comm' id='edu_comm' class='form-control' placeholder='รายละเอียดปัญหาการเรียน'></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ปัญหาอื่นๆ </label><div class='col-sm-1'><input type='radio' name='issue_other' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='issue_other' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='other_comm' id='other_comm' class='form-control' placeholder='รายละเอียดปัญหาอื่นๆ'></textarea>"));  
                                    
            $("#assist").append($("<div class='form-group row'><label class='col-sm-7 col-form-label'>Counseling ผู้ปกครองในการอบรมเลี้ยงดูที่เหมาะสม และเลี้ยงดูไปในทางเดียวกัน </label><div class='col-sm-1'><input type='radio' name='assessment01' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment01' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>การปรับพฤติกรรมเบื้องต้น </label><div class='col-sm-1'><input type='radio' name='assessment02' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment02' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='ass02_comm' id='ass02_comm' class='form-control' placeholder='ระบุการปรับพฤติกรรมเบื้องต้น'></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>การจัดตารางในการทบทวนการเรียนสม่ำเสมอ </label><div class='col-sm-1'><input type='radio' name='assessment03' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment03' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>การจัดสิ่งแวดล้อมขณะทบทวนการสอน เช่น ไม่เปิดโทรทัศน์ การจัดโต๊ะในการทำกิจกรรม การแบ่งย่อยงาน เป็นต้น </label><div class='col-sm-1'><input type='radio' name='assessment04' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment04' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>การ Empowerment </label><div class='col-sm-1'><input type='radio' name='assessment05' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment05' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>Supportive Counscling </label><div class='col-sm-1'><input type='radio' name='assessment06' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment06' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>การพิทักษ์สิทธิ์ </label><div class='col-sm-1'><input type='radio' name='assessment07' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment07' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='ass07_comm' id='ass07_comm' class='form-control' placeholder='ระบุการพิทักษ์สิทธิ์'></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>ประเมินปัญหา/ความสามารถร่วมกับครู และวางแผนแก้ไขปัญหาร่วมกัน </label><div class='col-sm-1'><input type='radio' name='assessment08' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment08' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>ให้ใบรายงานโรงเรียน </label><div class='col-sm-1'><input type='radio' name='assessment09' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment09' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>ให้แบบประเมินพฤติกรรมสำหรับครู/ผู้ปกครอง </label><div class='col-sm-1'><input type='radio' name='assessment10' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment10' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>ชี้แจงระบบนัด ความสำคัญของการมาตามนัด และการบำบัดรักาาอย่างต่อเนื่อง </label><div class='col-sm-1'><input type='radio' name='assessment11' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment11' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>อื่นๆ </label><div class='col-sm-1'><input type='radio' name='assessment12' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='assessment12' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='ass12_comm' id='ass12_comm' class='form-control' placeholder='ระบุอื่นๆ'></textarea>"));   
                                    
            $("#refer").append($("<div class='form-group row'><label class='col-sm-7 col-form-label'>ส่งนักจิตวิทยาทดสอบ IQ test </label><div class='col-sm-1'><input type='radio' name='plan01' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='plan01' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>ส่งตรวจ VABS </label><div class='col-sm-1'><input type='radio' name='plan02' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='plan02' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>เข้ากลุ่มส่งเสริมพัฒนาการเด็กที่มีความ้สี่ยงต่อพัฒนาการล่าช้าโดยผู้ปกครองมีส่วนร่วม </label><div class='col-sm-1'><input type='radio' name='plan03' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='plan03' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>พิจารณาตรวจทางจิตวิทย่า </label><div class='col-sm-1'><input type='radio' name='plan04' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='plan04' value='Y' required> มี</div></div><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-7 col-form-label'>อื่นๆ </label><div class='col-sm-1'><input type='radio' name='plan05' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='plan05' value='Y' required> มี</div></div><hr>")
                                    ,$("<textarea name='p05_comm' id='p05_comm' class='form-control' placeholder='ระบุอื่นๆ'></textarea>"));  
                                                          
            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_social02'>"));    
                                                                   
                                    $("#ali_comm").hide();
                                    $("#edu_comm").hide();
                                    $("#psych_comm").hide();
                                    $("#edu_comm").hide();
                                    $("#other_comm").hide();
                                    $("textarea[name=ass02_comm]").hide();
                                    $("#ass07_comm").hide();
                                    $("#ass12_comm").hide();
                                    $("#p05_comm").hide();
                                    
                                    $("input[type=radio][name=issue_ali]").click(function(){
                                        if($("input[type=radio][name=issue_ali]:checked").val()=='Y'){$("textarea#ali_comm").show();}else{$("textarea#ali_comm").hide();}
                                        });
                                    $("input[type=radio][name=issue_edu]").click(function(){
                                        if($("input[type=radio][name=issue_edu]:checked").val()=='Y'){$("textarea#edu_comm").show();}else{$("textarea#edu_comm").hide();}
                                        });
                                    $("input[type=radio][name=issue_other]").click(function(){
                                        if($("input[type=radio][name=issue_other]:checked").val()=='Y'){$("textarea#other_comm").show();}else{$("textarea#other_comm").hide();}
                                        }); 
                                    $("input[type=radio][name=assessment02]").click(function(){
                                        if($("input[type=radio][name=assessment02]:checked").val()=='Y'){$("textarea#ass02_comm").show();}else{$("textarea#ass02_comm").hide();}
                                        });
                                    $("input[type=radio][name=assessment07]").click(function(){
                                        if($("input[type=radio][name=assessment07]:checked").val()=='Y'){$("textarea#ass07_comm").show();}else{$("textarea#ass07_comm").hide();}
                                        });
                                    $("input[type=radio][name=assessment12]").click(function(){
                                        if($("input[type=radio][name=assessment12]:checked").val()=='Y'){$("textarea#ass12_comm").show();}else{$("textarea#ass12_comm").hide();}
                                        });
                                    $("input[type=radio][name=plan05]").click(function(){
                                        if($("input[type=radio][name=plan05]:checked").val()=='Y'){$("textarea#p05_comm").show();}else{$("textarea#p05_comm").hide();}
                                        });                      

        $("#frmsocial").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcSocialAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            console.log(settings)
            $.ajax(settings).done(function (result) {
                alert(result.messege);
                $("#body_text").empty();
                popup('../back/API/social02PDF.php?id='+result.id, popup, 450, 500);
                AssSocial02('#index_content',$.cookie('hn'));
            })
        }));

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
