function AssER(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบบันทึกการบริการผู้ป่วยจิตเวชฉุกเฉิน ";
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

        $("#contentGr").empty().append($("<form action='' name='frmER' id='frmER' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>ข้อมูลคนไข้</b></div>"
            + "<div class='card-body'><div class='col-lg-12 row' id='P-data'></div><div id='ER-form'></div></div></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            + "</div></form>"));
    $("#ER-form").append($("<hr>")
    ,$("<div class='col-lg-12 row'>"
        +"<div class='form-group col-lg-4 row'><div class='form-group form-check col-sm-4'><label><input name='relative_chk' class='form-check-input' type='checkbox'> ญาตินำส่ง</label></div>"
        +"<div class='col-sm-8 row'><input class='form-control form-control-sm' type='text' id='relative' name='relative' placeholder='ชื่อ/นามสกุลญาติ' /></div> "
        +"</div>"
        +"<div class='form-group col-lg-6 row'><div class='form-group form-check col-sm-5'><label><input name='police_chk' class='form-check-input' type='checkbox'> หน่วยงาน/องค์กรที่นำส่ง </label></div>"
        +"<div class='col-sm-7 row'><input class='form-control form-control-sm' type='text' id='police_name' name='police_name' placeholder='ชื่อหน่วยงาน' /></div> "
        +"</div>"
    +"</div>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประวัติพกพาอาวุธ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='weapon_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
    ,$("<textarea name='weapon' id='weapon' class='form-control' placeholder='รายละเอียดการพกพาอาวุธ'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>พกพาอาวุธ (ใน ER/บริเวณ รพจ.เลยฯ) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='weaponER_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='weaponER_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
    ,$("<textarea name='weaponER' id='weaponER' class='form-control' placeholder='รายละเอียดการพกพาอาวุธ (ใน ER/บริเวณ รพจ.เลยฯ)'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การจำกัดพฤติกรรม (ก่อนมา ER) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='detain_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='detain_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
    ,$("<textarea name='detain' id='detain' class='form-control' placeholder='รายละเอียดการจำกัดพฤติกรรม'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>นิติจิตเวช </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='lawpsych_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lawpsych_chk' value='Y' required><span class='lbl'> ใช่</span></label></div></div>")
    ,$("<textarea name='lawpsych' id='lawpsych' class='form-control' placeholder='ระบุ (เลขคดี/คดี/เลขที่หนังสือนำส่ง)'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การนอนหลับ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='sleep_chk' value='N'checked required><span class='lbl'> หลับได้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='sleep_chk' value='Y' required><span class='lbl'> นอนไม่หลับ</span></label></div></div>")
    ,$("<textarea name='sleep' id='sleep' class='form-control' placeholder='รายละเอียด'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การคัดกรอง IC  </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='IC_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='IC_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
    ,$("<textarea name='IC' id='IC' class='form-control' placeholder='รายละเอียด'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การรับประทานยา (จิตเวช) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='N'checked required><span class='lbl'> ต่อเนื่อง</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='A' required><span class='lbl'> ไม่สม่ำเสมอ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='Y' required><span class='lbl'> ขาดยา</span></label></div>"
    +"<div class='col-sm-2'><label><input class='ace' type='radio' name='med_chk' value='0' required><span class='lbl'> ไม่เคยรับยา</span></label></div></div > ")
    ,$("<textarea name='med' id='med' class='form-control' placeholder='รายละเอียด'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>อุบัติเหตุ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='accident_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='accident_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
    ,$("<textarea name='accident' id='accident' class='form-control' placeholder='รายละเอียดอุบัติเหตุ'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>บาดแผล </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='wound_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
    ,$("<textarea name='wound' id='wound' class='form-control' placeholder='รายละเอียดบาดแผล'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>อุบัติเหตุทางสมอง/การผ่าตัด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='surgery_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
        +"<textarea name='surgery' id='surgery' class='form-control' placeholder='รายละเอียดอุบัติเหตุทางสมอง/การผ่าตัด'></textarea>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ภาวะแทรกซ้อน (ER) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='complicate_chk' value='N'checked required><span class='lbl'> ปฏิเสธ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='complicate_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>"
    +"<textarea name='complicate' id='complicate' class='form-control' placeholder='รายละเอียดภาวะแทรกซ้อน'></textarea>")
    ,$("<hr>")
    ,$("<span class='' id='menses-div'></span>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การสูบบุรี่ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='cigarette_chk' value='N'checked required><span class='lbl'> ไม่สูบ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='cigarette_chk' value='Y' required><span class='lbl'> สูบ</span></label></div></div>")
    ,$("<div class='row' id='cigarette'>"
        +"<div class='col-lg-12 row'>"
        +"<div class='form-group col-lg-5 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='D_cigarette'>ระบุรายละเอียด</label></div>"
        +"<div class='col-sm-8 row'><input class='form-control form-control-sm' type='text' id='D_cigarette' name='D_cigarette' placeholder='ระบุรายละเอียด' /></div> "
        +"</div>"
        +"<div class='form-group col-lg-5 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='last_useC'>สูบครั้งสุดท้าย </label></div>"
        +"<div class='col-sm-8 row'><input class='form-control form-control-sm' type='number' id='last_useC' name='last_useC' placeholder='จำนวนวัน' /></div> "
        +"</div>"
        +"</div></div>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การดื่มสุรา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='N'checked required><span class='lbl'> ไม่ดื่ม</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='alcohol_chk' value='Y' required><span class='lbl'> ดื่ม</span></label></div></div>")
    ,$("<div class='row' id='alcohol'>"
        +"<div class='col-lg-12 row'>"
        +"<div class='form-group col-lg-4 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='alcohol_type'>ชนิดสุรา</label></div>"
        +"<div class='col-lg-8 col-md-8 col-sm-12 row'><select class='form-control form-control-sm' id='alcohol_type' name='alcohol_type'></select></div> "
        +"</div>"
        +"<div class='form-group col-lg-4 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='alcohol_vol'>ปริมาณ</label></div>"
        +"<div class='col-sm-8 row'><select class='form-control form-control-sm' id='alcohol_vol' name='alcohol_vol'></select></div> "
        +"</div>"
        +"<div class='form-group col-lg-4 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='last_useA'>ดื่มครั้งสุดท้าย </label></div>"
        +"<div class='col-sm-8 row'><input class='form-control form-control-sm' type='number' id='last_useA' name='last_useA' placeholder='จำนวนวัน'/></div> "
        +"</div>"
        +"</div></div>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การใช้ยาเสพติด </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='dope_chk' value='N'checked required><span class='lbl'> ไม่ใช้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='dope_chk' value='Y' required><span class='lbl'> ใช้</span></label></div></div>")    
    ,$("<div class='row' id='dope'>"
        +"<div class='col-lg-12 row'>"
        +"<div class='form-group col-lg-4 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='dope_type'>ชนิด</label></div>"
        +"<div class='col-sm-8 row'><select class='form-control form-control-sm' id='dope_type' name='dope_type'></select></div> "
        +"</div>"
        +"<div class='form-group col-lg-5 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='last_useD'>ใช้ครั้งสุดท้าย </label></div>"
        +"<div class='col-sm-8 row'><input class='form-control form-control-sm' type='number' id='last_useD' name='last_useD' placeholder='จำนวนวัน'/></div> "
        +"</div>"
        +"</div></div>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การใช้สารสกัดจากกัญชา </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='marihuana_chk' value='N'checked required><span class='lbl'> ไม่ใช้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='marihuana_chk' value='Y' required><span class='lbl'> ใช้</span></label></div></div>")    
    ,$("<div class='row' id='marihuana'>"
        +"<div class='col-lg-12 row'>"
        +"<div class='form-group col-lg-4 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='D_marihuana'>ปริมาณ</label></div>"
        +"<div class='col-sm-8 row'><input class='form-control form-control-sm' type='text' id='D_marihuana' name='D_marihuana' placeholder='ระบุปริมาณ' /></div> "
        +"</div>"
        +"<div class='form-group col-lg-5 row'><div class='form-group form-check col-sm-4'><label class='form-check-label' for='last_useM'>ใช้เพื่อ </label></div>"
        +"<div class='col-sm-8 row'><input class='form-control form-control-sm' type='text' id='last_useM' name='last_useM' placeholder='ใช้เพื่อ' /></div> "
        +"</div>"
        +"</div></div>")
    ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-2 col-form-label'><b>ADL </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='ADL' value='1' checked><span class='lbl'> ทำเองได้ (12-20 คะแนน)</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='ADL' value='2'><span class='lbl'> ทำได้บางส่วน (9-11 คะแนน)</span></label></div>"
        +"<div class='col-sm-2'><label><input class='ace' type='radio' name='ADL' value='3'><span class='lbl'> ญาติต้องดูแล (5-8 คะแนน)</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='ADL' value='4'><span class='lbl'> ญาติทำให้ทั้งหมด (0-4 คะแนน)</span></label></div></div>")
        ,$("<hr>")
    ,$("<div class='form-group row'><label class='col-sm-2 col-form-label'><b>การทำงาน </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='work' value='1' checked><span class='lbl'> ทำงานได้ มีเงินเดือน</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='work' value='2'><span class='lbl'> ทำงานได้ มีรายได้บ้าง</span></label></div>"
        +"<div class='col-sm-2'><label><input class='ace' type='radio' name='work' value='3'><span class='lbl'> ช่วยงานบ้านได้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='work' value='4'><span class='lbl'> ช่วยงานบ้างบางครั้ง</span></label></div>"
        + "<div class='col-sm-2'><label><input class='ace' type='radio' name='work' value='5'><span class='lbl'> ไม่ช่วยงานบ้าน</span></label></div></div>")
    , $("<div class='form-group row alert alert-danger'><label class='col-sm-2 col-form-label'><b>สรุปประเภทผู้ป่วย </b></label><div class='col-sm-1'><label><input class='ace' type='checkbox' name='typeP_1' value='1'><span class='lbl'> 3s</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_2' value='2'><span class='lbl'> เฝ้าระวังหลบหนี</span></label></div>"
        +"<div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_3' value='3'><span class='lbl'> เฝ้าระวังฆ่าตัวตาย</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_4' value='4'><span class='lbl'> เฝ้าระวังอุบัติเหตุ</span></label></div><div class='col-sm-3'><label><input class='ace' type='checkbox' name='typeP_5' value='5'><span class='lbl'> เฝ้าระวังพฤติกรรมรุนแรง</span></label></div>"
        +"<div class='col-sm-2'></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_6' value='6'><span class='lbl'> พรบ. 120 ยาเสพติด</span></label></div><div class='col-sm-2'><label><input class='ace' type='checkbox' name='typeP_7' value='7'><span class='lbl'> พรบ.สุรา</span></label></div></div>")
    ,$("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>การคัดกรอง SMI-V </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='smi4_chk' value='N'checked required><span class='lbl'> ไม่มี</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='smi4_chk' value='Y' required><span class='lbl'> มี</span></label></div></div>")
    // ,$("<div class='form-group row' id='smi4_group'><div class='col-sm-2'></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_1' value='1'><span class='lbl'> 1</span></label></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_2' value='2'><span class='lbl'> 2</span></label></div>"
    //     +"<div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_3' value='3'><span class='lbl'> 3</span></label></div><div class='col-sm-1'><label><input class='ace' type='checkbox' name='smi4_4' value='4'><span class='lbl'> 4</span></label></div></div>")
    );
            $.getJSON('../back/API/detail_CCpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
            $("#P-data").append($("<div class='row col-lg-6'><span id='DP'>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
                                    +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
                                    +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"<br> สิทธิการรักษา : "+data[0].ptname+"</span></div> "
                                    +"<div class='col-lg-6 block'> <img src='../back/API/show_image.php?hn="+$.cookie("hn")+"' width='150' /></div>")
                                
                                        );

                if(data[0].check >= 1){$("span.card-title").append("<b style='color: red'> *** มีการบันทึกคนไข้รายนี้แล้วครับ *** </b>");$("input[type=submit][name=submit]").attr("disabled","disabled")}
                                    // if(data[0].ward){ $("span#DP").append("<br><b style='color: red'>"+data[0].ward+"</b> ");
                                    //                 $("#cgi-post").append($("<input type='hidden' name='ward' value='"+data[0].ward+"'>"));}
                                    selectMash("#alcohol_type","alcoholType_data.php"," เลือกชนิดสุรา ");
                                    selectMash("#alcohol_vol","alcoholVol_Data.php"," เลือกปริมาณ ");
                                    selectMash("#dope_type","drugs_data.php"," เลือกชนิดยาเสพติด ");

                                    $("#last_useC").attr("onkeyup","inputDigits(last_useC)");
                                    $("#last_useA").attr("onkeyup","inputDigits(last_useA)");
                                    $("#last_useD").attr("onkeyup","inputDigits(last_useD)");

                                    if(data[0].sex == '2'){
                                        $("#menses-div").append($("<div class='form-group row'><label class='col-sm-4 col-form-label'><b>ประจำเดือน </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='menses_chk' value='N'checked required><span class='lbl'> ปกติ</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='menses_chk' value='Y' required><span class='lbl'> ไม่ปกติ</span></label></div></div>")
                                            , $("<textarea name='menses' id='menses' class='form-control' placeholder='รายละเอียดประจำเดือน'></textarea>")
                                            ,$("<hr>")
                                                                );
                                                $("#menses").hide();   
                                                $("input[type=radio][name=menses_chk]").click(function(){
                                                    if($("input[type=radio][name=menses_chk]:checked").val()=='Y'){$("textarea#menses").show();}else{$("textarea#menses").hide();}
                                                    });             
                                    }                

                                $("input#relative").hide();
                                $("input#police_name").hide(); 
                                $("#weapon").hide();
                                $("#weaponER").hide();
                                $("#detain").hide();
                                $("textarea[name=lawpsych]").hide();
                                $("#IC").hide();
                                $("#sleep").hide();
                                $("#med").hide();
                                $("#accident").hide();
                                $("#wound").hide();
                                $("#surgery").hide();
                                $("#complicate").hide();
                                $("#smi4_group").hide(); 
                                $("#cigarette").hide();  
                                $("#alcohol").hide();
                                $("#dope").hide();
                                $("#marihuana").hide();
                                
                                
                                $("input[type=checkbox][name=relative_chk]").click(function(){
                                    if($("input[type=checkbox][name=relative_chk]:checked").prop("checked") == true){$("input#relative").show();}else{$("input#relative").hide();}
                                });
                                $("input[type=checkbox][name=police_chk]").click(function(){
                                    if($("input[type=checkbox][name=police_chk]:checked").prop("checked") == true){$("input#police_name").show();}else{$("input#police_name").hide();}
                                });
                                $("input[type=radio][name=surgery_chk]").click(function(){
                                    if($("input[type=radio][name=surgery_chk]:checked").val()=='Y'){$("textarea#surgery").show();}else{$("textarea#surgery").hide();}
                                });
                                $("input[type=radio][name=weapon_chk]").click(function(){
                                    if($("input[type=radio][name=weapon_chk]:checked").val()=='Y'){$("textarea#weapon").show();}else{$("textarea#weapon").hide();}
                                });
                                $("input[type=radio][name=weaponER_chk]").click(function(){
                                    if($("input[type=radio][name=weaponER_chk]:checked").val()=='Y'){$("textarea#weaponER").show();}else{$("textarea#weaponER").hide();}
                                    });
                                $("input[type=radio][name=detain_chk]").click(function(){
                                    if($("input[type=radio][name=detain_chk]:checked").val()=='Y'){$("textarea#detain").show();}else{$("textarea#detain").hide();}
                                    });
                                $("input[type=radio][name=wound_chk]").click(function(){
                                    if($("input[type=radio][name=wound_chk]:checked").val()=='Y'){$("textarea#wound").show();}else{$("textarea#wound").hide();}
                                    });
                                $("input[type=radio][name=alcohol_chk]").click(function(){
                                    if($("input[type=radio][name=alcohol_chk]:checked").val()=='Y'){$("div#alcohol").show();}else{$("div#alcohol").hide();}
                                    });
                                $("input[type=radio][name=lawpsych_chk]").click(function(){
                                    if($("input[type=radio][name=lawpsych_chk]:checked").val()=='Y'){$("textarea#lawpsych").show();}else{$("textarea#lawpsych").hide();}
                                    });
                                $("input[type=radio][name=IC_chk]").click(function(){
                                    if($("input[type=radio][name=IC_chk]:checked").val()=='Y'){$("textarea#IC").show();}else{$("textarea#IC").hide();}
                                    });     
                                $("input[type=radio][name=sleep_chk]").click(function(){
                                    if($("input[type=radio][name=sleep_chk]:checked").val()=='Y'){$("textarea#sleep").show();}else{$("textarea#sleep").hide();}
                                    });  
                                $("input[type=radio][name=med_chk]").click(function(){
                                    if($("input[type=radio][name=med_chk]:checked").val()=='Y'){$("textarea#med").show();}else{$("textarea#med").hide();}
                                    });   
                                $("input[type=radio][name=smi4_chk]").click(function(){
                                    //if($("input[type=radio][name=smi4_chk]:checked").val()=='Y'){$("div#smi4_group").show();}else{$("div#smi4_group").hide();}
                                    if ($("input[type=radio][name=smi4_chk]:checked").val() == 'Y') { console.log($.cookie("username"))
                                        popup('content/Ass_SMIV.html?vn='+$.cookie('vn')+'?user='+$.cookie("user"), popup, 1440, 900);
                                       // $("div#smi4_group").show();
                                    }
                                    //else { $("div#smi4_group").hide(); }
                                    });
                                $("input[type=radio][name=accident_chk]").click(function(){
                                    if($("input[type=radio][name=accident_chk]:checked").val()=='Y'){$("#accident").show();}else{$("#accident").hide();}
                                    });
                                $("input[type=radio][name=cigarette_chk]").click(function(){
                                    if($("input[type=radio][name=cigarette_chk]:checked").val()=='Y'){$("div#cigarette").show();}else{$("div#cigarette").hide();}
                                    });
                                $("input[type=radio][name=dope_chk]").click(function(){
                                    if($("input[type=radio][name=dope_chk]:checked").val()=='Y'){$("div#dope").show();}else{$("div#dope").hide();}
                                    });
                                $("input[type=radio][name=marihuana_chk]").click(function(){
                                    if($("input[type=radio][name=marihuana_chk]:checked").val()=='Y'){$("div#marihuana").show();}else{$("div#marihuana").hide();}
                                });  
                                $("input[type=radio][name=complicate_chk]").click(function(){
                                    if($("input[type=radio][name=complicate_chk]:checked").val()=='Y'){$("textarea#complicate").show();}else{$("textarea#complicate").hide();}
                                });
                                
            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_ER'>"));
                               
        $("#frmER").on('submit', (function (e) {
            e.preventDefault();
            // if($("#dep_send").val() == $("#dep_res").val()){
            //     alert("หน่วยงานที่ส่งและหน่วยงานที่รับซ้ำกันครับ กรุณาตรวจสอบด้วย !!!!");
            // }else{
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcERAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            $('#index_content').empty().append("<center><img src='images/waiting.gif'></center>");
            $.ajax(settings).done(function (result) {
                $('#index_content').empty();
                alert(result.messege);
                AssCGI('#index_content');
            });
        //}
        }));
    });

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
