function MaskSMIV(content) {
    this.content = content;
    this.GetMaskSMIV = function () {
      $(this.content).empty().append($("<div class='row'><div class='col-lg-4 col-md-4 col-sm-12'><label><b>ผู้ประเมิน : </b></lable><select name='recorder' class='form-control select2' id='recorder' required></select></div>"
        + "<div class='col-lg-4 col-md-4 col-sm-12'><label class='col-lg-12'><b>วันที่ประเมิน : </b></lable><input type='text' name='assdate' class='' id='assdate' required></div>"
        + "<div class='col-lg-4 col-md-4 col-sm-12'><label class=''><b>กระบวนการ : </b></lable><select name='processSMIV' class='form-control select2' id='processSMIV' required></select></div></div>")
        , $("<div class='row'><div class='col-lg-12' id='ass-SMIV'></div></div>"));
    $("#ass-SMIV").append($("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>1. ผู้ป่วยจิตเวชที่มีความเสี่ยงสูงพบมีประวัติทำร้ายตนเองด้วยวิธีรุนแรงมุ่งหวังให้เสียชีวิต </b></label>"
                            +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='1' required><span class='lbl'> มี</span></div></div></div>"
                            +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group1'></div>"
                            +"</div></div><p></p>")
                        ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>2. มีประวัติทำร้ายผู้อื่นด้วยวิธีรุนแรง/ก่อเหตุการณ์รุนแรงในชุมชน </b></label>"
                            +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='1' required><span class='lbl'> มี</span></div></div></div>"
                            +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group2'></div>"
                            +"</div></div><p></p>")
                        ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>3. มีอาการหลงผิด มีความคิดทำร้ายผู้อื่นให้ถึงกับชีวิต หรือมุ่งทำร้ายผู้อื่นให้ถึงกับชีวิต </b></label>"
                            +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='1' required><span class='lbl'> มี</span></div></div></div>"
                            +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group3'></div>"
                            +"</div></div><p></p>")
                        ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>4. เคยมีประวัติก่อคดีอาญารุนแรง (ฆ่า พยายามฆ่า ข่มขืน วางเพลิง) </b></label>"
                            +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='1' required><span class='lbl'> มี</span></div></div></div>"
                            +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group4'></div>"
                            +"</div></div><p></p>")
                        // ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>5. มีอาการหลงผิด มีความคิดหมกมุ่นผิดปกติที่เกี่ยวข้องแบบเฉพาะเจาะจงกับราชวงศ์ จนเกิดพฤติกรรมวุ่นวาย รบกวนในงานพิธีสำคัญ </b></label>"
                        //     +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='1' required><span class='lbl'> มี</span></div></div></div>"
                        //     +"<div class='form-group row'><div class='col-lg-12 row' id='SMIV_group5'></div>"
                        //     +"</div></div><p></p>")
                        , $("<div class='form-group row'><label class='col-sm-3 col-form-label'><b>กลุ่มผู้ป่วย SMI-V</b></label><div class='col-sm-3'><label><input class='ace' type='radio' name='smiv_class' value='3' checked required><span class='lbl'> ไม่เป็นผู้ป่วย SMI-V / ติดตามปกติ</span></label></div><div class='col-sm-5'><label><input class='ace' type='radio' name='smiv_class' value='2' required><span class='lbl'> เป็นผู้ป่วย SMI-V / ผู้ป่วย SMI-V ทำซ้ำ</span></label></div></div > ")
                            
                        ,$("<div class='form-group row'><label class='col-sm-1 col-form-label'><b>หมายเหตุ </b></label><div class='col-sm-11'><input class='form-control' type='text' name='comment' value=''></div></div>")
                        );
            

    }

}
