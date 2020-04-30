var TabLayout = function(content,numTab=1,name=null){
    this.content = content;
    this.numTab = numTab;
    if(name!=null){
        this.name = name;
    }else{
        this.name = 'T';
    }
    console.log(this.name);
    this.GetTL= function (){
            var layout = "<nav>"
            +"<div class='nav nav-tabs' id='"+this.name+"nav-tab' role='tablist'>"
            +"</div>"
            +"</nav>"
            +"<div class='tab-content' id='myTabContent"+this.name+"'>"
            +"</div>";
        $(this.content).empty().append(layout);
        for(var i=0;i < this.numTab;i++){
            $("#"+this.name+"nav-tab").append($("<a class='nav-item nav-link' id='"+this.name+"l"+i+"' data-toggle='tab' href='#"+this.name+"c"+i+"' role='tab' aria-controls='"+this.name+"c"+i+"' aria-selected=''>ชื่อ tab "+i+"</a>"));
            
            $(".tab-content#myTabContent"+this.name+"").append($("<div class='tab-pane fade' id='"+this.name+"c"+i+"' role='tabpanel' aria-labelledby='"+this.name+"l"+i+"'>เนื้อหา "+i+"</div>"));
			if(i==0){$("#"+this.name+"l0").addClass("active").attr("aria-selected","true");$("#"+this.name+"c0").addClass("show active");}
        }
    }
}