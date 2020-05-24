function AssClozapine(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินยา Clozapine";
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

        $("#contentGr").empty().append($("<form action='' name='frmclozapine' id='frmclozapine' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b id='cardHead'>ประเมินยา Clozapine</b></div>"
            + "<div id='treat' class='card-body'></div></div><p>"
            + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $("#treat").append($("<div class='form-group row' id='DWBC'><label class='col-sm-6 col-form-label' id='LWBC'>WBC < 3,000/mm³ </label><div class='col-sm-1'><input type='radio' name='WBC' id='WBC1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='WBC' id='WBC2' value='Y'> ผิดปกติ</div></div>")
            ,$("<div class='form-group row' id='DANC'><label class='col-sm-6 col-form-label' id='LANC'>ANC < 1,500/mm³ </label><div class='col-sm-1'><input type='radio' name='ANC' id='ANC1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='ANC' id='ANC2' value='Y'> ผิดปกติ</div></div>")
            ,$("<div class='form-group row' id='DP'><label class='col-sm-6 col-form-label' id='LP'>Platelet (กรณี <80,000/mm³) </label><div class='col-sm-1'><input type='radio' name='platelet' id='platelet1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='platelet' id='platelet2' value='Y'> ผิดปกติ</div></div>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label' id='LCBC'>การตรวจ CBC ล่าสุด > 6 เดือน </label><div class='col-sm-1'><input type='radio' name='last_CBC' id='month1' value='N' required> ไม่เจาะ</div><div class='col-sm-1'><input type='radio' name='last_CBC' id='month2' value='Y' required> สั่งเจาะ</div></div>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>clozapine ≥400 mg/day  (EKG Baseline และทุก 1 ปี) </label><div class='col-sm-1'><input type='radio' name='mg_day' value='N' checked required> ปกติ</div><div class='col-sm-1'><input type='radio' name='mg_day' value='Y' required> ผิดปกติ</div></div>")
            ,$("<div class='col-lg-10 row'><div class='row col-lg-2'><input type='text' name='bw' class='form-control' placeholder='น้ำหนัก (ก.ก.)' required></div> <div class='col-lg-2'> <input type='text' name='height' class='form-control' placeholder='ส่วนสูง (ซ.ม.)' required></div>"
            +"<div class='col-lg-1'><input type='button' class='btn btn-success' id='BMIcal' value='คำนวณ'></div> <div class='col-lg-2'> <input type='text' name='bmi' class='form-control' placeholder='BMI' required></div><div class='col-lg-3'> <b id='BMIresult'></b></div></div><p>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>มีไข้หนาวสั่น </label><div class='col-sm-1'><input type='radio' name='symplomo01' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo01' value='Y' required> เป็น</div></div>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>เจ็บคอปวดเมื่อยตามร่างกาย </label><div class='col-sm-1'><input type='radio' name='symplomo02' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo02' value='Y' required> เป็น</div></div>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>เฉื่อยชา เชื่องช้า / อ่อนเพลียมากกว่าปกติ  </label><div class='col-sm-1'><input type='radio' name='symplomo03' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo03' value='Y' required> เป็น</div></div>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>หน้ามืด วิงเวียน   </label><div class='col-sm-1'><input type='radio' name='symplomo04' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo04' value='Y' required> เป็น</div></div>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>ชัก </label><div class='col-sm-1'><input type='radio' name='symplomo05' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo05' value='Y' required> เป็น</div></div>")
            ,$("<div class='form-group row'><label class='col-sm-6 col-form-label'>U/D : DM ,HT, Dyslipidemia, Cardiovascular </label><div class='col-sm-1'><input type='radio' name='symplomo06' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo06' value='Y' required> มี</div></div>"));
            $.getJSON('../back/API/check_ClozapineAPI.php',{data : $.cookie("hn")})
            .done(function( data ) { console.log(data)
                $("#cardHead").append(" ( <b style='color: blue;'>ประเมินล่าสุดเมื่อ : "+data.regdate+"</b>)");
            });
            $.getJSON('../back/API/detail_clozapineAPI.php',{data : $.cookie("hn")})
            .done(function( data ) {
                $("#cgi-post").append($("<input type='hidden' name='WBC_val' value='"+data[0].WBC+"'>")
                                ,$("<input type='hidden' name='ANC_val' value='"+data[0].ANC+"'>")
                                ,$("<input type='hidden' name='platelet_val' value='"+data[0].Platelet+"'>")
                                ,$("<input type='hidden' name='last_CBC_val' value='"+data[0].month+"'>"));    
                                
                                $("#LWBC").append(" <b> ค่า : "+data[0].WBC +"</b>"); 
                                $("#LANC").append(" <b> ค่า : "+data[0].ANC +"</b>");
                                $("#LP").append(" <b> ค่า : "+data[0].Platelet +"</b>");
                                $("#LCBC").append(" <b> เจาะครั้งสุดท้าย : "+data[0].month +" เดือน  ("+data[0].OrderDate+")</b>");  
                            
                                if(data[0].WBC < 3000){$("#WBC2").attr("checked","checked");$("#LWBC").append(" <b style='color: red;'>  ต้องแจ้งแพทย์ทันที</b>"); }else{$("#WBC1").attr("checked","checked");}
                                if(data[0].ANC < 1500){$("#ANC2").attr("checked","checked");$("#LANC").append(" <b style='color: red;'>   ต้องหยุดยาทันที</b>");}else{$("#ANC1").attr("checked","checked");}
                                if(data[0].Platelet < 80000){$("#platelet2").attr("checked","checked");$("#LP").append(" <b style='color: red;'>   ต้องหยุดยาทันที</b>");}else{$("#platelet1").attr("checked","checked");}
                                if(data[0].month >= 6){$("#month2").attr("checked","checked");$("#LCBC").append(" <b style='color: red;'>   สั่งเจาะตรวจ CBC</b>");}else{$("#month1").attr("checked","checked");}
                                if(data[0].bw){$("input[type=text][name=bw]").val(data[0].bw);}  
                                if(data[0].height){$("input[type=text][name=height]").val(data[0].height);}
                                if(data[0].bmi){$("input[type=text][name=bmi]").val(data[0].bmi);}  
                                
                            })
                            .fail(function() {
                                $("#DWBC").hide(); 
                                $("#DANC").hide(); 
                                $("#DP").hide(); 
                                $("#LCBC").append(" <b style='color: red;'> ไม่เคยเจาะ CBC กรุณาสั่งเจาะตรวจ CBC</b>"); 
                                $("#month2").attr("checked","checked");
                              })   
                            var bmi;
                                $("#BMIcal").click(function(){
                                    var height= $("input[type=text][name=height]").val()/100;
                                    bmi = ($("input[type=text][name=bw]").val()/(height*height)).toFixed(1);
                                    $("input[type=text][name=bmi]").val(bmi);
                                    if(bmi<18.5){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> น้ำหนักต่ำกว่าเกณฑ์</b>");
                                    }else if(bmi>=18.5 && bmi<=22.9){
                                        $("#BMIresult").empty().append(" <b style='color: green;'> สมส่วน</b>");
                                    }else if(bmi>=23 && bmi<=24.9){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> น้ำหนักเกิน</b>");
                                    }else if(bmi>=25 && bmi<=29.9){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> โรคอ้วน</b>");
                                    }else if(bmi>29.9){
                                        $("#BMIresult").empty().append(" <b style='color: red;'> โรคอ้วนอันตราย</b>");
                                    }
                                });
                            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_clozapine'>"));                  
        $("#frmclozapine").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcClozapineAPI.php",
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
