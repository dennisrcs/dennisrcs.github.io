$( document ).ready(function(){
    $("#btn_agree").click(function(e){
		localStorage.setItem("Round",1);
		localStorage.setItem("timeStamps","");
		
        return true;
    });
});
