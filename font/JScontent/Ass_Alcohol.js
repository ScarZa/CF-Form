function AssAlcohol(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินพฤติกรรมการดื่มเครื่องดื่มแอลกอฮอร์";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
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

        $("#contentGr").empty().append($("<form action='' name='frmalcohol' id='frmalcohol' method='post' enctype='multipart/form-data'>"
            + "<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ผู้ประเมิน : <select name='recorder' class='form-control select2' id='recorder' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>สถานที่ : <select name='place' class='form-control select2' id='place' required></select></div></div><br>"
            + "<div class='row col-lg-12'><div class='col-lg-8' id='alcohol-post'><div class='card border-success' id='panel1'>"
            + "<div class='card-header'><b>ข้อ 1. ตลอดชีวิตที่ผ่านมา คุณ <u>เคยดื่ม</u> เครื่องดื่มแอลกอฮอร์ หรือไม่ (หรือ เคยดืม แต่หยุดดื่มมาแล้ว 1 ปีขึ้นไป)</b></div>"
            + "<div id='Question-1' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel2'>"
            + "<div class='card-header'><b>ข้อ 2. <u>ในช่วง 3 เดือนที่ผ่านมา</u> คุณดื่มเครื่องดื่มแอลกอฮอร์บ่อยเพียงไร</b></div>"
            + "<div id='Question-2' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel3'>"
            + "<div class='card-header'><b>ข้อ 3. <u>ในช่วง 3 เดือนที่ผ่านมา</u> คุณเคยรู้สึก อยากดื่มเครื่องดื่มแอลกอฮอร์อย่างมากบ่อยเพียงไร</b></div>"
            + "<div id='Question-3' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel4'>"
            + "<div class='card-header'><b>ข้อ 4. <u>ในช่วง 3 เดือนที่ผ่านมา</u> การดื่มเครื่องดื่มแอลกอฮอร์ทำให้คุณ เกิดปัญหาสุขภาพ ครอบครัว สังคม กฎหมาย หรือการเงินบ่อยเพียงไร</b></div>"
            + "<div id='Question-4' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel5'>"
            + "<div class='card-header'><b>ข้อ 5. <u>ในช่วง 3 เดือนที่ผ่านมา</u> คุณ ไม่สามารถทำกิจกรรมที่คุณควรจะทำได้ตามปกติ เนื่องจากคุณดื่มเครื่องดื่มแอลกอฮอร์ บ่อยเพียงไร</b></div>"
            + "<div id='Question-5' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel6'>"
            + "<div class='card-header'><b>ข้อ 6. <u>ตลอดชีวิตที่ผ่านมา</u> เพื่อนฝูง ญาติ หรือคนอื่น เคยแสดงความกังวลหรือตักเตือนคุณ เกี่ยวกับการดื่มเครื่องดื่มแอลกอฮอร์ของคุณหรือไม่</b></div>"
            + "<div id='Question-6' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel7'>"
            + "<div class='card-header'><b>ข้อ 7. <u>ตลอดชีวิตที่ผ่านมา</u> คุณเคยพยายามหยุดหรือลดการดื่ม เครื่องดื่มแอลกอฮอร์ ฃให้น้อยลงแต่ไม่สำเร็จ หรือไม่</b></div>"
            + "<div id='Question-7' class='card-body'></div></div><p>"
            // + "<div class='card border-success'>"
            // + "<div class='card-header'><b>สรุปผลการประเมิน</b></div>"
            // + "<div id='Result' class='card-body'></div></div>"
            + "<br><center><input type='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            + "<div class='col-lg-4' id='sub-contentTB'></div></div></form>"));

            $.getJSON('../back/API/user_Data.php', function (GD) {
                var option="<option value=''> เลือกผู้ประเมิน </option>";
               for (var key in GD) {
                   if($.cookie("user")==GD[key].id){var selected = 'selected';}else{var selected = '';}
                         option += "$('<option value='"+GD[key].doctorcode+"' "+selected+"> "+GD[key].name+" </option>'),";
                   }
                   $("select#recorder").empty().append(option);
                   $(".select2").select2();
           });
           $.getJSON('../back/API/place_Data.php', function (GD) {
            var option="<option value=''> เลือกสถานที่ </option>";
           for (var key in GD) {
               //if($.cookie("user")==GD[key].loginname){var selected = 'selected';}else{var selected = '';}
                     option += "$('<option value='"+GD[key].id+"'> "+GD[key].name+" </option>'),";
               }
               $("select#place").empty().append(option);
               $(".select2").select2();
       });

            $("#Question-1").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='33%' bgcolor='#27c691'>ไม่เคย(ตลอดชีวิตที่ผ่านมา)</th><th width='33%' bgcolor='#d0d648'>เคย(แต่หยุดดื่มมาแล้ว 1 ปีขึ้นไป)</th><th width='33%' bgcolor='#e07a4e'>ยังดื่มอยู่</th></tr></thead><tbody id='A1'></tbody></table>")
            $("tbody#A1").append($("<tr><td align='center'><input type='radio' name='Q1' value='0' checked required></td><td align='center'><input type='radio' name='Q1' value='1' required></td><td align='center'><input type='radio' name='Q1' value='2' required></td></tr>"));

            $("#Question-2").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='20%' bgcolor='#27c691'>ไม่เคย</th><th width='20%' bgcolor='#9fd13c'>ครั้งสองครั้ง</th><th width='20%' bgcolor='#d0d648'>ทุกเดือน</th><th width='20%' bgcolor='#d69d48'>ทุกสัปดาห์</th><th width='20%' bgcolor='#e07a4e'>เกือบทุกวัน</th></tr></thead><tbody id='A2'></tbody></table>")
            $("tbody#A2").append($("<tr><td align='center'><input type='radio' name='Q2' value='0'></td><td align='center'><input type='radio' name='Q2' value='2'></td><td align='center'><input type='radio' name='Q2' value='3'></td><td align='center'><input type='radio' name='Q2' value='4'></td><td align='center'><input type='radio' name='Q2' value='6'></td></tr>"));
            
            $("#Question-3").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='20%' bgcolor='#27c691'>ไม่เคย</th><th width='20%' bgcolor='#9fd13c'>ครั้งสองครั้ง</th><th width='20%' bgcolor='#d0d648'>ทุกเดือน</th><th width='20%' bgcolor='#d69d48'>ทุกสัปดาห์</th><th width='20%' bgcolor='#e07a4e'>เกือบทุกวัน</th></tr></thead><tbody id='A3'></tbody></table>")
            $("tbody#A3").append($("<tr><td align='center'><input type='radio' name='Q3' value='0' checked required></td><td align='center'><input type='radio' name='Q3' value='3' required></td><td align='center'><input type='radio' name='Q3' value='4' required></td><td align='center'><input type='radio' name='Q3' value='5' required></td><td align='center'><input type='radio' name='Q3' value='6' required></td></tr>"));

            $("#Question-4").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='20%' bgcolor='#27c691'>ไม่เคย</th><th width='20%' bgcolor='#9fd13c'>ครั้งสองครั้ง</th><th width='20%' bgcolor='#d0d648'>ทุกเดือน</th><th width='20%' bgcolor='#d69d48'>ทุกสัปดาห์</th><th width='20%' bgcolor='#e07a4e'>เกือบทุกวัน</th></tr></thead><tbody id='A4'></tbody></table>")
            $("tbody#A4").append($("<tr><td align='center'><input type='radio' name='Q4' value='0' checked required></td><td align='center'><input type='radio' name='Q4' value='4' required></td><td align='center'><input type='radio' name='Q4' value='5' required></td><td align='center'><input type='radio' name='Q4' value='6' required></td><td align='center'><input type='radio' name='Q4' value='7' required></td></tr>"));

            $("#Question-5").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='20%' bgcolor='#27c691'>ไม่เคย</th><th width='20%' bgcolor='#9fd13c'>ครั้งสองครั้ง</th><th width='20%' bgcolor='#d0d648'>ทุกเดือน</th><th width='20%' bgcolor='#d69d48'>ทุกสัปดาห์</th><th width='20%' bgcolor='#e07a4e'>เกือบทุกวัน</th></tr></thead><tbody id='A5'></tbody></table>")
            $("tbody#A5").append($("<tr><td align='center'><input type='radio' name='Q5' value='0' checked required></td><td align='center'><input type='radio' name='Q5' value='5' required></td><td align='center'><input type='radio' name='Q5' value='6' required></td><td align='center'><input type='radio' name='Q5' value='7' required></td><td align='center'><input type='radio' name='Q5' value='8' required></td></tr>"));

            $("#Question-6").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='33%' bgcolor='#27c691'>ไม่เคย</th><th width='33%' bgcolor='#e07a4e'>เคย,ในช่วง3เดือนที่ผ่านมา</th><th width='33%' bgcolor='#d0d648'>เคย,ก่อน3เดือนที่ผ่านมา</th></tr></thead><tbody id='A6'></tbody></table>")
            $("tbody#A6").append($("<tr><td align='center'><input type='radio' name='Q6' value='0' checked required></td><td align='center'><input type='radio' name='Q6' value='6' required></td><td align='center'><input type='radio' name='Q6' value='3' required></td></tr>"));

            $("#Question-7").append("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='33%' bgcolor='#27c691'>ไม่เคย</th><th width='33%' bgcolor='#e07a4e'>เคย,ในช่วง3เดือนที่ผ่านมา</th><th width='33%' bgcolor='#d0d648'>เคย,ก่อน3เดือนที่ผ่านมา</th></tr></thead><tbody id='A7'></tbody></table>")
            $("tbody#A7").append($("<tr><td align='center'><input type='radio' name='Q7' value='0' checked required></td><td align='center'><input type='radio' name='Q7' value='6' required></td><td align='center'><input type='radio' name='Q7' value='3' required></td></tr>"));

            $("div#panel2").hide();
            $("div#panel3").hide();
            $("div#panel4").hide();
            $("div#panel5").hide();
            $("div#panel6").hide();
            $("div#panel7").hide();
            
            $("input[type=radio][name=Q1]").click(function(){
            if($("input[type=radio][name=Q1]:checked").val()==2){$("div#panel2").show();}
            });
            $("input[type=radio][name=Q2]").click(function(){
                if($("input[type=radio][name=Q2]:checked").val()==0){
                    $("div#panel6").show();
                    $("div#panel7").show();
                }else{
                    $("div#panel3").show();
                    $("div#panel4").show();
                    $("div#panel5").show();
                    $("div#panel6").show();
                    $("div#panel7").show();
                }
                });
            $("#alcohol-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
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
                                ,$("<input type='hidden' name='method' value='add_alcohol'>"));                        
        $("#frmalcohol").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcAlcoholAPI.php",
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
                AssAlcohol('#index_content',$.cookie('hn'));
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
    CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Alcohol.php?'+$.cookie('hn'), '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);


}
