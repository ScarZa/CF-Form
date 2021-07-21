function MaskSuiside(content) {
  this.content = content;
  this.GetMaskS = function () {
    $(this.content).empty().append($("<table class='table table-border table-hover' frame='below' width='100%'><thead><tr align='center'><th width='10%'>ลำดับ</th><th width='70%'>คำถาม</th><th width='10%'>ไม่มี</th><th width='10%'>มี</th></tr></thead><tbody id='A3'></tbody></table>"));

    $("tbody#A3").append($("<tr><td>1.</td><td>คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า</td><td align='center'><input type='radio' name='8Q-1' value='0' checked required></td><td align='center'><input type='radio' name='8Q-1' value='1' required></td></tr>")
      , $("<tr><td>2.</td><td>อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ</td><td align='center'><input type='radio' name='8Q-2' value='0' checked required></td><td align='center'><input type='radio' name='8Q-2' value='2' required></td></tr>")
      , $("<tr bgcolor='#f77d5e'><td colspan='5' align='center'>ในช่วง 1 เดือนที่ผ่านมารวมวันนี้</td></tr>")
      , $("<tr bgcolor='#f7bcad'><td>3.</td><td>คิดเกี่ยวกับการฆ่าตัวตาย</td><td align='center'><input type='radio' name='8Q-3' value='0' checked required></td><td align='center'><input type='radio' name='8Q-3' value='6' required></td></tr>")
      , $("<tr bgcolor='#f7bcad'><td> &nbsp;&nbsp;&nbsp;&nbsp;3.1</td><td>(ถ้าตอบว่าคิดเกี่ยวกับฆ่าตัวตายให้ถามต่อ)...<br>ท่านสามารถควบคุมความอยากฆ่าตัวตายที่ท่านคิดอยู่นั้นได้หรือไม่<br>หรือบอกได้ไหมว่าคงจะไม่ทำตามความคิดนั้นในขณะนี้</td><td align='center'><input type='radio' name='8Q-31' value='0' checked required></td><td align='center'><input type='radio' name='8Q-31' value='8' required></td></tr>")
      , $("<tr bgcolor='#f7bcad'><td>4.</td><td>มีแผนการที่จะฆ่าตัวตาย</td><td align='center'><input type='radio' name='8Q-4' value='0' checked required></td><td align='center'><input type='radio' name='8Q-4' value='8' required></td></tr>")
      , $("<tr bgcolor='#f7bcad'><td>5.</td><td>ได้เตรียมการที่จะทำร้ายตัวเองหรือเตรียมการจะฆ่าตัวตาย<br>โดยตั้งใจว่าจะให้ตายจริงๆ</td><td align='center'><input type='radio' name='8Q-5' value='0' checked required></td><td align='center'><input type='radio' name='8Q-5' value='9' required></td></tr>")
      , $("<tr><td>6.</td><td>ได้ทำให้ตัวเองบาดเจ็บแต่ไม่ตั้งใจที่จะทำให้เสียชีวิต</td><td align='center'><input type='radio' name='8Q-6' value='0' checked required></td><td align='center'><input type='radio' name='8Q-6' value='4' required></td></tr>")
      , $("<tr><td>7.</td><td>ได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย</td><td align='center'><input type='radio' name='8Q-7' value='0' checked required></td><td align='center'><input type='radio' name='8Q-7' value='10' required></td></tr>")
      , $("<tr bgcolor='#aadb53'><td colspan='5' align='center'>ตลอดชีวิตที่ผ่านมา</td></tr>")
      , $("<tr bgcolor='#dcf7ad'><td>8.</td><td>ท่านเคยพยายามฆ่าตัวตาย</td><td align='center'><input type='radio' name='8Q-8' value='0' checked required></td><td align='center'><input type='radio' name='8Q-8' value='4' required></td></tr>")
      , $("<tr><td colspan='3' align='right'><b id='res-8Q'></b></td><td colspan='2' align='right'><a class='btn btn-warning' id='process8Q'>ประมวลผล 8Q</a><td></tr>"));


  }
}
