// JavaScript Document
Ext.namespace('math');


//�ϴ���ʷ��¼
function ACUpdateHistory(historylist)
//���ܣ�
//������
{
	
        createXmlhttp();
	var url=Service_url+"/ACUpdateHistory";//��������ַ
	var queryString=createQueryString_AH(historylist);
	xmlhttp.open("POST",url,true);
	xmlhttp.onreadystatechange=handleStateChange_AH;
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xmlhttp.send(queryString);
}

function createQueryString_AH(historylist)
{
	
	var queryString="historylist="+historylist.replace(/\+/g,"%2B");
	return queryString;
}

function handleStateChange_AH()
{

	if(xmlhttp.readyState==4)
	{
		if(xmlhttp.status==200)
		{
			result=xmlhttp.responseXML.getElementsByTagName("string")[0].firstChild.data;//�õ����
            Ext.Msg.show
			(
			   {
				  title:"��ʾ",
				  msg:"update&nbsp;&nbsp;"+result,
				  buttons:Ext.Msg.OK,
				  icon:Ext.MessageBox.INFO
				}
			 );
		}
		else
        {
              Ext.MessageBox.alert("<font color=red>���棡����</font>","<font color=red>Զ�̷�����û��Ӧ,�볢�ԣ�<p/>1.ˢ��ҳ�����µ�½!<br/>2.����Webservice�Ƿ����! <br/><a href=Service.asmx>http://localhost/Service.asmx</a> </font>"); 
		 }
	}
}