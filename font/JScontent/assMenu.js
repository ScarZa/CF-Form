function AssMENU(content, id = null) {
    $(content).empty().append("<div class='row'><div id='SW' class='col-md-2 offset-md-5'><a id='sw-menu' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> แสดงแบบประเมิน</b></a></div><div id='menu' class='col-md-2 offset-md-5'></div></div>")
    $("div#menu").empty().append($("<div class='col-md-12 col-lg-12'><a id='alcohol' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมินผู้ป่วยสุรา</b></a></div><br>")
                                //,$("<div class='col-md-12 col-lg-12'><a id='cigarette' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมินบุหรี่</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='cgi' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมิน CGI</b></a></div><br>")
                                //,$("<div class='col-md-12 col-lg-12'><a id='smi-v' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมิน SMI-V</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='culture' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมิน culture</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='social' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> สังคมสงเคราะห์</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='depress' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> คัดกรองซึมเศร้า</b></a></div>"));

                                $("a#alcohol").attr("onclick","AssAlcohol('#index_content')");
                                $("a#cigarette").attr("onclick","#");
                                $("a#cgi").attr("onclick","AssCGI('#index_content')");
                                $("a#culture").attr("onclick","AssCulture('#index_content')");
                                $("a#smi-v").attr("onclick","#");
                                $("a#social").attr("onclick","AssSocial('#index_content')");
                                $("a#depress").attr("onclick","AssDepress('#index_content')");
}
