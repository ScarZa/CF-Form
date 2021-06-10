function AssTGDS15(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบวัดความเศร้าในผู้สูงอายุ 15 ข้อ (TGDS-15)";
    $("nav#nav_bc").hide();
    $("span.card-title").empty().append(title);

        $("#contentGr").empty().append($("<form action='' name='frmDoc01' id='frmDoc01' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div id='P-data'></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
            +"</div></form>"));
            $.getJSON('../back/API/detail_DoctorpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
            $("#P-data").append($("<div class='row col-lg-4 col-md-4 col-sm-12'><label><b>ผู้ประเมิน : </b></lable><select name='recorder' class='form-control select2' id='recorder' required></select></div> &nbsp;")    
                                ,$("<div class='row col-lg-12 col-md-12 col-sm-12'><b>คำชี้แจง </b> ข้อคำถามต่อไปนี้เป็นการถาม<b>ความรู้สึกของท่านในช่วง 1 สัปดาห์ที่ผ่านมา</b></div>")
                                , $("<div class='card border-success'><div class='card-header'><b>หัวข้อ</b></div><div id='TGDS' class='card-body'>"
                                     +"</div></div><p></p>")
                                ,$("<div align='right'><b id='resQ'></b> <a class='btn btn-warning' id='processQ'>ประมวลผล</a></div>")                   

                                );
                                selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน',$.cookie("user"));
              $("#TGDS").empty();
              $.getJSON('../back/API/Q_TGDS_Data.php', function (data) {
                $.each(data, function (key, value) {
                  $("#TGDS").append("<div class='form-group row'><label class='col-sm-8 col-form-label'><b>" + value.tgds_id + ". " + value.tgds_q + "</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='tgdsq" + value.tgds_id + "' value='" + value.yes + "'checked required><span class='lbl'> ใช่</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='tgdsq" + value.tgds_id + "' value='" + value.no + "' required><span class='lbl'> ไม่ใช่</span></label></div></div>");
                })
                });
                                $("input[type=submit]").hide();
                                $("a#processQ").click(function(){
                                    var total=0;
                                    for(var i=1;i<=15;i++){
                    
                                        if(isNaN($("input[type=radio][name=tgdsq"+i+"]:checked").val())){
                                            alert("กรุณาเลือกคำตอบที่"+i+"ด้วยครับ!!!");
                                        $("input[type=radio][name=tgdsq"+i+"]").focus();
                                        }else{
                                            total += parseInt($("input[type=radio][name=tgdsq"+i+"]:checked").val());
                                        }
                                    }
                                     
                                        $("#cgi-post").append($("<input type='hidden' name='total' value='"+total+"'>"));

                                    
                                  if (total >= 6 && total <=10) {
                                    $("b#resQ").empty().append("ได้ " + total + " คะแนน / ผลที่ได้ : มีภาวะซึมเศร้า ควรติดตามหรือส่งพบแพทย์ประเมินอาการทางคลินิก");
                                    $("input[type=submit]").show();
                                  } else if (total >= 11) {
                                    $("b#resQ").empty().append("ได้ " + total + " คะแนน / ผลที่ได้ : มีภาวะซึมเศร้าแน่นอน ควรพบจิตแพทย์");
                                    $("input[type=submit]").show();
                                  }else {
                                    $("b#resQ").empty().append("ได้ " + total + " คะแนน / ผลที่ได้ : ไม่มีภาวะซึมเศร้า");
                                    $("input[type=submit]").show();
                                  }
                                
                                    }); 

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_TGDS'>"));



            //$("#nav-general-tab").on('onclick', (function (e) { e.preventDefault();  
                //AssDocGeneral("#nav-general");
                
            //}))
                               
        $("#frmDoc01").on('submit', (function (e) {
            e.preventDefault();
            // if($("#dep_send").val() == $("#dep_res").val()){
            //     alert("หน่วยงานที่ส่งและหน่วยงานที่รับซ้ำกันครับ กรุณาตรวจสอบด้วย !!!!");
            // }else{
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcTGDSAPI.php",
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
               // AssMENU('#index_content');$('div#SW').hide();
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
