function AssMENUIPD(content, id = null) {
    $(content).empty().append("<div class='row'><div id='SW' class='col-md-2 offset-md-5'><a id='sw-menu' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> แสดงแบบประเมิน</b></a></div><div id='menu' class='col-md-2 offset-md-5'></div></div>")
    $("div#menu").empty().append($("<div class='col-md-12 col-lg-12'><a id='alcohol' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมินผู้ป่วยสุรา</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='cgi' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมิน CGI</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='depress' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> คัดกรองซึมเศร้า</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='drug' class='btn btn-success btn-block' href='#' data-toggle='modal' data-target='#DrugModal'><img src='images/medical_.png' width='25'><b> ประเมินยา</b></a></div><br>")
                                ,$("<div class='col-md-12 col-lg-12'><a id='C-case' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> Consult case</b></a></div><br>"));

                                $("a#alcohol").attr("onclick","AssAlcohol('#index_content')");
                                $("a#cigarette").attr("onclick","#");
                                $("a#cgi").attr("onclick","AssCGI('#index_content')");
                                $("a#culture").attr("onclick","AssCulture('#index_content')");
                                $("a#smi-v").attr("onclick","#");
                                // $("a#social").attr("onclick","AssSocial('#index_content')");
                                // $("a#social02").attr("onclick","AssSocial02('#index_content')");
                                $("a#test").attr("onclick","SoModal()");
                                $("a#depress").attr("onclick","AssDepress('#index_content')");
                                $("a#snap4").attr("onclick","AssSNAP_IV('#index_content')");
                                $("a#drug").attr("onclick","DrugModal()");
                                $("a#C-case").attr("onclick","AssC_Case('#index_content')");
}
