function formCreate(){
//document.getElementById("txtUserId01").value = userId;
    document.getElementById("Textbox32").value = userName;
    //document.getElementById("Textbox1").value = mainOrgUnitIds;
    document.getElementById("Textbox1").value = mainOrgUnitNames;
    document.getElementById("txtDatetime").value=systemDateTime;
return true;
}
function formOpen(){
if(activityId == "UserTask_3" ){
    // document.getElementById("txtUserId02").value = userId;
    document.getElementById("Textbox15").value = userName;
}
if(activityId == "UserTask_4" ){
    // document.getElementById("txtUserId03").value = userId;
    document.getElementById("Textbox30").value = userName;
}
return true;
}
function formSave(){
//if(activityId == "UserTask_3" ){
    // document.getElementById("txtUserId02").value = userId;
  //  document.getElementById("Textbox15").value = userName;
//}
return true;
}
function formClose(){
return true;
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//