function AssMMSE(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบทดสอบสภาพสมองเบื้องต้น ฉบับภาษาไทย : MMSE - Thai 2002";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // //$("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    
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

        $("#contentGr").empty().append($("<form action='' name='frmDoc01' id='frmDoc01' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            //+ "<div class='card border-dark'>"
            //+ "<div class='card-header'><b>ข้อมูลคนไข้</b></div>"
            //+ "<div id='P-data' class='card-body'></div></div><p>"
            + "<div id='P-data'></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $.getJSON('../back/API/detail_DoctorpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
            $("#P-data").append($("<div class='row col-lg-4 col-md-4 col-sm-12'><label><b>การศึกษา : </b></lable><select name='education' class='form-control select2' id='education' required></select></div> &nbsp;")    
                                ,$("<div class='card border-success'><div class='card-header'><b>Orientation for Time</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. วันนี้ วันที่เท่าไหร่ </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q1' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q1' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>2. วันนี้ วันอะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q2' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q2' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>3. เดือนนี้ เดือนอะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q3' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q3' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>4. ปีนี้ ปีอะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q4' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q4' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>5. ฤดูนี้ ฤดูอะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q5' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q5' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                     +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Orientation for Place</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. สถานที่ตรงนี้ เรียกว่าอะไร และ....ชื่ออะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q6' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q6' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>2. ขณะนี้ อยู่ที่ชั้นที่เท่าไหร่ของตัวอาคาร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q7' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q7' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>3. ที่นี่อยู่ในอำเภอ - เขตอะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q8' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q8' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>4. ที่นี่จังหวัดอะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q9' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q9' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>5. ที่นี่ภาคอะไร </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q10' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q10' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Registration</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-12 col-form-label'><b>ต่อไปนี้เป็นการทดสอบความจำ ผม(ดิฉัน)จะบอกชื่อของ3อย่าง คุณ(ตา,ยาย)ตั้งใจฟังให้ดีนะ เพราะจะเป็นการบอกเพียงครั้งเดียว ไม่มีการบอกซ้ำ เมื่อผม(ดิฉัน)พูดจบ ให้คุณ(ตา,ยาย)พูดทบทวนตามที่ได้ยินให้ครบทั้ง3ชื่อ แล้วพยายามจำไว้ให้ดี เดี๋ยวผม(ดิฉัน)จะถามซ้ำ<p>* การบอกชื่อแต่ละคำให้ห่างกันประมาณ1วินาที ต้องไม่ช้าหรือเร็วเกินไป</p><p style='color: red'>(กรณีทำแบบทดสอบซ้ำภายใน2เดือน)</p> </b></label></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. ดอกไม้ </b><b style='color: red'>(ต้นไม้)</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q11' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q11' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>2. แม่น้ำ </b><b style='color: red'>(ทะเล)</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q12' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q12' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>3. รถไฟ </b><b style='color: red'>(รถยนต์)</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q13' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q13' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"</div></div><p></p>")      
                                ,$("<div class='card border-success'><div class='card-header'><b>Attention/Calculation</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ข้อนี้เป็นการคิดเลขในใจ เพื่อทดสอบสมาธิ คุณ(ตา,ยาย)คิดเลขในใจเป็นไหม?</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='atten_chk' value='1'required><span class='lbl'> เป็น</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='atten_chk' value='0' required><span class='lbl'> ไม่เป็น</span></label></div></div>"
                                    +"<div class='form-group' id='Q41'><div class='form-group row'><label class='col-sm-12 col-form-label'><b>1. ข้อนี้คิดในใจ เอา100ตั้ง ลบออกทีละ7ไปเรื่อยๆ ได้ผลลัพธืเท่าไหร่ บอกมา<p>บันทึกเลขไว้ทุกครั้ง(ทั้งคำตอบที่ถูกหรือผิด) ทำทั้งหมด5ครั้ง ถ้าลบได่ 1,2หรือ3 แล้วตอบไม่ได้ ให้คิดคะแนนเท่าที่ทำได้ โดยไม่ต้องย้ายไปทำข้อ2</p> </b></label></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ลบครั้งที่ 1</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q14' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q14' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ลบครั้งที่ 2</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q15' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q15' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ลบครั้งที่ 3</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q16' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q16' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ลบครั้งที่ 4</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q17' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q17' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ลบครั้งที่ 5</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q18' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q18' value='0' required><span class='lbl'> ผิด</span></label></div></div></div>"
                                    +"<div class='form-group' id='Q42'><div class='form-group row'><label class='col-sm-12 col-form-label'><b>2. ผม(ดิฉัน)สะกดคำว่า มะนาว ให้คุณ(ตา,ยาย)ฟัง แล้วให้คุณ(ตา,ยาย)สะกดถอยหลังจากพยัญชนะตัวหลังไปตัวแรก คำว่า มะนาว สะกดว่า มอม้า-สระอะ-นอหนู-สระอา-วอแหวน ไหนคุณ(ตา,ยาย)สะกดถอยหลังให้ฟังซิ</b></label></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>พยัญชนะตัวที่ 1</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q14' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q14' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>พยัญชนะตัวที่ 2</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q15' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q15' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>พยัญชนะตัวที่ 3</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q16' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q16' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>พยัญชนะตัวที่ 4</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q17' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q17' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>พยัญชนะตัวที่ 5</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q18' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q18' value='0' required><span class='lbl'> ผิด</span></label></div></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Recall</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-12 col-form-label'><b>เมื่อสักครู่ที่ให้จำของ3อย่าง จำได้มั้ย มีอะไรบ้าง <p style='color: red'>(กรณีทำแบบทดสอบซ้ำภายใน2เดือน)</p></b></label></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. ดอกไม้ </b><b style='color: red'>(ต้นไม้)</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q19' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q19' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>2. แม่น้ำ </b><b style='color: red'>(ทะเล)</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q20' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q20' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>3. รถไฟ </b><b style='color: red'>(รถยนต์)</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q21' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q21' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Naming</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. ยื่นดินสอให้ผู้สูงอายุแล้วถามว่า 'ของสิ่งนี้เรียกว่าอะไร' </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q22' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q22' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>2. ชี้นาฬิกาข้อมือให้ผู้สูงอายุดูแล้วถามว่า 'ของสิ่งนี้เรียกว่าอะไร' </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q23' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q23' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Repetition</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. ตั้งใจฟังผม(ดิฉัน)นะ เมื่อผม(ดิฉัน)ให้คุณ(ตา,ยาย)พูดตามผม(ดิฉัน) จะบอกเพียงเที่ยวเดียว<p style='color: red'>'ใคร ใคร่ ขาย ไก่ ไข่'</p> </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q24' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q24' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Verbal command</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-12 col-form-label'><b>ฟังดีๆนะ เดี๋ยวผม(ดิฉัน)จะส่งกระดาษให้ แล้วให้คุณ(ตา,ยาย)รับด้วยมือขวา พับครึ่งแล้ววางที่..(พื้น,โต๊ะ,เตียง)<p>ผู้ทดสอบแสดงกระดาษเปล่า ขนาดประมาณ A4 ไม่มีรอยพับให้ผู้สูงอายุ</p> </b></label></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. รับด้วยมือขวา</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q25' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q25' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>2. พับครึ่ง</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q26' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q26' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>3. แล้ววางที่..(พื้น,โต๊ะ,เตียง)</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q27' value='1'checked required><span class='lbl'> ถูก</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q27' value='0' required><span class='lbl'> ผิด</span></label></div></div>"
                                    +"</div></div><p></p>") 
                                ,$("<div class='card border-success'><div class='card-header'><b>Written command</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-12 col-form-label'><b>ต่อไปนี้เป็นคำสั่งที่เขียนเป็นตัวหนังสือ ต้องการให้คุณ(ตา,ยาย)อ่านแล้วทำตาม คุณ(ตา,ยาย)จะอ่านออกเสียงหรือในใจก็ได้<p>ผู้ทดสอบแสดงกระดาษให้ผู้สูงอายุดู <h3 style='color: red'>'หลับตา'</h3></p> </b></label></div>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>1. หลับตาได้</b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q28' value='1'checked required><span class='lbl'> ทำได้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q28' value='0' required><span class='lbl'> ทำไม่ได้</span></label></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Writing command</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ข้อความนี้เป็นคำสั่งให้ให้คุณ(ตา,ยาย)เขียนข้อความอะไรก็ได้ ที่อ่านแล้วรู้เอง หรือมีความหมายมา 1 ประโยค (ประโยคประกอบด้วย ประธานและกริยา) </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q29' value='1'checked required><span class='lbl'> ทำได้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q29' value='0' required><span class='lbl'> ทำไม่ได้</span></label></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Visuo - construction</b></div><div id='' class='card-body'>"
                                    +"<div class='form-group row'><label class='col-sm-8 col-form-label'><b>ข้อนี้เป็นคำสั่ง 'จงวาดให้เหมือนภาพตัวอย่าง' </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='Q30' value='1'checked required><span class='lbl'> ทำได้</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='Q30' value='0' required><span class='lbl'> ทำไม่ได้</span></label></div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div align='right'><b id='resQ'></b> <a class='btn btn-warning' id='processQ'>ประมวลผล</a></div>")                   

                                                                            );
                                                                            selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน',$.cookie("user"));
                                                                            var option="<option value=''> เลือกการศึกษา </option><option value='0'> ไม่ได้เรียนหนังสือ (อ่านไม่ออกเขียนไม่ได้) </option><option value='1'> จบประถมศึกษา </option><option value='2'> สูงกว่าประถมศึกษา </option>";
                                                                            $("select#education").empty().append(option);
                                                                            $(".select2").select2();
                                $("#Q41").hide();
                                $("#Q42").hide(); 

                                $("input[type=radio][name=atten_chk]").click(function(){
                                    if($("input[type=radio][name=atten_chk]:checked").val()=='1'){$("#Q41").show();$("#Q42").hide();}else{$("#Q42").show();$("#Q41").hide();}
                                    });

                                $("input[type=submit]").hide();
                                $("a#processQ").click(function(){
                                    var total=0;
                                    for(var i=1;i<=30;i++){
                    
                                        if(isNaN($("input[type=radio][name=Q"+i+"]:checked").val())){
                                            alert("กรุณาเลือกคำตอบที่"+i+"ด้วยครับ!!!");
                                        $("input[type=radio][name=Q"+i+"]").focus();
                                        }else{
                                            total += parseInt($("input[type=radio][name=Q"+i+"]:checked").val());
                                        }
                                    }
                                     
                                        $("#cgi-post").append($("<input type='hidden' name='total' value='"+total+"'>"));

                                    if($("select#education").val()=='0'){
                                        if(total >= 15){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ไม่พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }else{
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }
                                    }else if($("select#education").val()=='1'){
                                        if(total >= 18){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ไม่พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }else{
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }
                                    }else if($("select#education").val()=='2'){
                                        if(total >= 23){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ไม่พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }else{
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : พบภาวะความเสื่อมถอยของสมอง");
                                            $("input[type=submit]").show();
                                        }
                                    }else{
                                        alert('กรุณาเลือกระดับการศึกษาด้วยครับ!!!!')
                                    }
                                
                                    }); 

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_MMSE'>"));



            //$("#nav-general-tab").on('onclick', (function (e) { e.preventDefault();  
                //AssDocGeneral("#nav-general");
                
            //}))
                               
        $("#frmDoc01").on('submit', (function (e) {
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
                url: "../back/API/prcMMSEAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            $('#index_content').empty().append("<center><img src='images/waiting.gif'></center>");
            $.ajax(settings).done(function (result) {
                alert(result.messege);
                $('#index_content').empty();
               // AssMENU('#index_content');$('div#SW').hide();
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
