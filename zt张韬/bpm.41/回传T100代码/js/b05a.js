document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗

var tEFGP = "T100PROD"; 
function formCreate(){  

document.getElementById("TBtdrId").value=userId;
document.getElementById("TBtdrName").value=userName;//TBsqrq
document.getElementById("TBtdrq").value=systemDateTime;
document.getElementById("TBtdbmId").value=mainOrgUnitIds;
document.getElementById("TBtdbmName").value=mainOrgUnitNames;

document.getElementById("TBjkrId").value=userId;
document.getElementById("TBjkrName").value=userName;//TBsqrq
document.getElementById("TBtdrq").value=systemDateTime;
document.getElementById("TBjkbmId").value=mainOrgUnitIds;
document.getElementById("TBjkbmName").value=mainOrgUnitNames;
return true;
}
function formOpen(){
return true;
}
function formSave(){
return true;
}
function formClose(){
return true;
}
    //张一翔，开窗选择人员信息
function btnjk_onclick(){

  var FileName = "SingleOpenWin";   
  var sql = " select a.ooag001 工号,a.ooag011 姓名,b.ooefl001 部门编码,b.ooefl003 部门 from ooefl_t b,ooag_t a where a.ooagent = 10 and b.OOEFLENT = 10 and a.ooag003 = b.ooefl001"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("工号","姓名","部门编码","部门");//客制开窗的Grid Label
  var QBEField = new Array("a.ooag001","a.ooag011","a.ooag011","b.ooefl003");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("工号","姓名","部门编码","部门");//模糊查询的Label
  var ReturnId = new Array("TBjkrId","TBjkrName","TBjkbmId","TBjkbmName");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}
    //张一翔，开窗选择币别
function Button11_onclick(){

  var FileName = "SingleOpenWin";   
  var sql = " select COLUMN1 币别缩写,COLUMN2 币别 from h_bibie "; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("币别缩写","币别");//客制开窗的Grid Label
  var QBEField = new Array("COLUMN1","COLUMN2");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("币别缩写","币别");//模糊查询的Label
  var ReturnId = new Array("TBbb","TBbbnm");//表单上的栏位代号
  singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//