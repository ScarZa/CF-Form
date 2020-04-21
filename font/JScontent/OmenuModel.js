function OlderModal () {
$("#createModal").empty().append("<div class='modal' id='OlderModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='hisModalLabel'></h4></div><div class='modal-body' id='modelhis'><span id='his_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#OlderModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text()
  $('span#his_detail').empty().append($("<div class='col-md-12 col-lg-12'><a id='MMSE' class='btn btn-success btn-block' href='#'><img src='images/older.png' width='35'><b> MMSE - Thai 2002</b></a></div><br>")
                                        ,$("<div class='col-md-12 col-lg-12'><a id='ADL' class='btn btn-success btn-block' href='#'><img src='images/older.png' width='35'><b> ADL</b></a></div><br>")
                                        ,$("<div class='col-md-12 col-lg-12'><a id='NPI-Q' class='btn btn-success btn-block' href='#'><img src='images/older.png' width='25'><b> NPI-Q thai</b></a></div><br>")
                                        ,$("<div class='col-md-12 col-lg-12'><a id='drug04' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> แบบประเมินอื่นๆ</b></a></div><br>")
                                    );

                                    $("a#MMSE").click(function(e) {
                                        AssMMSE('#index_content'); 
                                        modal.modal('hide');
                                    });
                                    $("a#ADL").click(function(e) {
                                        AssADL('#index_content'); 
                                        modal.modal('hide');
                                    });
                                    $("a#NPI-Q").click(function(e) {
                                        AssNPIQ('#index_content'); 
                                        modal.modal('hide');
                                    });
                                    $("a#drug04").click(function(e) {
                                        //AssSocial02('#index_content'); 
                                        modal.modal('hide');
                                    });
});
}
