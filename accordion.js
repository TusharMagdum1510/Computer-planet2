var accor = document.getElementsByClassName("accordion");
var i;

for(i = 0; i<accor.length; i++){
    accor[i].addEventListener("click",function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }
    });
}
