function AssNPIQ(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมิน NPI-Q thai";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // //$("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    
    // if($.cookie("an")!=''){
    //     $("#home").attr("onclick", "AssMENUIPD('#index_content');$('div#SW').hide();");
    // }else{$("#home").attr("onclick", "AssMENU('#index_content');$('div#SW').hide();");}
    
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
            $("#P-data").append($("<div class='row col-lg-4 col-md-4 col-sm-12'><label><b>ผู้ประเมิน : </b></lable><select name='recorder' class='form-control select2' id='recorder' required></select></div> &nbsp;")
                                ,$("<div class='row col-lg-4 col-md-4 col-sm-12'><label><b>ผู้ให้ข้อมูล : </b></lable><select name='informant' class='form-control select2' id='informant' required></select></div> &nbsp;") 
                                ,$("<div class='row'><div class='col-lg-12' id='ass-NPIQ'></div></div>"))
            $("#ass-NPIQ").append($("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>1. ความคิดหงุดหงิด : ท่านคิดว่าผู้ป่วยมีความเชื่อในสิ่งที่ไม่เป็นจริงมั้ย? ตัวอย่างเช่น ผู้ป่วยพูดบ่อยๆว่าจะมีคนมาคอยทำร้ายหรือขโมยของจากเขา หรือผู้ป่วยพูดว่าคนในบ้านไม่ใช่คนเดิมที่เขารู้จักหรือบ้านที่ผู้ป่วยอยู่ไม่ใช่หลังเดิมที่เขาเคยอยู่ โดยไม่ใช่แค่คิดสงสัย แต่ผู้ป่วยมั่นใจว่าสิ่งที่คิดเป็นจริง </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk1' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group1'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>2. ประสาทหลอน : ผู้ป่วยเห็นภาพที่ไม่มีอยู่จริงหรือได้ยินเสียงที่ไม่มีอยู่จริง เช่น ภาพหลอน, หูแว่วหรือไม่ ทั้งนี้ไม่ใช่เพียงแค่ผู้ป่วยทึกทักผิดๆเท่านั้น ตัวอย่างเช่น ผู้ป่วยพูดว่าเพื่อหรือญาติยังมีชีวิตอยู่ทั้งที่พึ่งเสียชีวิตไปเร็วๆนี้ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk2' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group2'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>3. กระสับกระส่าย/ก้าวร้าว : มีบางครั้งที่ผู้ป่วยปฏิเสธที่จะร่วมมือหรือไม่ยอมให้ผู้อื่นช่วยเหลือ หรือมีพฤติกรรมก้าวร้าวหรือไม่ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk3' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group3'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>4. ซึมเศร้า/ละเหี่ยใจ : ผู้ป่วยมีท่าทีหรือเคยพูดว่าเศร้าหรือหดหู่หรือไม่ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk4' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group4'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>5. ความวิตกกังวล : ผู้ป่วยมีลักษณธวิตกกังวล หงุดหงิด ตื่นกลัวโดยไม่มีเหตุผล ผู้ป่วยดูเหมือนมีอารมณ์ตึงเคลียดหรือหยุกหยิกอยู่ไม่สุข หรือตื่นกลัวเมื่ออยู่ห่างจากท่านหรือไม่ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk5' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group5'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>6. อารมณ์ร่าเริงเกินเหตุ/ครึ้มใจ : ผู้ป่วยดูร่าเริงหรือแสดงออกว่ามีความสุขมากเกินไปหรือไม่ ทั้งนี้ไม่ใช่ความสุขตามธรรมดาเมื่อได้เจอเพื่อฝูง ครอบครัวหรือเมื่อได้รับของขวัญ แต่หมายถึงมีความสุขอยูตลอดเวลามากเกินกว่าที่เคยเป็นหรือในขณะที่ผู้อื่นไม่ได้รู้สึกไปด้วย </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk6' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk6' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group6'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>7. ความเฉยเมยไม่สนใจสิ่งรอบตัว/ไร้อารมณ์ : ผู้ป่วยขาดความสนใจในสิ่งต่างๆรอบตัว ทั้งในกิจกรรมต่างๆหรือขาดแรงจูงใจในการเริ่มกิจกรรมใหม่ๆ หรือมีลักษณะเฉยเมยไม่แสดงอารมณ์หรือไม่ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk7' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk7' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group7'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>8. ความไม่ยังยั้งชั่งใจ : ผู้ป่วยดูเหมือนทำอะไรหุมหันพลันแล่นโดยไม่คิด ผู้ป่วยพูดหรือทำอะไรที่ปกติแล้วจะไม่พูดหรือทำในสิ่งที่ไม่ควรในที่สาธารณะ ผู้ป่วยทำในสิ่งที่หน้าอับอายต่อท่านหรือคนอื่นหรือไม่ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk8' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk8' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group8'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>9. อารมณ์หงุดหงิด/อารมณ์เปลี่ยนแปลงง่าย : ผู้ป่วยหงุดหงิดง่ายหรือทำให้โกรธได้ง่าย ผู้ป่วยมีอารมณ์เปลี่ยนแปลงเร็วหรือไม่มีความอดทน ทั้งนี้ไม่ใช่ความหงุดหงิดจากความจำเสื่อมที่ลงหรือไม่สามารถทำกิจกรรมที่เคยทำได้ แต่เป็นอารมณ์หงุดหงิดขาดความอดทน หรืออารมณ์เปลี่ยนแปลงรวดเร็วผิดปกติไปจากคนเดิม </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk9' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk9' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group9'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>10. พฤติกรรมแปลก : ผู้ป่วยเดินไปเดินมา ทำอะไรซ้ำๆ เช่น เปิดตู้เสื้อผ้า หรือเปิดลิ้นชักซ้ำแล้วซ้ำอีก จับคลำสิ่งของซ้ำๆหรือแกะกระดุมซ้ำๆหรือไม่ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk10' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk10' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group10'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>11. การนอนหลับ/ปัญหาพฤติกรรมช่วงกลางคืน : ผู้ป่วยมีปัญหาในการนอนหลับหรือไม่ โดยไม่ได้หมายถึงการตื่นเพื่อเข้าห้องน้ำหรือครั้ง2ครั้งแล้วนอนหลับต่อได้เอง แต่ผู้ป่วยตื่นขึ้นมากลางดึก หรือเดินไปเดินมา ลุกขึ้นแต่งตัว หรือรบกวนการนอนของคนอื่นตอนกลางคืนหรือไม่ </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk11' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk11' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group11'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><label class='col-lg-12 col-form-label'><b>12. ความอยากอาหารและการกินที่ผิดปกติ : ผู้ป่วยมีความเปลี่ยนแปลงของความอยากอาหาร น้ำหนัก นิสัยการรับประทานอาหารหรือประเภทของอาหารที่เคยชอบหรือไม่(ไม่รวมถึงผู้ป่วยที่กินเองไม่ได้และต้องป้อนอาหาร) </b></label>"
                                    +"<div class='row col-lg-12'><div class='col-lg-1'><input class='ace' type='radio' name='chk12' value='0'checked required><span class='lbl'> ไม่มี</span></div><div class='col-lg-1'><input class='ace' type='radio' name='chk12' value='1' required><span class='lbl'> มี</span></div></div></div>"
                                    +"<div class='form-group row' id='NPIQ_group12'>"
                                    +"</div></div><p></p>")
                                );
                                selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน',$.cookie("user"));
                                var option="<option value=''> เลือกผู้ให้ข้อมูล </option><option value='1'> คู่ครอง </option><option value='2'> ลูก </option><option value='3'> ญาติ </option>";
                                                                            $("select#informant").empty().append(option);
                                                                            $(".select2").select2();
                                for(var c=1;c<=12;c++){ 
                                $.getJSON('../back/API/Q_NPIQ_Data.php',{data : c},function (data) { 
                                    
                                    $("div#NPIQ_group"+data[0].npiq_group).empty().append($("<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='B"+data[0].npiq_group+"' value='"+data[0].npiq_id+"' ><span class='lbl'> "+data[0].npiq_result+"</div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='B"+data[0].npiq_group+"' value='"+data[1].npiq_id+"' ><span class='lbl'> "+data[1].npiq_result+"</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='B"+data[0].npiq_group+"' value='"+data[2].npiq_id+"' ><span class='lbl'> "+data[2].npiq_result+"</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-2'><b>ความทุกข์ใจของผู้ดูแล</b> </div><div class='col-lg-1'><input class='ace' type='radio' name='C"+data[0].npiq_group+"' value='0' ><span class='lbl'> 0</span></div>"
                                    +"<div class='col-lg-1'><input class='ace' type='radio' name='C"+data[0].npiq_group+"' value='1' ><span class='lbl'> 1</span></div>"
                                    +"<div class='col-lg-1'><input class='ace' type='radio' name='C"+data[0].npiq_group+"' value='2' ><span class='lbl'> 2</span></div>"
                                    +"<div class='col-lg-1'><input class='ace' type='radio' name='C"+data[0].npiq_group+"' value='3' ><span class='lbl'> 3</span></div>"
                                    +"<div class='col-lg-1'><input class='ace' type='radio' name='C"+data[0].npiq_group+"' value='4' ><span class='lbl'> 4</span></div>"
                                    +"<div class='col-lg-1'><input class='ace' type='radio' name='C"+data[0].npiq_group+"' value='5' ><span class='lbl'> 5</span></div>"
                                    +"</div><br>")
                                    )
                                   
                                })
                                $("#NPIQ_group"+c).hide();
                            }
                            $("input[type=radio][name=chk1]").click(function(){
                                if($("input[type=radio][name=chk1]:checked").val()=='1'){$("#NPIQ_group1").show();;}else{;$("#NPIQ_group1").hide();}
                                });
                            $("input[type=radio][name=chk2]").click(function(){
                                if($("input[type=radio][name=chk2]:checked").val()=='1'){$("#NPIQ_group2").show();;}else{;$("#NPIQ_group2").hide();}
                                });   
                            $("input[type=radio][name=chk3]").click(function(){
                                if($("input[type=radio][name=chk3]:checked").val()=='1'){$("#NPIQ_group3").show();;}else{;$("#NPIQ_group3").hide();}
                                }); 
                            $("input[type=radio][name=chk4]").click(function(){
                                if($("input[type=radio][name=chk4]:checked").val()=='1'){$("#NPIQ_group4").show();;}else{;$("#NPIQ_group4").hide();}
                                }); 
                            $("input[type=radio][name=chk5]").click(function(){
                                if($("input[type=radio][name=chk5]:checked").val()=='1'){$("#NPIQ_group5").show();;}else{;$("#NPIQ_group5").hide();}
                                });  
                            $("input[type=radio][name=chk6]").click(function(){
                                if($("input[type=radio][name=chk6]:checked").val()=='1'){$("#NPIQ_group6").show();;}else{;$("#NPIQ_group6").hide();}
                                });  
                            $("input[type=radio][name=chk7]").click(function(){
                                if($("input[type=radio][name=chk7]:checked").val()=='1'){$("#NPIQ_group7").show();;}else{;$("#NPIQ_group7").hide();}
                                });   
                            $("input[type=radio][name=chk8]").click(function(){
                                if($("input[type=radio][name=chk8]:checked").val()=='1'){$("#NPIQ_group8").show();;}else{;$("#NPIQ_group8").hide();}
                                }); 
                            $("input[type=radio][name=chk9]").click(function(){
                                if($("input[type=radio][name=chk9]:checked").val()=='1'){$("#NPIQ_group9").show();;}else{;$("#NPIQ_group9").hide();}
                                }); 
                            $("input[type=radio][name=chk10]").click(function(){
                                if($("input[type=radio][name=chk10]:checked").val()=='1'){$("#NPIQ_group10").show();;}else{;$("#NPIQ_group10").hide();}
                                });
                            $("input[type=radio][name=chk11]").click(function(){
                                if($("input[type=radio][name=chk11]:checked").val()=='1'){$("#NPIQ_group11").show();;}else{;$("#NPIQ_group11").hide();}
                                }); 
                            $("input[type=radio][name=chk12]").click(function(){
                                if($("input[type=radio][name=chk12]:checked").val()=='1'){$("#NPIQ_group12").show();;}else{;$("#NPIQ_group12").hide();}
                                });             
                                

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_NPIQ'>"));


            //$("#nav-general-tab").on('onclick', (function (e) { e.preventDefault();  
                //AssDocGeneral("#nav-general");
                
            //}))
                               
        $("#frmDoc01").on('submit', (function (e) {
            e.preventDefault();
            // if($("#dep_send").val() == $("#dep_res").val()){
            //     alert("หน่วยงานที่ส่งและหน่วยงานที่รับซ้ำกันครับ กรุณาตรวจสอบด้วย !!!!");
            // }else{
            var dataForm = new FormData(this);
            console.log(dataForm)
            // for (var keys of dataForm.keys()) {
            //     console.log(keys);
            // }
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcNPIQAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            $('#index_content').empty().append("<center><img src='images/waiting.gif'></center>");
            $.ajax(settings).done(function (result) {
                alert(result.messege);
                $('#index_content').empty();
                //AssMENU('#index_content');$('div#SW').hide();
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
