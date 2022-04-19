function AssSAVE(content, id = null,url = '../back/API/') {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินความเสี่ยงทางคลินิก (SAVE)";
    $("nav#nav_bc").hide();
    $("span.card-title").empty().append(title);

    $("#contentGr").empty().append($("<form action='' name='frmSAVE' id='frmSAVE' method='post' enctype='multipart/form-data'>"
        + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
        + "<div id='P-data'></div><p>"
        + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
        + "</div></form>"));
    $("#P-data").append($("<div class='row'><div class='col-lg-12 col-md-12 col-sm-12'><b id='latest' style='color:red'></b></div></div>")
        ,$("<div class='row col-lg-4 col-md-4 col-sm-12'><label><b>กระบวนการ : </b></lable><select name='place' class='form-control select2' id='place' required></select></div><div id='Q-save'></div>")
    );
    if ($.cookie("process") != 'ER'){
    $.getJSON(url + 'last_SAVE.php', { data: $.cookie("vn") }, function (data) { 
        $("#latest").append("ประเมินล่าสุดวันที่ "+data.recdate+" เวลา "+data.rectime+"<br>โดย "+data.name+" กระบวนการ <u>"+data.ps_name+"</u>")
    });
}
    var process='';
    if ($.cookie("process") == 'ER') { process = 1; }
    else if ($.cookie("process") == 'FR') { process = 2; }
    else if ($.cookie("process") == 'IPD') { process = 3; }
    selectMash('#place', 'placeSave_Data.php', 'เลือกกระบวนการ',process);
    $("input[type=submit]").hide();
   
    if (process != '') {
        //if (process == 2) {
            $("#Q-save").empty();
            FormSAVE('#Q-save', id = process,url)
        //} else {
            //FormSAVE(content, id = null,url)
        //}
        
    // } else {
    //     FormSAVE(content, id = null,url)
     }
    $("#place").change(function () {
        if ($("#place").val() == 1) { $.cookie("process",'ER'); }
        else if ($("#place").val() == 2) { $.cookie("process",'FR'); }
        else if ($("#place").val() == 3) { $.cookie("process",'IPD'); }
    $("#Q-save").empty();
    FormSAVE('#Q-save', id = $("#place").val(),url )
     });

     $("#cgi-post").append($("<input type='hidden' name='hn' value='" + $.cookie("hn") + "'>")
     , $("<input type='hidden' name='vn' value='" + $.cookie("vn") + "'>")
     , $("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
     , $("<input type='hidden' name='user' value='" + $.cookie("user") + "'>")
     , $("<input type='hidden' name='process' value='" + $.cookie("process") + "'>")
     , $("<input type='hidden' name='method' value='add_SAVE'>"));
    
     $("#frmSAVE").on('submit', (function (e) {
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
            url: url+"prcSAVEAPI.php",
            async: true,
            crossDomain: true,
            data: dataForm,
            contentType: false,
            cache: false,
            processData: false
        }
        console.log(settings);
        $('#index_content').empty().append("<center><img src='images/waiting.gif'></center>");
        $.ajax(settings).done(function (result) {
            alert(result.messege);
            $('#index_content').empty();
            // AssMENU('#index_content');$('div#SW').hide();
        });
        //}
    }));

}
function FormSAVE(content, id = null, url = '../back/API/') {
    $(content).append($("<div class='card border-success'><div class='card-header'><b>แบบประเมินฆ่าตัวตาย (S : Suicide)</b></div><div class='card-body'>"
        + "<div class='col-lg-12'><b>มีแนวโน้มจะทำร้ายตัวเองจากอาการทางจิต </b><div id='s1'></div></div>"
        + "<div id='group1'><div class='col-lg-12'><div class='form-group row'><label class='col-sm-6 col-form-label'><b>ตลอดชีวิตที่ผ่านมา เคยพยายามฆ่าตัวตาย </b></label>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s2' value='1' required><span class='lbl'> มี</span></label></div>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s2' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div></div>"
        + "<div class='col-lg-12'><div class='form-group row'><label class='col-sm-6 col-form-label'><b>ใน 6 เดือนที่ผ่านมา มีการสูญเสียที่สำคัญ เช่น บุคคลใกล้ชิด/หน้าที่การงาน/อวัยวะ </b></label>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s3' value='1' required><span class='lbl'> มี</span></label></div>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s3' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div></div>"
        + "<div class='col-lg-12'><div class='form-group'><textarea name='s3_text' id='s3_text' class='form-control' placeholder='ระบุรายละเอียด'></textarea></div></div>"
        + "<div class='col-lg-12'><b>ใน 1 เดือนที่ผ่านมา </b><div id='s4'></div></div></div>"
        + "<div id='group2'><div class='col-lg-12'><b>ใน 1 สัปดาห์ที่ผ่านมา </b><div id='s5'></div></div></div>"
        + "<div class='row'><div class='col-lg-11' id='result_suicide' style='text-align:right ;color:red;'></div><a class='col-lg-1 btn btn-warning' id='processS'>ประมวลผล</a></div>"
        + "</div></div> <p></p>"
        +"<div class='card border-success'><div class='card-header'><b>แบบประเมินอุบัติเหตุ (A : Accident)</b></div><div class='card-body'>"
        + "<div class='col-lg-12'><b>การทรงตัวไม่ดี </b><div id='a1'></div></div>"
        + "<div class='col-lg-12'><b>มีแนวโน้มที่จะได้รับอุบัติเหตุจากโรคร่วม/ภาวะทางกาย </b><div id='a2'></div></div>"
        + "<div class='row'><div class='col-lg-11' id='result_accident' style='text-align:right ;color:red;'></div><a class='col-lg-1 btn btn-warning' id='processA'>ประมวลผล</a></div>"
        + "</div></div> <p></p>"
        +"<div class='card border-success'><div class='card-header'><b>แบบประเมินพฤติกรรมรุนแรง (V : Violence)</b></div><div class='card-body'>"
        + "<div class='col-lg-12'><div class='form-group row'><label class='col-sm-7 col-form-label'><b>ใน 2 สัปดาห์ที่ผ่านมา มีประวัติพกพาอาวุธ/ทำลายของ/ทำร้ายร่างกายผู้อื่น </b></label>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v1' value='1' required><span class='lbl'> มี</span></label></div>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v1' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div></div>"
        + "<div class='col-lg-12'><b>ใน 2 สัปดาห์ที่ผ่านมามีแนวโน้มที่จะเกิดพฤติกรรมรุนแรงจากอาการทางจิต </b><div id='v2'></div></div>"
        + "<div class='col-lg-12'><b>พฤติกรรมก้าวร้าวรุนแรงต่อตนเอง </b><div id='v3'></div></div>"
        + "<div class='col-lg-12'><b>พฤติกรรมก้าวร้าวรุนแรงต่อผู้อื่นทั้งทางคำพูดและการแสดงออก </b><div id='v4'></div></div>"
        + "<div class='col-lg-12'><b>พฤติกรรมก้าวร้าวรุนแรงต่อทรัพย์สิน </b><div id='v5'></div></div>"
        + "<div class='row'><div class='col-lg-11' id='result_violence' style='text-align:right ;color:red;'></div><a class='col-lg-1 btn btn-warning' id='processV'>ประมวลผล</a></div>"
        + "</div></div> <p></p>"
        +"<div class='card border-success'><div class='card-header'><b>แบบประเมินหลบหนี (E : Escape)</b></div><div class='card-body'>"
        + "<div class='col-lg-12'><div class='form-group row'><label class='col-sm-7 col-form-label'><b>มีประวัติพยายามหลบหนีปฏิเสธการเจ็บป่วย ไม่อยากอยู่ รพ. </b></label>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e1' value='1' required><span class='lbl'> มี</span></label></div>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e1' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div></div>"
        + "<div class='col-lg-12'><div class='form-group row'><label class='col-sm-7 col-form-label'><b>มีประวัติติดสุรา/ยา/สารเสพติด </b></label>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e2' value='1' required><span class='lbl'> มี</span></label></div>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e2' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div></div>"
        + "<div class='col-lg-12'><div class='form-group row'><label class='col-sm-7 col-form-label'><b>วิตกกังวลเกี่ยวกับภารกิจส่วนตัวที่ต้องจัดการด้วยตัวเอง หรือมีภาระรับผิดชอบครอบครับ รบเร้าให้ติดต่อญาติรับกลับบ้าน ขอออกนอกตึกบ่อย ๆ </b></label>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e3' value='1' required><span class='lbl'> มี</span></label></div>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e3' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div></div>"
        + "<div class='col-lg-12'><div class='form-group row'><label class='col-sm-7 col-form-label'><b style='color:red;'>มีพฤติกรรมพยายามหลบหนี * </b></label>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e4' value='1' required><span class='lbl'> มี</span></label></div>"
        + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e4' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div></div>"
        + "<div class='col-lg-12'><b>มีแนวโน้มที่จะหลบหนี </b><div id='e5'></div></div>"
        + "<div class='row'><div class='col-lg-11' id='result_escape' style='text-align:right ;color:red;'></div><a class='col-lg-1 btn btn-warning' id='processE'>ประมวลผล</a></div>"
        + "</div></div> <p></p>"));
    
    
      if ($("#place").val() == 3 || id == 3) { $("#group2").show(); $("#group1").hide(); } else { $("#group2").hide(); $("#group1").show(); }
      $("#s3_text").hide();
      $("input[type=radio][name=s3]").click(function(){
        if($("input[type=radio][name=s3]:checked").val()=='1'){$("textarea#s3_text").show();}else{$("textarea#s3_text").hide();}
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 1 }, function (data) { 
      for (var i = 0; i < data.length; i++) { var ii = i + 1;
        $("#s1").append("<div class='form-group row'><label id='ls1_"+i+"' class='col-sm-6 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
            + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s1_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
            + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s1_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
          if(data[i].save_focus==1){$("#ls1_"+i).attr("style","color:red")}
    }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 4 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#s4").append(" <div class='form-group row'><label id='ls4_"+i+"' class='col-sm-6 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s4_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s4_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#ls4_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 5 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#s5").append(" <div class='form-group row'><label id='ls5_"+i+"' class='col-sm-6 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s5_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='s5_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#ls5_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 6 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#a1").append(" <div class='form-group row'><label id='la1_"+i+"' class='col-sm-7 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='a1_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='a1_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#la1_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 7 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#a2").append(" <div class='form-group row'><label id='la2_"+i+"' class='col-sm-7 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='a2_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='a2_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              //if(data[i].save_focus==1){$("#ls5_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 9 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#v2").append(" <div class='form-group row'><label id='lv2_"+i+"' class='col-sm-7 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v2_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v2_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#lv2_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 10 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#v3").append(" <div class='form-group row'><label id='lv3_"+i+"' class='col-sm-7 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v3_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v3_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#lv3_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 11 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#v4").append(" <div class='form-group row'><label id='lv4_"+i+"' class='col-sm-7 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v4_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v4_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#lv4_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 12 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#v5").append(" <div class='form-group row'><label id='lv5_"+i+"' class='col-sm-7 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v5_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='v5_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#lv5_"+i).attr("style","color:red")}
      }
    });
    $.getJSON(url + 'SAVE_Data.php', { data: 17 }, function (data) { 
        for (var i = 0; i < data.length; i++) { var ii = i + 1;
          $("#e5").append(" <div class='form-group row'><label id='le5_"+i+"' class='col-sm-7 col-form-label'>&nbsp;&nbsp;&nbsp;&nbsp; " + data[i].save_name + "</label>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e5_" + ii + "' value='1' required><span class='lbl'> มี</span></label></div>"
              + "<div class= 'col-sm-2' > <label><input class='ace' type='radio' name='e5_" + ii + "' value='0' checked required><span class='lbl'> ไม่มี</span></label></div></div>");
              if(data[i].save_focus==1){$("#le5_"+i).attr("style","color:red")}
      }
    });
    
    if (id == 2) {
        console.log(id)
        $.getJSON(url + 'detail_SAVE.php', { data: $.cookie("vn") }, function (data) { console.log(data)
            
            if (data[0].s1_1 == '1') {
                $("input[type=radio][name=s1_1][value='1']").attr("checked", "checked");
            }
            if (data[0].s1_2 == '1') {
                $("input[type=radio][name=s1_2][value='1']").attr("checked", "checked");
            }
            if (data[0].s1_3 == '1') {
                $("input[type=radio][name=s1_3][value='1']").attr("checked", "checked");
            }
            if (data[0].s1_4 == '1') {
                $("input[type=radio][name=s1_4][value='1']").attr("checked", "checked");
            }
            if (data[0].s2 == '1') {
                $("input[type=radio][name=s2][value='1']").attr("checked", "checked");
            }
            if (data[0].s3 == '1') {
                $("input[type=radio][name=s3][value='1']").attr("checked", "checked");
                $("textarea#s3_text").show();
                $("textarea#s3_text").val(data[0].s3_text);
            }
            if (data[0].s4_1 == '1') {
                $("input[type=radio][name=s4_1][value='1']").attr("checked", "checked");
            }
            if (data[0].s4_2 == '1') {
                $("input[type=radio][name=s4_2][value='1']").attr("checked", "checked");
            }
            if (data[0].s4_3 == '1') {
                $("input[type=radio][name=s4_3][value='1']").attr("checked", "checked");
            }
            if (data[0].s5_1 == '1') {
                $("input[type=radio][name=s5_1][value='1']").attr("checked", "checked");
            }
            if (data[0].s5_2 == '1') {
                $("input[type=radio][name=s5_2][value='1']").attr("checked", "checked");
            }
            if (data[0].s5_3 == '1') {
                $("input[type=radio][name=s5_3][value='1']").attr("checked", "checked");
            }
            if (data[0].a1_1 == '1') {
                $("input[type=radio][name=a1_1][value='1']").attr("checked", "checked");
            }
            if (data[0].a1_2 == '1') {
                $("input[type=radio][name=a1_2][value='1']").attr("checked", "checked");
            }
            if (data[0].a1_3 == '1') {
                $("input[type=radio][name=a1_3][value='1']").attr("checked", "checked");
            }
            if (data[0].a1_4 == '1') {
                $("input[type=radio][name=a1_4][value='1']").attr("checked", "checked");
            }
            if (data[0].a2_1 == '1') {
                $("input[type=radio][name=a2_1][value='1']").attr("checked", "checked");
            }
            if (data[0].a2_2 == '1') {
                $("input[type=radio][name=a2_2][value='1']").attr("checked", "checked");
            }
            if (data[0].a2_3 == '1') {
                $("input[type=radio][name=a2_3][value='1']").attr("checked", "checked");
            }
            if (data[0].a2_4 == '1') {
                $("input[type=radio][name=a2_4][value='1']").attr("checked", "checked");
            }
            if (data[0].a2_5 == '1') {
                $("input[type=radio][name=a2_5][value='1']").attr("checked", "checked");
            }
            if (data[0].v1 == '1') {
                $("input[type=radio][name=v1][value='1']").attr("checked", "checked");
            }
            if (data[0].v2_1 == '1') {
                $("input[type=radio][name=v2_1][value='1']").attr("checked", "checked");
            }
            if (data[0].v2_2 == '1') {
                $("input[type=radio][name=v2_2][value='1']").attr("checked", "checked");
            }
            if (data[0].v2_3 == '1') {
                $("input[type=radio][name=v2_3][value='1']").attr("checked", "checked");
            }
            if (data[0].v3_1 == '1') {
                $("input[type=radio][name=v3_1][value='1']").attr("checked", "checked");
            }
            if (data[0].v3_2 == '1') {
                $("input[type=radio][name=v3_2][value='1']").attr("checked", "checked");
            }
            if (data[0].v4_1 == '1') {
                $("input[type=radio][name=v4_1][value='1']").attr("checked", "checked");
            }
            if (data[0].v4_2 == '1') {
                $("input[type=radio][name=v4_2][value='1']").attr("checked", "checked");
            }
            if (data[0].v4_3 == '1') {
                $("input[type=radio][name=v4_3][value='1']").attr("checked", "checked");
            }
            if (data[0].v5_1 == '1') {
                $("input[type=radio][name=v5_1][value='1']").attr("checked", "checked");
            }
            if (data[0].v5_2 == '1') {
                $("input[type=radio][name=v5_2][value='1']").attr("checked", "checked");
            }
            if (data[0].v5_3 == '1') {
                $("input[type=radio][name=v5_3][value='1']").attr("checked", "checked");
            }
            if (data[0].e1 == '1') {
                $("input[type=radio][name=e1][value='1']").attr("checked", "checked");
            }
            if (data[0].e2 == '1') {
                $("input[type=radio][name=e2][value='1']").attr("checked", "checked");
            }
            if (data[0].e3 == '1') {
                $("input[type=radio][name=e3][value='1']").attr("checked", "checked");
            }
            if (data[0].e4 == '1') {
                $("input[type=radio][name=e4][value='1']").attr("checked", "checked");
            }
            if (data[0].e5_1 == '1') {
                $("input[type=radio][name=e5_1][value='1']").attr("checked", "checked");
            }
            if (data[0].e5_2 == '1') {
                $("input[type=radio][name=e5_2][value='1']").attr("checked", "checked");
            }
            if (data[0].e5_3 == '1') {
                $("input[type=radio][name=e5_3][value='1']").attr("checked", "checked");
            }
            if (data[0].e5_4 == '1') {
                $("input[type=radio][name=e5_4][value='1']").attr("checked", "checked");
            }
            
        });
    }
    
    let process_chk = [0, 0, 0, 0];
    $("a#processS").click(function () {
        var totals = 0;
        for (var iii = 1; iii <= 4; iii++) {
            totals += parseInt($("input[type=radio][name=s1_" + iii + "]:checked").val());
        }
        totals += parseInt($("input[type=radio][name=s2]:checked").val());
        totals += parseInt($("input[type=radio][name=s3]:checked").val());
        for (var iii = 1; iii <= 3; iii++) {
            totals += parseInt($("input[type=radio][name=s4_" + iii + "]:checked").val());
        }
        for (var iii = 1; iii <= 3; iii++) {
            totals += parseInt($("input[type=radio][name=s5_" + iii + "]:checked").val());
        }
        
        var result;
        var resS;
        var min;
        var mid;
        var max;
        if ($("#place").val() == 3){ min = 2; mid = 3; max = 5;}else{ min = 3; mid = 4; max = 6;}
        if ($("input[type=radio][name=s1_1]:checked").val() == 1 || $("input[type=radio][name=s5_3]:checked").val() == 1 || $("input[type=radio][name=s4_3]:checked").val() == 1) { result = 'สูง : เนื่องจากเลือกข้อที่เน้น'; resS = 3;}
        else if (totals <= min) { result = 'ต่ำ'; resS = 1;}
        else if (totals >= mid & totals <= max) { result = 'ปานกลาง'; resS = 2;}
        else if (totals > max) { result = 'สูง'; resS = 3;}
        
        $("#result_suicide").empty().append("คะแนน : " + totals + " ( ผลประเมิน = " + result + " )</b>");
        $("#cgi-post").append($("<input type='hidden' name='totals' value='" + totals + "'>")
                                ,$("<input type='hidden' name='sresult' value='" + resS + "'>"));
        process_chk[0] = 1;
        
    if (process_chk[0] + process_chk[1] + process_chk[2] + process_chk[3]  == 4) {
        $("input[type=submit]").show();
    }
    });
    $("a#processA").click(function () {
        var totala = 0;
        for (var iii = 1; iii <= 4; iii++) {
            totala += parseInt($("input[type=radio][name=a1_" + iii + "]:checked").val());
        }
        for (var iii = 1; iii <= 5; iii++) {
            totala += parseInt($("input[type=radio][name=a2_" + iii + "]:checked").val());
        }
        
        var result;
        var resA;
        var min=3;
        var mid=4;
        var max=6;
        if ($("input[type=radio][name=a1_4]:checked").val() == 1) { result = 'สูง : เนื่องจากเลือกข้อที่เน้น'; resA = 3;}
        else if (totala <= min) { result = 'ต่ำ'; resA = 1;}
        else if (totala >= mid & totala <= max) { result = 'ปานกลาง'; resA = 2;}
        else if (totala > max) { result = 'สูง'; resA = 3;}
        
        $("#result_accident").empty().append("คะแนน : " + totala + " ( ผลประเมิน = " + result + " )</b>");
        $("#cgi-post").append($("<input type='hidden' name='totala' value='" + totala + "'>")
                                ,$("<input type='hidden' name='aresult' value='" + resA + "'>"));
        process_chk[1] = 1;
        
    if (process_chk[0] + process_chk[1] + process_chk[2] + process_chk[3]  == 4) {
        $("input[type=submit]").show();
    }
    });
    $("a#processV").click(function () {
        var totalv = 0;
        totalv += parseInt($("input[type=radio][name=v1]:checked").val());
        for (var iii = 1; iii <= 3; iii++) {
            totalv += parseInt($("input[type=radio][name=v2_" + iii + "]:checked").val());
        }
       for (var iii = 1; iii <= 2; iii++) {
            totalv += parseInt($("input[type=radio][name=v3_" + iii + "]:checked").val());
        }
        for (var iii = 1; iii <= 3; iii++) {
            totalv += parseInt($("input[type=radio][name=v4_" + iii + "]:checked").val());
        }
        for (var iii = 1; iii <= 3; iii++) {
            totalv += parseInt($("input[type=radio][name=v5_" + iii + "]:checked").val());
        }
        
        var result;
        var resV;
        var min=4;
        var mid=5;
        var max=8;
        if ($("input[type=radio][name=v3_1]:checked").val() == 1 | $("input[type=radio][name=v4_1]:checked").val() == 1 | $("input[type=radio][name=v5_1]:checked").val() == 1) { result = 'สูง : เนื่องจากเลือกข้อที่เน้น'; resV = 3;}
        else if (totalv <= min) { result = 'ต่ำ'; resV = 1;}
        else if (totalv >= mid & totalv <= max) { result = 'ปานกลาง'; resV = 2;}
        else if (totalv > max) { result = 'สูง'; resV = 3;}
        
        $("#result_violence").empty().append("คะแนน : " + totalv + " ( ผลประเมิน = " + result + " )</b>");
        $("#cgi-post").append($("<input type='hidden' name='totalv' value='" + totalv + "'>")
                                ,$("<input type='hidden' name='vresult' value='" + resV + "'>"));
        process_chk[2] = 1;
        
    if (process_chk[0] + process_chk[1] + process_chk[2] + process_chk[3]  == 4) {
        $("input[type=submit]").show();
    }
    });
    $("a#processE").click(function () {
        var totale = 0;
        totale += parseInt($("input[type=radio][name=e1]:checked").val());
        totale += parseInt($("input[type=radio][name=e2]:checked").val());
        totale += parseInt($("input[type=radio][name=e3]:checked").val());
        totale += parseInt($("input[type=radio][name=e4]:checked").val());
        
        for (var iii = 1; iii <= 4; iii++) {
            totale += parseInt($("input[type=radio][name=e5_" + iii + "]:checked").val());
        }
       
        var result;
        var resE;
        var min=2;
        var mid=3;
        var max=5;
        if ($("input[type=radio][name=e4]:checked").val() == 1 | $("input[type=radio][name=e5_4]:checked").val() == 1) { result = 'สูง : เนื่องจากเลือกข้อที่เน้น'; resE = 3;}
        else if (totale <= min) { result = 'ต่ำ'; resE = 1;}
        else if (totale >= mid & totale <= max) { result = 'ปานกลาง'; resE = 2;}
        else if (totale > max) { result = 'สูง'; resE = 3;}
        
        $("#result_escape").empty().append("คะแนน : " + totale + " ( ผลประเมิน = " + result + " )</b>");
        $("#cgi-post").append($("<input type='hidden' name='totale' value='" + totale + "'>")
                                ,$("<input type='hidden' name='eresult' value='" + resE + "'>"));
        process_chk[3] = 1;
        
    if (process_chk[0] + process_chk[1] + process_chk[2] + process_chk[3]  == 4) {
        $("input[type=submit]").show();
    }
    });
    
      
    
}