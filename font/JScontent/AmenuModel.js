function AlcoholModal () {
$("#createModal").empty().append("<div class='modal' id='AlcoholModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    +"<div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"<h4 class='modal-title' id='hisModalLabel'></h4></div><div class='modal-body' id='modelhis'><span id='his_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#AlcoholModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
  modal.find('.modal-title').text()
  $('span#his_detail').empty().append($("<div class='col-md-12 col-lg-12'><a id='alcohol' class='btn btn-success btn-block' href='#'><img src='images/Px.ico' width='35'><b> แบบประเมินสุรา</b></a></div><br>")
                                        ,$("<div class='col-md-12 col-lg-12'><a id='drug02' class='btn btn-success btn-block' href='#'><img src='images/Px.ico' width='35'><b> แบบประเมินอื่นๆ</b></a></div><br>")
                                        ,$("<div class='col-md-12 col-lg-12'><a id='drug03' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> แบบประเมินอื่นๆ</b></a></div><br>")
                                        ,$("<div class='col-md-12 col-lg-12'><a id='drug04' class='btn btn-success btn-block' href='#'><img src='images/icon_set2/compose.ico' width='25'><b> แบบประเมินอื่นๆ</b></a></div><br>")
                                    );

                                    $("a#alcohol").click(function(e) {
                                        AssAlcohol('#index_content'); 
                                        modal.modal('hide');
                                    });
                                    $("a#drug02").click(function(e) {
                                        //AssLithium('#index_content'); 
                                        modal.modal('hide');
                                    });
                                    $("a#drug03").click(function(e) {
                                        //AssSocial02('#index_content'); 
                                        modal.modal('hide');
                                    });
                                    $("a#drug04").click(function(e) {
                                        //AssSocial02('#index_content'); 
                                        modal.modal('hide');
                                    });
});
}
