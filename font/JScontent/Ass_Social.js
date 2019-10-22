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
                                    ,$("<textarea name='symptom' class='form-control' placeholder='อาการสำคัญ' required></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการทำร้ายตนเอง </label><div class='col-sm-1'><input type='radio' name='hurt_salf' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='hurt_salf' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='hurt_comm' id='hurt_comm' class='form-control' placeholder='รายละเอียดประวัติการทำร้ายตนเอง'></textarea>"));

            $("#Profile").append($("<div class='form-group row'><label class='col-sm-5 col-form-label'>ความผิดปรกติการตั้งครรค์/การคลอด </label><div class='col-sm-1'><input type='radio' name='spawn' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='spawn' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='spawn_comm' id='spawn_comm' class='form-control' placeholder='รายละเอียดการตั้งครรค์/การคลอด'></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ความผิดปรกติพัฒนาการในวัยเด็ก </label><div class='col-sm-1'><input type='radio' name='evolu' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='evolu' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='evolu_comm' id='evolu_comm' class='form-control' placeholder='รายละเอียดพัฒนาการในวัยเด็ก'></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการชัก </label><div class='col-sm-1'><input type='radio' name='twitch' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='twitch' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='twitch_comm' id='twitch_comm' class='form-control' placeholder='รายละเอียดประวัติการชัก'></textarea><hr>")
                                    ,$("<div class='form-group row'><div class='col-lg-5 col-md-5 col-sm-12'>ผลการศึกษา : <select name='educate' class='form-control select2' id='educate' required></select></div></div>")
                                    ,$("<textarea name='edu_comm' id='edu_comm' class='form-control' placeholder='รายละเอียดการศึกษา'></textarea><hr>")
                                    ,$("<label class='col-sm-5 col-form-label'>ด้านการประกอบอาชีพ/ความสัมพันธ์กับเพื่อนร่วมงาน </label><textarea name='career' class='form-control' placeholder='ด้านการประกอบอาชีพ/ความสัมพันธ์กับเพื่อนร่วมงาน' required></textarea><hr>")
                                    ,$("<label class='col-sm-5 col-form-label'>ด้านชีวิตสมรส/ความสัมพันธ์กับคู่สมรส และบุตร </label><textarea name='marry' class='form-control' placeholder='ด้านชีวิตสมรส/ความสัมพันธ์กับคู่สมรส และบุตร' required></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>ประวัติการใช้สารเสพติด </label><div class='col-sm-1'><input type='radio' name='addictive' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='addictive' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='addictive_comm' id='addictive_comm' class='form-control' placeholder='รายละเอียดประวัติการใช้สารเสพติด'></textarea><hr>")
                                    ,$("<label class='col-sm-12 col-form-label'>ประวัติครอบครัว(ประวัติที่เกี่ยวข้องกับบิดา-มารดา : อุปนิสัย อาชีพ ความสัมพันธ์ในครอบครัว ความสัมพันธ์ระหว่างพี่น้อง ความคาดหวังที่ญาติมีต่อผู้ป่วย) </label><textarea name='family' class='form-control' placeholder='รายละเอียดประวัติครอบครัว' required></textarea><hr>")
                                    ,$("<div class='row col-lg-3 col-md-3 col-sm-12'>ฐานะทางครอบครัว : <select name='spending' class='form-control select2' id='spending' required></select></div><p>")
                                    ,$("<textarea name='spend_comm' id='spend_comm' class='form-control' placeholder='รายละเอียดฐานะทางครอบครัว'></textarea><hr>"));
                                    
            $("#diagnose").append($("<div class='row col-lg-12 col-md-12 col-sm-12'>การวินิจฉัยปัญหาทางสังคม :  &nbsp;<input type='button' class='btn btn-success btn-sm' id='plus-btn' value='+ เพิ่มรายการ'>  &nbsp;<input type='button' class='btn btn-danger btn-sm' id='minus-btn' value='- ลบรายการ'><p>"
                                    +"<div class='container d-inline-block row' style='background-color: #eee;' id='item-Sdiag'></div></div><hr>")
                                    ,$("<div class='row col-lg-5 col-md-5 col-sm-12'>การให้ความช่วยเหลือ : <select name='help' class='form-control select2' id='help' required></select></div><p>")
                                    ,$("<textarea name='help_comm' class='form-control' placeholder='รายละเอียดการให้ความช่วยเหลือ'></textarea><hr>")
                                    ,$("<div class='form-group row'><label class='col-sm-5 col-form-label'>แหล่งสนับสนุนทางสังคม </label><div class='col-sm-1'><input type='radio' name='source' value='N'checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='source' value='Y' required> มี</div></div>")
                                    ,$("<textarea name='source_comm' class='form-control' placeholder='รายละเอียด' required></textarea>"));                        
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
                                    
                                    $("#spawn_comm").hide();
                                    $("#hurt_comm").hide();
                                    $("#evolu_comm").hide();
                                    $("#psych_comm").hide();
                                    $("#edu_comm").hide();
                                    $("#addictive_comm").hide();
                                    $("#spend_comm").hide();
                                    $("#twitch_comm").hide();
                                    $("textarea[name=help_comm]").hide();
                                    
                                    $("input[type=radio][name=spawn]").click(function(){
                                        if($("input[type=radio][name=spawn]:checked").val()=='Y'){$("textarea#spawn_comm").show();}else{$("textarea#spawn_comm").hide();}
                                        });
                                    $("input[type=radio][name=hurt_salf]").click(function(){
                                        if($("input[type=radio][name=hurt_salf]:checked").val()=='Y'){$("textarea#hurt_comm").show();}else{$("textarea#hurt_comm").hide();}
                                        });    
                                    $("input[type=radio][name=evolu]").click(function(){
                                        if($("input[type=radio][name=evolu]:checked").val()=='Y'){$("textarea#evolu_comm").show();}else{$("textarea#evolu_comm").hide();}
                                        });
                                        $("select[name=spending]").change(function(){
                                            $("textarea#spend_comm").show();
                                        });
                                    $("input[type=radio][name=addictive]").click(function(){
                                        if($("input[type=radio][name=addictive]:checked").val()=='Y'){$("textarea#addictive_comm").show();}else{$("textarea#addictive_comm").hide();}
                                        });
                                    $("select[name=educate]").change(function(){    
                                        $("textarea#edu_comm").show();
                                        });
                                    $("input[type=radio][name=twitch]").click(function(){
                                        if($("input[type=radio][name=twitch]:checked").val()=='Y'){$("textarea#twitch_comm").show();}else{$("textarea#twitch_comm").hide();}
                                        }); 
                                    $("select[name=help]").change(function(){
                                        $("textarea[name=help_comm]").show();
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
