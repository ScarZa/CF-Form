function AssHeadPatient(content, id = null) {
    
  $.getJSON('../back/API/detail_headpatientAPI.php', { data: $.cookie("vn"), data2: $.cookie("an") }, function (data) {
                $.cookie("hn", data[0].hn);
                $.cookie("vstdate", data[0].vstdate);
                $.cookie("sex", data[0].sex);
                $.cookie("birthday", data[0].birthday);
                $.cookie("pdx", data[0].pdx);
                $.cookie("dx0", data[0].dx0);
                $.cookie("dx1", data[0].dx1);
                $.cookie("dx2", data[0].dx2);
                $.cookie("dx3", data[0].dx3);
    $(content).empty().append($("<div class='card border-warning'><div id='' class='card-body head-color'>"
      +"<div class='row'><div class='row col-lg-12 col-md-12 col-sm-12'>"
      +"<div class='col-lg-1 col-md-12 col-sm-12'> <img src='../back/API/show_image.php?hn="+$.cookie("hn")+"' width='80' /></div>"
      +"<div class='row col-lg-11 col-md-12 col-sm-12'>"
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
      +"</div></div> "
      + "</div></div></div>"));
    
      $("#alert_aear").append("<div class='row'><div class='col-lg-1 col-md-3 col-sm-3' style='text-align:right;'><b>CGI-S : </b></div><div class='row col-lg-1 col-md-1 col-sm-1'>"+data[0].cgi+"</div>"
      +"<div class='col-lg-1 col-md-3 col-sm-3' style='text-align:right;'><b>9Q : </b></div><div class='row col-lg-1 col-md-1 col-sm-1'> "+data[0].Q9+"</div>"
      +"<div class='col-lg-1 col-md-3 col-sm-3' style='text-align:right;'><b>8Q : </b></div><div class='row col-lg-1 col-md-1 col-sm-1'> "+data[0].Q8+"</div></div>")
    
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
