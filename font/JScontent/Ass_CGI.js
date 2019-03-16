function AssCGI(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();

    $("li#page").empty().text(" แบบประเมิน CGI-S")
    $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(" แบบประเมิน CGI");
    $("#home").attr("onclick", "$('#index_content').empty();AssMENU('#index_content');");
    //$("li#prev").show();
    //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    $("#prev").hide();
    $("span.card-title").empty().append(" ประเมิน CGI");
    $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmcgi' id='frmcgi' method='post' enctype='multipart/form-data'>"
            + "<div class='row col-lg-12'><div class='col-lg-6'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>คลินิกเฉพาะทาง</b></div>"
            + "<div id='cgi-clinic' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>คะแนน CGI</b></div>"
            + "<div id='cgi-scorll' class='card-body'></div></div>"
            + "<br><center><input type='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            + "<div class='col-lg-6' id='sub-contentTB'></div></div></form>"));
            $.getJSON('../back/API/CGI_clinic.php', function (CGIdata) {
                
                for (var key in CGIdata) {
                    //if (CmD[key].id == check) { var select = 'selected'; } else { var select = ''; }
                    //option +="<option value='" + CmD[key].id + "' " + select + "> " + CmD[key].name + " </option>";
                    $("#cgi-clinic").append($("<input type='radio' name='cgi_clinic' value='"+CGIdata[key].clinic_code+"'> "+CGIdata[key].clinic_name+"<br>"));
                } 
            });
            $("#cgi-scorll").append($("<input type='radio' name='cgi_scorll' value='1'> 1. Normal not  at all ill<br>")
                                    ,$("<input type='radio' name='cgi_scorll' value='2'> 2.	Borderline Mentally ill<br>")
                                    ,$("<input type='radio' name='cgi_scorll' value='3'> 3.	Mildly ill<br>")
                                    ,$("<input type='radio' name='cgi_scorll' value='4'> 4.	Moderately ill<br>")
                                    ,$("<input type='radio' name='cgi_scorll' value='5'> 5.	Markedly ill<br>")
                                    ,$("<input type='radio' name='cgi_scorll' value='6'> 6.	Severely ill<br>")
                                    ,$("<input type='radio' name='cgi_scorll' value='7'> 7.	Extremely ill<br>"));
        $("#frmcgi").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: $.cookie('Readerurl') + "prcdrawAPI.php",
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
                $("#body_text").empty();
                AddBill("index_content");
                //$("#index_content").empty().load('content/add_user.html');

            })


        }));
    //});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["วันที่ประเมิน", "คะแนน CGI-S"];
    console.log(id);
    console.log($.cookie('hn'));
    var CTb = new createTableAjax();
    //RemovejQueryCookie('year')
    // GetjQueryCookie('year',nowyear)
    //CTb.FileDel('DelDrawItemAPI.php');
    //CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Drawlotitem.php?' + id, $.cookie('Readerurl') + 'tempSendDataAPI.php', column1
    CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_CGIscore.php?'+id, '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);


}
