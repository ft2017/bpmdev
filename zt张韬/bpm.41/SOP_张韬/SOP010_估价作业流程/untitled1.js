
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP002","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 
var tDbConn1 = new DataSource("SOP002","SQL1");
var tT100 = "T100PROD"; 

//日期读取
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            // + " " + date.getHours() + seperator2 + date.getMinutes()
            // + seperator2 + date.getSeconds();
    return currentdate;
} 
function formCreate(){
  document.getElementById("Textbox2").value = userName;
  document.getElementById("Textbox16").value = mainOrgUnitNames;
  var now=new Date();
var year=now.getYear();
var month=now.getMonth();
var day=now.getDate();
var hours=now.getHours();
var minutes=now.getMinutes();
//var seconds=now.getSeconds();
//document.getElementById("Teb003").value=""+year+"/"+month+"/"+day+" "+hours+":"+minutes+""; 
var t=getNowFormatDate();
  document.getElementById("Textbox19").value = t;
return true;
}
function formOpen(){
      var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料   
  if(typeof(Grid1Obj) != "undefined"){  //判斷grid物件是否存在表單中   
  
    if(tGrid1.length >1 ){  //判斷Grid是否有資料   
      Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中   
    }   
  } 
return true;
return true;
}
function formSave(){
      if(typeof(Grid1Obj) != "undefined"){  //判斷grid物件是否存在表單中   
    document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中   
    }       
  //判斷Grid是否有資料 
      if(document.getElementById("Grid1").value=="[]")
    {
      alert("单身不能为空！");
      return false ;
      }
    return true;
return true;
}
function formClose(){
return true;
}


function Textbox21_onclick(){
  var FileName = "SingleOpenWin";
    var sql = " select a.sfaadocno 工单号,a.sfaa010 生产料号,b.imaal003 品名,a.sfaa012 生产数量,to_char(a.sfaa020,'yyyy-mm-dd') 预计完工日 from sfaa_t a left join imaal_t b on b.imaal001=a.sfaa010 and b.imaalent=11 where a.sfaaent=11 order by a.sfaadocno";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("工单单号","生产料号","品名","数量","预计完工日");//客製開窗的Grid Label
  var QBEField = new Array("a.sfaadocno","a.sfaa010","b.imaal003","a.sfaa012","to_char(a.sfaa020,'yyyy-mm-dd')");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("工单单号","生产料号","品名","数量","预计完工日");//模糊查詢的Label
     var ReturnId = new Array("Textbox21", "Textbox24", "Textbox26","Textbox30","Textbox32");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}
//工序开窗选择
function Button1_onclick(){
if(document.getElementById("Textbox21").value != ""){
    var FileName = "PluralityOpenWin";    
  var sql = " select a.sfcbdocno,a.sfcb001,a.sfcb002,a.sfcb003,b.OOCQL004 from sfcb_t a left join oocql_t b on b.oocql002=a.sfcb003 and b.oocql001=221  and b.oocql003='zh_CN'  and b.oocqlent=11 where a.sfcbent=11 AND a.sfcbdocno = '"+document.getElementById("Textbox21").value+"'  "; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("工序");//客制开窗的Grid Label
  var QBEField = new Array("b.OOCQL004");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("工序");//模糊查询的Label
     var ReturnId = new Array("hdngx");//表单上的栏位代号
  pluralityOpenWin(FileName, tT100, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}else{
  alert("请先填写工单单号！");
}
}
function checkPointOnClose(pReturnId){

  if(pReturnId == "hdngx"){
     
     Grid1Obj.reload(eval(document.getElementById("hdngx").value));
  }

}

 //$-----Auto generated script block, Please do not edit or modify script below this line.-----$//