using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;


namespace AC
{
    public class xmlManage
    {
         public int isFuncExist(string funcname, ref XmlDocument xmldoc)
        {
            XmlNodeList xmlnodes;
            XmlElement xmlelem;
            int i;
            xmlnodes = xmldoc.GetElementsByTagName("function");
            for (i = 0; i < xmlnodes.Count; i++)
            {
                xmlelem = (XmlElement)xmlnodes[i];
                if (xmlelem.GetAttribute("name") == funcname)
                {
                    return 1;//返回已经存在该函数
                }
            }
            return 0;
        }
         public int isImageExist(string imagename, ref XmlDocument xmldoc)
        {
            XmlNodeList xmlnodes;
            XmlElement xmlelem;
            int i;
            xmlnodes = xmldoc.GetElementsByTagName("image");
            for (i = 0; i < xmlnodes.Count; i++)
            {
                xmlelem = (XmlElement)xmlnodes[i];
                if (xmlelem.GetAttribute("name") == imagename)
                {
                    return 1;//返回已经存在该函数
                }
            }
            return 0;
        }
         public int appendFuncNode(ref XmlDocument xmldoc, string boxname, string funcname, string argulist, string outlist, string description, string format, string inputdescription, string outputdescription, string example)
         {
             XmlNodeList xmlnodes;
             XmlElement xmlelem;
             int i, k;
             k = -1;
             xmlnodes = xmldoc.GetElementsByTagName("toolbox");
             for (i = 0; i < xmlnodes.Count; i++)
             {
                 xmlelem = (XmlElement)xmlnodes[i];
                 if (xmlelem.GetAttribute("name") == boxname)
                 {
                     k = i;
                 }
             }
             if (k == -1)
             {
                 return 2;//不存在的工具箱 
             }

             xmlelem = xmldoc.CreateElement("function");//创建一个<function>节点 
             xmlelem.SetAttribute("input", argulist);
             xmlelem.SetAttribute("output", outlist);
             xmlelem.SetAttribute("name", funcname);//设置该节点name属性 
             xmlelem.SetAttribute("tip_1", format);//设置该节点input属性
             xmlelem.SetAttribute("tip_2", inputdescription);
             xmlelem.SetAttribute("tip_3", outputdescription);
             xmlelem.SetAttribute("tip_4", example);
             xmlelem.InnerText = description;
             xmlnodes[k].AppendChild(xmlelem);
             return 0;

         }
         public int appendImageNode(ref XmlDocument xmldoc, string imagename, string expression, string imagetype)
        {
            XmlNode xmlnode;
            XmlNodeList xmlnodes;
            XmlElement f, c;
            int i;
            xmlnode = xmldoc.GetElementsByTagName("imagelibrary")[0];
            xmlnodes = xmlnode.ChildNodes;
            f = xmldoc.CreateElement("image");
            f.SetAttribute("name", imagename);
            c = xmldoc.CreateElement("name");//创建一个<function>节点 
            c.InnerText = imagename;
            f.AppendChild(c);
            c = xmldoc.CreateElement("expression");
            c.InnerText = expression;
            f.AppendChild(c);
            c = xmldoc.CreateElement("type");
            c.InnerText = imagetype;
            f.AppendChild(c);
            xmlnode.AppendChild(f);
            return 0;
        }
        public int getUserXmlPath(ref XmlDocument xmldoc, string username, string password, out string xmlpath)
        {
            XmlNodeList namenodes, passwordnodes, pathnodes;
            int i, k = -1;
            xmlpath = "";
            namenodes = xmldoc.GetElementsByTagName("username");
            passwordnodes = xmldoc.GetElementsByTagName("password");
            pathnodes = xmldoc.GetElementsByTagName("userxmlpath");
            for (i = 0; i < namenodes.Count; i++)
            {

                if (namenodes[i].InnerText == username)
                {
                    k = i;
                    break;//找到该用户
                }
            }
            if (k == -1)
            {
                return 1;//用户不存在
            }
            else
            {
                if (passwordnodes[k].InnerText == password)
                {
                    xmlpath = pathnodes[k].InnerText;
                    return 0;
                }
            }
            return 2;//密码错误

        }
         public string getImagePath(ref XmlDocument xmldoc)
        {
            XmlNode namenode;
            XmlElement xmlelem;
            namenode = xmldoc.GetElementsByTagName("imagelibrary")[0];
            xmlelem = (XmlElement)namenode;
            return xmlelem.GetAttribute("ipath");


        }
        public string getSourcePath(ref XmlDocument xmldoc)
        {
            XmlNode namenode;
            XmlElement xmlelem;
            namenode = xmldoc.GetElementsByTagName("funclibrary")[0];
            xmlelem = (XmlElement)namenode;
            return xmlelem.GetAttribute("sourcepath");

        }
       public string getDllPath(ref XmlDocument xmldoc)
        {
            XmlNode namenode;
            XmlElement xmlelem;
            namenode = xmldoc.GetElementsByTagName("funclibrary")[0];
            xmlelem = (XmlElement)namenode;
            return xmlelem.GetAttribute("dllpath");

        }
      public int updateVariable(ref XmlDocument xmldoc, string varlist)
       //name1|type1|value1&name2|type2|value2
       {
           XmlNode xmlnode;
           XmlElement f, c;
           xmlnode = xmldoc.GetElementsByTagName("variable")[0];
           xmlnode.RemoveAll();
           string[] vars = varlist.Split('&');
           int i;

           for (i = 0; i < vars.Length; i++)
           {
               string[] item = vars[i].Split('|');
               f = xmldoc.CreateElement("var");
               c = xmldoc.CreateElement("name");
               c.InnerText = item[0];
               f.AppendChild(c);
               c = xmldoc.CreateElement("type");
               c.InnerText = item[1];
               f.AppendChild(c);
               c = xmldoc.CreateElement("value");
               c.InnerText = item[2];
               f.AppendChild(c);
               xmlnode.AppendChild(f);
           }
           return 0;


       }
      public int updateHistory(ref XmlDocument xmldoc, string varlist)
       //name1|date1|time1&name2|date2|time2
       {
           XmlNode xmlnode;
           XmlElement f, c;
           xmlnode = xmldoc.GetElementsByTagName("history")[0];
           xmlnode.RemoveAll();
           string[] vars = varlist.Split('&');
           int i;
           for (i = 0; i < vars.Length; i++)
           {
               string[] item = vars[i].Split('|');
               f = xmldoc.CreateElement("operation");
               c = xmldoc.CreateElement("name");
               c.InnerText = item[0];
               f.AppendChild(c);
               c = xmldoc.CreateElement("date");
               c.InnerText = item[1];
               f.AppendChild(c);
               c = xmldoc.CreateElement("time");
               c.InnerText = item[2];
               f.AppendChild(c);
               xmlnode.AppendChild(f);
           }
           return 0;


       }
       
    }
}
