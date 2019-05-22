function AssCulture(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();

    $("li#page").empty().text(" แบบประเมิน จิตเวชศาสตร์วัฒนธรรม")
    $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(" แบบประเมิน จิตเวชศาสตร์วัฒนธรรม");
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    //$("li#prev").show();
    //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    $("#prev").hide();
    $("span.card-title").empty().append(" ประเมิน จิตเวชศาสตร์วัฒนธรรม");
    $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmculture' id='frmculture' method='post' enctype='multipart/form-data'>"
            + "<div class='row col-lg-12'><div class='col-lg-8' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>คุณมีความเชื่อเกี่ยวกับสาเหตุของความเจ็บป่วยในครั้งนี้อย่างไร?</b></div>"
            + "<div id='Question-1' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>บุคคลใดบ้างที่มีความเชื่อ?</b></div>"
            + "<div id='Question-2' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>ก่อนมารับการรักษาครั้งนี้ คุณเคยไปขอความช่วยเหลือจากใคร?</b></div>"
            + "<div id='Question-3' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>คุณเคยได้รับการรักษาแผนปัจุบันก่อนมารพ.จิตเวชเลยฯหรือไม่?</b></div>"
            + "<div id='Question-4' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>สรุปผลการประเมิน</b></div>"
            + "<div id='Result' class='card-body'></div></div>"
            + "<br><center><input type='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            + "<div class='col-lg-4' id='sub-contentTB'></div></div></form>"));

            $("#Question-1").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='70%'>คำถาม</th><th width='9%'>ไม่เชื่อ</th><th width='12%'>ไม่แน่ใจ</th><th width='9%'>เชื่อ</th></tr></thead><tbody id='A1'></tbody></table>")

            $("tbody#A1").append($("<tr><td>เกิดจากการกระทำของผี เช่น ผีดีผีร้าย ผีไร่/ผีนา ผีบ้าน ผีบรรพบุรุษ</td><td align='center'><input type='radio' name='A1-1' value='0' checked required></td><td align='center'><input type='radio' name='A1-1' value='1' required></td><td align='center'><input type='radio' name='A1-1' value='2' required></td></tr>")
                            ,$("<tr><td>เกิดจากเวทย์มนต์และคุณไสย เช่น ถูกของ น้ำมันพราย ผิดครู</td><td align='center'><input type='radio' name='A1-2' value='0' checked required></td><td align='center'><input type='radio' name='A1-2' value='1' required></td><td align='center'><input type='radio' name='A1-2' value='2' required></td></tr>")
                            ,$("<tr><td>เกิดจากขวัญ เช่นขวัญดิบ ขวัญออกจากร่าง</td><td align='center'><input type='radio' name='A1-3' value='0' checked required></td><td align='center'><input type='radio' name='A1-3' value='1' required></td><td align='center'><input type='radio' name='A1-3' value='2' required></td></tr>")
                            ,$("<tr><td>เกิดจากเคราะห์หรือโชคชะตา เช่น ชะตาตก ชะตาขาด ราหู</td><td align='center'><input type='radio' name='A1-4' value='0' checked required></td><td align='center'><input type='radio' name='A1-4' value='1' required></td><td align='center'><input type='radio' name='A1-4' value='2' required></td></tr>")
                            ,$("<tr><td>เกิดจากจากการละเมิดขนบธรรมเนียมประเพณีของสังคม เช่นผิดผี สึกกลางพรรษา</td><td align='center'><input type='radio' name='A1-5' value='0' checked required></td><td align='center'><input type='radio' name='A1-5' value='1' required></td><td align='center'><input type='radio' name='A1-5' value='2' required></td></tr>")
                            ,$("<tr><td>เกิดจากที่ตั้งของภูมิศาสตร์ เช่น ฮวงจุ้ย มงคลทิศ ทางสามแพร่ง ทางน้ำไหล จอมปลวก</td><td align='center'><input type='radio' name='A1-6' value='0' checked required></td><td align='center'><input type='radio' name='A1-6' value='1' required></td><td align='center'><input type='radio' name='A1-6' value='2' required></td></tr>")
                            ,$("<tr><td><div class='form-group row'><label class='col-sm-2 col-form-label'>อื่นๆ ระบุ</label><div class='col-sm-8'><input type='text' class='form-control form-control-sm' name='Q1-7'></div></div></td><td align='center'><input type='radio' name='A1-7' value='0' checked required></td><td align='center'><input type='radio' name='A1-7' value='1' required></td><td align='center'><input type='radio' name='A1-7' value='2' required></td></tr>"));

            $("#Question-2").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='70%'>คำถาม</th><th width='9%'>ตัวเอง</th><th width='7%'>ญาติ</th><th width='14%'>ตัวเอง,ญาติ</th></tr></thead><tbody id='A2'></tbody></table>")
            
            $("tbody#A2").append($("<tr><td>ใครบ้างทีมีความเชื่อเรื่องข้างต้น</td><td align='center'><input type='radio' name='A1-8' value='0' checked required></td><td align='center'><input type='radio' name='A1-8' value='1' required></td><td align='center'><input type='radio' name='A1-8' value='2' required></td></tr>"));

            $("#Question-3").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='70%'>คำถาม</th><th width='9%'>ไม่เชื่อ</th><th width='12%'>ไม่แน่ใจ</th><th width='9%'>เชื่อ</th></tr></thead><tbody id='A3'></tbody></table>");

            $("tbody#A3").append($("<tr><td>คนในครอบครัว/เพื่อนบ้าน/ผู้เฒ่าผู้แก่/ผู้นำชุมชน</td><td align='center'><input type='radio' name='A2-1' value='0' checked required></td><td align='center'><input type='radio' name='A2-1' value='1' required></td><td align='center'><input type='radio' name='A2-1' value='2' required></td></tr>")
                            ,$("<tr><td>ดูแลตัวเอง เช่น ซื้อยากินเอง ยาสมุนไพร รากไม้</td><td align='center'><input type='radio' name='A2-2' value='0' checked required></td><td align='center'><input type='radio' name='A2-2' value='1' required></td><td align='center'><input type='radio' name='A2-2' value='2' required></td></tr>")
                            ,$("<tr><td>หมอดู</td><td align='center'><input type='radio' name='A2-3' value='0' checked required></td><td align='center'><input type='radio' name='A2-3' value='1' required></td><td align='center'><input type='radio' name='A2-3' value='2' required></td></tr>")
                            ,$("<tr><td>หมอพื้นบ้าน/หมอยา เช่น หมอยาฮากไม้ หมอเป่า หมอน้ำมัน หมอยาหม้อ</td><td align='center'><input type='radio' name='A2-4' value='0' checked required></td><td align='center'><input type='radio' name='A2-4' value='1' required></td><td align='center'><input type='radio' name='A2-4' value='2' required></td></tr>")
                            ,$("<tr><td>หมอไสยศาสตร์ เช่น หมอมอ หมอลำผีฟ้า หมอธรรม หมอขวัญ หมอมนต์</td><td align='center'><input type='radio' name='A2-5' value='0' checked required></td><td align='center'><input type='radio' name='A2-5' value='1' required></td><td align='center'><input type='radio' name='A2-5' value='2' required></td></tr>")
                            ,$("<tr><td>พระ/ผู้นำศาสนา เช่น สะเดาะเคราะห์ ต่อชะตา รดน้ำมนต์</td><td align='center'><input type='radio' name='A2-6' value='0' checked required></td><td align='center'><input type='radio' name='A2-6' value='1' required></td><td align='center'><input type='radio' name='A2-6' value='2'required></td></tr>")
                            ,$("<tr><td><div class='form-group row'><label class='col-sm-2 col-form-label'>อื่นๆ ระบุ</label><div class='col-sm-8'><input type='text' class='form-control form-control-sm' name='Q2-9'></div></div></td><td align='center'><input type='radio' name='A2-9' value='0' checked required></td><td align='center'><input type='radio' name='A2-9' value='1' required></td><td align='center'><input type='radio' name='A2-9' value='2' required></td></tr>"));

            $("#Question-4").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='80%'>คำถาม</th><th width='10%'>ไม่เคย</th><th width='10%'>เคย</th></tr></thead><tbody id='A4'></tbody></table>")
                            
            $("tbody#A4").append($("<tr><td>แพทย์</td><td align='center'><input type='radio' name='A2-7' value='1' checked required></td><td align='center'><input type='radio' name='A2-7' value='0' required></td></tr>")
                            ,$("<tr><td>จิตแพทย์</td><td align='center'><input type='radio' name='A2-8' value='1' checked required></td><td align='center'><input type='radio' name='A2-8' value='0' required></td></tr>"));               

            $("#Result").append($("<input type='radio' name='result' value='Y' required><span> ใช่ / </span><input type='radio' name='result' value='N' checked required><span> ไม่ใช่ </span>"));               

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
                                ,$("<input type='hidden' name='method' value='add_culture'>"));                        
        $("#frmculture").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcCultureAPI.php",
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
                AssCulture('#index_content',$.cookie('hn'));
                //$("#index_content").empty().load('content/add_user.html');

            })


        }));
    //});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["วันที่ประเมิน", "ผลการประเมิน"];
    console.log($.cookie('hn'));
    console.log($.cookie('birthday'));
    console.log($.cookie('pdx'));
    console.log($.cookie('user'));
    var CTb = new createTableAjax();
    //RemovejQueryCookie('year')
    // GetjQueryCookie('year',nowyear)
    //CTb.FileDel('DelDrawItemAPI.php');
    //CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Drawlotitem.php?' + id, $.cookie('Readerurl') + 'tempSendDataAPI.php', column1
    CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Culture.php?'+$.cookie('hn'), '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);


}
