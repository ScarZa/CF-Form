function AssCDI(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบคัดกรองภาวะซึมเศร้าในเด็ก Children’s Depression Inventory (CDI)";
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

        $("#contentGr").empty().append($("<form action='' name='frmdepress' id='frmdepress' method='post' enctype='multipart/form-data'>"
            + "<div class='col-lg-12'><div class='row alert alert-success' role='alert'>"
            +"<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ผู้ประเมิน : <select name='recorder' class='form-control select2' id='recorder' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>สถานที่รับบริการ : <select name='place' class='form-control select2' id='place' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ประเภทการคัดกรอง : <select name='screen-type' class='form-control select2' id='screen-type' required></select></div></div>"
            +"<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ประเภทผู้ป่วย : <select name='patient-type' class='form-control select2' id='patient-type' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>กลุ่มผู้ป่วย : <select name='patient-group' class='form-control select2' id='patient-group' required></select></div></div>"
            + "</div></div>"
            + "<div class='row'><div class='row col-lg-12'><div class='col-lg-10' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>เลือกประโยคที่ตรงกับความรู้สึกหรือความคิดของท่านมากที่สุดในระยะ 2 สัปดาห์ที่ผ่านมา</b></div>"
            + "<div id='Question-1' class='card-body'></div></div><p>"
            + "<br><center><input type='submit' class='btn btn-success' value='บันทึก'></center></div>"
            + "<div class='row col-lg-2' id='sub-contentTB'></div></div></div></form>"));

            selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน',$.cookie("user"));
            selectMash('#place', 'place_Data.php', 'เลือกสถานที่',1);
            selectMash('#screen-type', 'screen_Data.php', 'เลือกประเภทการคัดกรอง',1);
            selectMash('#patient-group', 'patient_group_Data.php', 'เลือกกลุ่มผู้ป่วย',1);
            var option="<option value=''> เลือกประเภทผู้ป่วย </option><option value='1' selected> ผู้ป่วยนอก </option><option value='2'> ผู้ป่วยใน </option>";
               $("select#patient-type").empty().append(option);
               $(".select2").select2();

            $("#Question-1").append("<table class='table table-border table-hover' frame='below' width='100%'><tbody id='A1'></tbody></table>")

            $("tbody#A1").append($("<tr><td width='1%'>1.</td><td align='left' width='33%'><input type='radio' name='Q1' value='0' required> ฉันรู้สึกเศร้านานๆครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q1' value='1' required> ฉันรู้สึกเศร้าบ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q1' value='2' required> ฉันรู้สึกเศร้าตลอดเวลา</td></tr>")
                                ,$("<tr><td width='1%'>2.</td><td align='left' width='33%'><input type='radio' name='Q2' value='2' required> อะไรๆก็มีอุปสรรคไปเสียหมด</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q2' value='1' required> ฉันไม่แน่ใจว่าสิ่งต่างๆจะเป็นไปได้ด้วยดี</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q2' value='0' required> สิ่งต่างๆจะเป็นไปด้วยดีสำหรับฉัน</td></tr>")
                                ,$("<tr><td width='1%'>3.</td><td align='left' width='33%'><input type='radio' name='Q3' value='0' required> ฉันทำอะไรๆได้ค่อนข้างดี</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q3' value='1' required> ฉันทำผิดพลาดหลายอย่าง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q3' value='2' required> ฉันทำผิดพลาดไปหมด</td></tr>")
                                ,$("<tr><td width='1%'>4.</td><td align='left' width='33%'><input type='radio' name='Q4' value='0' required> ฉันรู้สึกสนุกกับหลายสิ่งหลายอย่าง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q4' value='1' required> ฉันรู้สึกสนุกเฉพาะบางสิ่งบางอย่าง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q4' value='2' required> ไม่มีอะไรสนุกเลยสำหรับฉัน</td></tr>")
                                ,$("<tr><td width='1%'>5.</td><td align='left' width='33%'><input type='radio' name='Q5' value='2' required> ฉันทำตัวไม่ดีเสมอ</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q5' value='1' required> ฉันทำตัวไม่ดีบ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q5' value='0' required> ฉันทำตัวไม่ดีนานๆที</td></tr>")
                                ,$("<tr><td width='1%'>6.</td><td align='left' width='33%'><input type='radio' name='Q6' value='0' required> นานๆครั้งฉันจะคิดถึงสิ่งไม่ดีที่อาจเกิดขึ้นกับฉัน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q6' value='1' required> ฉันวิตกว่าจะมีสิ่งไม่ดีเกิดขึ้นกับฉัน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q6' value='2' required> จะต้องมีสิ่งเลวร้ายเกิดขึ้นกับฉันแน่ๆ</td></tr>")
                                ,$("<tr><td width='1%'>7.</td><td align='left' width='33%'><input type='radio' name='Q7' value='2' required> ฉันเกลียดตัวเอง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q7' value='1' required> ฉันไม่ชอบตัวเอง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q7' value='0' required> ฉันชอบตัวเอง</td></tr>")
                                ,$("<tr><td width='1%'>8.</td><td align='left' width='33%'><input type='radio' name='Q8' value='2' required> สิ่งเลวร้ายทั้งหมดที่เกิดขึ้นเป็นความผิดของฉัน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q8' value='1' required> สิ่งเลวร้ายหลายสิ่งที่เกิดขึ้นเป็นความผิดของฉัน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q8' value='0' required> สิ่งเลวร้ายที่เกิดขึ้นมักไม่ใช่ความผิดของฉัน</td></tr>")
                                ,$("<tr><td width='1%'>9.</td><td align='left' width='33%'><input type='radio' name='Q9' value='0' required> ฉันไม่คิดจะฆ่าตัวตาย</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q9' value='1' required> ฉันคิดถึงการฆ่าตัวตาย แต่ฉันจะไม่ทำเช่นนั้น</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q9' value='2' required> ฉันต้องการฆ่าตัวตาย</td></tr>")
                                ,$("<tr><td width='1%'>10.</td><td align='left' width='33%'><input type='radio' name='Q10' value='2' required> ฉันรู้สึกอยากร้องไห้ทุกวัน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q10' value='1' required> ฉันรู้สึกอยากร้องไห้บ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q10' value='0' required> ฉันรู้สึกอยากร้องไห้นานๆครั้ง</td></tr>")
                                ,$("<tr><td width='1%'>11.</td><td align='left' width='33%'><input type='radio' name='Q11' value='2' required> ฉันรู้สึกหงุดหงิดใจตลอดเวลา</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q11' value='1' required> ฉันรู้สึกหงุดหงิดใจบ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q11' value='0' required> ฉันรู้สึกหงุดหงิดใจนานๆที</td></tr>")
                                ,$("<tr><td width='1%'>12.</td><td align='left' width='33%'><input type='radio' name='Q12' value='0' required> ฉันชอบอยู่กับคนอื่น</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q12' value='1' required> ฉันไม่ค่อยชอบอยู่กับคนอื่น</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q12' value='2' required> ฉันไม่ต้องการอยู่กับใครเลย</td></tr>")
                                ,$("<tr><td width='1%'>13.</td><td align='left' width='33%'><input type='radio' name='Q13' value='2' required> ฉันไม่สามารถตัดสินใจอะไรต่างๆด้วยตัวเอง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q13' value='1' required> ฉันตัดสินใจเรื่องต่างๆได้ลำบาก</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q13' value='0' required> ฉันตัดสินใจเรื่องต่างๆได้ง่าย</td></tr>")
                                ,$("<tr><td width='1%'>14.</td><td align='left' width='33%'><input type='radio' name='Q14' value='0' required> ฉันเป็นคนหน้าตาดี</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q14' value='1' required> ฉันเป็นคนหน้าตาไม่ค่อยดี</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q14' value='2' required> ฉันเป็นคนหน้าตาน่าเกลียด</td></tr>")
                                ,$("<tr><td width='1%'>15.</td><td align='left' width='33%'><input type='radio' name='Q15' value='2' required> ฉันต้องใช้ความพยายามอย่างหนักทุกครั้งที่ทำการบ้าน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q15' value='1' required> ฉันต้องใช้ความพยายามอย่างหนักบ่อยครั้งที่ทำการบ้าน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q15' value='0' required> การทำการบ้านไม่ใช่ปัญหาสำหรับฉัน</td></tr>")
                                ,$("<tr><td width='1%'>16.</td><td align='left' width='33%'><input type='radio' name='Q16' value='2' required> ฉันนอนไม่หลับทุกคืน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q16' value='1' required> ฉันนอนไม่หลับหลายคืน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q16' value='0' required> ฉันนอนหลับสบาย</td></tr>")
                                ,$("<tr><td width='1%'>17.</td><td align='left' width='33%'><input type='radio' name='Q17' value='0' required> ฉันรู้สึกเหนื่อยนานๆครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q17' value='1' required> ฉันรู้สึกเหนื่อยบ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q17' value='2' required> ฉันรู้สึกเหนื่อยตลอดเวลา</td></tr>")
                                ,$("<tr><td width='1%'>18.</td><td align='left' width='33%'><input type='radio' name='Q18' value='2' required> มีหลายวันที่ฉันรู้สึกไม่อยากกินอาหาร</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q18' value='1' required> มีบางวันที่ฉันรู้สึกไม่อยากกินอาหาร</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q18' value='0' required> ฉันกินอาหารได้ดี</td></tr>")
                                ,$("<tr><td width='1%'>19.</td><td align='left' width='33%'><input type='radio' name='Q19' value='0' required> ฉันไม่กังวลกับการเจ็บปวย</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q19' value='1' required> ฉันกังวลกับการเจ็บป่วยบ่อยครับ</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q19' value='2' required> ฉันกังวลกับการเจ็บป่วยตลอดเวลา</td></tr>")
                                ,$("<tr><td width='1%'>20.</td><td align='left' width='33%'><input type='radio' name='Q20' value='0' required> ฉันไม่รู้สึกเหงา</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q20' value='1' required> ฉันรู้สึกเหงาบ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q20' value='2' required> ฉันรู้สึกเหงาตลอดเวลา</td></tr>")
                                ,$("<tr><td width='1%'>21.</td><td align='left' width='33%'><input type='radio' name='Q21' value='2' required> ฉันรู้สึกไม่สนุกเลยเวลาที่อยู่โรงเรียน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q21' value='1' required> ฉันรู้สึกสนุกนานๆครั้งเวลาที่อยู่โรงเรียน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q21' value='0' required> ฉันรู้สึกสนุกบ่อยครั้งเวลาที่อยู่โรงเรียน</td></tr>")
                                ,$("<tr><td width='1%'>22.</td><td align='left' width='33%'><input type='radio' name='Q22' value='0' required> ฉันมีเพื่อนมาก</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q22' value='1' required> ฉันมีเพื่อนไม่กี่คนและอยากมีมากกว่านี้</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q22' value='2' required> ฉันไม่มีเพื่อนเลย</td></tr>")
                                ,$("<tr><td width='1%'>23.</td><td align='left' width='33%'><input type='radio' name='Q23' value='0' required> การเรียนของฉันอยู่ในขั้นใช้ได้ดี</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q23' value='1' required> การเรียนของฉันไม่ค่อยดีเหมือนเมื่อก่อน</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q23' value='2' required> การเรียนของฉันแย่ลงมาก</td></tr>")
                                ,$("<tr><td width='1%'>24.</td><td align='left' width='33%'><input type='radio' name='Q24' value='2' required> ฉันทำอะไรไม่ได้ดีเท่าคนอื่น</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q24' value='1' required> ฉันทำอะไรได้ดีเท่าคนอื่นถ้าฉันพยายาม</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q24' value='0' required> ฉันทำได้ดีพอๆกับคนอื่นอยู่แล้วในขณะนี้</td></tr>")
                                ,$("<tr><td width='1%'>25.</td><td align='left' width='33%'><input type='radio' name='Q25' value='2' required> ไม่มีใครรักฉันจริง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q25' value='1' required> ฉันไม่แน่ใจว่ามีใครรักฉันจริงรึเปล่า</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q25' value='0' required> ฉันรู้สึกว่ามีคนรักฉัน</td></tr>")
                                ,$("<tr><td width='1%'>26.</td><td align='left' width='33%'><input type='radio' name='Q26' value='0' required> ฉันทำตามคำสั่งที่ได้รับเสมอ</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q26' value='1' required> ฉันไม่ทำตามคำสั่งบ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q26' value='2' required> ฉันไม่เคยทำตามคำสั่ง</td></tr>")
                                ,$("<tr><td width='1%'>27.</td><td align='left' width='33%'><input type='radio' name='Q27' value='0' required> ฉันเข้ากับคนอื่นได้ดี</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q27' value='1' required> ฉันทะเลาะกับคนอื่นบ่อยครั้ง</td>"
                                +"<td align='left' width='33%'><input type='radio' name='Q27' value='2' required> ฉันทะเลาะกับคนอื่นตลอดเวลา</td></tr>")
                                ,$("<tr><td colspan='3' align='right'><b id='resQ'></b></td><td colspan='1' align='right'><a class='btn btn-warning' id='processQ'>ประมวลผล</a><td></tr>")
                                );
                                
                $("input[type=submit]").hide();
                
            $("a#processQ").click(function(){
                var total=0;
                for(var i=1;i<=27;i++){

                    if(isNaN($("input[type=radio][name=Q"+i+"]:checked").val())){
                        alert("กรุณาเลือกคำตอบที่"+i+"ด้วยครับ!!!");
                    $("input[type=radio][name=Q"+i+"]").focus();
                    }else{
                        total += parseInt($("input[type=radio][name=Q"+i+"]:checked").val());
                    }
                }
                if(typeof total === "undefined" || isNaN(total)) {
                    alert("กรุณาเลือกคำตอบให้ครบ27ข้อด้วยครับ!!!");
                }else{   
                    $("#cgi-post").append($("<input type='hidden' name='total' value='"+total+"'>"));
               
                if(total > 15){
                    $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ถือว่ามีภาวะซึมเศร้าที่มีนัยสำคัญทางคลินิก");
                    $("input[type=submit]").show();
                }else{
                    $("b#resQ").empty().append("ได้ "+total+" คะแนน");
                    $("input[type=submit]").show();
                }
            }
                });    
                

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_CDI'>"));                        
        $("#frmdepress").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            //console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcCDIAPI.php",
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
                //AssMENU('#index_content');$('div#SW').hide();
                //$("#index_content").empty().load('content/add_user.html');

            })


        }));
    //});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["วันที่ประเมิน","คะแนน"];
     var CTb = new createTableAjax();
    //RemovejQueryCookie('year')
    // GetjQueryCookie('year',nowyear)
    //CTb.FileDel('DelDrawItemAPI.php');
    //CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Drawlotitem.php?' + id, $.cookie('Readerurl') + 'tempSendDataAPI.php', column1
    CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_CDI.php?'+$.cookie('hn'), '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);


}
