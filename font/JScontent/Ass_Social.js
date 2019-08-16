function AssSocial(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบการวินิจฉัยทางสังคมแบบผู้ป่วยนอก (สำหรับผู้ป่วยจิตเวชทั่วไป)";
    $("li#page").empty().text(title)
    $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
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
            + "<div id='diagnose' class='card-body'></div></div>"
            + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $("#treat").append($("<div class='col-lg-12 row'><div class='row col-lg-6'><input type='text' name='contributor' class='form-control' placeholder='ผู้ให้ประวัติ' required></div> <div class='col-lg-6'> <input type='text' name='relevance' class='form-control' placeholder='เกี่ยวข้องเป็น' required></div></div><p>")
                                    ,$("<input type='text' name='symptom' class='form-control' placeholder='อาการสำคัญ' required><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการเจ็บป่วยทางจิตเวชและการรับการรักษา </label><div class='col-sm-1'><input type='radio' name='psych_history' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='psych_history' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='psych_comm' id='psych_comm' class='form-control' placeholder='รายละเอียดประวัติการเจ็บป่วยทางจิตเวชและการรับการรักษา'><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการทำร้ายตนเอง </label><div class='col-sm-1'><input type='radio' name='hurt_salf' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='hurt_salf' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='hurt_comm' id='hurt_comm' class='form-control' placeholder='รายละเอียดประวัติการทำร้ายตนเอง'>"));

            $("#Profile").append($("<div class='form-group row'><label class='col-sm-5 col-form-label'>พัฒนาการในวัยเด็ก </label><div class='col-sm-1'><input type='radio' name='evolu' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='evolu' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='evolu_comm' id='evolu_comm' class='form-control' placeholder='รายละเอียดพัฒนาการในวัยเด็ก'><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการชัก </label><div class='col-sm-1'><input type='radio' name='twitch' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='twitch' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='twitch_comm' id='twitch_comm' class='form-control' placeholder='รายละเอียดประวัติการชัก'><hr>")
                                    ,$("<div class='row col-lg-5 col-md-5 col-sm-12'>ผลการศึกษา : <select name='educate' class='form-control select2' id='educate' required></select></div> &nbsp;")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการสอบตกซ้ำชั้น </label><div class='col-sm-1'><input type='radio' name='fall' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='fall' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='fall_comm' id='fall_comm' class='form-control' placeholder='รายละเอียดประวัติการสอบตกซ้ำชั้น'><hr>")
                                    ,$("<label class='col-sm-5 col-form-label'>ด้านการประกอบอาชีพ/ความสัมพันธ์กับเพื่อนร่วมงาน </label><input type='text' name='career' class='form-control' placeholder='ด้านการประกอบอาชีพ/ความสัมพันธ์กับเพื่อนร่วมงาน' required><hr>")
                                    ,$("<label class='col-sm-5 col-form-label'>ด้านชีวิตสมรส/ความสัมพันธ์กับคู่สมรส และบุตร </label><input type='text' name='marry' class='form-control' placeholder='ด้านชีวิตสมรส/ความสัมพันธ์กับคู่สมรส และบุตร' required><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการใช้สารเสพติด </label><div class='col-sm-1'><input type='radio' name='addictive' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='addictive' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='addictive_comm' id='addictive_comm' class='form-control' placeholder='รายละเอียดประวัติการใช้สารเสพติด'><hr>")
                                    ,$("<label class='col-sm-12 col-form-label'>รายละเอียดด้านอุบัติเหตุ/การผ่าตัด/การถูกทำร้ายร่างกาย </label><input type='text' name='accident' class='form-control' placeholder='รายละเอียดด้านอุบัติเหตุ/การผ่าตัด/การถูกทำร้ายร่างกาย' required><hr>")
                                    ,$("<label class='col-sm-5 col-form-label'>รายละเอียดประวัติการเจ็บป่วยด้วยโรคทางกาย </label><input type='text' name='sick' class='form-control' placeholder='รายละเอียดประวัติการเจ็บป่วยด้วยโรคทางกาย' required><hr>")
                                    ,$("<label class='col-sm-5 col-form-label'>รายละเอียดบุคลิกภาพ/อุปนิสัย </label><input type='text' name='habit' class='form-control' placeholder='รายละเอียดบุคลิกภาพ/อุปนิสัย' required><hr>")
                                    ,$("<label class='col-sm-12 col-form-label'>ประวัติครอบครัว(ประวัติที่เกี่ยวข้องกับบิดา-มารดา : อุปนิสัย อาชีพ ความสัมพันธ์ในครอบครัว ความสัมพันธ์ระหว่างพี่น้อง ความคาดหวังที่ญาติมีต่อผู้ป่วย) </label><input type='text' name='family' class='form-control' placeholder='รายละเอียดประวัติครอบครัว' required><hr>")
                                    ,$("<div class='row col-lg-3 col-md-3 col-sm-12'>ฐานะทางครอบครัว : <select name='spending' class='form-control select2' id='spending' required></select></div><p>")
                                    ,$("<input type='text' name='spend_comm' id='spend_comm' class='form-control' placeholder='รายละเอียดฐานะทางครอบครัว'><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-10 col-form-label'>ประวัติทางกรรมพันธุ์ (หากมีคนในครอบครัวเจ็บป่วยด้วยโรคทางจิต มีผลกระทบต่อครอบครัวอย่างไร และความสัมพันธ์ระหว่างบุคคลที่ป่วยกับผู้ป่วยเป็นอย่างไร </label><div class='col-sm-1'><input type='radio' name='congenital' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='congenital' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='conge_comm' id='conge_comm' class='form-control' placeholder='รายละเอียดประวัติทางกรรมพันธุ์'>"));     
                                    
            $("#diagnose").append($("<div class='row col-lg-12 col-md-12 col-sm-12'>การวินิจฉัยปัญหาทางสังคม :  &nbsp;<input type='button' class='btn btn-success btn-sm' id='plus-btn' value='+ เพิ่มรายการ'>  &nbsp;<input type='button' class='btn btn-danger btn-sm' id='minus-btn' value='- ลบรายการ'><p>"
                                    +"<div class='container d-inline-block row' style='background-color: #eee;' id='item-Sdiag'></div></div><hr>")
                                    ,$("<div class='row col-lg-5 col-md-5 col-sm-12'>การให้ความช่วยเหลือ : <select name='help' class='form-control select2' id='help' required></select></div><p>")
                                    ,$("<input type='text' name='help_comm' class='form-control' placeholder='รายละเอียดการให้ความช่วยเหลือ'><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>แหล่งสนับสนุนทางสังคม </label><div class='col-sm-1'><input type='radio' name='source' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='source' value='Y' required> มี</div></div>")
                                    ,$("<input type='text' name='source_comm' class='form-control' placeholder='รายละเอียด' required>"));                        
            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_social'>"));    
                                
                                selectMash("#educate","educate_Data.php","เลือกวุฒิการศึกษา");
                                selectMash("#help","help_Data.php","เลือกการให้ความช่วยเหลือ");

                               var option="<option value=''> เลือกฐานะทางครอบครัว </option>";
                               option += "<option value='0'> ยากจน </option><option value='1'> ปานกลาง </option><option value='2'> ร่ำรวย </option>";
                                       $("select#spending").empty().append(option);
                                       $(".select2").select2();

                                       var i=0;
                                       if(i==0){ $('#minus-btn').hide(); }//else{$('#minus-btn').show()}
                            $('#plus-btn').click(function () {
                                i++;
                                    if(i<=5){
                                        $("#item-Sdiag").append("<select name='Sdiag_"+i+"' id='Sdiag_"+i+"' class='form-control select2' id='educate' required></select></div>&nbsp;")
                                        //console.log("#Sdiag_"+i);
                                        selectMash("#Sdiag_"+i,"Sdiag_Data.php","เลือกผลวินิจฉัยทางสังคม");
                                    }
                                        if(i!=0){$('#minus-btn').show();}
                                       });
                            $('#minus-btn').click(function () {
                                        if(i==1){ $('#minus-btn').hide();}//$("#IMsubmit").hide(); }//else{$('#minus-btn').show()}
                                        //$("select#Sdiag_"+i).remove();
                                        $("div#item-Sdiag >select:last").select2('destroy').remove();
                                        $('#plus-btn').show();
                                       
                                        i--;
                                    }); 
                                    
                                    $("#hurt_comm").hide();
                                    $("#evolu_comm").hide();
                                    $("#psych_comm").hide();
                                    $("#fall_comm").hide();
                                    $("#addictive_comm").hide();
                                    $("#spend_comm").hide();
                                    $("#conge_comm").hide();
                                    $("#twitch_comm").hide();
                                    $("input[type=text][name=help_comm]").hide();
                                    
                                    $("input[type=radio][name=psych_history]").click(function(){
                                        if($("input[type=radio][name=psych_history]:checked").val()=='Y'){$("input#psych_comm").show();}else{$("input#psych_comm").hide();}
                                        });
                                    $("input[type=radio][name=hurt_salf]").click(function(){
                                        if($("input[type=radio][name=hurt_salf]:checked").val()=='Y'){$("input#hurt_comm").show();}else{$("input#hurt_comm").hide();}
                                        });    
                                    $("input[type=radio][name=evolu]").click(function(){
                                        if($("input[type=radio][name=evolu]:checked").val()=='Y'){$("input#evolu_comm").show();}else{$("input#evolu_comm").hide();}
                                        });
                                    $("input[type=radio][name=fall]").click(function(){
                                        if($("input[type=radio][name=fall]:checked").val()=='Y'){$("input#fall_comm").show();}else{$("input#fall_comm").hide();}
                                        });
                                    $("input[type=radio][name=addictive]").click(function(){
                                        if($("input[type=radio][name=addictive]:checked").val()=='Y'){$("input#addictive_comm").show();}else{$("input#addictive_comm").hide();}
                                        });
                                    $("select[name=spending]").change(function(){    
                                        $("input#spend_comm").show();
                                        });
                                    $("input[type=radio][name=congenital]").click(function(){
                                        if($("input[type=radio][name=congenital]:checked").val()=='Y'){$("input#conge_comm").show();}else{$("input#conge_comm").hide();}
                                        }); 
                                    $("input[type=radio][name=twitch]").click(function(){
                                        if($("input[type=radio][name=twitch]:checked").val()=='Y'){$("input#twitch_comm").show();}else{$("input#twitch_comm").hide();}
                                        }); 
                                    $("select[name=help]").change(function(){
                                        $("input[type=text][name=help_comm]").show();
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
                popup('../back/API/socialPDF.php?id='+result.id, popup, 450, 500);
                AssSocial('#index_content',$.cookie('hn'));
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
