document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP_30","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 

function formCreate(){
//document.getElementById("txtUserId01").value = userId;
    document.getElementById("Textbox32").value = userName;
    //document.getElementById("Textbox1").value = mainOrgUnitIds;
    document.getElementById("txt1").value = mainOrgUnitNames;
    document.getElementById("txt3").value=systemDateTime;
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
//带出客户名称
function btnkhmc_onclick(){
    var FileName = "SingleOpenWin";
    var sql = "select b.pmaal003 客户全名 from pmaa_t a left join pmaal_t b on b.pmaal001=a.pmaa001 where a.pmaa002=2 and a.pmaaent=11";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("客户全名");//客製開窗的Grid Label
  var QBEField = new Array("b.pmaal003 ");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("客户全名");//模糊查詢的Label
     var ReturnId = new Array("txt2");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}
function rdyp_onclick(){
    
  if(document.getElementById("rdyp_0").checked == true){
    document.getElementById("Textbox1").readOnly = false;//栏位可编辑
    document.getElementById("Textbox1").disabled = false; //栏位可编辑
  }else{
    document.getElementById("Textbox1").value ="";
    document.getElementById("Textbox1").value ="";
    document.getElementById("Textbox1").readOnly = true;//栏位只读
    document.getElementById("Textbox1").disabled = true; //栏位不可编辑
  }
}
function btzg_onclick(){
    var FileName = "SingleOpenWin";
    var sql = "SELECT EMPE_ID 員工编号, EMPE_LASTNAME|| EMPE_FIRSTNAME 工程主管 FROM HR001_EMPE WHERE EMPE_ID='0167'or EMPE_ID='Z0407002' or EMPE_ID='W1410001'";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("員工编号","工程主管");//客製開窗的Grid Label
  var QBEField = new Array(" EMPE_ID","EMPE_LASTNAME|| EMPE_FIRSTNAME  ");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("員工编号","工程主管");//模糊查詢的Label
     var ReturnId = new Array("hdkhbh","txtgczg");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}
function rbckyp_onclick(){
    if(document.getElementById("rbckyp_0").checked==true){
         document.getElementById("txtg").value ="";
    document.getElementById("txtbmcl").value ="";
    document.getElementById("txtg").readOnly = true;//栏位只读
    document.getElementById("txtg").disabled = true; //栏位不可编辑
     document.getElementById("txtbmcl").readOnly = true;//栏位只读
    document.getElementById("txtbmcl").disabled = true; //栏位不可编辑

}
else{
     
    document.getElementById("txtg").readOnly = false;//栏位可编辑
    document.getElementById("txtg").disabled = false; //栏位可编辑
     document.getElementById("txtbmcl").readOnly = false;//栏位可编辑
    document.getElementById("txtbmcl").disabled = false; //栏位可编辑
}
}



//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//