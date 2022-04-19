function AssADR(content, id = null, url = '../back/API/') {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบบันทึก ADR";
    $("nav#nav_bc").hide();
      $("span.card-title").empty().append(title);
  
    $("#contentGr").empty().append($("<form action='' name='frmADR' id='frmADR' method='post' enctype='multipart/form-data'>"
        + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
        //+ "<div class='card border-dark'>"
        //+ "<div class='card-header'><b>ข้อมูลคนไข้</b></div>"
        //+ "<div id='P-data' class='card-body'></div></div><p>"
        + "<div id='P-data'></div><p>"
        + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
        + "</div>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        + "</div></form>"));
    var SMIV = new MaskADR("#P-data");
    SMIV.GetMaskADR();

    selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน', $.cookie("user"));
    
    var DP = new DatepickerThai();
    DP.GetDatepicker("#assdate");
    MakeHour("#take_hour");    
    MakeMinute("#take_minute");
    
  $.getJSON(url + 'LevelRisk.php', function (LR) {
    console.log(LR)
    $("div#ADR_group2").append("<br>")
    for (var key in LR) {
        $("div#ADR_group2").append($("<span title='"+LR[key].name+"'> <input type='radio' name='level_risk' id='level_risk' style='width: 20px; height:20px;' value='"+LR[key].num+"' required> &nbsp;&nbsp;<b>"+LR[key].level_risk+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span> "));
    }
});

    $("#cgi-post").append($("<input type='hidden' name='hn' value='" + $.cookie("hn") + "'>")
        , $("<input type='hidden' name='vn' value='" + $.cookie("vn") + "'>")
        //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
        , $("<input type='hidden' name='user' value='" + $.cookie("user") + "'>")
        , $("<input type='hidden' name='method' value='add_ADR'>"));

    var column1 = ["วันที่ประเมิน", "AN", "เหตุผล", "ผู้ส่ง", "สถานะ"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('tb_send', url + 'DT_SMIVsend.php?' + $.cookie('hn'), url+'tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);


    $("#frmADR").on('submit', (function (e) {
        e.preventDefault();
        // if($("#dep_send").val() == $("#dep_res").val()){
        //     alert("หน่วยงานที่ส่งและหน่วยงานที่รับซ้ำกันครับ กรุณาตรวจสอบด้วย !!!!");
        // }else{
        var dataForm = new FormData(this);
        
        // for (var keys of dataForm.keys()) {
        //     console.log(keys);
        // }
        // for (var value of dataForm.values()) {
        //     console.log(value);
        // }
        var settings = {
            type: "POST",
            url: url + "prcSMIVAPI.php",
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
            //AssMENU('#index_content');$('div#SW').hide();
        });
        //}
    }));
    //});
}
