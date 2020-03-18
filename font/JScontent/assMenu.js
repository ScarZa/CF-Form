function AssMENU(content, id = null) {
    $(content).empty().append("<div class='row'><div id='SW' class='col-md-2 offset-md-5'><a id='sw-menu' href='#'><center><img src='images/icon_set2/compose.ico' width='65'><p> แสดงแบบประเมิน</p></center></a></div><div id='menu' class='col-md-10 offset-md-1'></div></div>")
    $("div#menu").empty().append($("<div id='menu_row1' class='col-lg-12 row'></div><br>")
                                ,$("<div id='menu_row2' class='col-lg-12 row'></div><br>")
                                ,$("<div id='menu_row3' class='col-lg-12 row'></div>"));
            $("div#menu_row1").empty().append($("<div class='col-md-1 col-lg-1'></div><div class='col-md-2 col-lg-2'><a id='cgi' href='#'><center><img src='images/cgi.png' width='85'><p> ประเมิน CGI</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='alcohol' href='#' data-toggle='modal' data-target='#AlcoholModal'  title='ประเมินสุรา/ยาเสพติด'><center><img src='images/Drugs.jpg' width='85'><p> คลินิกสุรา/ยาเสพติด</p></center></a></div>")
                                        //,$("<div class='col-md-12 col-lg-12'><a id='cigarette' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมินบุหรี่</b></a></div><br>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='snap4' href='#' data-toggle='modal' data-target='#ChildModal'  title='ประเมินเด็ก'><center><img src='images/Son.ico' width='85'><p>คลินิกเด็ก</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='older' href='#' title='ยังไม่มีครับ'><center><img src='images/older.png' width='85'><p>คลินิกผู้สูงอายุ</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='law' href='#' title='ยังไม่มีครับ'><center><img src='images/prisoner.png' width='85'><p>นิติจิตเวช</p></center></a></div><div class='col-md-1 col-lg-1'></div>")
                                        //,$("<div class='col-md-12 col-lg-12'><a id='smi-v' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> ประเมิน SMI-V</b></a></div><br>")
                                        
                                        // ,$("<div class='col-md-12 col-lg-12'><a id='social' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> สังคมสงเคราะห์</b></a></div><br>")
                                        // ,$("<div class='col-md-12 col-lg-12'><a id='social02' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> สังคมสงเคราะห์(เด็ก)</b></a></div><br>")
                                        
                                        
                                        );
            $("div#menu_row2").empty().append($("<div class='col-md-1 col-lg-1'></div><div class='col-md-2 col-lg-2'><a id='depress' href='#'><center><img src='images/sad.ico' width='85'><p> คัดกรองซึมเศร้า</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='drug' href='#' data-toggle='modal' data-target='#DrugModal'  title='ประเมินยา High alert drug.'><center><img src='images/Medical.jpg' width='115'><p> ประเมินยา</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='test' href='#' data-toggle='modal' data-target='#SoModal'><center><img src='images/social.jpg' width='85'><p> สังคมสงเคราะห์</p></center></a></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='culture' href='#'><center><img src='images/holyinvestor.png' width='85'><p> ประเมิน culture</p></a></center></div>")
                                        ,$("<div class='col-md-2 col-lg-2'><a id='C-case' href='#' title='ส่งปรึกษาเคส'><center><img src='images/consult.ico' width='85'><p> Consult case</p></center></a></div>")
                                        );

            $("div#menu_row3").empty().append($("<div class='col-md-1 col-lg-1'></div><div class='col-md-2 col-lg-2'><a id='ER' href='#'><center><img src='images/ER.ico' width='85'><p> ER</p></center></a></div>")
                                        );

                                        $("a#alcohol").attr("onclick","AlcoholModal()");
                                        $("a#cigarette").attr("onclick","#");
                                        $("a#cgi").attr("onclick","AssCGI('#index_content')");
                                        $("a#culture").attr("onclick","AssCulture('#index_content')");
                                        $("a#smi-v").attr("onclick","#");
                                        // $("a#social").attr("onclick","AssSocial('#index_content')");
                                        // $("a#social02").attr("onclick","AssSocial02('#index_content')");
                                        $("a#test").attr("onclick","SoModal()");
                                        $("a#drug").attr("onclick","DrugModal()");
                                        $("a#depress").attr("onclick","AssDepress('#index_content')");
                                        $("a#snap4").attr("onclick","ChildModal()");
                                        $("a#C-case").attr("onclick","AssC_Case('#index_content')");
                                        $("a#ER").attr("onclick","AssER('#index_content')");
                                        
}
