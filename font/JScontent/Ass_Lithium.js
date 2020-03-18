function AssLithium(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินยา Lithium Carbonate";
    $("li#page").empty().text(title)
    $("h2").empty().prepend("<img src='images/Px.ico' width='40'> ").append(title);
    if($.cookie("an")!=''){
        $("#home").attr("onclick", "AssMENUIPD('#index_content');$('div#SW').hide();");
    }else{$("#home").attr("onclick", "AssMENU('#index_content');$('div#SW').hide();");}
    //$("li#prev").show();
    //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    $("#prev").hide();
    $("span.card-title").empty().append(title);
    $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmLithium' id='frmLithium' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b id='cardHead'>ประเมินยา Lithium Carbonate </b></div>"
            + "<div id='treat' class='card-body'></div></div><p>"
            + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $("#treat").append($("<div class='form-group row'><label class='col-sm-8 col-form-label' id='Llast_Lithium'>Lithium Level ล่าสุด (อย่างน้อยปีละ 1 ครั้ง) </label><div class='col-sm-1'><input type='radio' name='last_Lithium' id='Lmonth1' value='N' required> ไม่เจาะ</div><div class='col-sm-1'><input type='radio' name='last_Lithium' id='Lmonth2' value='Y' required> สั่งเจาะ</div></div>")
                            ,$("<div class='form-group row' id='DLithium'><label class='col-sm-8 col-form-label' id='LLithium'>Lithium level >1.5 mEq/L </label><div class='col-sm-1'><input type='radio' name='Lithium' id='Lithium1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='Lithium' id='Lithium2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label' id='Llast_BUN'>BUN ปีละ 1 ครั้ง (ทุก 12 เดือน) </label><div class='col-sm-1'><input type='radio' name='last_BUN' id='BUNmonth1' value='N' required> ไม่เจาะ</div><div class='col-sm-1'><input type='radio' name='last_BUN' id='BUNmonth2' value='Y' required> สั่งเจาะ</div></div>")
                            ,$("<div class='form-group row' id='DBUN'><label class='col-sm-8 col-form-label' id='LBUN'>BUN (Normal Range 7-20) </label><div class='col-sm-1'><input type='radio' name='BUN' id='BUN1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='BUN' id='BUN2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label' id='Llast_Cr'>Creatinine ปีละ 1 ครั้ง (ทุก 12 เดือน) </label><div class='col-sm-1'><input type='radio' name='last_Cr' id='Crmonth1' value='N' required> ไม่เจาะ</div><div class='col-sm-1'><input type='radio' name='last_Cr' id='Crmonth2' value='Y' required> สั่งเจาะ</div></div>")
                            ,$("<div class='form-group row' id='DCr'><label class='col-sm-8 col-form-label' id='LCr'>Creatinie (Normal Range Male 0.6-1.2 , Female 0.5-1.1) </label><div class='col-sm-1'><input type='radio' name='Cr' id='Cr1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='Cr' id='Cr2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DeGFR'><label class='col-sm-8 col-form-label' id='LeGFR'>eGFR (Normal range > 120) </label><div class='col-sm-1'><input type='radio' name='eGFR' id='eGFR1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='eGFR' id='eGFR2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label' id='Llast_Thyroid'>Thyroid Function ปีละ 1 ครั้ง (ทุก 12 เดือน) </label><div class='col-sm-1'><input type='radio' name='last_Thyroid' id='Thyroidmonth1' value='N' required> ไม่เจาะ</div><div class='col-sm-1'><input type='radio' name='last_Thyroid' id='Thyroidmonth2' value='Y' required> สั่งเจาะ</div></div>")
                            ,$("<div class='form-group row' id='DTSH'><label class='col-sm-8 col-form-label' id='LTSH'>TSH (Normal range 0.27-4.2) </label><div class='col-sm-1'><input type='radio' name='TSH' id='TSH1' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='TSH' id='TSH2' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DFT3'><label class='col-sm-8 col-form-label' id='LFT3'>FT3 (Normal range 2-4.4) </label><div class='col-sm-1'><input type='radio' name='FT3' id='FT31' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='FT3' id='FT32' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row' id='DFT4'><label class='col-sm-8 col-form-label' id='LFT4'>FT4 (Normal range 0.93-1.7) </label><div class='col-sm-1'><input type='radio' name='FT4' id='FT41' value='N'> ปกติ</div><div class='col-sm-1'><input type='radio' name='FT4' id='FT42' value='Y'> ผิดปกติ</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>อาเจียน / ท้องเสีย / ปวดท้อง / </label><div class='col-sm-1'><input type='radio' name='symplomo01' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo01' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>เดินเซ กล้ามเนื้ออ่อนแรงมาก / พูดไม่ชัด </label><div class='col-sm-1'><input type='radio' name='symplomo02' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo02' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>สั่นมาก   ชัก  กระตุก  </label><div class='col-sm-1'><input type='radio' name='symplomo03' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo03' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>งง  สับสนมาก   </label><div class='col-sm-1'><input type='radio' name='symplomo04' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo04' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>อ่อนเพลียมาก </label><div class='col-sm-1'><input type='radio' name='symplomo05' value='N' checked required> ไม่เป็น</div><div class='col-sm-1'><input type='radio' name='symplomo05' value='Y' required> เป็น</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>ยาแก้ปวด NSAIDs : diclofenac,Ibuprofen,mefenamic acid ฯลฯ </label><div class='col-sm-1'><input type='radio' name='symplomo06' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo06' value='Y' required> มี</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>ยาขับปัสสาวะ    HCTZ </label><div class='col-sm-1'><input type='radio' name='symplomo07' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo07' value='Y' required> มี</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>ยาลดความดัน    ACEIs : Enalapril, captopril, lisinopril ฯลฯ </label><div class='col-sm-1'><input type='radio' name='symplomo08' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo08' value='Y' required> มี</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>ยาลดความดัน    ARBs :  losartan, valsartan, irbesartan ฯลฯ </label><div class='col-sm-1'><input type='radio' name='symplomo09' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo09' value='Y' required> มี</div></div>")
                            ,$("<div class='form-group row'><label class='col-sm-8 col-form-label'>ชา กาแฟ เครื่องดื่มที่มีคาเฟอีน (อาจลด/เพิ่มระดับ Li) </label><div class='col-sm-1'><input type='radio' name='symplomo10' value='N' checked required> ไม่มี</div><div class='col-sm-1'><input type='radio' name='symplomo10' value='Y' required> มี</div></div>"));
            $.getJSON('../back/API/check_LithiumAPI.php',{data : $.cookie("hn")})
            .done(function( data ) {
                $("#cardHead").append(" ( <b style='color: blue;'> ประเมินล่าสุดเมื่อ : "+data.regdate+"</b>)");
            });
            $.getJSON('../back/API/detail_LithiumAPI.php',{data : $.cookie("hn")})
            .done(function( data ) { console.log(data);
                $("#cgi-post").append($("<input type='hidden' name='Lithium_val' value='"+data[0].LithiumLevel+"'>")
                                ,$("<input type='hidden' name='BUN_val' value='"+data[0].BUN+"'>")
                                ,$("<input type='hidden' name='Cr_val' value='"+data[0].Cr+"'>")
                                ,$("<input type='hidden' name='eGFR_val' value='"+data[0].eGFR+"'>")
                                ,$("<input type='hidden' name='TSH_val' value='"+data[0].TSH+"'>")
                                ,$("<input type='hidden' name='FT3_val' value='"+data[0].FT3+"'>")
                                ,$("<input type='hidden' name='FT4_val' value='"+data[0].FT4+"'>")
                                ,$("<input type='hidden' name='last_Lithium_val' value='"+data[0].LithiumLevel_month+"'>")  
                                ,$("<input type='hidden' name='last_BUN_val' value='"+data[0].BUN_month+"'>")
                                ,$("<input type='hidden' name='last_Cr_val' value='"+data[0].Cr_month+"'>")
                                ,$("<input type='hidden' name='last_Thyroid_val' value='"+data[0].TSH_month+"'>")); 
                                
                                $("#LLithium").append(" <b> ค่า : "+data[0].LithiumLevel +"</b>"); 
                                $("#LBUN").append(" <b> ค่า : "+data[0].BUN +"</b>");
                                $("#LCr").append(" <b> ค่า : "+data[0].Cr +"</b>");
                                $("#LeGFR").append(" <b> ค่า : "+data[0].eGFR +"</b>");
                                $("#LTSH").append(" <b> ค่า : "+data[0].TSH +"</b>");
                                $("#LFT3").append(" <b> ค่า : "+data[0].FT3 +"</b>");
                                $("#LFT4").append(" <b> ค่า : "+data[0].FT4 +"</b>");
                                if(data[0].LithiumLevel_date != ''){$("#Llast_Lithium").append(" <b> เจาะครั้งสุดท้าย : "+data[0].LithiumLevel_month +" เดือน ("+data[0].LithiumLevel_date+")</b>"); }
                                else{ $("#DLithium").hide(); $("#Lmonth2").attr("checked","checked");}
                                if(data[0].BUN_date != ''){$("#Llast_BUN").append(" <b> เจาะครั้งสุดท้าย : "+data[0].BUN_month +" เดือน ("+data[0].BUN_date+")</b>");}
                                else{ $("#DBUN").hide(); $("#BUNmonth2").attr("checked","checked");}
                                if(data[0].Cr_date != ''){$("#Llast_Cr").append(" <b> เจาะครั้งสุดท้าย : "+data[0].Cr_month +" เดือน ("+data[0].Cr_date+")</b>");}
                                else{ $("#DCr").hide(); $("#DeGFR").hide();$("#Crmonth2").attr("checked","checked");}
                                if(data[0].TSH_date != ''){$("#Llast_Thyroid").append(" <b> เจาะครั้งสุดท้าย : "+data[0].TSH_month +" เดือน ("+data[0].TSH_date+")</b>");} 
                                else{ $("#DTSH").hide(); $("#DFT3").hide(); $("#DFT4").hide(); $("#Thyroidmonth2").attr("checked","checked");}
                            
                                if(data[0].LithiumLevel > 1.5 && data[0].LithiumLevel !=''){$("#Lithium2").attr("checked","checked");$("#LLithium").append(" <b style='color: red;'>  ต้องแจ้งแพทย์ทันที</b>"); }else{$("#Lithium1").attr("checked","checked");}
                                if((data[0].BUN >= 7 && data[0].BUN <= 20) || data[0].BUN==''){$("#BUN1").attr("checked","checked");}else{$("#BUN2").attr("checked","checked");$("#LBUN").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                if(data[0].sex == 1){
                                    if((data[0].Cr >=  0.6 && data[0].Cr <= 1.2) || data[0].Cr==''){$("#Cr1").attr("checked","checked");}else{$("#Cr2").attr("checked","checked");$("#LCr").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                }else{
                                    if((data[0].Cr >=  0.5 && data[0].Cr <= 1.1) || data[0].Cr==''){$("#Cr1").attr("checked","checked");}else{$("#Cr2").attr("checked","checked");$("#LCr").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                }
                                if(data[0].eGFR > 120 || data[0].eGFR==''){$("#eGFR1").attr("checked","checked");}else{$("#eGFR2").attr("checked","checked");$("#LeGFR").append(" <b style='color: red;'>   ค่าต่ำกว่ามาตรฐาน</b>");}
                                if((data[0].TSH >= 0.27 && data[0].TSH <= 4.2) || data[0].TSH==''){$("#TSH1").attr("checked","checked");}else{$("#TSH2").attr("checked","checked");$("#LTSH").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                if((data[0].FT3 >= 2 && data[0].FT3 <= 4.4) || data[0].FT3==''){$("#FT31").attr("checked","checked");}else{$("#FT32").attr("checked","checked");$("#LFT3").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                if((data[0].FT4 >= 0.93 && data[0].FT4 <= 1.7) || data[0].FT4==''){$("#FT41").attr("checked","checked");}else{$("#FT42").attr("checked","checked");$("#LFT4").append(" <b style='color: red;'>   ต้องแจ้งแพทย์ทันที</b>");}
                                if(data[0].LithiumLevel_month >= 12 || data[0].LithiumLevel_month==null){$("#Lmonth2").attr("checked","checked");$("#Llast_Lithium").append(" <b style='color: red;'>   สั่งเจาะตรวจ Lithium Level</b>");}else{$("#Lmonth1").attr("checked","checked");}
                                if(data[0].BUN_month >= 12 || data[0].BUN_month==null){$("#BUNmonth2").attr("checked","checked");$("#Llast_BUN").append(" <b style='color: red;'>   สั่งเจาะตรวจ BUN</b>");}else{$("#BUNmonth1").attr("checked","checked");}
                                if(data[0].Cr_month >= 12 || data[0].Cr_month==null){$("#Crmonth2").attr("checked","checked");$("#Llast_Cr").append(" <b style='color: red;'>   สั่งเจาะตรวจ Creatinie</b>");}else{$("#Crmonth1").attr("checked","checked");}
                                if(data[0].TSH_month >= 12 || data[0].TSH_month==null){$("#Thyroidmonth2").attr("checked","checked");$("#Llast_Thyroid").append(" <b style='color: red;'>   สั่งเจาะตรวจ Thyroid Function</b>");}else{$("#Thyroidmonth1").attr("checked","checked");}
                                
                            })
                            .fail(function() {
                                $("#DLithium").hide(); 
                                $("#DBUN").hide(); 
                                $("#DCr").hide(); 
                                $("#DeGFR").hide(); 
                                $("#DTSH").hide(); 
                                $("#DFT3").hide(); 
                                $("#DFT4").hide(); 
                                $("#Llast_Lithium").append(" <b style='color: red;'> ไม่เคยเจาะ Lithium level กรุณาสั่งเจาะตรวจ Lithium level</b>"); 
                                $("#Lmonth2").attr("checked","checked");
                                $("#Llast_BUN").append(" <b style='color: red;'> ไม่เคยเจาะ BUN กรุณาสั่งเจาะตรวจ BUN</b>"); 
                                $("#BUNmonth2").attr("checked","checked");
                                $("#Llast_Cr").append(" <b style='color: red;'> ไม่เคยเจาะ Creatinine กรุณาสั่งเจาะตรวจ Creatinine</b>"); 
                                $("#Crmonth2").attr("checked","checked");
                                $("#Llast_Thyroid").append(" <b style='color: red;'> ไม่เคยเจาะ Thyroid Function กรุณาสั่งเจาะตรวจ Thyroid Function</b>"); 
                                $("#Thyroidmonth2").attr("checked","checked");
                              })   
                           
                            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_lithium'>"));                  
        $("#frmLithium").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcLithiumAPI.php",
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
                if($.cookie("an")!=''){
                    AssMENUIPD('#index_content');$('div#SW').hide();
                }else{AssMENU('#index_content');$('div#SW').hide();}
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
