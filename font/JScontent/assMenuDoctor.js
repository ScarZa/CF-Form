function AssMENUDoctor(content, id = null) {
    $(content).empty().append("<div class='row'><div id='SW' class='col-md-2 offset-md-5'><a id='sw-menu' href='#'><center><img src='images/icon_set2/compose.ico' width='65'><p> แสดงแบบประเมิน</p></center></a></div><div id='menu' class='col-md-10 offset-md-1'></div></div>")
    $("div#menu").empty().append($("<div id='menu_row1' class='col-lg-12 row'></div><br>")
                                ,$("<div id='menu_row2' class='col-lg-12 row'></div><br>")
                                ,$("<div id='menu_row3' class='col-lg-12 row'></div>"));
            $("div#menu_row1").empty().append($("<div class='col-md-12 col-lg-12'><center><a id='Doctor01' href='#'><img src='images/Doctor.ico' width='85'><p> Doctor</p></a></center></div>")
                                            ,$("<div class='col-md-12 col-lg-12'><a id='EMR' href='#'><center><img src='images/EMR.png' width='85'><p> EMR</p></center></a></div>")
                                        );

                                        $("a#Doctor01").attr("onclick","AssDoc01('#index_content')");
                                        $("a#EMR").attr("onclick","AssEMR('#index_content')");
                                        
}
