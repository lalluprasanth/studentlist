//selecting elementes
var inputname=document.getElementById("inputname")
var age=document.getElementById("inputage")
var gender=document.getElementsByName("gender")
var course=document.getElementById("inputcourse")
var email=document.getElementById("inputemail")
var btn=document.getElementById("btn")
var studentdata=document.getElementById("st-d")
var result=document.getElementById("result")

                                                                                        
btn.addEventListener("click",function(){
    var tabulrow =document.createElement("tr")
    tabulrow.innerHTML="<tr><td >"+inputname.value+"</td><td>" +age.value+ "</td><td>" +result+ "</td><td>"+course.value+ "</td><td>" +email.value+ "</td><td>"+'<button onclick="deletdata(event)" id="btnn">delet</button>'+"</td></tr>"
    studentdata.append(tabulrow)
})

gender[0].addEventListener("click",function(event){
    result=event.target.value
}) 
gender[1].addEventListener("click",function(event){
     result=event.target.value
})

function deletdata(event){

   event.target.closest("tr").remove()
   

}
