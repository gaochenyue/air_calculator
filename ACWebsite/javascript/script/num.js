// JavaScript Document
Ext.namespace('math');

function ACNumeric(command)
//���ܣ�����
//������
{
	createXmlhttp();
	var url=Service_url+"/ACNumeric";//��������ַ
	var queryString=createQueryString_AN(command);

	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange_AN;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlhttp.send(queryString);
}

function createQueryString_AN(command)
{
	
	var queryString="command="+command.replace(/\+/g,"%2B");
	return queryString;
}

function handleStateChange_AN()
{
    var prompt1=document.getElementById('commandPrompt_text');
	var text=document.getElementById('entryBox_text');
	if(xmlhttp.readyState==4)
	{
		if(xmlhttp.status==200)
		{
			result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//�õ����
                         //alert(text.value);
            prompt1.innerHTML+=text.value+'<br><br>'+FormatStr(result)+'<br><br>'+'AC:\\>&nbsp;&nbsp;';  
			text.value="";

		}
		else
        {
              Ext.MessageBox.alert("<font color=red>���棡����</font>","<font color=red>Զ�̷�����û��Ӧ,�볢�ԣ�<p/>1.ˢ��ҳ�����µ�½!<br/>2.����Webservice�Ƿ����! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}


//��ʽ�����*************************************************************************************
function FormatStr(orig_str)
{
 var res_str='';
 var ans_str='<p> ans= </p>';
 var tab_str='<table  border="0" cellpadding="0" cellspacing="0">';
 
 var tmp='';
 var tmplog='';
 var k;
 var dstr=new Array();
 //var str="l1.333,l2,l3,],l4.0000,l5,l6,],l7,l8.0000,l9,]&u1,u2,u3.0000,],u4,u5,u6,],u7,u8,u9,]&";
 var plt_sub='';
  var plt_mid='';
 var plt_all=orig_str.split('&');
 var res_tmp;
if (plt_all.length<2)
{
  plt_sub=orig_str.split(',');
  for (var i=0;i<plt_sub.length;i++)
 {
 
   if ((plt_sub[i]!=']')&&(plt_sub[i]!='&')){
 tmp=tmp+'<td nowrap >&nbsp;'+plt_sub[i]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' ;}
  
   if (plt_sub[i]==']')
   {
    dstr[k]='<tr>'+tmp+'</tr>';tmp='';k=k+1;
    }
   
  }
  for (var i=0;i<=k;i++)
  {res_tmp=res_tmp+dstr[i];}
  res_tmp=ans_str+tab_str+res_tmp+'</table>';
  res_str=res_str+res_tmp;
}
else
{
for (var j=0;j<plt_all.length-1;j++)
 {
 
 
  res_tmp='';
  tmplog=plt_all[j];
  plt_mid=tmplog.split(']');
  dstr=new Array();
  k=0;
for (var l=0;l<plt_mid.length;l++)
{
 plt_sub=plt_mid[l].split(',');
 tmp=tmp+'<td nowrap >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
 for (var i=0;i<plt_sub.length;i++)
 { tmp=tmp+'<td nowrap >&nbsp;'+plt_sub[i]+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' ;}
   dstr[k]='<tr>'+tmp+'</tr>';tmp='';k=k+1;
 
}
  for (var i=0;i<k;i++)
  {res_tmp=res_tmp+dstr[i];}
  res_tmp=ans_str+tab_str+res_tmp+'</table>';
  res_str=res_str+res_tmp;
}
 }
  return res_str;
}
