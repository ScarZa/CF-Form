function AssCarbamazepine(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินยา Carbamazepine";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // $("h2").empty().prepend("<img src='images/Px.ico' width='40'> ").append(title);
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

        $("#contentGr").empty().append($("<form action='' name='frmCarbamazepine' id='frmCarbamazepine' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b id='cardHead'>ประเมินยา Carbamazepine </b></div>"
            + "<div id='treat' class='card-body'></div></div><p>"
            + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $("#treat").append($("<div class='form-group row'><label class='col-sm-6 col-form-label' id='LCBC'>การตรวจ CBC ล่าสุด > 6 เดือน </label><div class='col-sm-1'><input type='radio' name='last_CBC' id='month1' value='N' required> ไม่เจาะ</div><div class='col-sm-2'><input type='radio' name='last_CBC' id='month2' value='Y' required> สั่งเจาะ</div></div>")
                            ,$("<div class='form-group row' id='DWBC'><label class='col-sm-6 col-form-label' id='LWBC'>CBC baseline ก่อนเริ่มยา (5000-10000) </label><div class='col-sm-1'><input type='radio' name='WBC' id='WBC1' value='N'> ปกติ</div><div class='col-sm-2'><input type='radio' name='WBC' id='WBC2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>ง่วงซึมมากผิดปกติ </label><div class='col-sm-1'><input type='radio' name='symplomo01' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo01' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>ตัวเหลือง ตาเหลือง </label><div class='col-sm-1'><input type='radio' name='symplomo02' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo02' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>ตาลาย เห็นภาพซ้อน  </label><div class='col-sm-1'><input type='radio' name='symplomo03' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo03' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>จ้ำเลือดตามตัว ผื่น / แผลในปาก  </label><div class='col-sm-1'><input type='radio' name='symplomo04' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo04' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>ไข้ / เจ็บคอ / ปวดเมื่อยตามตัว </label><div class='col-sm-1'><input type='radio' name='symplomo05' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo05' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>สับสนมาก มึนงง </label><div class='col-sm-1'><input type='radio' name='symplomo06' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo06' value='Y' required> มี</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>ปวดท้อง </label><div class='col-sm-1'><input type='radio' name='symplomo07' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo07' value='Y' required> มี</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>เดินเซ กล้ามเนื้ออ่อนแรงมาก / พูดไม่ชัด </label><div class='col-sm-1'><input type='radio' name='symplomo08' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo08' value='Y' required> มี</div></div>")
                            );
            $.getJSON('../back/API/check_CarbamazepineAPI.php',{data : $.cookie("hn")})
            .done(function( data ) { console.log(data)
                $("#cardHead").append(" ( <b style='color: blue;'> ประเมินล่าสุดเมื่อ : "+data.regdate+"</b>)");
            });
            $.getJSON('../back/API/detail_clozapineAPI.php',{data : $.cookie("hn")})
            .done(function( data ) { console.log(data);
                $("#cgi-post").append($("<input type='hidden' name='WBC_val' value='" + data[0].WBC + "'>")
                                    ,$("<input type='hidden' name='last_CBC_val' value='"+data[0].month+"'>")); 
                                
                $("#LWBC").append(" <b> ค่า : " + data[0].WBC + "</b>"); 
                $("#LCBC").append(" <b> เจาะครั้งสุดท้าย : "+data[0].month +" เดือน  ("+data[0].OrderDate+")</b>"); 
                if (data[0].WBC < 3000) { $("#WBC2").attr("checked", "checked"); $("#LWBC").append(" <b style='color: red;'>  ต้องแจ้งแพทย์ทันที</b>"); } else { $("#WBC1").attr("checked", "checked"); }
                if(data[0].month >= 6){$("#month2").attr("checked","checked");$("#LCBC").append(" <b style='color: red;'>   สั่งเจาะตรวจ CBC</b>");}else{$("#month1").attr("checked","checked");}
                            })
                            .fail(function() {
                                $("#LWBC").append(" <b style='color: red;'> ไม่เคยเจาะ CBC กรุณาสั่งเจาะตรวจ CBC</b>"); 
                                $("#LCBC").append(" <b style='color: red;'> ไม่เคยเจาะ CBC กรุณาสั่งเจาะตรวจ CBC</b>");
                                $("#month2").attr("checked","checked");
                              })   
                           
                            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_Carba'>"));                  
        $("#frmCarbamazepine").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcCarbamazepineAPI.php",
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
                $('#index_content').empty();
                // if($.cookie("an")!=''){
                //     AssMENUIPD('#index_content');$('div#SW').hide();
                // }else{AssMENU('#index_content');$('div#SW').hide();}
            })
        }));
    
//         $("input[type=submit][name=submit]").click(function (e) { 
//         e.preventDefault();
// $.ajax({
//     type: "POST",
//     url: "../back/API/prcClozapineAPI.php",
//     data: $("#frmclozapine").serialize(),
//     success: function(result) {
//     alert(result.messege);
//     $("#body_text").empty();
//     AssClozapine('#index_content',$.cookie('hn'));
// }
// });
             
// });
// });
}
