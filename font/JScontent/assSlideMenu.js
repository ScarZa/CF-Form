function AssSlideMenu(content, id = null) {


  $(content).empty().append($("<div class='sidebar-header'><img src='images/logo.png' width='95px' class='center'><p style='font-size:13px;text-align: center;'>โรงพยาบาลจิตเวชเลยราชนครินทร์</p></div>")
                              ,$("<ul class='list-unstyled components' id='list-menu'></ul>"));
  $("#list-menu").empty().append($("<li id='EMR-menu'></li>")
                                        , $("<li id='ER-menu'></li>")
                                        , $("<li id='CGI-menu'></li>")
                                        , $("<li id='SMIv-menu'></li>")
                                        , $("<li id='alcohol-menu'></li>")
                                        , $("<li id='child-menu'></li>")
                                        , $("<li id='older-menu'></li>")
                                        , $("<li id='law-menu'></li>")
                                        , $("<li id='depress-menu'></li>")
                                        , $("<li id='drug-menu'></li>")
                                        , $("<li id='social-menu'></li>")
                                        , $("<li id='culture-menu'></li>")
                                        , $("<li id='consult-menu'></li>"));                    
                                
                            $("li#EMR-menu").empty().append($("<a id='EMR' href='#'><img src='images/EMR.png' width='25'> EMR</center></a>"));
                            $("li#CGI-menu").empty().append($("<a id='cgi_menu' href='#'><img src='images/cgi.png' width='25'> ประเมิน CGI</center></a>"));
                            $("li#SMIv-menu").empty().append($("<a id='SMI-V' href='#'><img src='images/icon_set2/compose.ico' width='25'> SMI-V</center></a>"));
                            $("li#ER-menu").empty().append($("<a id='ER' href='#'><img src='images/ER.ico' width='25'> จิตเวชฉุกเฉิน</center></a>"));
                            $("li#alcohol-menu").empty().append($("<a href='#AlSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><img src='images/Drugs.jpg' width='25'> สุรา/ยาเสพติด</a>")
                                                              , $("<ul class='collapse list-unstyled' id='AlSubmenu'>"
                                                                + "<li><a id='alcohol_menu' href='#'><img src='images/Drugs.jpg' width='25'> แบบประเมินสุรา</a></li></ul> "));
                            $("li#child-menu").empty().append($("<a href='#childSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><img src='images/Son.ico' width='25'> คลินิคเด็ก</a>")
                                                              , $("<ul class='collapse list-unstyled' id='childSubmenu'>"
                                                                + "<li><a id='child' href='#'><img src='images/Son.ico' width='20'> บันทึก SNAP-IV</a></li>"
                                                                +"<li><a id='CDI' href='#'><img src='images/Son.ico' width='20'> แบบประเมิน CDI</a></li>"
                                                                +"</ul >"));
                            $("li#older-menu").empty().append($("<a href='#olderSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><img src='images/older.png' width='25'> คลินิคผู้สูงอายุ</a>")
                                                              , $("<ul class='collapse list-unstyled' id='olderSubmenu'>"
                                                                + "<li><a id='MMSE' href='#'><img src='images/older.png' width='20'> MMSE - Thai 2002</a></li>"
                                                                +"<li><a id='ADL' href='#'><img src='images/older.png' width='20'> ADL</a></li>"
                                                                +"<li><a id='NPI-Q' href='#'><img src='images/older.png' width='20'> NPI-Q thai</a></li>"
                                                                +"</ul> "));
                            $("li#law-menu").empty().append($("<a href='#LawSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'  title='ยังไม่มีครับ'><img src='images/prisoner.png' width='25'> นิติจิตเวช</a>")
                                                              , $("<ul class='collapse list-unstyled' id='LawSubmenu'>"
                                                                + "<li><a id='' href='#'><img src='images/Px.ico' width='20'> แบบประเมิน</a></li></ul > "));
                            $("li#depress-menu").empty().append($("<a id='depress' href='#'><img src='images/sad.ico' width='25'> คัดกรองซึมเศร้า</a>"));
                            $("li#drug-menu").empty().append($("<a href='#drugSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle' title='ประเมินยา High alert drug.'><img src='images/Medical.jpg' width='35'> ประเมินยา</a>")
                                                              , $("<ul class='collapse list-unstyled' id='drugSubmenu'>"
                                                                + "<li><a id='drug01' href='#'><img src='images/Px.ico' width='20'> ยา Clozapine</a></li>"
                                                                + "<li><a id='drug02' href='#'><img src='images/Px.ico' width='20'> ยา Lithium Carbonate</a></li>"
                                                                + "<li></li>"
                                                                + "<li></li>"
                                                                + "</ul > "));
                            $("li#social-menu").empty().append($("<a href='#socialSubmenu' data-toggle='collapse' aria-expanded='false' class='dropdown-toggle'><img src='images/social.jpg' width='25'> สังคมสงเคราะห์</a>")
                                                              , $("<ul class='collapse list-unstyled' id='socialSubmenu'>"
                                                                + "<li><a id='social' href='#'><img src='images/social.jpg' width='20'> สังคมสงเคราะห์</a></li>"
                                                                +"<li><a id='social02' href='#'><img src='images/social.jpg' width='20'> สังคมสงเคราะห์(เด็ก)</a></li>"
                                                                +"</ul > "));
                            $("li#culture-menu").empty().append($("<a id='culture' href='#'><img src='images/holyinvestor.png' width='25'> ประเมิน culture</a>"));
                            $("li#consult-menu").empty().append($("<a id='C-case' href='#' title='ส่งปรึกษาเคส'><img src='images/consult.ico' width='25'> Consult case</a>"));
                                
                                        $("a#social").attr("onclick", "$('#head-detial').show();AssSocial('#index_content');");
                                        $("a#social02").attr("onclick", "$('#head-detial').show();AssSocial02('#index_content');");
                                        $("a#drug01").attr("onclick", "$('#head-detial').show();AssClozapine('#index_content');"); 
                                        $("a#drug02").attr("onclick", "$('#head-detial').show();AssLithium('#index_content');");
                                        $("a#child").attr("onclick", "$('#head-detial').show();AssSNAP_IV('#index_content');");
                                        $("a#CDI").attr("onclick","$('#head-detial').show();AssCDI('#index_content');");
                                        $("a#alcohol_menu").attr("onclick","$('#head-detial').show();AssAlcohol('#index_content');");
                                        $("a#cigarette").attr("onclick","#");
                                        $("a#cgi_menu").attr("onclick","$('#head-detial').show();AssCGI('#index_content');");
                                        $("a#culture").attr("onclick","$('#head-detial').show();AssCulture('#index_content');");
                                        $("a#smi-v").attr("onclick","#");
                                        $("a#depress").attr("onclick","$('#head-detial').show();AssDepress('#index_content');");
                                        $("a#C-case").attr("onclick","$('#head-detial').show();AssC_Case('#index_content');");
                                        $("a#ER").attr("onclick","$('#head-detial').show();AssER('#index_content');");
                                        $("a#EMR").attr("onclick", "AssEMR('#index_content');");
                                        $("a#SMI-V").attr("onclick", "$('#head-detial').show();AssSMIV('#index_content');");
                                        $("a#MMSE").attr("onclick", "$('#head-detial').show();AssMMSE('#index_content');");
                                        $("a#ADL").attr("onclick", "$('#head-detial').show();AssADL('#index_content');");
                                        $("a#NPI-Q").attr("onclick", "$('#head-detial').show();AssNPIQ('#index_content');");
                                        
}
