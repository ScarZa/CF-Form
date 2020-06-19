function AssSodium(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินยา Sodium Valproate";
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

        $("#contentGr").empty().append($("<form action='' name='frmLithium' id='frmLithium' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b id='cardHead'>ประเมินยา Sodium Valproate </b></div>"
            + "<div id='treat' class='card-body'></div></div><p>"
            + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
          $("#treat").append($("<div class='form-group row'><label class='col-sm-8 col-form-label'>ผู้ป่วยใช้เครื่องดื่มที่มีแอลกอฮอล์ประจำ/ได้รับวินิจฉัย F10.xx </label><div class='col-sm-1'><input type='radio' name='symplomo01' value='0' checked required> ไม่</div><div class='col-sm-1'><input type='radio' name='symplomo01' value='1' required> ใช่</div></div>")
                            , $("<div class='form-group row'><label class='col-sm-8 col-form-label'>Sodium Valproate ≥ 1500 mg/day </label><div class='col-sm-1'><input type='radio' name='symplomo02' value='0' checked required> ไม่</div><div class='col-sm-1'><input type='radio' name='symplomo02' value='1' required> ใช่</div></div>")
                            , $("<div class='form-group row'><label class='col-sm-8 col-form-label'>ใช้ยาร่วมกับยาที่มีพิษต่อตับ: carbamazepine, phenytoin, phenobarbital </label><div class='col-sm-1'><input type='radio' name='symplomo03' value='0' checked required> ไม่</div><div class='col-sm-1'><input type='radio' name='symplomo03' value='1' required> ใช่</div></div>")
                            ,$("<div id='LFT'></div>")
                            );
          $("#LFT").append($("<div class='form-group row'><label class='col-sm-8 col-form-label' id='LLFT'>การตรวจ Liver Function Test ทุก1ปี (เฉพาะผู้ป่วยที่ตรงตาม criteria ด้านบน ข้อใดข้อหนึ่ง) </label><div class='col-sm-1'><input type='radio' name='last_LFT' id='month1' value='N' required> ไม่เจาะ</div><div class='col-sm-2'><input type='radio' name='last_LFT' id='month2' value='Y' required> สั่งเจาะ</div></div>")
                            ,$("<div class='form-group row' id='Dalbumin'><label class='col-sm-8 col-form-label' id='Lalbumin'>albumin (3.5-5.2) </label><div class='col-sm-1'><input type='radio' name='albumin' id='albumin1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='albumin' id='albumin2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DAST'><label class='col-sm-8 col-form-label' id='LAST'>AST (M<37 / F<31) </label><div class='col-sm-1'><input type='radio' name='AST' id='AST1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='AST' id='AST2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DALT'><label class='col-sm-8 col-form-label' id='LALT'>ALT (M<41 / F<31) </label><div class='col-sm-1'><input type='radio' name='ALT' id='ALT1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='ALT' id='ALT2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DALP'><label class='col-sm-8 col-form-label' id='LALP'>ALP (M 53-128 / F 42-119) </label><div class='col-sm-1'><input type='radio' name='ALP' id='ALP1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='ALP' id='ALP2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DTB'><label class='col-sm-8 col-form-label' id='LTB'>total bilirubin (0.1-1.2) </label><div class='col-sm-1'><input type='radio' name='TB' id='TB1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='TB' id='TB2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DDB'><label class='col-sm-8 col-form-label' id='LDB'>direct bilirubin (0-0.3) </label><div class='col-sm-1'><input type='radio' name='DB' id='DB1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='DB' id='DB2' value='Y'> ผิดปกติ</div></div>")
                            );
            $.getJSON('../back/API/check_SodiumAPI.php',{data : $.cookie("hn")})
            .done(function( data ) {
                $("#cardHead").append(" ( <b style='color: blue;'> ประเมินล่าสุดเมื่อ : "+data.regdate+"</b>)");
            });
            $("#LFT").hide();
            $("input[type=radio][name=symplomo01]").click(function(){
                if ($("input[type=radio][name=symplomo01]:checked").val() == '1') { $("#LFT").show(); } else {
                    if ($("input[type=radio][name=symplomo01]:checked").val() + $("input[type=radio][name=symplomo02]:checked").val() + $("input[type=radio][name=symplomo03]:checked").val() >= 1) {
                        $("#LFT").show();}else{$("#LFT").hide();}
                }
            });
                $("input[type=radio][name=symplomo02]").click(function(){
                    if ($("input[type=radio][name=symplomo02]:checked").val() == '1') { $("#LFT").show(); } else {
                        if ($("input[type=radio][name=symplomo01]:checked").val() + $("input[type=radio][name=symplomo02]:checked").val() + $("input[type=radio][name=symplomo03]:checked").val() >= 1) {
                        $("#LFT").show();}else{$("#LFT").hide();}
                }
                });
                    $("input[type=radio][name=symplomo03]").click(function(){
                        if ($("input[type=radio][name=symplomo03]:checked").val() == '1') { $("#LFT").show(); } else {
                            if ($("input[type=radio][name=symplomo01]:checked").val() + $("input[type=radio][name=symplomo02]:checked").val() + $("input[type=radio][name=symplomo03]:checked").val() >= 1) {
                                $("#LFT").show();}else{$("#LFT").hide();}
                        }
            });
    
            $.getJSON('../back/API/detail_SodiumAPI.php',{data : $.cookie("hn")})
            .done(function( data ) { console.log(data);
                $("#cgi-post").append($("<input type='hidden' name='last_lft_val' value='"+data[0].albumin_month+"'>")
                                , $("<input type='hidden' name='albumin_val' value='" + data[0].albumin + "'>")
                                ,$("<input type='hidden' name='AST_val' value='"+data[0].AST+"'>")
                                ,$("<input type='hidden' name='ALT_val' value='"+data[0].ALT+"'>")
                                ,$("<input type='hidden' name='ALP_val' value='"+data[0].ALP+"'>")
                                ,$("<input type='hidden' name='total_val' value='"+data[0].total+"'>")
                                ,$("<input type='hidden' name='direct_val' value='"+data[0].direct+"'>")
                                ); 
                                
                                $("#Lalbumin").append(" <b> ค่า : "+data[0].albumin +"</b>"); 
                                $("#LAST").append(" <b> ค่า : "+data[0].AST +"</b>");
                                $("#LALT").append(" <b> ค่า : "+data[0].ALT +"</b>");
                                $("#LALP").append(" <b> ค่า : "+data[0].ALP +"</b>");
                                $("#LTB").append(" <b> ค่า : "+data[0].total +"</b>");
                                $("#LDB").append(" <b> ค่า : "+data[0].direct +"</b>");
                                if (data[0].albumin_date != '') {
                                    $("#LLFT").append(" <b> เจาะครั้งสุดท้าย : " + data[0].albumin_month + " เดือน (" + data[0].albumin_date + ")</b>");
                                        if(data[0].albumin_month >=12){$("#month2").attr("checked","checked");}}
                                else{$("#LLFT").append(" <b style='color: red;'> ไม่เคยเจาะ LFT กรุณาสั่งเจาะตรวจ LFT</b>");  $("#month2").attr("checked","checked");}
                            
                                if(data[0].LithiumLevel > 1.5 && data[0].LithiumLevel !=''){$("#Lithium2").attr("checked","checked");$("#LLithium").append(" <b style='color: red;'>  ต้องแจ้งแพทย์ทันที</b>"); }else{$("#Lithium1").attr("checked","checked");}
                                if((data[0].albumin >= 3.5 && data[0].albumin <= 5.2) || data[0].albumin==''){$("#albumin1").attr("checked","checked");}else{$("#albumin2").attr("checked","checked");$("#Lalbumin").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                if(data[0].sex == 1){
                                    if ((data[0].AST <= 37) || data[0].AST == '') { $("#AST1").attr("checked", "checked"); } else { $("#AST2").attr("checked", "checked"); $("#LAST").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>"); }
                                    if ((data[0].ALT <= 41) || data[0].ALT == '') { $("#ALT1").attr("checked", "checked"); } else { $("#ALT2").attr("checked", "checked"); $("#LALT").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>"); }
                                    if((data[0].ALP >=  53 && data[0].ALP <= 128) || data[0].ALP==''){$("#ALP1").attr("checked","checked");}else{$("#ALP2").attr("checked","checked");$("#LALP").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                }else{
                                    if ((data[0].AST <= 31) || data[0].AST == '') { $("#AST1").attr("checked", "checked"); } else { $("#AST2").attr("checked", "checked"); $("#LAST").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>"); }
                                    if ((data[0].ALT <= 31) || data[0].AST == '') { $("#ALT1").attr("checked", "checked"); } else { $("#ALT2").attr("checked", "checked"); $("#LALT").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>"); }
                                    if((data[0].ALP >=  42 && data[0].ALP <= 119) || data[0].ALP==''){$("#ALP1").attr("checked","checked");}else{$("#ALP2").attr("checked","checked");$("#LALP").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                }
                                if((data[0].total >= 0.1 && data[0].total <= 1.2) || data[0].total==''){$("#TB1").attr("checked","checked");}else{$("#TB2").attr("checked","checked");$("#LTB").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                if((data[0].direct >= 0 && data[0].direct <= 0.3) || data[0].direct==''){$("#DB1").attr("checked","checked");}else{$("#DB2").attr("checked","checked");$("#LDB").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                
                            })
                            .fail(function() {
                                $("#LLFT").append(" <b style='color: red;'> ไม่เคยเจาะ LFT กรุณาสั่งเจาะตรวจ LFT</b>"); 
                                $("#month2").attr("checked","checked");
                                // $("#Llast_BUN").append(" <b style='color: red;'> ไม่เคยเจาะ BUN กรุณาสั่งเจาะตรวจ BUN</b>"); 
                                // $("#BUNmonth2").attr("checked","checked");
                                // $("#Llast_Cr").append(" <b style='color: red;'> ไม่เคยเจาะ Creatinine กรุณาสั่งเจาะตรวจ Creatinine</b>"); 
                                // $("#Crmonth2").attr("checked","checked");
                                // $("#Llast_Thyroid").append(" <b style='color: red;'> ไม่เคยเจาะ Thyroid Function กรุณาสั่งเจาะตรวจ Thyroid Function</b>"); 
                                // $("#Thyroidmonth2").attr("checked","checked");
                              })   
                           
                            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_sodium'>"));                  
        $("#frmLithium").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcSodiumAPI.php",
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
