function AssHeadPatient(content, id = null,url = '../back/API/') {
                $.cookie("hn", '');
                $.cookie("vstdate", '');
                $.cookie("sex", '');
                $.cookie("birthday", '');
                $.cookie("pdx", '');
                $.cookie("dx0", '');
                $.cookie("dx1", '');
                $.cookie("dx2", '');
                $.cookie("dx3", '');
    console.log($.cookie("hn"));
  $.getJSON(url+"detail_headpatientAPI.php", { data: $.cookie("vn"), data2: $.cookie("an") }, function (data) { console.log(data)
                $.cookie("hn", data[0].hn);
                $.cookie("vstdate", data[0].vstdate);
                $.cookie("sex", data[0].sex);
                $.cookie("birthday", data[0].birthday);
                $.cookie("pdx", data[0].pdx);
                $.cookie("dx0", data[0].dx0);
                $.cookie("dx1", data[0].dx1);
                $.cookie("dx2", data[0].dx2);
      $.cookie("dx3", data[0].dx3);
      console.log($.cookie("hn"));
      if ($.cookie("hn") == undefined || $.cookie("hn") == null || $.cookie("hn") == '') {
          alert('ดึงข้อมูลผู้ป่วยไม่สำเร็จ กรุณาเลือกผู้ป่วยอีกครั้ง !!!');
          $("body").attr("onLoad", "KillMe()");} else {
          $(content).empty().append($("<div class='card border-warning'><div id='' class='card-body head-color'>"
              + "<div class='row'><div class='row col-lg-12 col-md-12 col-sm-12'>"
              + "<div class='col-lg-1 col-md-2 col-sm-3'> <img id='pics-panel' width='80'></div>"
              + "<div class='row col-lg-11 col-md-10 col-sm-9'>"
              + "<span  class='row col-lg-12 col-md-12 col-sm-12' id=''>"
              + "<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-2 col-md-4 col-sm-4' style='text-align:right;'><b>ชื่อ-สกุล : </b></div><div class='row col-lg-3 col-md-8 col-sm-8'> <b>" + data[0].fullname + "</b></div>"
              + "<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>HN : </b></div><div class='row col-lg-2 col-md-8 col-sm-8'> <b>" + data[0].hn + "</b></div>"
              + "<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>CID : </b></div><div class='row col-lg-2 col-md-8 col-sm-8'> " + data[0].cid + "</div></div > "
              + "<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-2 col-md-4 col-sm-4' style='text-align:right;'><b>วันเกิด : </b></div><div class='row col-lg-2 col-md-8 col-sm-8'> " + data[0].bd + "</div>"
              + "<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>อายุ : </b></div><div class='row col-lg-2 col-md-8 col-sm-8'> " + data[0].age + "</div>"
              + "<div class='col-lg-2 col-md-4 col-sm-4' style='text-align:right;'><b>สิทธิการรักษา : </b></div><div class='row col-lg-3 col-md-8 col-sm-8'> " + data[0].ptname + "</div></div > "
              + "<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-2 col-md-4 col-sm-4' style='text-align:right;'><b>การวินิจฉัย : </b></div><div class='row col-lg-9 col-md-8 col-sm-8'> " + data[0].pdx + " " + data[0].dx0
              + " " + data[0].dx1 + " " + data[0].dx2 + " " + data[0].dx3 + " " + data[0].dx4 + " " + data[0].dx5 + "</div></div>"
              + "</span></div></div></div>"
              // + "<div class='row col-lg-12'>&nbsp;</div>"
              // + "<div class='col-lg-12'>"
              // + "<p class='col-lg-12 alert alert-info'><b>CC : </b>" + data[0].cc + "</p>"
              // + "<p class='col-lg-12 alert alert-primary' role='alert'><b>HPI : </b>" + data[0].hpi + "</p>"
              // + "<p class='col-lg-12'><b>PMH : </b>" + data[0].pmh + "</p></div>"
              //+ "<div class='row col-lg-12'>&nbsp;</div>"
              + "<div class='col-lg-12 alert alert-danger' id='alert_aear'>"
              //+ "<p class='alert alert-danger' id='alert_aear'></p>"
              + "</div></div> "
              + "</div></div></div>"));
      }
        $.getJSON(url+'check_image.php', { data1: data[0].hn }, function (datai) { 
            if (datai.cc == '') { var img = '../images/person.png' } else { var img = url+'show_image.php?hn=' + data[0].hn }
            $("#pics-panel").attr("src", img)
        });
    
      $("#alert_aear").append("<div class='row'><div class='col-lg-1 col-md-3 col-sm-3' style='text-align:right;'><b>CGI-S : </b></div><div class='row col-lg-1 col-md-1 col-sm-1'>"+data[0].cgi+"</div>"
      +"<div class='col-lg-1 col-md-3 col-sm-3' style='text-align:right;'><b>9Q : </b></div><div class='row col-lg-1 col-md-1 col-sm-1'> "+data[0].Q9+"</div>"
          + "<div class='col-lg-1 col-md-3 col-sm-3' style='text-align:right;'><b>8Q : </b></div><div class='row col-lg-1 col-md-1 col-sm-1'> " + data[0].Q8 + "</div></div>")
          if (data[0].chk_1 +data[0].chk_2 +data[0].chk_3 +data[0].chk_4>0) {
            
      $("#alert_aear").append("<hr><div class='row' id='smiv'><div class='col-lg-1 col-md-3 col-sm-3' style='text-align:right;''><b style='color: red'>SMI-V :</b></div><b class='col-sm-11' id='smiv-detial'></b></div><hr>");
            
if (data[0].smi1_2 != '') { $("#smiv-detial").append("1.2 "+data[0].smi1_2 + "<br>") }
if (data[0].smi1_3 != '') { $("#smiv-detial").append("1.3 "+data[0].smi1_3 + "<br>") }
if (data[0].smi1_4 != '') { $("#smiv-detial").append("1.4 "+data[0].smi1_4 + "<br>") }
if (data[0].smi1_5 != '') { $("#smiv-detial").append("1.5 "+data[0].smi1_5 + "<br>") }
if (data[0].smi1_6 != '') { $("#smiv-detial").append("1.6 "+data[0].smi1_6 + "<br>") }
if (data[0].smi1_7 != '') { $("#smiv-detial").append("1.7 "+data[0].smi1_7 + "<br>") }
if (data[0].smi1_8 != '') { $("#smiv-detial").append("1.8 "+data[0].smi1_8 + "<br>") }
if (data[0].smi1_9 != '') { $("#smiv-detial").append("1.9 "+data[0].smi1_9 + "<br>") }
if (data[0].smi1_10 != '') { $("#smiv-detial").append("1.10 "+data[0].smi1_10 + "<br>") }
if (data[0].smi1_11 != '') { $("#smiv-detial").append("1.11 "+data[0].smi1_11 + "<br>") }
if (data[0].t1_12 != '') { $("#smiv-detial").append("1.12 "+data[0].t1_12 + "<br>") }
if (data[0].smi2_1 != '') { $("#smiv-detial").append("2.1 "+data[0].smi2_1 + "<br>") }
if (data[0].smi2_2 != '') { $("#smiv-detial").append("2.2 "+data[0].smi2_2 + "<br>") }
if (data[0].smi2_3 != '') { $("#smiv-detial").append("2.3 "+data[0].smi2_3 + "<br>") }
if (data[0].smi2_4 != '') { $("#smiv-detial").append("2.4 "+data[0].smi2_4 + "<br>") }
if (data[0].smi2_5 != '') { $("#smiv-detial").append("2.5 "+data[0].smi2_5 + "<br>") }
if (data[0].smi2_6 != '') { $("#smiv-detial").append("2.6 "+data[0].smi2_6 + "<br>") }
if (data[0].smi2_7 != '') { $("#smiv-detial").append("2.7 "+data[0].smi2_7 + "<br>") }
if (data[0].smi2_8 != '') { $("#smiv-detial").append("2.8 "+data[0].smi2_8 + "<br>") }
if (data[0].smi2_9 != '') { $("#smiv-detial").append("2.9 "+data[0].smi2_9 + "<br>") }
if (data[0].smi2_10 != '') { $("#smiv-detial").append("2.10 "+data[0].smi2_10 + "<br>") }
if (data[0].smi2_11 != '') { $("#smiv-detial").append("2.11 "+data[0].smi2_11 + "<br>") }
if (data[0].t2_12 != '') { $("#smiv-detial").append("2.12 "+data[0].t2_12 + "<br>") }
if (data[0].smi3_1 != '') { $("#smiv-detial").append("3.1 "+data[0].smi3_1 + "<br>") }
if (data[0].smi3_2 != '') { $("#smiv-detial").append("3.2 "+data[0].smi3_2 + "<br>") }
if (data[0].t3_3 != '') { $("#smiv-detial").append("3.3 "+data[0].t3_3 + "<br>") }
if (data[0].smi4_1 != '') { $("#smiv-detial").append("4.1 "+data[0].smi4_1 + "<br>") }
if (data[0].smi4_2 != '') { $("#smiv-detial").append("4.2 "+data[0].smi4_2 + "<br>") }
if (data[0].smi4_3 != '') { $("#smiv-detial").append("4.3 "+data[0].smi4_3 + "<br>") }
if (data[0].smi4_4 != '') { $("#smiv-detial").append("4.4 "+data[0].smi4_4 + "<br>") }
if (data[0].smi5_1 != '') { $("#smiv-detial").append("5.1 "+data[0].smi5_1 + "<br>") }
if (data[0].smi5_2 != '') { $("#smiv-detial").append("5.2 "+data[0].smi5_2 + "<br>") }
if (data[0].smi5_3 != '') { $("#smiv-detial").append("5.3 "+data[0].smi5_3 + "<br>") }
if (data[0].smi5_4 != '') { $("#smiv-detial").append("5.4 "+data[0].smi5_4 + "<br>") }
        
        }
      if(data[0].Clozapine100 != null){
        $("#alert_aear").append("<b style='color: red'>High Alert Drug : </b>"+data[0].Clozapine100+" (สั่งล่าสุด "+data[0].Clozapine100Date+")<br>");
    }
    if(data[0].Clozapine25 != null){
        $("#alert_aear").append("<b style='color: red'>High Alert Drug : </b>"+data[0].Clozapine25+" (สั่งล่าสุด "+data[0].Clozapine25Date+")<br>");
    }
    if(data[0].Carbamazepine200 != null){
        $("#alert_aear").append("<b style='color: red'>High Alert Drug : </b>"+data[0].Carbamazepine200+" (สั่งล่าสุด "+data[0].Carbamazepine200Date+")<br>");
    }
    if(data[0].LithiumCarbonate300 != null){
        $("#alert_aear").append("<b style='color: red'>High Alert Drug : </b>"+data[0].LithiumCarbonate300+" (สั่งล่าสุด "+data[0].LithiumCarbonate300Date+")<br>");
    }
    if(data[0].SodiumValproate200 != null){
        $("#alert_aear").append("<b style='color: red'>High Alert Drug : </b>"+data[0].SodiumValproate200+" (สั่งล่าสุด "+data[0].SodiumValproate200Date+")<br>");
    }
    if(data[0].SodiumValproate200CHRONO != null){
        $("#alert_aear").append("<b style='color: red'>High Alert Drug : </b>"+data[0].SodiumValproate200CHRONO+" (สั่งล่าสุด "+data[0].SodiumValproate200CHRONODate+")<br>");
    }
    if(data[0].SodiumValproate500 != null){
        $("#alert_aear").append("<b style='color: red'>High Alert Drug : </b>"+data[0].SodiumValproate500+" (สั่งล่าสุด "+data[0].SodiumValproate500Date+")");
    }
    
  });
  
}
