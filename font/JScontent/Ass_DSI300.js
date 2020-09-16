function AssDSI300(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินและแนวทางการฝึกทักษะเด็กอายุแรกเกิด –5 ปี : DSI300";
    $("nav#nav_bc").hide();
    $("span.card-title").empty().append(title);

        $("#contentGr").empty().append($("<form action='' name='frmDoc01' id='frmDoc01' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div id='P-data'></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
          + "</div></form>"));
  $("#P-data").append($("<div class='row col-lg-4 col-md-4 col-sm-12'><label><b>ช่วงอายุ : </b></lable><select name='agegroup' class='form-control select2' id='agegroup' required></select></div><div id='Q-dsi'></div>")
  );
   selectMash('#agegroup', 'agegroup_Data.php', 'เลือกช่วงอายุ');
  $("#agegroup").change(function () {
    $.getJSON('../back/API/DSI300_Data.php', { data: $("#agegroup").val() }, function (data) { 
      $("#Q-dsi").empty();
      $.each(data, function (i, item) {
        $("#Q-dsi").append($("<div class='card border-success'><div class='card-header'><b>" + item.skg_detail + " ( " + item.skg_name + " )" + "</b></div><div id='body"+i+"' class='card-body'></div></div><p></p>"));
        for (var ii = 0; ii <= 11;ii++) {
            $("#body" + i).append("<div class='form-group row'><label class='col-sm-6 col-form-label'><b>" + (ii + 1) + ". " + item[ii].dsi_name + " </b></label>"
                + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='Qdsi" + i + ii + "' value='1' checked required><span class='lbl'> ทำได้</span></label></div>"
                + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='Qdsi" + i + ii + "' value='0' required><span class='lbl'> ต้องช่วยเหลือ</span></label></div>"
                + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='Qdsi" + i + ii + "' value='-1' required><span class='lbl'> ทำไม่ได้</span></label></div></div> ");
        }
          $("#body" + i).append("<div class='row'><div class='col-lg-11' id='result_ass" + i + "' style='text-align:right ;color:red;'></div><a class='col-lg-1 btn btn-warning' id='processQ" + i + "'>ประมวลผล</a></div>");
          $("a#processQ" + i).click(function () {
            var total=0;
              for (var iii = 0; iii <= 11; iii++) {
                  total += parseInt($("input[type=radio][name=Qdsi" + i + iii + "]:checked").val());
                  
              } 
              var age_year = Math.floor((parseInt(item.ag_month) + total) / 12)
              var age_month = (parseInt(item.ag_month) + total) % 12
              $("#result_ass" + i).empty().append("อายุพัฒนาการด้าน "+item.skg_detail + " ( " + item.skg_name + " ) : <b>"+age_year+" ปี "+age_month+" เดือน</b>")
        });
      });
        
      $("input[type=submit]").hide();
      
    });
  });
    
            $.getJSON('../back/API/detail_DoctorpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {

                                                                            
                                $("#Q41").hide();
                                $("#Q42").hide(); 

                                $("input[type=radio][name=atten_chk]").click(function(){
                                    if($("input[type=radio][name=atten_chk]:checked").val()=='1'){$("#Q41").show();$("#Q42").hide();}else{$("#Q42").show();$("#Q41").hide();}
                                    });

                                $("input[type=submit]").hide();
                                $("a#processQ").click(function(){
                                    var total=0;
                                    for(var i=1;i<=30;i++){
                    
                                        if(isNaN($("input[type=radio][name=Q"+i+"]:checked").val())){
                                            alert("กรุณาเลือกคำตอบที่"+i+"ด้วยครับ!!!");
                                        $("input[type=radio][name=Q"+i+"]").focus();
                                        }else{
                                            total += parseInt($("input[type=radio][name=Q"+i+"]:checked").val());
                                        }
                                    }
                                     
                                        $("#cgi-post").append($("<input type='hidden' name='total' value='"+total+"'>"));

                                    if($("select#education").val()=='0'){
                                        if(total >= 15){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ไม่พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }else{
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }
                                    }else if($("select#education").val()=='1'){
                                        if(total >= 18){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ไม่พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }else{
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }
                                    }else if($("select#education").val()=='2'){
                                        if(total >= 23){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ไม่พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }else{
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }
                                    }else{
                                        alert('กรุณาเลือกระดับการศึกษาด้วยครับ!!!!')
                                    }
                                
                                    }); 

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_MMSE'>"));



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
                url: "../back/API/prcMMSEAPI.php",
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
