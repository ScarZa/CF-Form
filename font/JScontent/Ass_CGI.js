function AssCGI(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();

    $("li#page").empty().text(" แบบประเมิน CGI-S")
    $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(" แบบประเมิน CGI");
    if($.cookie("an")!=''){
        $("#home").attr("onclick", "AssMENUIPD('#index_content');$('div#SW').hide();");
    }else{$("#home").attr("onclick", "AssMENU('#index_content');$('div#SW').hide();");}
    //$("li#prev").show();
    //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    $("#prev").hide();
    $("span.card-title").empty().append(" ประเมิน CGI");
    $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmcgi' id='frmcgi' method='post' enctype='multipart/form-data'>"
            + "<div class='row col-lg-12'><div class='col-lg-6' id='cgi-post'>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>คลินิกเฉพาะทาง</b></div>"
            + "<div id='cgi-clinic' class='card-body'></div></div><p>"
            + "<div class='card border-success'>"
            + "<div class='card-header'><b>คะแนน CGI</b></div>"
            + "<div id='cgi-scorll' class='card-body'></div></div>"
            + "<br><center><input type='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            + "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div></div></form>"));
            $.getJSON('../back/API/CGI_clinic.php', function (CGIdata) {
                
                for (var key in CGIdata) {
                    //if (CmD[key].id == check) { var select = 'selected'; } else { var select = ''; }
                    //option +="<option value='" + CmD[key].id + "' " + select + "> " + CmD[key].name + " </option>";
                    $("#cgi-clinic").append($("<input type='radio' name='cgi_clinic' value='"+CGIdata[key].clinic_code+"' required> "+CGIdata[key].clinic_name+"<br>"));
                } 
            });
            $("#cgi-scorll").append($("<input type='radio' name='cgi_score' value='1' required> 1. Normal not  at all ill<br>")
                                    ,$("<input type='radio' name='cgi_score' value='2' required> 2.	Borderline Mentally ill<br>")
                                    ,$("<input type='radio' name='cgi_score' value='3' required> 3.	Mildly ill<br>")
                                    ,$("<input type='radio' name='cgi_score' value='4' required> 4.	Moderately ill<br>")
                                    ,$("<input type='radio' name='cgi_score' value='5' required> 5.	Markedly ill<br>")
                                    ,$("<input type='radio' name='cgi_score' value='6' required> 6.	Severely ill<br>")
                                    ,$("<input type='radio' name='cgi_score' value='7' required> 7.	Extremely ill<br>"));

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='sex' value='"+$.cookie("sex")+"'>")
                                ,$("<input type='hidden' name='birthday' value='"+$.cookie("birthday")+"'>")
                                ,$("<input type='hidden' name='pdx' value='"+$.cookie("pdx")+"'>")
                                ,$("<input type='hidden' name='dx0' value='"+$.cookie("dx0")+"'>")
                                ,$("<input type='hidden' name='dx1' value='"+$.cookie("dx1")+"'>")
                                ,$("<input type='hidden' name='dx2' value='"+$.cookie("dx2")+"'>")
                                ,$("<input type='hidden' name='dx3' value='"+$.cookie("dx3")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_cgi'>"));                        
        $("#frmcgi").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcCGIAPI.php",
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
                AssCGI('#index_content',$.cookie('hn'));
                //$("#index_content").empty().load('content/add_user.html');

            })


        }));
    //});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["วันที่รับบริการ", "คะแนน CGI-S"];
    console.log($.cookie('hn'));
    console.log($.cookie('birthday'));
    console.log($.cookie('pdx'));
    console.log($.cookie('user'));
    var CTb = new createTableAjax();
    //RemovejQueryCookie('year')
    // GetjQueryCookie('year',nowyear)
    //CTb.FileDel('DelDrawItemAPI.php');
    //CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Drawlotitem.php?' + id, $.cookie('Readerurl') + 'tempSendDataAPI.php', column1
    CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_CGIscore.php?'+$.cookie('hn'), '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);

        var title1 = "ผลการประเมิน CGIS";
        var subtitle = "รายครั้ง";
        var unit = "คะแนน";
        $.getJSON('../back/API/graph_CGI.php',{data:$.cookie('hn')},function (data) { 
            var date = data.date
            
            var CCharts =  new AJAXCharts('sub-contentGr','line',title1,unit,date,'../back/API/DC_columnCGI.php?'+$.cookie('hn'),subtitle);
            $(CCharts.GetCL());
            });
}
