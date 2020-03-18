function AssMENUIPD(content, id = null) {
    $(content).empty().append("<div class='row'><div id='SW' class='col-md-2 offset-md-5'><a id='sw-menu' href='#'><center><img src='images/icon_set2/compose.ico' width='65'><p> แสดงแบบประเมิน</p></center></a></div><div id='menu' class='col-md-10 offset-md-1'></div></div>")
    $("div#menu").empty().append($("<div id='menu_row1' class='col-lg-12 row'></div><br>"));
            $("div#menu_row1").empty().append($("<div class='col-md-1 col-lg-1'></div><div class='col-md-2 col-lg-2'><a id='cgi' href='#'><center><img src='images/cgi.png' width='85'><p> ประเมิน CGI</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='alcohol' href='#' data-toggle='modal' data-target='#AlcoholModal'  title='ประเมินสุรา/ยาเสพติด'><center><img src='images/Drugs.jpg' width='85'><p> คลินิกสุรา/ยาเสพติด</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='depress' href='#'><center><img src='images/sad.ico' width='85'><p> คัดกรองซึมเศร้า</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='drug' href='#' data-toggle='modal' data-target='#DrugModal'  title='ประเมินยา High alert drug.'><center><img src='images/Medical.jpg' width='115'><p> ประเมินยา</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='C-case' href='#' title='ส่งปรึกษาเคส'><center><img src='images/consult.ico' width='85'><p> Consult case</p></center></a></div>")
                                        
                                        );

                                        $("a#alcohol").attr("onclick","AlcoholModal()");
                                        $("a#cigarette").attr("onclick","#");
                                        $("a#cgi").attr("onclick","AssCGI('#index_content')");
                                        $("a#drug").attr("onclick","DrugModal()");
                                        $("a#depress").attr("onclick","AssDepress('#index_content')");
                                        $("a#C-case").attr("onclick","AssC_Case('#index_content')");
}
