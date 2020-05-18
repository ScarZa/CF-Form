function AssDoc01(content, id = null) {
    $("#head-detial").hide();
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบบันทึกประวัติการรักษา  รพจ.12";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // //$("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    
    // //if($.cookie("an")!=''){
    //     $("#home").attr("onclick", "AssMENUDoctor('#index_content');$('div#SW').hide();");
    // //}else{$("#home").attr("onclick", "AssMENU('#index_content');$('div#SW').hide();");}
    
    // //$("li#prev").show();
    // //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    // $("#prev").hide();
    $("span.card-title").empty().append(title);
    // $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmDoc01' id='frmDoc01' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            //+ "<div class='card border-dark'>"
            //+ "<div class='card-header'><b>ข้อมูลคนไข้</b></div>"
            //+ "<div id='P-data' class='card-body'></div></div><p>"
            + "<div id='P-data'></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $.getJSON('../back/API/detail_DoctorpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
            $("#P-data").append($("<div class='card border-primary'><div class='card-header'><b>ข้อมูลทั่วไป</b></div><div id='P-data' class='card-body'>"
                                    +"<div class='row'><div class='row col-lg-12'><div class='row col-lg-10'>"
                                    +"<span  class='row col-lg-12' id='DP'>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ชื่อ-สกุล : </b></div><div class='row col-lg-3'> <b>"+data[0].fullname+"</b></div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>HN : </b></div><div class='row col-lg-4'> <b>"+data[0].hn+"</b></div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>เลขบัตรประชาชน : </b></div><div class='row col-lg-2'> "+data[0].cid+"</div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>วันเกิด : </b></div><div class='row col-lg-2'> "+data[0].birthday+"</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>อายุ : </b></div><div class='row col-lg-2'> "+data[0].age+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>สถานะภาพ : </b></div><div class='row col-lg-2'> "+data[0].mrname+"</div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>สิทธิการรักษา : </b></div><div class='row col-lg-6'> "+data[0].ptname+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ที่อยู่ : </b></div><div class='row col-lg-9'> "+data[0].informaddr+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>การวินิจฉัย : </b></div><div class='row col-lg-9'> "+data[0].pdx+" "+data[0].dx0
                                    +" "+data[0].dx1+" "+data[0].dx2+" "+data[0].dx3+" "+data[0].dx4+" "+data[0].dx5+"</div></div>" 
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>น้ำหนัก : </b></div><div class='row col-lg-2'>"+data[0].bw+" ก.ก.</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>สูง : </b></div><div class='row col-lg-2'> "+data[0].height+" ซ.ม. </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>ฺBMI : </b></div><div class='row col-lg-2'> "+data[0].bmi+"</div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>Temp. : </b></div><div class='row col-lg-2'>"+data[0].temp+"  ํc</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>PR : </b></div><div class='row col-lg-2'> "+data[0].pr+" /min. </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>RR : </b></div><div class='row col-lg-2'> "+data[0].rr+" /min. </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>BP : </b></div><div class='row col-lg-2'> "+data[0].bps+"/"+data[0].bpd+" mmHg. </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>CGI-S : </b></div><div class='row col-lg-2'>"+data[0].cgi+"</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>9Q : </b></div><div class='row col-lg-2'> "+data[0].Q9+"</div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>8Q : </b></div><div class='row col-lg-2'> "+data[0].Q8+"</div></div></span></div> "
                                    
                                    +"<div class='col-lg-2 block'> <img src='../back/API/show_image.php?hn="+$.cookie("hn")+"' width='150' /></div></div>"
                                    +"<div class='row col-lg-12'>&nbsp;</div>"
                                    +"<div class='col-lg-12'>"
                                    +"<p class='col-lg-12 alert alert-info'><b>CC : </b>"+data[0].cc+"</p>"
                                    +"<p class='col-lg-12 alert alert-primary' role='alert'><b>HPI : </b>"+data[0].hpi+"</p>"
                                    +"<p class='col-lg-12'><b>PMH : </b>"+data[0].pmh+"</p></div></div></div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>บันทึกทางการแพทย์</b></div><div id='P-data' class='card-body'>"
                                    +"<div>"
                                    //+"<div class='form-group'><label class='col-form-label'><b>แพทย์บันทึก </b></label></div>"
                                    +"<textarea name='doc_note' id='doc_note' class='form-control' placeholder='แพทย์บันทึกรายละเอียด'></textarea>"
                                +"</div>"
                                //+"<hr>"
                                +"<div class='form-group row'><label class='col-sm-5 col-form-label'><u><b>Physical Examination </b></u></label></div>"
                                +"<div class='form-group row'><label class='col-lg-2 col-form-label'><b>GA </b></label><div class='col-lg-10'><input type='text' name='GA' id='GA' class='form-control' placeholder=''></div></div>"
                                +"<div class='form-group row'><label class='col-sm-2 col-form-label'><b>HEENT </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='heent_chk' value='N'checked required><span class='lbl'> Normal</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heent_chk' value='Y' required><span class='lbl'> Abnormal</span></label></div>"
                                    +"<div class='col-sm-6'><input type='text' name='heent' id='heent' class='form-control' placeholder=''></div></div>"
                                //+"<hr>"
                                +"<div class='form-group row'><label class='col-sm-2 col-form-label'><b>HEART </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='heart_chk' value='N'checked required><span class='lbl'> Normal</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='heart_chk' value='Y' required><span class='lbl'> Abnormal</span></label></div>"
                                    +"<div class='col-sm-6'><input type='text' name='heart' id='heart' class='form-control' placeholder=''></div></div>"
                                //+"<hr>"
                                +"<div class='form-group row'><label class='col-sm-2 col-form-label'><b>LUNG </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='lung_chk' value='N'checked required><span class='lbl'> Normal</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='lung_chk' value='Y' required><span class='lbl'> Abnormal</span></label></div>"
                                    +"<div class='col-sm-6'><input type='text' name='lung' id='lung' class='form-control' placeholder=''></div></div>"
                                //+"<hr>"
                                +"<div class='form-group row'><label class='col-sm-2 col-form-label'><b>Abd. </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='abd_chk' value='N'checked required><span class='lbl'> Normal</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='abd_chk' value='Y' required><span class='lbl'> Abnormal</span></label></div>"
                                    +"<div class='col-sm-6'><input type='text' name='abd' id='abd' class='form-control' placeholder=''></div></div>"
                                //+"<hr>"
                                +"<div class='form-group row'><label class='col-sm-2 col-form-label'><b>Ext </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='ext_chk' value='N'checked required><span class='lbl'> Normal</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='ext_chk' value='Y' required><span class='lbl'> Abnormal</span></label></div>"
                                    +"<div class='col-sm-6'><input type='text' name='ext' id='ext' class='form-control' placeholder=''></div></div>"
                                //+"<hr>"
                                +"<div class='form-group row'><label class='col-sm-2 col-form-label'><b>Neuro </b></label><div class='col-sm-2'><label><input class='ace' type='radio' name='neuro_chk' value='N'checked required><span class='lbl'> Normal</span></label></div><div class='col-sm-2'><label><input class='ace' type='radio' name='neuro_chk' value='Y' required><span class='lbl'> Abnormal</span></label></div>"
                                    +"<div class='col-sm-6'><input type='text' name='neuro' id='neuro' class='form-control' placeholder=''></div></div>"
                                +"</div></div><p></p>")
//////////// Tab area /////////////                                
                                ,$("<div class='card border-info'><div class='card-header'><b>Mental Status Examination</b></div><div id='P-data' class='card-body'>"
                                    +"<nav>"
                                    +"<div class='nav nav-tabs' id='nav-tab' role='tablist'>"
                                    +"<a class='nav-item nav-link active' id='nav-general-tab' data-toggle='tab' href='#nav-general' role='tab' aria-controls='nav-general' aria-selected='true'>ทั่วไป</a>"
                                    +"<a class='nav-item nav-link' id='nav-child-tab' data-toggle='tab' href='#nav-child' role='tab' aria-controls='nav-child' aria-selected='false'>เด็ก</a>"
                                    +"</div>"
                                    +"</nav>"
                                    +"<div class='tab-content' id='myTabContent'>"
                                    +"<div class='tab-pane fade show active' id='nav-general' role='tabpanel' aria-labelledby='nav-general-tab'>.1..</div>"
                                    +"<div class='tab-pane fade' id='nav-child' role='tabpanel' aria-labelledby='nav-child-tab'> โปรดติดตามตอนต่อไป (To be continous!!!)</div>"
                                    +"</div></div></div>")
//////////// End Tab area /////////////                                    
                                ,$("<div>"
                                    +"<div class='form-group'><label class='col-form-label'><b>Progress Note </b></label></div>"
                                    +"<textarea name='progress_note' id='progress_note' class='form-control' placeholder='Progress Note'></textarea>"
                                    +"</div>")
                                                                            );

               
                                    var DG = new AssDocGeneral("#nav-general");
                                    DG.GetDG();
                                $("input#heent").hide();
                                $("input#heart").hide(); 
                                $("#lung").hide();
                                $("#abd").hide();
                                $("#ext").hide();
                                $("#neuro").hide();
                                ///// control Doc general ///////
                                $("#psych").hide();
                                $("#speech").hide();
                                $("#MA_group").hide();
                                $("#FT_group").hide();
                                $("#CT_group").hide();
                                $("#perception_group").hide(); 
                                $("#Halluc").hide();  
                                $("#Illusion").hide();
                                $("#good").hide();
                                $("#Orientaion").hide();
                                $("#Gemeral").hide();
                                $("#Abstract").hide();
                                $("#Attention").hide();
                                ///// End control Doc general ///////
                                $("input[type=radio][name=heent_chk]").click(function(){
                                    if($("input[type=radio][name=heent_chk]:checked").val()=='Y'){$("#heent").show();}else{$("#heent").hide();}
                                    });
                                $("input[type=radio][name=heart_chk]").click(function(){
                                    if($("input[type=radio][name=heart_chk]:checked").val()=='Y'){$("#heart").show();}else{$("#heart").hide();}
                                    });
                                $("input[type=radio][name=lung_chk]").click(function(){
                                    if($("input[type=radio][name=lung_chk]:checked").val()=='Y'){$("#lung").show();}else{$("#lung").hide();}
                                    });
                                $("input[type=radio][name=abd_chk]").click(function(){
                                    if($("input[type=radio][name=abd_chk]:checked").val()=='Y'){$("#abd").show();}else{$("#abd").hide();}
                                    });
                                $("input[type=radio][name=ext_chk]").click(function(){
                                    if($("input[type=radio][name=ext_chk]:checked").val()=='Y'){$("#ext").show();}else{$("#ext").hide();}
                                    });
                                $("input[type=radio][name=neuro_chk]").click(function(){
                                    if($("input[type=radio][name=neuro_chk]:checked").val()=='Y'){$("#neuro").show();}else{$("#neuro").hide();}
                                    });
                                $("input[type=radio][name=psych_chk]").click(function(){
                                    if($("input[type=radio][name=psych_chk]:checked").val()=='Y'){$("#psych").show();}else{$("#psych").hide();}
                                    });   
                                $("input[type=radio][name=speech_chk]").click(function(){
                                    if($("input[type=radio][name=speech_chk]:checked").val()=='Y'){$("#speech").show();}else{$("#speech").hide();}
                                    });   
                                $("input[type=radio][name=MA_chk]").click(function(){
                                    if($("input[type=radio][name=MA_chk]:checked").val()=='Y'){$("#MA_group").show();}else{$("#MA_group").hide();}
                                    });   
                                $("input[type=radio][name=FT_chk]").click(function(){
                                    if($("input[type=radio][name=FT_chk]:checked").val()=='Y'){$("#FT_group").show();}else{$("#FT_group").hide();}
                                    });
                                $("input[type=radio][name=CT_chk]").click(function(){
                                    if($("input[type=radio][name=CT_chk]:checked").val()=='Y'){$("#CT_group").show();}else{$("#CT_group").hide();}
                                    }); 
                                $("input[type=radio][name=perception_chk]").click(function(){
                                    if($("input[type=radio][name=perception_chk]:checked").val()=='Y'){$("#perception_group").show();}else{$("#perception_group").hide();}
                                    });  
                                $("input[type=checkbox][name=percep_1]").click(function(){
                                    if($("input[type=checkbox][name=percep_1]:checked").prop("checked") == true){$("input#Halluc").show();}else{$("input#Halluc").hide();}
                                });
                                $("input[type=checkbox][name=percep_2]").click(function(){
                                    if($("input[type=checkbox][name=percep_2]:checked").prop("checked") == true){$("input#Illusion").show();}else{$("input#Illusion").hide();}
                                });
                                $("input[type=radio][name=IJ_chk]").click(function(){
                                    if($("input[type=radio][name=IJ_chk]:checked").val()=='3'){$("#good").show();}else{$("#good").hide();}
                                });
                                $("input[type=checkbox][name=SC_1]").click(function(){
                                    if($("input[type=checkbox][name=SC_1]:checked").prop("checked") == true){$("input#Orientaion").show();}else{$("input#Orientaion").hide();}
                                });
                                $("input[type=checkbox][name=SC_2]").click(function(){
                                    if($("input[type=checkbox][name=SC_2]:checked").prop("checked") == true){$("input#Gemeral").show();}else{$("input#Gemeral").hide();}
                                });
                                $("input[type=checkbox][name=SC_3]").click(function(){
                                    if($("input[type=checkbox][name=SC_3]:checked").prop("checked") == true){$("input#Abstract").show();}else{$("input#Abstract").hide();}
                                });
                                $("input[type=checkbox][name=SC_4]").click(function(){
                                    if($("input[type=checkbox][name=SC_4]:checked").prop("checked") == true){$("input#Attention").show();}else{$("input#Attention").hide();}
                                });           

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_doc01'>"));

        var idsymp = id;
        if(idsymp != null){
            $.getJSON('../back/API/detail_DoctorCheckAPI.php',{data : idsymp},function (data) {
                $("#doc_note").val(data[0].doc_note);
                $("#GA").val(data[0].GA);
                if(data[0].heent_chk == 'Y'){
                    $("input[type=radio][name=heent_chk][value='Y']").attr("checked","checked");
                    $("input#heent").show();
                    $("input#heent").val(data[0].heent);
                }
                if(data[0].heart_chk == 'Y'){
                    $("input[type=radio][name=heart_chk][value='Y']").attr("checked","checked");
                    $("input#heart").show();
                    $("input#heart").val(data[0].heart);
                }
                if(data[0].lung_chk == 'Y'){
                    $("input[type=radio][name=lung_chk][value='Y']").attr("checked","checked");
                    $("input#lung").show();
                    $("input#lung").val(data[0].lung);
                }
                if(data[0].abd_chk == 'Y'){
                    $("input[type=radio][name=abd_chk][value='Y']").attr("checked","checked");
                    $("input#abd").show();
                    $("input#abd").val(data[0].abd);
                }
                if(data[0].ext_chk == 'Y'){
                    $("input[type=radio][name=ext_chk][value='Y']").attr("checked","checked");
                    $("input#ext").show();
                    $("input#ext").val(data[0].ext);
                }
                if(data[0].neuro_chk == 'Y'){
                    $("input[type=radio][name=neuro_chk][value='Y']").attr("checked","checked");
                    $("input#neuro").show();
                    $("input#neuro").val(data[0].neuro);
                }
                if(data[0].psych_chk == 'Y'){
                    $("input[type=radio][name=psych_chk][value='Y']").attr("checked","checked");
                    $("input#psych").show();
                    $("input#psych").val(data[0].psych);
                }
                if(data[0].speech_chk == 'Y'){
                    $("input[type=radio][name=speech_chk][value='Y']").attr("checked","checked");
                    $("input#speech").show();
                    $("input#speech").val(data[0].speech);
                }
                if(data[0].MA_chk == 'Y'){
                    $("input[type=radio][name=MA_chk][value='Y']").attr("checked","checked");
                    $("div#MA_group").show();
                    if(data[0].MA_1 == '1'){$("input[type=checkbox][name=MA_1]").attr("checked","checked");}
                    if(data[0].MA_2 == '2'){$("input[type=checkbox][name=MA_2]").attr("checked","checked");}
                }
                if(data[0].FT_chk == 'Y'){
                    $("input[type=radio][name=FT_chk][value='Y']").attr("checked","checked");
                    $("div#FT_group").show();
                    $("input#FT").val(data[0].FT);
                }
                if(data[0].CT_chk == 'Y'){
                    $("input[type=radio][name=CT_chk][value='Y']").attr("checked","checked");
                    $("div#CT_group").show();
                    if(data[0].CT_1 == '1'){$("input[type=checkbox][name=CT_1]").attr("checked","checked");}
                    if(data[0].CT_2 == '2'){$("input[type=checkbox][name=CT_2]").attr("checked","checked");}
                    if(data[0].CT_3 == '3'){$("input[type=checkbox][name=CT_3]").attr("checked","checked");}
                }
                if(data[0].perception_chk == 'Y'){
                    $("input[type=radio][name=perception_chk][value='Y']").attr("checked","checked");
                    $("div#perception_group").show();
                    if(data[0].percep_1 == '1'){$("input[type=checkbox][name=percep_1]").attr("checked","checked");
                        if(data[0].Halluc !=''){$("#Halluc").show();$("#Halluc").val(data[0].Halluc);}
                    }
                    if(data[0].percep_2 == '2'){$("input[type=checkbox][name=percep_2]").attr("checked","checked");
                        if(data[0].Illusion !=''){$("#Illusion").show();$("#Illusion").val(data[0].Illusion);}
                    }
                    if(data[0].percep_3 == '3'){$("input[type=checkbox][name=percep_3]").attr("checked","checked");}
                    if(data[0].percep_4 == '4'){$("input[type=checkbox][name=percep_4]").attr("checked","checked");}
                }
                if(data[0].IJ_chk !='0'){
                    $("input[type=radio][name=IJ_chk][value='"+data[0].IJ_chk+"']").attr("checked","checked");
                    if(data[0].IJ_chk =='3'){$("#good").show();$("#good").val(data[0].good);}
                }
                if(data[0].SC_1 == '1'){$("input[type=checkbox][name=SC_1]").attr("checked","checked");$("#Orientaion").show();$("#Orientaion").val(data[0].Orientaion);}
                if(data[0].SC_2 == '2'){$("input[type=checkbox][name=SC_2]").attr("checked","checked");$("#Gemeral").show();$("#Gemeral").val(data[0].Gemeral);}
                if(data[0].SC_3 == '3'){$("input[type=checkbox][name=SC_3]").attr("checked","checked");$("#Abstract").show();$("#Abstract").val(data[0].Abstract);}
                if(data[0].SC_4 == '4'){$("input[type=checkbox][name=SC_4]").attr("checked","checked");$("#Attention").show();$("#Attention").val(data[0].Attention);}
                $("#progress_note").val(data[0].progress_note);
                $("input[type=submit][name=submit]").hide();
            })
        }

            //$("#nav-general-tab").on('onclick', (function (e) { e.preventDefault();  
                //AssDocGeneral("#nav-general");
                
            //}))
                               
        $("#frmDoc01").on('submit', (function (e) {
            e.preventDefault();
            // if($("#dep_send").val() == $("#dep_res").val()){
            //     alert("หน่วยงานที่ส่งและหน่วยงานที่รับซ้ำกันครับ กรุณาตรวจสอบด้วย !!!!");
            // }else{
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcDocAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            $('#index_content').empty().append("<center><img src='images/waiting.gif'></center>");
            $.ajax(settings).done(function (result) {
                $('#index_content').empty();
                alert(result.messege);
                AssDoc01('#index_content',result.id);
            });
        //}
        }));
    });

//         $("input[type=submit][name=submit]").click(function (e) { console.log('1234');
// $.ajax({
// type: "POST",
// url: "../back/API/prcSocialAPI.php",
//                    data: $("#frmsocial").serialize(),
// success: function(result) {
//     alert(result.messege);
//     $("#body_text").empty();
//     AssSocial('#index_content',$.cookie('hn'));
// }
// });e.preventDefault();
             
// });

}
