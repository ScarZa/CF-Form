$("div#head-nav").empty().append($("<a class='navbar-brand' href='#' id='sidebarCollapse'><img src='images/icon_set2/compose.ico' width='35' class='d-inline-block align-top' alt=''><b style='color: #fff'> Assessment Form.v.1.0</b></a>")
                                ,$("<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>")
                                ,$("<div class='collapse navbar-collapse' id='navbarNavDropdown1'><ul class='navbar-nav' id='fontDropdown'></ul></div>")
                                ,$("<div class='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'><ul class='navbar-nav' id='backDropdown'></ul></div>"));
$("ul.navbar-nav#backDropdown").empty().append($("<li class='nav-item' id='log'></li>"));
$("nav#foot-nav").empty().append($("<span style='color: white'>Copyright &copy; 2018 <a class='linkfoot' href='https://www.facebook.com/thapanapong.deeudomchan' target='_blank'>ScarZ</a>.</span> All rights reserved.")
        ,$("<div class='pull-right hidden-xs'><span id='version' style='color: white'></span></div>"));
                    $("#version").append("<b>Version</b> 1.0");                                  
