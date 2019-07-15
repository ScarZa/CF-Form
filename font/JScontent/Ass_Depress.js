function AssDepress(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบคัดกรองโรคซึมเศร้า";
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

        $("#contentGr").empty().append($("<form action='' name='frmculture' id='frmculture' method='post' enctype='multipart/form-data'>"
            + "<div class='col-lg-12'><div class='row alert alert-success' role='alert'>"
            +"<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ผู้ประเมิน : <select name='recorder' class='form-control select2' id='recorder' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>สถานที่รับบริการ : <select name='place' class='form-control select2' id='place' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ประเภทการคัดกรอง : <select name='recorder' class='form-control select2' id='recorder' required></select></div></div>"
            +"<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ประเภทผู้ป่วย : <select name='place' class='form-control select2' id='place' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>กลุ่มผู้ป่วย : <select name='place' class='form-control select2' id='place' required></select></div></div>"
            + "</div></div>"
            + "<div class='row col-lg-12'><div class='col-lg-8' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>แบบคัดกรองโรคซึมเศร้า 2 คำถาม (2Q)</b></div>"
            + "<div id='Question-1' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel2'>"
            + "<div class='card-header'><b>แบบประเมินโรคซึมเศร้า 9 คำถาม (9Q)</b></div>"
            + "<div id='Question-2' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel3'>"
            + "<div class='card-header'><b>แบบประเมินการฆ่าตัวตาย 8 คำถาม (8Q)</b></div>"
            + "<div id='Question-3' class='card-body'></div></div><p>"
            // + "<div class='card border-success'>"
            // + "<div class='card-header'><b>คุณเคยได้รับการรักษาแผนปัจุบันก่อนมารพ.จิตเวชเลยฯหรือไม่?</b></div>"
            // + "<div id='Question-4' class='card-body'></div></div><p>"
            // + "<div class='card border-success'>"
            // + "<div class='card-header'><b>สรุปผลการประเมิน</b></div>"
            // + "<div id='Result' class='card-body'></div></div>"
            + "<br><center><input type='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            + "<div class='col-lg-4' id='sub-contentTB'></div></div></form>"));

            $("#Question-1").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='80%'>คำถาม</th><th width='10%'>มี</th><th width='11%'>ไม่มี</th></tr></thead><tbody id='A1'></tbody></table>")

            $("tbody#A1").append($("<tr><td>1. ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านรู้สึก หดหู่ เศร้า หรือท้อแท้สิ้นหวัง หรือไม่</td><td align='center'><input type='radio' name='2Q-1' value='1' required></td><td align='center'><input type='radio' name='2Q-1' value='0' checked required></td></tr>")
                            ,$("<tr><td>2. ใน 2 สัปดาห์ที่ผ่านมา รวมวันนี้ ท่านรู้สึก เบื่อ ทำอะไรก็ไม่เพลิดเพลิน หรือไม่</td><td align='center'><input type='radio' name='2Q-2' value='1' required></td><td align='center'><input type='radio' name='2Q-2' value='0' checked required></td></tr>"));

            $("#Question-2").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='60%'>ในช่วง 2 สัปดาห์ที่ผ่านมารวมทั้งวันนี้<p>ท่านมีอาการเหล่านี้ บ่อยแค่ไหน</th><td width='10%' valign='top'><b>ไม่มีเลย</b></td><th width='10%'>บางวัน<p>1-7วัน</th><th width='10%'>บ่อย<p> >7วัน</th><td width='10%'  valign='top'><b>ทุกวัน</b></td></tr></thead><tbody id='A2'></tbody></table>")
            
            $("tbody#A2").append($("<tr><td>1. เบื่อ ไม่สนใจอยากทำอะไร</td><td align='center'><input type='radio' name='9Q-1' value='0' checked required></td><td align='center'><input type='radio' name='9Q-1' value='1' required></td><td align='center'><input type='radio' name='9Q-1' value='2' required></td><td align='center'><input type='radio' name='9Q-1' value='3' required></td></tr>")
                                ,$("<tr><td>2. ไม่สบายใจ ซึมเศร้า ท้อแท้</td><td align='center'><input type='radio' name='9Q-2' value='0' checked required></td><td align='center'><input type='radio' name='9Q-2' value='1' required></td><td align='center'><input type='radio' name='9Q-2' value='2' required></td><td align='center'><input type='radio' name='9Q-2' value='3' required></td></tr>")
                                ,$("<tr><td>3. หลับยากหรือหลับๆตื่นๆหรือหลับมากไป</td><td align='center'><input type='radio' name='9Q-3' value='0' checked required></td><td align='center'><input type='radio' name='9Q-3' value='1' required></td><td align='center'><input type='radio' name='9Q-3' value='2' required></td><td align='center'><input type='radio' name='9Q-3' value='3' required></td></tr>")
                                ,$("<tr><td>4. เหนื่อยง่ายหรือไม่ค่อยมีแรง</td><td align='center'><input type='radio' name='9Q-4' value='0' checked required></td><td align='center'><input type='radio' name='9Q-4' value='1' required></td><td align='center'><input type='radio' name='9Q-4' value='2' required></td><td align='center'><input type='radio' name='9Q-4' value='3' required></td></tr>")
                                ,$("<tr><td>5. เบื่ออาหารหรือกินมากเกินไป</td><td align='center'><input type='radio' name='9Q-5' value='0' checked required></td><td align='center'><input type='radio' name='9Q-5' value='1' required></td><td align='center'><input type='radio' name='9Q-5' value='2' required></td><td align='center'><input type='radio' name='9Q-5' value='3' required></td></tr>")
                                ,$("<tr><td>6. รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลวหรือครอบครัวผิดหวัง</td><td align='center'><input type='radio' name='9Q-6' value='0' checked required></td><td align='center'><input type='radio' name='9Q-6' value='1' required></td><td align='center'><input type='radio' name='9Q-6' value='2' required></td><td align='center'><input type='radio' name='9Q-6' value='3' required></td></tr>")
                                ,$("<tr><td>7. สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความตั้งใจ</td><td align='center'><input type='radio' name='9Q-7' value='0' checked required></td><td align='center'><input type='radio' name='9Q-7' value='1' required></td><td align='center'><input type='radio' name='9Q-7' value='2' required></td><td align='center'><input type='radio' name='9Q-7' value='3' required></td></tr>")
                                ,$("<tr><td>8. พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตุเห็นได้ หรือกระสับกระส่ายไม่สามารถอยู่นิ่งได้เหมือนที่เคยเป็น</td><td align='center'><input type='radio' name='9Q-8' value='0' checked required></td><td align='center'><input type='radio' name='9Q-8' value='1' required></td><td align='center'><input type='radio' name='9Q-8' value='2' required></td><td align='center'><input type='radio' name='9Q-8' value='3' required></td></tr>")
                                ,$("<tr><td>9. คิดทำร้ายตัวเอง หรือคิดว่าถ้าตายไปคงจะดี</td><td align='center'><input type='radio' name='9Q-9' value='0' checked required></td><td align='center'><input type='radio' name='9Q-9' value='1' required></td><td align='center'><input type='radio' name='9Q-9' value='2' required></td><td align='center'><input type='radio' name='9Q-9' value='3' required></td></tr>")
                                ,$("<tr><td colspan='3' align='right'><b id='res-9Q'></b></td><td colspan='2' align='right'><a class='btn btn-success' id='process9Q'>ประมวลผล 9Q</a><td></tr>"));

            $("#Question-3").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='10%'>ลำดับ</th><th width='70%'>คำถาม</th><th width='10%'>ไม่มี</th><th width='10%'>มี</th></tr></thead><tbody id='A3'></tbody></table>");

            $("tbody#A3").append($("<tr><td>1.</td><td>คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า</td><td align='center'><input type='radio' name='8Q-1' value='0' checked required></td><td align='center'><input type='radio' name='8Q-1' value='1' required></td></tr>")
                            ,$("<tr><td>2.</td><td>อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ</td><td align='center'><input type='radio' name='8Q-2' value='0' checked required></td><td align='center'><input type='radio' name='8Q-2' value='2' required></td></tr>")
                            ,$("<tr bgcolor='#f77d5e'><td colspan='5' align='center'>ในช่วง 1 เดือนที่ผ่านมารวมวันนี้</td></tr>")
                            ,$("<tr bgcolor='#f7bcad'><td>3.</td><td>คิดเกี่ยวกับการฆ่าตัวตาย</td><td align='center'><input type='radio' name='8Q-3' value='0' checked required></td><td align='center'><input type='radio' name='8Q-3' value='6' required></td></tr>")
                            ,$("<tr bgcolor='#f7bcad'><td> &nbsp;&nbsp;&nbsp;&nbsp;3.1</td><td>(ถ้าตอบว่าคิดเกี่ยวกับฆ่าตัวตายให้ถามต่อ)...<br>ท่านสามารถควบคุมความอยากฆ่าตัวตายที่ท่านคิดอยู่นั้นได้หรือไม่<br>หรือบอกได้ไหมว่าคงจะไม่ทำตามความคิดนั้นในขณะนี้</td><td align='center'><input type='radio' name='8Q-31' value='0' checked required></td><td align='center'><input type='radio' name='8Q-31' value='8' required></td></tr>")
                            ,$("<tr bgcolor='#f7bcad'><td>4.</td><td>มีแผนการที่จะฆ่าตัวตาย</td><td align='center'><input type='radio' name='8Q-4' value='0' checked required></td><td align='center'><input type='radio' name='8Q-4' value='8' required></td></tr>")
                            ,$("<tr bgcolor='#f7bcad'><td>5.</td><td>ได้เตรียมการที่จะทำร้ายตัวเองหรือเตรียมการจะฆ่าตัวตาย<br>โดยตั้งใจว่าจะให้ตายจริงๆ</td><td align='center'><input type='radio' name='8Q-5' value='0' checked required></td><td align='center'><input type='radio' name='8Q-5' value='9' required></td></tr>")
                            ,$("<tr><td>6.</td><td>ได้ทำให้ตัวเองบาดเจ็บแต่ไม่ตั้งใจที่จะทำให้เสียชีวิต</td><td align='center'><input type='radio' name='8Q-6' value='0' checked required></td><td align='center'><input type='radio' name='8Q-6' value='4' required></td></tr>")
                            ,$("<tr><td>7.</td><td>ได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย</td><td align='center'><input type='radio' name='8Q-7' value='0' checked required></td><td align='center'><input type='radio' name='8Q-7' value='10' required></td></tr>")
                            ,$("<tr bgcolor='#aadb53'><td colspan='5' align='center'>ตลอดชีวิตที่ผ่านมา</td></tr>")
                            ,$("<tr bgcolor='#dcf7ad'><td>8.</td><td>ท่านเคยพยายามฆ่าตัวตาย</td><td align='center'><input type='radio' name='8Q-8' value='0' checked required></td><td align='center'><input type='radio' name='8Q-8' value='4' required></td></tr>")
                            ,$("<tr><td colspan='3' align='right'><b id='res-8Q'></b></td><td colspan='2' align='right'><a class='btn btn-warning' id='process8Q'>ประมวลผล 8Q</a><td></tr>"));

            // $("#Question-4").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='80%'>คำถาม</th><th width='10%'>ไม่เคย</th><th width='10%'>เคย</th></tr></thead><tbody id='A4'></tbody></table>")
                            
            // $("tbody#A4").append($("<tr><td>แพทย์</td><td align='center'><input type='radio' name='A2-7' value='1' checked required></td><td align='center'><input type='radio' name='A2-7' value='0' required></td></tr>")
            //                 ,$("<tr><td>จิตแพทย์</td><td align='center'><input type='radio' name='A2-8' value='1' checked required></td><td align='center'><input type='radio' name='A2-8' value='0' required></td></tr>"));               

            // $("#Result").append($("<input type='radio' name='result' value='Y' required><span> ใช่ / </span><input type='radio' name='result' value='N' checked required><span> ไม่ใช่ </span>"));               

            $("div#panel2").hide();
            $("div#panel3").hide();

            $("input[type=radio][name=2Q-1],input[type=radio][name=2Q-2]").click(function(){
                if(($("input[type=radio][name=2Q-1]:checked").val()==1) || ($("input[type=radio][name=2Q-2]:checked").val()==1)){
                    $("div#panel2").hide();
                    $("div#panel2").show();
                    $("input[type=submit]").hide();
                }
                });
                var total_9Q;
                var total_8Q;
            $("a#process9Q").click(function(){
                var Q91 = parseInt($("input[type=radio][name=9Q-1]:checked").val());
                var Q92 = parseInt($("input[type=radio][name=9Q-2]:checked").val());
                var Q93 = parseInt($("input[type=radio][name=9Q-3]:checked").val());
                var Q94 = parseInt($("input[type=radio][name=9Q-4]:checked").val());
                var Q95 = parseInt($("input[type=radio][name=9Q-5]:checked").val());
                var Q96 = parseInt($("input[type=radio][name=9Q-6]:checked").val());
                var Q97 = parseInt($("input[type=radio][name=9Q-7]:checked").val());
                var Q98 = parseInt($("input[type=radio][name=9Q-8]:checked").val());
                var Q99 = parseInt($("input[type=radio][name=9Q-9]:checked").val());
                total_9Q = (Q91+Q92+Q93+Q94+Q95+Q96+Q97+Q98+Q99);
                $("b#res-9Q").empty().append("ได้ "+total_9Q+" คะแนน");
                console.log(total_9Q);
                if(total_9Q > 7){
                    $("div#panel3").hide();
                    $("div#panel3").show();
                    $("input[type=submit]").hide();
                }else{
                    $("input[type=submit]").show();
                }
                });    
                $("a#process8Q").click(function(){
                    var Q81 = parseInt($("input[type=radio][name=8Q-1]:checked").val());
                    var Q82 = parseInt($("input[type=radio][name=8Q-2]:checked").val());
                    var Q83 = parseInt($("input[type=radio][name=8Q-3]:checked").val());
                    var Q831 = parseInt($("input[type=radio][name=8Q-31]:checked").val());
                    var Q84 = parseInt($("input[type=radio][name=8Q-4]:checked").val());
                    var Q85 = parseInt($("input[type=radio][name=8Q-5]:checked").val());
                    var Q86 = parseInt($("input[type=radio][name=8Q-6]:checked").val());
                    var Q87 = parseInt($("input[type=radio][name=8Q-7]:checked").val());
                    var Q88 = parseInt($("input[type=radio][name=8Q-8]:checked").val());
                    total_8Q = (Q81+Q82+Q83+Q831+Q84+Q85+Q86+Q87+Q88);
                    $("b#res-8Q").empty().append("ได้ "+total_8Q+" คะแนน");
                    console.log(total_8Q);
                    $("input[type=submit]").show();
                    });    

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='res9Q' value='"+total_9Q+"'>")
                                ,$("<input type='hidden' name='res8Q' value='"+total_8Q+"'>")
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