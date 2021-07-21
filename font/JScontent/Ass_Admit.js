function AssAdmit(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบบันทึก Admit ";
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
            + "<div id='P-data' class='card-body'></div></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));console.log($.cookie("hn"));
            $.getJSON('../back/API/detail_CCpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
            $("#P-data").append($("<div class='col-lg-12 row'><div class='row col-lg-6'><span id='DP'>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
                                    +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
                                    +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"<br> สิทธิการรักษา : "+data[0].ptname+"</span></div> "
                                    +"<div class='col-lg-6 block'> <img src='../back/API/show_image.php?hn="+$.cookie("hn")+"' width='150' /></div></div></div>")
                                ,$("<div class='row' id='admit_group'>"
                                    +"<div class='col-lg-12 alert alert-success'>"
                                    + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> การรีเฟอร์แรกรับ </b></u></label></div>"
                                    +"<div class='form-group row'><div class='col-sm-2'><label><input class='ace' type='radio' name='refer' value='1'><span> Refer-in(มีใบ refer)</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='refer' value='0'><span> ไม่มีใบ Refer</span></label></div>"
                                    + "</div></div>"
                                    +"<div class='col-lg-12 alert alert-info'>"
                                    + "<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b> ประเภทการมา Admit </b></u></label></div>"
                                    +"<div class='form-group row'><div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='1'><span> มารับบริการเอง</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='2'><span> รพ.ในเครือข่ายนำส่ง</span></label></div>"
                                    +"<div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='3'><span> รพ.นอกเครือข่ายนำส่ง</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='4'><span> มูลนิธินำส่ง</span></label></div>"
                                    +"<div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='5'><span> ตำรวจ/หรือฝ่ายปกครองนำส่ง</span></label></div><div class='col-sm-3'><label><input class='ace' type='radio' name='income' value='6'><span> ศุนย์คุ้มครองคนไร้ที่พึ่ง</span></label></div>"   
                                    + "</div></div>"
                                    +"</div> ")
                                        );

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_Admit'>"));
                               
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
                //AssCGI('#index_content');
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
