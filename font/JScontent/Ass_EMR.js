function AssEMR(content, id = null) {
    $("#head-title").hide();
    $("#head-detial").hide();
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " Patient EMR.";
    $("li#page").empty().text(title)
    //$("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    
    if($.cookie("an")!=''){
        $("#home").attr("onclick", "AssMENUIPD('#index_content');$('#head-title').show();$('#head-detial').show();$('div#SW').hide();");
    }else if($.cookie("doctor")!=''){
        $("#home").attr("onclick", "AssMENUDoctor('#index_content');$('#head-title').show();$('#head-detial').show();$('div#SW').hide();");
    }else{$("#home").attr("onclick", "AssMENU('#index_content');$('#head-title').show();$('#head-detial').show();$('div#SW').hide();");}
    
    //$("li#prev").show();
    //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    $("#prev").hide();
    $("span.card-title").empty().append(title);

        $("#contentGr").empty().append($("<form action='' name='frmDoc01' id='frmDoc01' method='post' enctype='multipart/form-data'>"
            + "<div class='row' id='cgi-post'>"
            + "<div id='P-data' class='col-lg-10 scroll'></div><div class='col-lg-2 scroll' id='vdate'></div>"
            +"</div></form>"));
            $("#P-data").append($("<div class='row'><div class='' id='ass-EMR'></div></div>"))
            $("#ass-EMR").append($("<div class='card text-white bg-info mb-3'><div class='card-header'><b>ข้อมูลทั่วไป</b></div><div id='' class='card-body'>"
                                    +"<div class='row'><div class='row col-lg-12'>"
                                    +"<div class='col-lg-2'> <img src='../back/API/show_image.php?hn="+$.cookie("hn")+"' width='150' /></div>"
                                    +"<div class='row col-lg-10'>"
                                    +"<span  class='row col-lg-12' id='DP'>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ชื่อ-สกุล : </b></div><div class='row col-lg-3'> <b id='fullname'></b></div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>HN : </b></div><div class='row col-lg-2'> <b id='hn'></b></div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>VN : </b></div><div class='row col-lg-3'> <b id='vn'></b></div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>บัตรประชาชน: </b></div><div class='row col-lg-2' id='cid'> </div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>วันเกิด : </b></div><div class='row col-lg-2' id='birthday'> </div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>อายุ : </b></div><div class='row col-lg-2' id='age'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ที่อยู่ : </b></div><div class='row col-lg-9' id='address'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ที่อยู่ติดต่อได้ : </b></div><div class='row col-lg-9' id='informaddr'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>สัญชาติ: </b></div><div class='row col-lg-2' id='nationality'> </div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>ศาสนา : </b></div><div class='row col-lg-2' id='religion'> </div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>กรุ๊ปเลือด : </b></div><div class='col-lg-2' id='blood'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>เบอร์โทร: </b></div><div class='row col-lg-2' id='hometel'> </div>"
                                    +"<div class='col-lg-2' style='text-align:right;'><b>เบอร์ญาติ : </b></div><div class='row col-lg-2' id='informtel'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>โรคประจำตัว : </b></div><div class='row col-lg-9' id='disease'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>ประวัติแพ้ยา : </b></div><div class='row col-lg-9' id='allergic'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>สิทธิ์ : </b></div><div class='row col-lg-9' id='ptname1'> </div></div>"
                                    +"</span></div></div></div></div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b id='vstdate'></b> <b id='vsttime'></b> <b id='ovstistname'></b> <b id='nextdate' style='color: red'></b></div><div id='' class='card-body'>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>สิทธิรักษาประจำตัว : </b></div><div class='row col-lg-9' id='ptname2'> </div></div>" 
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>สถานพยาบาลหลัก : </b></div><div class='row col-lg-9' id='Dhospital'> </div></div>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>หมดอายุ : </b></div><div class='row col-lg-2' id='pttype_expire'> </div>"
                                +"<div class='col-lg-2' style='text-align:right;'><b>ใบส่งตัวหมดอายุ : </b></div><div class='row col-lg-2' id='expire_date'> </div></div>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>แพทย์ผู้รักษา : </b></div><div class='row col-lg-9' id='docName'> </div></div>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>การวินิจฉัย  </b></div></div>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>PDX : </b></div><div class='row col-lg-9' id='dxname1'> </div></div>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>Dx.2 : </b></div><div class='row col-lg-9' id='dxname2'> </div></div>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>DX.3 : </b></div><div class='row col-lg-9' id='dxname3'> </div></div>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>Dx.4 : </b></div><div class='row col-lg-9' id='dxname4'> </div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card text-white bg-danger mb-3'><div class='card-header'><b>ประเภทผู้ป่วย</b></div><div id='' class='card-body'>"
                                +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>คลินิคพิเศษ : </b></div><div class='row col-lg-2' id='clinic'> </div>"
                                +"<div class='col-lg-2' style='text-align:right;'><b></b></div><div class='row col-lg-2' id='expire_date'> </div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Screening</b></div><div id='' class='card-body'>"
                                +"<div class='col-lg-12 alert alert-success'><div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>น้ำหนัก : </b></div><div class='row col-lg-2' id='bw'></div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>สูง : </b></div><div class='row col-lg-2' id='height'> </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>ฺBMI : </b></div><div class='row col-lg-2' id='bmi'> </div></div>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>Temp. : </b></div><div class='row col-lg-2' id='temp'> </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>PR : </b></div><div class='row col-lg-2' id='pr'> </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>RR : </b></div><div class='row col-lg-2' id='rr'> </div>"
                                    +"<div class='col-lg-1' style='text-align:right;'><b>BP : </b></div><div class='row col-lg-2' id='bps'> </div></div>"
                                    // +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>CGI-S : </b></div><div class='row col-lg-2' id='cgi'></div>"
                                    // +"<div class='col-lg-1' style='text-align:right;'><b>9Q : </b></div><div class='row col-lg-2' id='Q9'> </div>"
                                    // +"<div class='col-lg-1' style='text-align:right;'><b>8Q : </b></div><div class='row col-lg-2' id='Q8'> </div></div>"
                                    +"</div>"
                                +"<div class='col-lg-12'>"
                                    +"<p class='row alert alert-info' id='cc'><b>CC : </b></p>"
                                    +"<p class='row alert alert-primary' role='alert' id='hpi'><b>HPI : </b></p>"
                                    +"<p class='row alert alert-warning' id='pmh'><b>PMH : </b></p></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Rx Order</b></div><div id='Rx-body' class='card-body'>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>ผลการประเมิน</b></div><div id='graph-body' class='card-body'>"
                                    +"</div></div><p></p>")
                                );
                                var PL = new TabLayout('#Rx-body',2,'T');
                                PL.GetTL();
                                $("#Tl0").empty().append("OPD Med");
                                $("#Tl1").empty().append("IPD Home Med");
                                $("#Tc0").empty().append($("<div id='OPDMed'></div>"));
                                $("#Tc1").empty().append($("<div id='IPDMed'></div>"));

                                var GL = new TabLayout('#graph-body',3,'Gt');
                                GL.GetTL();
                                $("#Gtl0").empty().append("ประเมิน CGI");
                                $("#Gtl1").empty().append("ประเมินซึมเศร้า");
                                $("#Gtl2").empty().append("ประเมินสุรา");
                                $("#Gtc0").empty().append($("<div id='ass-CGI'></div>"));
                                $("#Gtc1").empty().append($("<div id='ass-Depress'></div>"));
                                $("#Gtc2").empty().append($("<div id='ass-Alcohol'></div>"));

                                var title1 = "ผลการประเมิน CGIS";
                                var subtitle = "รายครั้ง";
                                var unit = "คะแนน";
                                $.getJSON('../back/API/graph_CGI.php',{data:$.cookie('hn')},function (data) { 
                                    var date = data.date
                                    var CCharts =  new AJAXCharts('ass-CGI','line',title1,unit,date,'../back/API/DC_columnCGI.php?'+$.cookie('hn'),subtitle);
                                    $(CCharts.GetCL());
                                    });

                                var title2 = "ผลการประเมินซึมเศร้า";
                                $.getJSON('../back/API/graph_9Q.php',{data:$.cookie('hn')},function (data) { console.log(data)
                                    var date = data.date
                                    var CChartsP =  new AJAXCharts('ass-Depress','line',title2,unit,date,'../back/API/DC_column9Q.php?'+$.cookie('hn'),subtitle,['#3ec613', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', 'yellow']);
                                    $(CChartsP.GetCL());
                                    }); 
                                    
                                var title3 = "ผลการประเมินสุรา";
                                $.getJSON('../back/API/graph_Alc.php',{data:$.cookie('hn')},function (data) { console.log(data)
                                    var date = data.date
                                    var CChartsAl =  new AJAXCharts('ass-Alcohol','line',title3,unit,date,'../back/API/DC_columnAlc.php?'+$.cookie('hn'),subtitle,['#3ec613', '#cc6945', '#6c94dd', 'purple', '#d92727', 'orange', 'yellow']);
                                    $(CChartsAl.GetCL());
                                    });    

                                AddData("detail_EMRpatientAPI.php",$.cookie("vn"));
            $("#vdate").append($("<div class='row list-group' id='vdate_list'></div>"))  

                                $.getJSON('../back/API/vsdate_Data.php',{data : $.cookie("hn")},function (data) {console.log(data)
                                    $("div#vdate_list").empty();
                                    $.each(data, function(i, item) {
                                        $("div#vdate_list").append($("<a href='#' id='li_vdate"+i+"' class='list-group-item list-group-item-action list-group-item-secondary'><b>"+data[i].vstdate+"</b> <b style='font-size:13px'>"+data[i].vsttime+" น.</b></a>")
                                        )
                                        if(item.an){$("#li_vdate"+i).attr("style","color: red");}
                                        $("#li_vdate"+i).click(function(){
                                            AddData("detail_EMRpatientAPI.php",item.vn);
                                        })
                                }); 
                                })
                                
}
function AddData(json, id ) { console.log(id)
    $.getJSON('../back/API/'+json,{data : id},function (data) { console.log(data)
        $("#fullname").empty().append(data[0].fullname);
        $("#hn").empty().append(data[0].hn);
        $("#vn").empty().append(data[0].vn);
        $("#cid").empty().append(data[0].cid);
        $("#birthday").empty().append(data[0].birthday);
        $("#age").empty().append(data[0].age);
        $("#mrname").empty().append(data[0].mrname);
        $("#ptname1").empty().append(data[0].ptname1+' ('+data[0].Dhospital+')');
        $("#address").empty().append(data[0].address);
        $("#informaddr").empty().append(data[0].informaddr);
        $("#hometel").empty().append(data[0].hometel);
        $("#informtel").empty().append(data[0].informtel);
        $("#nationality").empty().append(data[0].nation_name);
        $("#religion").empty().append(data[0].religion_name);
        $("#blood").empty().append(data[0].bloodgrp);
        $("#disease").empty().append(data[0].disease);
        $("#allergic").empty().append(data[0].drugallergy);
        $("#vstdate").empty().append('วันที่รับบริการ : '+data[0].vstdate);
        $("#vsttime").empty().append('เวลา : '+data[0].vsttime+' น.');
        $("#ovstistname").empty().append('ประเภท : '+data[0].ovstistname);
        $("#nextdate").empty().append('นัดครั้งต่อไป : '+data[0].nextdate);
        $("#ptname2").empty().append(data[0].ptname2);
        $("#Dhospital").empty().append(data[0].Dhospital);
        $("#pttype_expire").empty().append(data[0].pttype_expire);
        $("#expire_date").empty().append(data[0].expire_date);
        $("#docName").empty().append(data[0].docName);
        $("#clinic").empty().append(data[0].clinic);
        $("#dxname1").empty().append(data[0].dxname1);
        $("#dxname2").empty().append(data[0].dxname2);
        $("#dxname3").empty().append(data[0].dxname3);
        $("#dxname4").empty().append(data[0].dxname4);
        $("#bw").empty().append(data[0].bw+" ก.ก.");
        $("#height").empty().append(data[0].height+" ซ.ม.");
        $("#bmi").empty().append(data[0].bmi);
        $("#temp").empty().append(data[0].temp+"  ํc");
        $("#pr").empty().append(data[0].pr+" /min.");
        $("#rr").empty().append(data[0].rr+" /min.");
        $("#bps").empty().append(data[0].bps+"/"+data[0].bpd+" mmHg.");
        $("#cgi").empty().append(data[0].cgi);
        $("#Q9").empty().append(data[0].Q9);
        $("#Q8").empty().append(data[0].Q8);
        $("#cc").empty().append("CC : "+data[0].cc);
        $("#hpi").empty().append("HPI : "+data[0].hpi);
        $("#pmh").empty().append("PMH : "+data[0].pmh);

    });
    $("#OPDMed").empty();
    $("#IPDMed").empty();
    var column1 = ["รายการ", "วิธีใช้","จำนวน","ราคา"];
    var CTbOPD = new createTableAjax();
    CTbOPD.GetNewTableAjax('OPDMed', '../back/API/DT_DrugOPD.php?'+id, '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);

    var CTbIPD = new createTableAjax();
    CTbIPD.GetNewTableAjax('IPDMed', '../back/API/DT_DrugIPD.php?'+id, '../back/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);

}
