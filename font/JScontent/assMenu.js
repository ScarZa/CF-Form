function AssMENU(content, id = null) {
    $(content).empty().append("<div class='row'><div id='menu' class='col-md-2 offset-md-5'></div></div>")
    $("div#menu").empty().append($("<div class='col-md-12 col-lg-12'><a id='alcohol' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมินผู้ป่วยสุรา</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='cigarette' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมินบุหรี่</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='cgi' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมิน CGI</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='smi-v' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมิน SMI-V</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='visit' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ข้อมูลเยี่ยมบ้าน</b></a></div>"));

                                $("a#alcohol").attr("onclick","#");
                                $("a#cigarette").attr("onclick","#");
                                $("a#cgi").attr("onclick","AssCGI('#index_content','"+$.cookie('hn')+"')");
                                $("a#smi-v").attr("onclick","#");
                                $("a#visit").attr("onclick","#");
}
