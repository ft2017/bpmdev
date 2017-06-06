document.write("<style>");
if ( typeof (s_detail1Obj) != 'undefined') {
	document.write("#" + s_detail1Obj.getId() + " .aw-column-0 {text-align: right;}");
	document.write("#" + s_detail1Obj.getId() + " .aw-column-3 {text-align: right;}");
}
if ( typeof (s_detail2Obj) != 'undefined') {
	document.write("#" + s_detail2Obj.getId() + " .aw-column-0 {text-align: right;}");
	document.write("#" + s_detail2Obj.getId() + " .aw-column-4 {text-align: right;}");
}
document.write("</style>");

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
		s_detail1Obj.setColumnWidth(50, 0);
		s_detail1Obj.setColumnWidth(100, 1);
		s_detail1Obj.setColumnWidth(180, 2);
		s_detail1Obj.setColumnWidth(190, 3);
		s_detail1Obj.setColumnWidth(300, 4);
		s_detail2Obj.setColumnWidth(50, 0);
		s_detail2Obj.setColumnWidth(100, 1);
		s_detail2Obj.setColumnWidth(100, 2);
		s_detail2Obj.setColumnWidth(100, 3);
		s_detail2Obj.setColumnWidth(190, 4);
		s_detail2Obj.setColumnWidth(100, 5);
		s_detail2Obj.setColumnWidth(100, 6);
		s_detail2Obj.setColumnWidth(170, 7);
		s_detail2Obj.setColumnWidth(300, 8);
	}

	/********NoBorder TextBox Script********/
	document.getElementById("sfga002_desc").style.border = "none";
	document.getElementById("sfga003_desc").style.border = "none";
	document.getElementById("sfga006_desc").style.border = "none";

	return true;
}
function formSave(){
	return true;
}
function formClose(){
	return true;
}
function ckbpbgx_onclick(){
	var tCheckbox=document.getElementsByName("ckbpbgx");   
  var tSelectedValue="";   
  for(var i=0;i<tCheckbox.length;i++){  
   if(tCheckbox[i].checked){ 
  tSelectedValue=tSelectedValue+tCheckbox[i].value+";"; 
   }
    if(tCheckbox[0].checked){ 
      document.getElementById("hdcg").value='100704';  
    tSelectedValue = document.getElementById("hdcg").value +";";
    }else{
     document.getElementById("hdcg").value = ""; 
   }
   if(tCheckbox[1].checked){   
      document.getElementById("hdyw").value='1004';   
   tSelectedValue = tSelectedValue + document.getElementById("hdyw").value+";";
    }else{
     document.getElementById("hdyw").value = ""; 
   }
   if(tCheckbox[2].checked){   
      document.getElementById("hdgc").value='1006';
   tSelectedValue = tSelectedValue + document.getElementById("hdgc").value+";";
    }else{
     document.getElementById("hdgc").value = ""; 
   }
   if(tCheckbox[3].checked){   
      document.getElementById("hdsg").value='100305';   
     tSelectedValue = tSelectedValue + document.getElementById("hdsg").value+";";
    }else{
     document.getElementById("hdsg").value = ""; 
   }
   if(tCheckbox[4].checked){   
      document.getElementById("hdzc").value='100701';  
   tSelectedValue = tSelectedValue + document.getElementById("hdzc").value+";";
    }else{
     document.getElementById("hdzc").value = ""; 
   }
   if(tCheckbox[5].checked){   
      document.getElementById("hdcz").value='W1608010';  
   tSelectedValue = tSelectedValue + document.getElementById("hdcz").value+";";
    }else{
     document.getElementById("hdcz").value = ""; 
   }
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//
