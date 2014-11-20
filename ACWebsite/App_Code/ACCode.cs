using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Services;
using System.Diagnostics;
using AC;
using System.Xml;
using System.Text.RegularExpressions;


[WebService(Namespace = "Air Calculator")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// ��Ҫ����ʹ�� ASP.NET AJAX �ӽű��е��ô� Web ������ȡ�������е�ע�͡�
// [System.Web.Script.Services.ScriptService]
public class Service : System.Web.Services.WebService
{
   private static string sharedxmlpath = @"shared\shared.asp";
   private static string shareddllpath = @"shared\funclibrary\";
    private static string sharedsource = @"shared\source\";

  

    [WebMethod(Description="�û���¼�ӿ�(�����ȵ�¼����ʹ�����������û�:gcy,����:123)",EnableSession=true)]
    public string AClogin(string username,string password)
    {
        string userinforpath = Server.MapPath(@"database\userinformation.xml");
        string userxmlpath;
        XmlDocument xmldoc=new XmlDocument();
        xmldoc.Load(userinforpath);
        xmlManage ACxml=new xmlManage();

        if (ACxml.getUserXmlPath(ref xmldoc, username, password, out userxmlpath) == 0)
         {
            xmldoc.Load(Server.MapPath(userxmlpath));
            Session["login"] = "true";
            Session["userxmlpath"] = userxmlpath; 
            Session["dllpath"] = ACxml.getDllPath(ref xmldoc);
            Session["cpppath"]=ACxml .getSourcePath(ref xmldoc);
            Session["imagepath"] = ACxml.getImagePath(ref xmldoc);

            return  userxmlpath.Replace(@"\","/") ;
         }
        
       return "error";
     
       
    }
    [WebMethod(Description = "��ֵ����", EnableSession = true)]
    public string ACNumeric(string command)
    {
        if (Session["login"] != null)
        {
            string funcname, argu;
             XmlDocument xmldocu = new  XmlDocument();
             XmlDocument xmldocs = new XmlDocument();
             xmlManage ACxml = new xmlManage();
             xmldocu.Load(Server.MapPath(Session["userxmlpath"].ToString()));
            Numeric ACNum = new Numeric();
            if (ACNum.readCommand(command, out funcname, out argu) == 1)
            {
                return "<font color=red>" + "����������ʽ:"+"</font>,]&";
            }
            if (ACxml.isFuncExist(funcname, ref xmldocu) == 1)
            {
                string path = Server.MapPath(Session["dllpath"].ToString() + funcname + ".dll");
                return ACNum.symCalculate(path, "_" + funcname, argu);
            }
          
             xmldocs.Load(Server.MapPath(sharedxmlpath));
            if(ACxml.isFuncExist(funcname,ref xmldocs)==1)
            {
                 string path = Server.MapPath(shareddllpath + funcname + ".dll");
                 
                  return ACNum.symCalculate(path, "_" + funcname, argu);
            
            }
            
                return "<font color=red>"+"�����ں���:"+funcname+"</font>,]&";
            
        }
        return "<font color=red>�û�δ��¼���������û���username:gcy;password:123</font>,]&";
    
    }
    [WebMethod(Description = "���ż���", EnableSession = true)]
    public string ACSymbolic(string expression)
    {
        if (Session["login"] != null)
        {
            Symbolic ACSym = new Symbolic();
            string result;
            result=ACSym.symbol(expression,Server.MapPath(@"bin\maxima.exe"));
            return result;

        }
        return "<font color=red>" + "�û�δ��¼����" + "</font>";
    }

    [WebMethod(Description = "3D������ͼ", EnableSession = true)]
    public string ACImage3D(string type,string filename, string expression,string axisx,string axisy,string grid,string filetype)
    {
        Process plot = new Process();
        if (Session["login"] != null)
        {          
            XmlDocument xmldoc = new  XmlDocument();
            xmlManage ACxml = new xmlManage();
            Plot AC3D=new Plot();
            string fileoutpath;

            xmldoc.Load(Server.MapPath(Session["userxmlpath"].ToString()));
            if(ACxml.isImageExist(filename, ref xmldoc) == 1)
            {
                return "ͼƬ�Ѵ��ڣ�";
            }
            fileoutpath=Server.MapPath(Session["imagepath"].ToString());
            
            if (AC3D.plot3d(fileoutpath, filename, expression, axisx, axisy, grid, filetype, Server.MapPath(@"bin\wgnuplot.exe"),  Server.MapPath(Session["imagepath"].ToString()) + "acplot.gnuplot") != 0)
            {
            return "��ͼʧ�ܣ���";
            }
           ACxml.appendImageNode(ref xmldoc,filename,expression,type);
           xmldoc.Save(Server.MapPath(Session["userxmlpath"].ToString()));
           AC3D.compactImage(Server.MapPath(Session["imagepath"].ToString()), filename, filetype, 20);
           return (Session["imagepath"].ToString() + filename + "." + filetype).Replace(@"\","/");

        } 

      return "�û�δ��¼����";

    }
    [WebMethod(Description = "2D������ͼ", EnableSession = true)]
    public string ACImage2D(string type, string filename, string expression, string axisx,string gridx, string filetype)
    {
         if (Session["login"] !=null)
        {
            XmlDocument xmldoc = new XmlDocument();
            xmlManage ACxml = new xmlManage();
            Plot AC2D = new Plot();
            string fileoutpath;

            xmldoc.Load(Server.MapPath(Session["userxmlpath"].ToString()));
            if (ACxml.isImageExist(filename, ref xmldoc) == 1)
            {
                return "ͼƬ�Ѵ��ڣ�";
            }
            fileoutpath = Server.MapPath(Session["imagepath"].ToString());
            if (AC2D.plot2d(fileoutpath, filename, expression, axisx,gridx, filetype, Server.MapPath(@"bin\wgnuplot.exe"), Server.MapPath(Session["imagepath"].ToString()) + "acplot.gnuplot") != 0)
            {
                return "��ͼʧ�ܣ���";
            }
            ACxml.appendImageNode(ref xmldoc, filename, expression, type);
            xmldoc.Save(Server.MapPath(Session["userxmlpath"].ToString()));
            AC2D.compactImage(Server.MapPath(Session["imagepath"].ToString()), filename, filetype, 20);
            return (Session["imagepath"].ToString() + filename + "." + filetype).Replace(@"\","/");

        }

        return "�û�δ��¼����";

    }
    
   [WebMethod(Description = "�û��Զ��庯��,����type=0����ʾ������,type=1,��ʾ˽�к���", EnableSession = true)]
    public string ACProgram(string funcbody, string format, string inputdescription, string outputdescription,string description, string example, int type)
    {
        if (Session["login"] != null)
        {
            Program ACPro = new Program();
            XmlDocument sharedxml = new XmlDocument();
            XmlDocument userxml = new XmlDocument();
            XmlDocument tempxml = new XmlDocument();
           

            xmlManage ACxml = new xmlManage();
            int tag;
            string argulist, funcname, errorc, errorl, outlist, cpppath, dllpath, boxname,objpath,xmlpath;
            ACPro.getParaments(funcbody, out funcname, out argulist, out outlist);

            sharedxml.Load(Server.MapPath(sharedxmlpath));
            if (ACxml.isFuncExist(funcname, ref sharedxml) == 1)
            {
                return "�Ѵ���ͬ����������������������";
            }
            userxml.Load(Server.MapPath(Session["userxmlpath"].ToString()));
            if (ACxml.isFuncExist(funcname, ref userxml) == 1)
            {
                return "�Ѵ���ͬ��˽�к�����������������";
            }
            switch (type)
            {
                case 0: cpppath =Server.MapPath(sharedsource);
                    dllpath = Server.MapPath(shareddllpath);
                    tempxml = sharedxml;
                    boxname = "sharedtoolbox";
                    xmlpath = Server.MapPath(sharedxmlpath);
                    break;//������


                case 1: cpppath = Server.MapPath(Session["cpppath"].ToString());
                    dllpath = Server.MapPath(Session["dllpath"].ToString());
                    tempxml = userxml;
                    boxname = "privatetoolbox";
                    xmlpath = Server.MapPath(Session["userxmlpath"].ToString());
                    break;//˽�к���
                default: return "�������ʹ���!";
            }
            Environment.SetEnvironmentVariable("lib", Server.MapPath(@"bin\lib\"));
            if (ACPro.generateCPP(funcbody, cpppath, argulist, funcname, outlist,Server.MapPath (@"bin\template\")) == 0)
            {
                objpath = cpppath+ @"\";

                tag = ACPro.generateDLL(Server.MapPath(@"bin\include\\"), Server.MapPath(@"bin\vc\"), Server.MapPath(@"bin\vc\"), cpppath, funcname, objpath, dllpath, out errorc, out errorl);
                switch (tag)
                {
                    case 1: return errorc;
                    case 2: return errorl;
                    default: Regex temp = new Regex(@",\s*out\s*[a-zA-Z0-9]*\s*\**\s*[a-zA-Z0-9]*");
                             argulist = temp.Replace(argulist, "");
                             Regex temp2 = new Regex(@"^\s*out\s*[a-zA-Z0-9]*\s*\**\s*[a-zA-Z0-9]*\s*,");
                             argulist = temp2.Replace(argulist, "");
                             ACxml.appendFuncNode(ref tempxml, boxname, funcname, argulist, outlist,description, format, inputdescription, outputdescription, example);
                            tempxml.Save(xmlpath);
                        return "successfully!";
                }
            }
            return "�����ļ�ʧ��";
        }
        return "�û�δ��¼��";

    }
    [WebMethod(Description = "���±���", EnableSession = true)]
   public string ACUpdateVar(string varlist)
   //name1|type1|value1&name2|type2|value2
   {
       if (Session["login"] != null)
       {
           if (varlist.Length < 1)
           {
               return "�ϴ���������Ϊ:0";
           }
           XmlDocument userxml = new XmlDocument();
           xmlManage ACxml = new xmlManage();
           userxml.Load(Server.MapPath(Session["userxmlpath"].ToString()));
           ACxml.updateVariable(ref userxml, varlist);
           userxml.Save(Server.MapPath(Session["userxmlpath"].ToString()));
           return "successfully!";
       }
       return "�û�δ��¼";
   }
    [WebMethod(Description = "������ʷ", EnableSession = true)]
    public string ACUpdateHistory(string historylist)
    //name1|date1|time1&name2|date2|time2
    {
        if (Session["login"] != null)
        {
            if (historylist.Length < 1)
            {
                return "�ϴ���ʷ��¼����Ϊ:0";
            }
            XmlDocument userxml = new XmlDocument();
            xmlManage ACxml = new xmlManage();
            userxml.Load(Server.MapPath(Session["userxmlpath"].ToString()));
            ACxml.updateHistory(ref userxml, historylist);
            userxml.Save(Server.MapPath(Session["userxmlpath"].ToString()));
            return "successfully!";
        }
        return "�û�δ��¼";
    }
    [WebMethod(Description = "Mobile", EnableSession = true)]
    public string SymbolCalc(string expression)
    {
        Symbolic ACSym = new Symbolic();
        string result;
        result = ACSym.symbol(expression, Server.MapPath(@"bin\maxima.exe"));
        return result;
    }

}
