document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗
var tDbConn = new DataSource("apmt400","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 

if(formMode!="isMobileForm"){
  document.write("<style>");
if ( typeof (s_detail1Obj) != 'undefined') {
  document.write("#" + s_detail1Obj.getId() + " .aw-column-1{text-align: right;}");
  document.write("#" + s_detail1Obj.getId() + " .aw-column-2{text-align: right;}");
  document.write("#" + s_detail1Obj.getId() + " .aw-column-8{text-align: right;}");
}
if ( typeof (s_detail2Obj) != 'undefined') {
  document.write("#" + s_detail2Obj.getId() + " .aw-column-0{text-align: right;}");
  document.write("#" + s_detail2Obj.getId() + " .aw-column-4{text-align: right;}");
  document.write("#" + s_detail2Obj.getId() + " .aw-column-5{text-align: right;}");
}
document.write("</style>");
}
function formCreate(){
    return true;
}
function formOpen(){
  if (formMode != "isPrintForm") {
    /********Activity Reload Grid Script********/
    var s_detail1Value = document.getElementById("s_detail1").value;
    if(s_detail1Value != ""){
      var s_detail1Data = eval(s_detail1Value);
      s_detail1Obj.reload(s_detail1Data);
    }
    var s_detail2Value = document.getElementById("s_detail2").value;
    if(s_detail2Value != ""){
      var s_detail2Data = eval(s_detail2Value);
      s_detail2Obj.reload(s_detail2Data);
    }

    /********Set Grid Width Script********/
    s_detail1Obj.setColumnWidth(110, 0);
    s_detail1Obj.setColumnWidth(70, 1);
    s_detail1Obj.setColumnWidth(70, 2);
    s_detail1Obj.setColumnWidth(120, 3);
    s_detail1Obj.setColumnWidth(140, 4);
    s_detail1Obj.setColumnWidth(130, 5);
    s_detail1Obj.setColumnWidth(90, 6);
    s_detail1Obj.setColumnWidth(100, 7);
    s_detail1Obj.setColumnWidth(190, 8);
    s_detail1Obj.setColumnWidth(100, 9);
    s_detail2Obj.setColumnWidth(50, 0);
    s_detail2Obj.setColumnWidth(110, 1);
    s_detail2Obj.setColumnWidth(100, 2);
    s_detail2Obj.setColumnWidth(100, 3);
    s_detail2Obj.setColumnWidth(200, 4);
    s_detail2Obj.setColumnWidth(200, 5);
    s_detail2Obj.setColumnWidth(100, 6);
    s_detail2Obj.setColumnWidth(100, 7);
  }

    /********NoBorder TextBox Script********/
    document.getElementById("pmda002_desc").style.border = "none";
    document.getElementById("pmda003_desc").style.border = "none";
    document.getElementById("pmda005_desc").style.border = "none";
    document.getElementById("pmda007_desc").style.border = "none";
    document.getElementById("pmda021_desc").style.border = "none";

    return true;
}
function formSave(){
    return true;
}
function formClose(){
    return true;
}
function btnbumenbh_onclick(){
    var FileName = "SingleOpenWin";
    var sql = "select a.ooeg011,c.ooag011 from ooeg_t a left join ooefl_t b on b.ooefl001=a.ooeg001 left join ooag_t c on c.ooag001=a.ooeg011 where ooeg003<>3 order by a.ooeg001";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("部门编码","部门主管");//客製開窗的Grid Label
  var QBEField = new Array("a.ooeg011","c.ooag011");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("部门编码","部门主管");//模糊查詢的Label
     var ReturnId = new Array("txtBmbm","txtBmzg");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//