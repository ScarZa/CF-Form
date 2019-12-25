function AssC_Case(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " ระบบส่งผู้ป่วย ";
    $("li#page").empty().text(title)
    $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    $("#home").attr("onclick", "$('#index_content').empty();location.reload();");
    //$("li#prev").show();
    //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    $("#prev").hide();
    $("span.card-title").empty().append(title);
    $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmCC' id='frmCC' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>ข้อมูลคนไข้</b></div>"
            + "<div id='P-data' class='card-body'></div></div><p>"
            + "<br><center><input type='submit' name='submit' class='btn btn-success' value='ส่งปรึกษา'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));console.log($.cookie("vn"));console.log($.cookie("an"));
            $.getJSON('../back/API/detail_CCpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) { console.log(data);
            $("#P-data").append($("<div class='col-lg-12 row'><div class='row col-lg-6'><span>HN : "+data[0].hn+"<br>เลขบัตรประชาชน : "+data[0].cid+"<br>ชื่อ-สกุล :"+data[0].fullname
                                    +"<br>ที่อยู่ : "+data[0].informaddr+"<br>วันเกิด "+data[0].birthday+" สถานะภาพ : "+data[0].mrname+"<br>การวินิจฉัย : "+data[0].pdx+" "+data[0].dx0
                                    +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"</span></div> <div class='col-lg-6 block'> <img src='../back/API/show_image.php?hn="+$.cookie("hn")+"' width='230' /></div></div><p>")
                                    ,$("<div class='form-group row'><div class='col-lg-5 col-md-5 col-sm-12'>ส่งให้ : <select name='dep_res' class='form-control select2' id='dep_res' required></select></div></div>")
                                    ,$("<div class='form-group row'><div class='col-lg-5 col-md-5 col-sm-12'>ส่งเพื่อ : <select name='cons_id' class='form-control select2' id='cons_id' required></select></div></div>")
                                    ,$("<textarea name='cause' class='form-control' placeholder='สาเหตุที่ส่ง/อาการ/ความจำเป็น' required></textarea>"));
                   
            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_cc'>"));    
                                
                                selectMash("#dep_res","department_data.php","เลือกงาน");
                                //selectMash("#doctor","Doctor_data.php","เลือกแพทย์");
                                $("#dep_res").change(function(){
                                    selectMash("#cons_id","consult_data.php?data="+$("#dep_res").val(),"เลือกเหตุผล");
                                });
                               
        $("#frmCC").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcconsultAPI.php",
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
                $('#index_content').empty();location.reload();
            })
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
