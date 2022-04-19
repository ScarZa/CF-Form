function MaskADR(content) {
    this.content = content;
    this.GetMaskADR = function () {
      $(this.content).empty().append($("<div class='row'><div class='col-lg-4 col-md-4 col-sm-12'><label><b>ผู้บันทึก : </b></lable><select name='recorder' class='form-control select2' id='recorder' required></select></div>"
        + "<div class='col-lg-3 col-md-4 col-sm-12'><label><b>วันที่บันทึก : </b></lable><input type='text' name='assdate' class='' id='assdate' required></div>"
        + "<div class='col-lg-4 col-md-4 col-sm-12'><label><b>เวลาที่เกิดเหตุ : </b></lable><select name='take_hour' id='take_hour' class='select2'></select> <b>:</b> <select name='take_minute' id='take_minute' class='select2'></select> <b>นาที</b>"
        + "</div>")
        , $("<div class='row'><div class='col-lg-12' id='ass-SMIV'></div></div>"));
      $("#ass-SMIV").append($("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b> ระบุเหตุการณ์ โอกาสที่จะประสบกับความสูญเสีย หรือสิ่งไม่พึงประสงค์ โอกาสความน่าจะเป็นที่จะเกิดอุบัติการณ์ </b></label></div>"
                          + "<div class='col-lg-12' id='ADR_group1'>"
                          + "<div class='form-group'><label>บรรยายเหตุการณ์ความเสี่ยง</label><textarea class='form-control' style='width: 100%' COLS='100%' rows='3' placeholder='บรรยายเหตุการณ์ความเสี่ยง' name='take_detail' id='take_detail' required></textarea></div><p>"
                          + "<div class='form-group'><label>การแก้ไขเบื้องต้น</label><textarea class='form-control' style='width: 100%' COLS='100%' rows='2' placeholder='การแก้ไขเบื้องต้น' name='take_first' id='take_first'></textarea></div><p>"
                          + "<div class='form-group'><label>ข้อเสนอแนะอื่นๆ เพื่อการแก้ไขป้องกัน</label><textarea class='form-control' style='width: 100%' COLS='100%' placeholder='ข้อเสนอแนะ' name='take_counsel' id='take_counsel'></textarea></div>"
                          + "</div></div> "
                          + "</div><p></p>")
                          ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b> ระดับความรุนแรง </b></label></div>"
                          + "<div class='col-lg-12' id='ADR_group2'></div></div> "
                          +"</div><p></p>")
                                          
                        );
            

    }

}
