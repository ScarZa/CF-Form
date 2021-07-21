function AssDS(content, id = null,url = '../back/API/') {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบคัดกรองโรคซึมเศร้า";
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

        $("#contentGr").empty().append($("<form action='' name='frmdepress' id='frmdepress' method='post' enctype='multipart/form-data'>"
            + "<div class='col-lg-12'><div class='row alert alert-success' role='alert'>"
            +"<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ผู้ประเมิน : <select name='recorder' class='form-control select2' id='recorder' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>สถานที่รับบริการ : <select name='place' class='form-control select2' id='place' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ประเภทการคัดกรอง : <select name='screen-type' class='form-control select2' id='screen-type' required></select></div></div>"
            +"<div class='row col-lg-12'>"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>ประเภทผู้ป่วย : <select name='patient-type' class='form-control select2' id='patient-type' required></select></div> &nbsp;"
            + "<div class='row col-lg-3 col-md-3 col-sm-12'>กลุ่มผู้ป่วย : <select name='patient-group' class='form-control select2' id='patient-group' required></select></div></div>"
            + "</div></div>"
            + "<div class='row'><div class='row col-lg-12'><div class='col-lg-7' id='cgi-post'>"
            // + "<div class='card border-success'>"
            // + "<div class='card-header'><b>แบบคัดกรองโรคซึมเศร้า 2 คำถาม (2Q)</b></div>"
            // + "<div id='Question-1' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel2'>"
            + "<div class='card-header'><b>แบบประเมินโรคซึมเศร้า 9 คำถาม (9Q)</b></div>"
            + "<div id='Question-2' class='card-body'></div></div><p>"
            + "<div class='card border-success' id='panel3'>"
            + "<div class='card-header'><b>แบบประเมินการฆ่าตัวตาย 8 คำถาม (8Q)</b></div>"
            + "<div id='Question-3' class='card-body'></div></div><p>"
             + "<br><center><input type='submit' class='btn btn-success' value='ประเมิน'></center></div>"
            + "<div class='col-lg-5'><span class='row' id='sub-contentTB'></span><span class='row' id='sub-contentGr'></span></div></div></div></form>"));

            selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน',$.cookie("user"));
            selectMash('#place', 'place_Data.php', 'เลือกสถานที่',1);
            selectMash('#screen-type', 'screen_Data.php', 'เลือกประเภทการคัดกรอง',1);
            selectMash('#patient-group', 'patient_group_Data.php', 'เลือกกลุ่มผู้ป่วย',1);
            var option="<option value=''> เลือกประเภทผู้ป่วย </option><option value='1' selected> ผู้ป่วยนอก </option><option value='2'> ผู้ป่วยใน </option>";
               $("select#patient-type").empty().append(option);
               $(".select2").select2();

            var DP = new MaskDepress("#Question-2");
            DP.GetMaskD();
  
            var DP = new MaskSuiside("#Question-3");
            DP.GetMaskS();
            var total_9Q;
            var total_8Q;
            $("input[type=submit]").hide();
  if (id == 'D') {
    $("div#panel3").hide();
    $("a#process9Q").click(function(){
      var Q91 = parseInt($("input[type=radio][name=9Q-1]:checked").val());
      var Q92 = parseInt($("input[type=radio][name=9Q-2]:checked").val());
      var Q93 = parseInt($("input[type=radio][name=9Q-3]:checked").val());
      var Q94 = parseInt($("input[type=radio][name=9Q-4]:checked").val());
      var Q95 = parseInt($("input[type=radio][name=9Q-5]:checked").val());
      var Q96 = parseInt($("input[type=radio][name=9Q-6]:checked").val());
      var Q97 = parseInt($("input[type=radio][name=9Q-7]:checked").val());
      var Q98 = parseInt($("input[type=radio][name=9Q-8]:checked").val());
      var Q99 = parseInt($("input[type=radio][name=9Q-9]:checked").val());
      total_9Q = (Q91+Q92+Q93+Q94+Q95+Q96+Q97+Q98+Q99);
      $.getJSON(url+'res9q_Data.php',{data:total_9Q}, function (GD) { console.log(GD);
          $("b#res-9Q").empty().append("ได้ "+total_9Q+" คะแนน / ผลที่ได้ "+GD[0].name);
          $("#cgi-post").append($("<input type='hidden' name='res_9q' value='"+GD[0].id+"'>")
                              ,$("<input type='hidden' name='score9Q' value='"+total_9Q+"'>"));
      });
      if(total_9Q >= 7){
          $("div#panel3").hide();
          $("div#panel3").show();
          $("input[type=submit]").hide();
      }else{
          $("input[type=submit]").show();
      }
      });   
  } else if (id == 'S') {
    $("div#panel2").hide();
}
                        
                $("a#process8Q").click(function(){
                    var Q81 = parseInt($("input[type=radio][name=8Q-1]:checked").val());
                    var Q82 = parseInt($("input[type=radio][name=8Q-2]:checked").val());
                    var Q83 = parseInt($("input[type=radio][name=8Q-3]:checked").val());
                    var Q831 = parseInt($("input[type=radio][name=8Q-31]:checked").val());
                    var Q84 = parseInt($("input[type=radio][name=8Q-4]:checked").val());
                    var Q85 = parseInt($("input[type=radio][name=8Q-5]:checked").val());
                    var Q86 = parseInt($("input[type=radio][name=8Q-6]:checked").val());
                    var Q87 = parseInt($("input[type=radio][name=8Q-7]:checked").val());
                    var Q88 = parseInt($("input[type=radio][name=8Q-8]:checked").val());
                    total_8Q = (Q81+Q82+Q83+Q831+Q84+Q85+Q86+Q87+Q88);console.log(total_8Q);
                    $.ajax({type: "GET",
                            url: url+"res8q_Data.php",
                            data :{data:total_8Q},
                            success: function(R8q) { console.log(R8q);
                    $("b#res-8Q").empty().append("ได้ "+total_8Q+" คะแนน / ผลที่ได้ "+R8q[0].name);
                    $("#cgi-post").append($("<input type='hidden' name='score8Q' value='"+total_8Q+"'>")
                                        ,$("<input type='hidden' name='res_8q' value='"+R8q[0].id+"'>"));
                }});
                    $("input[type=submit]").show();
                    });    

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                ,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_DS'>"));                        
        $("#frmdepress").on('submit', (function (e) {
            e.preventDefault();
            var dataForm = new FormData(this);
            console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: url+"prc2q8q9qAPI.php",
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
                AssDS('#index_content',id,url);
                //$("#index_content").empty().load('content/add_user.html');

            })


        }));
    //});
    //$("a#adduser").attr("onclick","AddBrandModal();").attr("data-toggle","modal").attr("data-target","#AddBrandModal");                 
    var column1 = ["วันที่ประเมิน","คะแนน", "ผลการประเมิน"];
    console.log($.cookie('hn'));
    console.log($.cookie('birthday'));
    console.log($.cookie('pdx'));
    console.log($.cookie('user'));
    var CTb = new createTableAjax();
    //RemovejQueryCookie('year')
    // GetjQueryCookie('year',nowyear)
    //CTb.FileDel('DelDrawItemAPI.php');
    //CTb.GetNewTableAjax('sub-contentTB', '../back/API/DT_Drawlotitem.php?' + id, $.cookie('Readerurl') + 'tempSendDataAPI.php', column1
    CTb.GetNewTableAjax('sub-contentTB', url+'DT_Depress.php?'+$.cookie('hn'), url+'tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);

        var title1 = "ผลการประเมินซึมเศร้า";
        var subtitle = "รายครั้ง";
        var unit = "คะแนน";
        $.getJSON(url+'graph_9Q.php',{data:$.cookie('hn')},function (data) { console.log(data)
            var date = data.date
            var CChartsP =  new AJAXCharts('sub-contentGr','line',title1,unit,date,url+'DC_column9Q.php?'+$.cookie('hn'),subtitle,['#3ec613', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', 'yellow']);
            $(CChartsP.GetCL());
        }); 
}
