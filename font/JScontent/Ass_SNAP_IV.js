function AssSNAP_IV(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบบันทึกผล SNAP-IV";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(" แบบบันทึกผล SNAP-IV")
    // $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(" แบบบันทึกผล SNAP-IV");
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

        $("#contentGr").empty().append($("<form action='' name='frmsnap4' id='frmsnap4' method='post' enctype='multipart/form-data'>"
        + "<div class='col-lg-12'><div class='row alert alert-success' role='alert'>"
            +"<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ประเมินครั้งที่ : <select name='month' class='form-control select2' id='month' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ชั้นเรียน : <select name='class_room' class='form-control select2' id='class_room' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ความสัมพันธ์กับเด็กเป็น : <select name='assessor' class='form-control select2' id='assessor' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>วันที่ประเมิน : <input type='text' name='assdate' class='form-control form-control-sm' id='assdate' required></div></div>"
            + "</div></div>"
            + "<div class='row'>"
            + "<div class='row col-lg-12' id='main-div'><div class='col-lg-6' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>คะแนน SNAP_IV</b></div>"
            + "<div id='snap4-scorll' class='card-body'></div></div>"
            + "<br><center><input type='submit' class='btn btn-success' value='บันทึก'></center></div>"
            + "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div></div></div></form>"));

                                selectMash("#class_room","classroom_Data.php","เลือกชั้นเรียน");

                               var option="<option value=''> เลือกจำนวนเดือน </option>";
                               option += "<option value='0'> 0 เดือน </option><option value='1'> 1 เดือน </option><option value='3'> 3 เดือน </option><option value='6'> 6 เดือน </option><option value='9'> 9 เดือน </option><option value='12'> 12 เดือน </option>";
                                       $("select#month").empty().append(option);
                                       $(".select2").select2();

                                option="<option value=''> เลือกความสัมพันธ์ </option>";
                                option += "<option value='P'> ผู้ปกครอง </option><option value='T'> ครู/อาจารย์ </option>";
                                       $("select#assessor").empty().append(option);
                                       $(".select2").select2();       

                                var DP = new DatepickerThai();
                                DP.GetDatepicker("#assdate");       
           
            $("#snap4-scorll").append($("<div class='row col-lg-12'><div class='row col-lg-4'>ADHD - In</div><div class='row col-lg-4'><input type='text' class='form-control form-control-sm' name='ADHD_In' value='' placeholder='คะแนน ADHD-In' required></div></div><br>")
                                    ,$("<div class='row col-lg-12'><div class='row col-lg-4'>ADHD - H/In</div><div class='row col-lg-4'><input type='text' class='form-control form-control-sm' name='ADHD_HIn' value='' placeholder='คะแนน ADHD-H/In' required></div></div><br>")
                                    ,$("<div class='row col-lg-12'><div class='row col-lg-4'>ODD</div><div class='row col-lg-4'><input type='text' class='form-control form-control-sm' name='ODD' value='' placeholder='คะแนน ODD' required></div></div>"));

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                // ,$("<input type='hidden' name='sex' value='"+$.cookie("sex")+"'>")
                                // ,$("<input type='hidden' name='birthday' value='"+$.cookie("birthday")+"'>")
                                // ,$("<input type='hidden' name='pdx' value='"+$.cookie("pdx")+"'>")
                                // ,$("<input type='hidden' name='dx0' value='"+$.cookie("dx0")+"'>")
                                // ,$("<input type='hidden' name='dx1' value='"+$.cookie("dx1")+"'>")
                                // ,$("<input type='hidden' name='dx2' value='"+$.cookie("dx2")+"'>")
                                // ,$("<input type='hidden' name='dx3' value='"+$.cookie("dx3")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_snap4'>"));                        
        $("#frmsnap4").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            console.log(dataForm)
            // for (var value of dataForm.values()) { ///ใช้เช็คว่าใน form
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcSNAP4API.php",
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
                AssSNAP_IV('#index_content',$.cookie('hn'));
                //$("#index_content").empty().load('content/add_user.html');

            })


        }));
    //});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    // var column1 = ["วันที่ประเมิน", "คะแนน CGI-S"];
    // var CTb = new createTableAjax();
    //RemovejQueryCookie('year')
    // GetjQueryCookie('year',nowyear)
    //CTb.FileDel('DelDrawItemAPI.php');
    //CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Drawlotitem.php?' + id, $.cookie('Readerurl') + 'tempSendDataAPI.php', column1
    // CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_CGIscore.php?'+$.cookie('hn'), '../back/API/tempSendDataAPI.php', column1
    //     , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);

        var title1 = "ผลการประเมิน SNAP-IV (โดยผู้ปกครอง)";
        var title2 = "ผลการประเมิน SNAP-IV (โดยครู/อาจารย์)";
        var subtitle = "รายครั้ง";
        var unit = "คะแนน";
        $.getJSON('../back/API/graph_SNAP4P.php',{data:$.cookie('hn')},function (data) { 
            var date = data.date
            var CChartsP =  new AJAXCharts('sub-contentTB','line',title1,unit,date,'../back/API/DC_columnSNAP4P.php?'+$.cookie('hn'),subtitle,['#3ec613', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', 'yellow']);
            $(CChartsP.GetCL());
        });     
        $.getJSON('../back/API/graph_SNAP4T.php',{data:$.cookie('hn')},function (data) {    
            var date = data.date     
            var CChartsT =  new AJAXCharts('sub-contentGr','line',title2,unit,date,'../back/API/DC_columnSNAP4T.php?'+$.cookie('hn'),subtitle,['purple', '#d92727', 'orange', 'yellow','#3ec613', '#cc6945', '#6c94dd']);
            $(CChartsT.GetCL());
            });        
                   
}
