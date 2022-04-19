function AssSMIV(content, id = null, url = '../back/API/') {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมิน SMI-V";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // //$("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);

    // if($.cookie("an")!=''){
    //     $("#home").attr("onclick", "AssMENUIPD('#index_content');$('div#SW').hide();");
    // }else{$("#home").attr("onclick", "AssMENU('#index_content');$('div#SW').hide();");}

    // //$("li#prev").show();
    // //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    // $("#prev").hide();
    $("span.card-title").empty().append(title);
    // $("#add_body").prepend("<span id='body_text'></span>")
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
        + " <center class='col-lg-12' ><h4 style='text-align: center;color: red;'>ประวัติการประเมิน SMI-V</h4><div id='tb_send'></div></center></div>"
        //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
        + "</div></form>"));
    var SMIV = new MaskSMIV("#P-data");
    SMIV.GetMaskSMIV();
    //$.getJSON(url+'detail_DoctorpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
    // $("#P-data").append($("<div class='row'><div class='col-lg-4 col-md-4 col-sm-12'><label><b>ผู้ประเมิน : </b></lable><select name='recorder' class='form-control select2' id='recorder' required></select></div>"
    //     + "<div class='col-lg-4 col-md-4 col-sm-12'><label class='col-lg-12'><b>วันที่ประเมิน : </b></lable><input type='text' name='assdate' class='' id='assdate' required></div>"
    //     +"<div class='col-lg-4 col-md-4 col-sm-12'><label class=''><b>กระบวนการ : </b></lable><select name='process' class='form-control select2' id='process' required></select></div></div>")
    //                     ,$("<div class='row'><div class='col-lg-12' id='ass-SMIV'></div></div>"))
    // $("#ass-SMIV").append($("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>1. ผู้ป่วยจิตเวชที่มีความเสี่ยงสูงพบมีประวัติทำร้ายตนเองด้วยวิธีรุนแรงมุ่งหวังให้เสียชีวิต </b></label>"
    //                         +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='1' required><span class='lbl'> มี</span></div></div></div>"
    //                         +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group1'></div>"
    //                         +"</div></div><p></p>")
    //                     ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>2. มีประวัติทำร้ายผู้อื่นด้วยวิธีรุนแรง/ก่อเหตุการณ์รุนแรงในชุมชน </b></label>"
    //                         +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='1' required><span class='lbl'> มี</span></div></div></div>"
    //                         +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group2'></div>"
    //                         +"</div></div><p></p>")
    //                     ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>3. มีอาการหลงผิด มีความคิดทำร้ายผู้อื่นให้ถึงกับชีวิต หรือมุ่งทำร้ายผู้อื่นให้ถึงกับชีวิต </b></label>"
    //                         +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='1' required><span class='lbl'> มี</span></div></div></div>"
    //                         +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group3'></div>"
    //                         +"</div></div><p></p>")
    //                     ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>4. เคยมีประวัติก่อคดีอาญารุนแรง (ฆ่า พยายามฆ่า ข่มขืน วางเพลิง) </b></label>"
    //                         +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='1' required><span class='lbl'> มี</span></div></div></div>"
    //                         +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group4'></div>"
    //                         +"</div></div><p></p>")
    //                     // ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>5. มีอาการหลงผิด มีความคิดหมกมุ่นผิดปกติที่เกี่ยวข้องแบบเฉพาะเจาะจงกับราชวงศ์ จนเกิดพฤติกรรมวุ่นวาย รบกวนในงานพิธีสำคัญ </b></label>"
    //                     //     +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='1' required><span class='lbl'> มี</span></div></div></div>"
    //                     //     +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group5'></div>"
    //                     //     +"</div></div><p></p>")
    //                     , $("<div class='form-group row'><label class='col-sm-3 col-form-label'><b>กลุ่มผู้ป่วย SMI-V</b></label><div class='col-sm-3'><label><input class='ace' type='radio' name='smiv_class' value='3' checked required><span class='lbl'> ไม่เป็นผู้ป่วย SMI-V / ไม่มีอาการ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='smiv_class' value='2' required><span class='lbl'> เป็นผู้ป่วย SMI-V</span></label></div></div > ")

    //                     ,$("<div class='form-group row'><label class='col-sm-1 col-form-label'><b>หมายเหตุ </b></label><div class='col-sm-11'><input class='form-control' type='text' name='comment' value=''></div></div>")
    //                     );


    selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน', $.cookie("user"));
    $.getJSON(url + 'chk_SMIVregis.php', { data: $.cookie("hn") }, function (data) { 
        if (data.hn == 'N') {
            $("#processSMIV").empty().append("<option value=''>เลือกกระบวนการ</option><option value='1'>ประเมินผู้ป่วย</option>")
        } else {
            if (data.smi4_type == '1') {
                $("#processSMIV").empty().append("<option value=''>เลือกกระบวนการ</option><option value='1'>ประเมินผู้ป่วย</option>")
            } else {
                $("#processSMIV").empty().append("<option value=''>เลือกกระบวนการ</option><option value='2'>ติดตามผู้ป่วย SMI-V</option><option value='3'>ผู้ป่วย SMI-V ทำซ้ำ</option>")
            }
            
}
        
    });
    var DP = new DatepickerThai();
    DP.GetDatepicker("#assdate");

    $("#ass-SMIV").hide();
    $("#processSMIV").change(function (e) {
        //e.preventDefault();

        $("div#SMIV_group1").empty();
        $("div#SMIV_group2").empty();
        $("div#SMIV_group3").empty();
        $("div#SMIV_group4").empty();
        console.log($("#processSMIV").val());
        if ($("#processSMIV").val() == '') {
            $("#ass-SMIV").hide();
        } else {
            $("#ass-SMIV").show();

            if ($("#processSMIV").val() == 1) {
                $('select#processSMIV option[value="2"]').remove();
                $('select#processSMIV option[value="3"]').remove();
                SMIV_item(null, null, url);
            } else if ($("#processSMIV").val() == 3) {
                $('select#processSMIV option[value="1"]').remove();
                $('select#processSMIV option[value="2"]').remove();
                SMIV_item(null, null, url);
                $('input[type=radio][name=smiv_class]').prop('checked', true);
            } else if ($("#processSMIV").val() == 2) {
                $('select#processSMIV option[value="1"]').remove();
                $('select#processSMIV option[value="3"]').remove();//.prop('disabled', true);
                $("input[type=radio][name=chk1][value=1]").click(function (e) {
                    $('select#processSMIV option[value="2"]').remove();
                    $('select#processSMIV').empty().append("<option value='3'>ผู้ป่วย SMI-V ทำซ้ำ</option>");
                    $('select#processSMIV option[value="3"]').prop('selected', true);
                    $('span#select2-processSMIV-container').empty().append('ผู้ป่วย SMI-V ทำซ้ำ');
                    $('span#select2-processSMIV-container').attr('title','ผู้ป่วย SMI-V ทำซ้ำ');
                    //$('select#processSMIV').change();
                    if ($("input[type=radio][name=chk2]:checked").val() == '1' || $("input[type=radio][name=chk3]:checked").val() == '1' || $("input[type=radio][name=chk4]:checked").val() == '1') { 

                    } else {
                        SMIV_item(null, null, url);
                        $('input[type=radio][name=smiv_class]').prop('checked', true);
                    }
                    
                });
                $("input[type=radio][name=chk2][value=1]").click(function () {
                    $('select#processSMIV option[value="2"]').remove();
                    $('select#processSMIV').empty().append("<option value='3'>ผู้ป่วย SMI-V ทำซ้ำ</option>");
                    $('select#processSMIV option[value="3"]').prop('selected', true);
                    $('span#select2-processSMIV-container').empty().append('ผู้ป่วย SMI-V ทำซ้ำ');
                    $('span#select2-processSMIV-container').attr('title','ผู้ป่วย SMI-V ทำซ้ำ');
                    //$('select#processSMIV').change();
                    if ($("input[type=radio][name=chk1]:checked").val() == '1' || $("input[type=radio][name=chk3]:checked").val() == '1' || $("input[type=radio][name=chk4]:checked").val() == '1') { 

                    } else {
                        SMIV_item(null, null, url);
                    }
                });
                $("input[type=radio][name=chk3][value=1]").click(function () {
                    $('select#processSMIV option[value="2"]').remove();
                    $('select#processSMIV').empty().append("<option value='3'>ผู้ป่วย SMI-V ทำซ้ำ</option>");
                    $('select#processSMIV option[value="3"]').prop('selected', true);
                    $('span#select2-processSMIV-container').empty().append('ผู้ป่วย SMI-V ทำซ้ำ');
                    $('span#select2-processSMIV-container').attr('title','ผู้ป่วย SMI-V ทำซ้ำ');
                    //$('select#processSMIV').change();
                    if ($("input[type=radio][name=chk1]:checked").val() == '1' || $("input[type=radio][name=chk2]:checked").val() == '1' || $("input[type=radio][name=chk4]:checked").val() == '1') { 

                    } else {
                        SMIV_item(null, null, url);
                    }
                });
                $("input[type=radio][name=chk4][value=1]").click(function () {
                    $('select#processSMIV option[value="2"]').remove();
                    $('select#processSMIV').empty().append("<option value='3'>ผู้ป่วย SMI-V ทำซ้ำ</option>");
                    $('select#processSMIV option[value="3"]').prop('selected', true);
                    $('span#select2-processSMIV-container').empty().append('ผู้ป่วย SMI-V ทำซ้ำ');
                    $('span#select2-processSMIV-container').attr('title','ผู้ป่วย SMI-V ทำซ้ำ');
                    //$('select#processSMIV').change();
                    if ($("input[type=radio][name=chk1]:checked").val() == '1' || $("input[type=radio][name=chk2]:checked").val() == '1' || $("input[type=radio][name=chk3]:checked").val() == '1') { 

                    } else {
                        SMIV_item(null, null, url);
                    }
                });

            }

        }

    });

    $("#cgi-post").append($("<input type='hidden' name='hn' value='" + $.cookie("hn") + "'>")
        , $("<input type='hidden' name='vn' value='" + $.cookie("vn") + "'>")
        //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
        , $("<input type='hidden' name='user' value='" + $.cookie("user") + "'>")
        , $("<input type='hidden' name='method' value='add_SMIV'>"));

    var column1 = ["วันที่ประเมิน", "AN", "เหตุผล", "ผู้ส่ง", "สถานะ"];
    var CTb = new createTableAjax();
    CTb.GetNewTableAjax('tb_send', url + 'DT_SMIVsend.php?' + $.cookie('hn'), url+'tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
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
function SMIV_item(content, id = null, url = '../back/API/') {
    for (var c = 1; c <= 5; c++) {
        $("div#SMIV_group" + c).empty();
        $.getJSON(url + 'Q_SMIV_Data.php', { data: c }, function (data) {
            var ii = 0;
            for (var i = 1; i <= data.length; i++) {
                $("div#SMIV_group" + data[ii].smiv_group).append($("<div class='col-lg-1'>&nbsp;&nbsp;</div><div class='col-lg-11'><input class='ace' type='checkbox' name='smiv" + data[ii].smiv_group + "_" + i + "' value='" + data[ii].Rsmiv_id + "'><span id='Re" + data[ii].smiv_group + "_" + i + "'> " + data[ii].smiv_result + " &nbsp;&nbsp;</span></div></div><br>"))
                if (data[ii].smiv_result == 'อื่นๆ') { $("#Re" + data[ii].smiv_group + "_" + i).append($(" <input type='text' id='T" + data[ii].smiv_group + "_" + i + "' name='T" + data[ii].smiv_group + "_" + i + "' class='sm' placeholder='ระบุ'>")); $("#T" + data[ii].smiv_group + "_" + i).hide(); }

                $("input[type=checkbox][name=smiv" + data[ii].smiv_group + "_" + i + "]").attr("disabled", "disabled");

                ii++;
            }
            if ($("input[type=radio][name=chk1]:checked").val() == '1') {
                $("div#SMIV_group1").find("input").removeAttr("disabled");
                //$("input[type=checkbox][name=smiv1_1]").removeAttr("disabled");
            }
            if ($("input[type=radio][name=chk2]:checked").val() == '1') {
                $("div#SMIV_group2").find("input").removeAttr("disabled");
            }
            if ($("input[type=radio][name=chk3]:checked").val() == '1') {
                $("div#SMIV_group3").find("input").removeAttr("disabled");
            }
            if ($("input[type=radio][name=chk4]:checked").val() == '1') {
                $("div#SMIV_group4").find("input").removeAttr("disabled");
            }
        });

    }

    $("input[type=radio][name=chk1]").click(function () {
        if ($("input[type=radio][name=chk1]:checked").val() == '1') {
            $("div#SMIV_group1").find("input").removeAttr("disabled");
            $("input[type=checkbox][name=smiv1_12]").click(function () {
                if ($("input[type=checkbox][name=smiv1_12]:checked").prop("checked") == true) { $("input#T1_12").show(); } else { $("input#T1_12").hide(); }
            });
        } else { $("div#SMIV_group1").find("input").attr("disabled", "disabled"); }
    });
    $("input[type=radio][name=chk2]").click(function () {
        if ($("input[type=radio][name=chk2]:checked").val() == '1') {
            $("div#SMIV_group2").find("input").removeAttr("disabled");
            $("input[type=checkbox][name=smiv2_12]").click(function () {
                if ($("input[type=checkbox][name=smiv2_12]:checked").prop("checked") == true) { $("input#T2_12").show(); } else { $("input#T2_12").hide(); }
            });
        } else { $("div#SMIV_group2").find("input").attr("disabled", "disabled"); }
    });
    $("input[type=radio][name=chk3]").click(function () {
        if ($("input[type=radio][name=chk3]:checked").val() == '1') {
            $("div#SMIV_group3").find("input").removeAttr("disabled");
            $("input[type=checkbox][name=smiv3_3]").click(function () {
                if ($("input[type=checkbox][name=smiv3_3]:checked").prop("checked") == true) { $("input#T3_3").show(); } else { $("input#T3_3").hide(); }
            });
        } else { $("div#SMIV_group3").find("input").attr("disabled", "disabled"); }
    });
    $("input[type=radio][name=chk4]").click(function () {
        if ($("input[type=radio][name=chk4]:checked").val() == '1') { $("div#SMIV_group4").find("input").removeAttr("disabled"); } else { $("div#SMIV_group4").find("input").attr("disabled", "disabled"); }
    });
    $("input[type=radio][name=chk5]").click(function () {
        if ($("input[type=radio][name=chk5]:checked").val() == '1') { $("div#SMIV_group5").find("input").removeAttr("disabled"); } else { $("div#SMIV_group5").find("input").attr("disabled", "disabled"); }
    });

    //unbindChange();
}
function unbindChange() {
    $('select#processSMIV').unbind('change');
}
