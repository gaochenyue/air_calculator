//编译器路径需要修改
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Diagnostics;
using System.Text.RegularExpressions;
using System.IO;

namespace AC 
{
    public class Program
    {

         public string getParaments(string func_body, out string func_name, out string argu_list, out string out_list)
        //得到输出参数表,成功则返回1,否则返回0
        {
            int start_r, start_l, end_l;
            func_body = func_body.Trim();
            start_l = end_l = func_body.IndexOf("(");//输入参数表定位
            func_name = func_body.Substring(0, end_l);//获得函数名
            end_l = func_body.IndexOf(")");
            argu_list = func_body.Substring(start_l + 1, end_l - start_l - 1);//获得参数表
            start_r = func_body.IndexOf("return");//返回参数表定位
            if (start_r < 0)
            {
                func_name = "";
                argu_list = "";
                out_list = "";
                return "ERROR(缺少返回参数表)";

            }
            start_l = func_body.IndexOf("(", start_r);
            end_l = func_body.IndexOf(")", start_r);
            out_list = func_body.Substring(start_l + 1, end_l - start_l - 1);//获得返回值参数表
            func_name.Trim();
            argu_list.Trim();
            out_list.Trim();
            return "OK";

        }

         private string formatArguList(string argu_list)
        //删除函数输入参数列表里面的类型声明，只留下参数名称，如"(double array[],int n)"转换成"(array,n)"
        {
            argu_list = argu_list.Replace("double", "");
            argu_list = argu_list.Replace("int", "");
            argu_list = argu_list.Replace("[]", "");
            argu_list = argu_list.Replace("*", "");
            argu_list = argu_list.Replace("out ", "");
            return argu_list;
        }
         private string formatInput(string func_name, string argu_list,string templatepath)
        //此函数用来规整用户自定义的函数，把函数输入参数统一成string类。
        //func_name是函数名，argu_list是输入参数表，例如function(int a,double c[])
        {
            int i, start, end;
            argu_list = argu_list.TrimStart();
            string[] temp = argu_list.Split(',');
            string da, dc, ia, ic, str1, str2;
            string h_da, h_dc, h_ia, h_ic, tempstr;
            //从文件读入c语言模板/////////////////////////////////////////////
            FileStream fs1 = new FileStream(templatepath+"da.template", FileMode.Open);
            StreamReader rda = new StreamReader(fs1, Encoding.UTF8);
            da = rda.ReadToEnd();
            FileStream fs2 = new FileStream(templatepath+"dc.template", FileMode.Open);
            StreamReader rdc = new StreamReader(fs2, Encoding.UTF8);
            dc = rdc.ReadToEnd();
            FileStream fs3 = new FileStream(templatepath+"ia.template", FileMode.Open);
            StreamReader ria = new StreamReader(fs3, Encoding.UTF8);
            ia = ria.ReadToEnd();
            FileStream fs4 = new FileStream(templatepath+"ic.template", FileMode.Open);
            StreamReader ric = new StreamReader(fs4, Encoding.UTF8);
            ic = ric.ReadToEnd();
            rda.Close();
            rdc.Close();
            ria.Close();
            ric.Close();
            fs1.Close();
            fs2.Close();
            fs3.Close();
            fs4.Close();
            /////////////////////////////////////////////////////////////////
            h_da = "double temp_da[1000];\n";//声明浮点数组
            h_dc = "double temp_d;\n";//声明浮点数
            h_ia = "int temp_ia[1000];\n";//声明整型数组
            h_ic = "int temp_i;\n";//声明一个整型变量
            str1 = "\n extern \"C\" {\n  __declspec(dllexport) char* _" + func_name + "(char *input)\n" + "{\n";//声明函数头，输入输出都是字符数组
            str2 = "";
            for (i = 0; i < temp.Length; i++)
            {
                temp[i] = temp[i].Trim();//删除开头和结尾空格
                if (temp[i].IndexOf("*") >= 0)
                {
                    end = temp[i].IndexOf("*");
                    end++;
                }
                else
                {
                    end = temp[i].LastIndexOf(" ");//获得最后一个空格的位置
                }
                if (temp[i].IndexOf("out ") >= 0)
                {
                    start = temp[i].IndexOf(" ");//如果含有"out"说明符，start从"out"之后的空格开始
                    tempstr = temp[i].Substring(start, end - start);//获得类型说明符
                }
                else
                {
                    tempstr = temp[i].Substring(0, end);//获得类型说明符
                }
                tempstr = tempstr.Replace(" ", "");//删除类型说明符中的所有空格
                switch (tempstr)
                {
                    case "double*": str1 = str1 + h_da.Replace("temp_da", temp[i].Substring(end).Trim());
                        if (temp[i].IndexOf("out ") < 0)//若含有"out"，则不进行赋值操作
                        {
                            str2 = str2 + da.Replace("temp_da", temp[i].Substring(end).Trim());
                        }
                        break;
                    case "double": str1 = str1 + h_dc.Replace("temp_d", temp[i].Substring(end).Trim());
                        if (temp[i].IndexOf("out ") < 0)//若含有"out"，则不进行赋值操作
                        {
                            str2 = str2 + dc.Replace("temp_d", temp[i].Substring(end).Trim());
                        }
                        break;
                    case "int*": str1 = str1 + h_ia.Replace("temp_ia", temp[i].Substring(end).Trim());
                        if (temp[i].IndexOf("out ") < 0)//若含有"out"，则不进行赋值操作
                        {
                            str2 = str2 + ia.Replace("temp_ia", temp[i].Substring(end).Trim());
                        }
                        break;
                    case "int": str1 = str1 + h_ic.Replace("temp_i", temp[i].Substring(end).Trim());
                        if (temp[i].IndexOf("out ") < 0)//若含有"out"，则不进行赋值操作
                        {
                            str2 = str2 + ic.Replace("temp_i", temp[i].Substring(end));
                        }
                        break;

                    default: return "ERROR1";//发现不存在的类型声明
                }
                str2 = str2 + "\n";

            }
            str1 = str1 + "int i,j,k;\n char temp_str[100],re_list[1000];\n j=0;re_list[0]=\'\\0\';\n";//声明c模板要使用的变量
            str1 = str1 + str2;
            str1 = str1 + "\n" + func_name + "(" + formatArguList(argu_list) + ");" + "\n";//在c模板中调用用户定义的函数

            return str1;
        }
         private string formatOutput(string out_list, string templatepath)
        //输入形式argu1 x*y,argu2 m*n
        //参数名和个数必须以空格作为间隔
        {
            string[] temp = out_list.Split(',');
            string str, strout, name, outtemplate, row_count, column_count;
            int end, i, start;
            FileStream fs = new FileStream(templatepath+"out.template", FileMode.Open);
            StreamReader fout = new StreamReader(fs, Encoding.UTF8);
            outtemplate = fout.ReadToEnd();
            fout.Close();
            fs.Close();
            strout = "";
            str = "";
            for (i = 0; i < temp.Length; i++)
            {
                if (temp[i].IndexOf("out ") >= 0)
                {
                    temp[i] = temp[i].Replace("out ", "");
                }
                temp[i] = temp[i].Trim();
                start = temp[i].IndexOf(" ");//获得空格位置
                end = temp[i].IndexOf("*");//获得'*'号位置
                name = temp[i].Substring(0, start);
                row_count = temp[i].Substring(start, end - start);//获得行数
                column_count = temp[i].Substring(end + 1);//获得列数
                name = name.Trim();
                row_count = row_count.Trim();
                column_count = column_count.Trim();
                str = outtemplate.Replace("argu_name", name);
                str = str.Replace("row_count", row_count);
                str = str.Replace("column_count", column_count);
                strout = strout + str + '\n';
            }
            strout = strout + "return re_list;\n";
            strout = strout + "}\n}";

            return strout;
        }
       /*  private int combinetocpp(string str1, string str2)
        {
            FileStream fs = new FileStream("output.txt", FileMode.Open);
            StreamWriter fout = new StreamWriter(fs, Encoding.ASCII);
            fout.WriteLine(str1 + str2);
            fout.Close();
            return 1;
        }*/
         private void formatFunc_body(ref string func_body)
        {
            bool x = false;
            Regex regex = new Regex(@"return[\t]*\(.*\);");
            x = regex.IsMatch(func_body);
            func_body = regex.Replace(func_body, "");
            func_body = func_body.Replace("out ", "");
            func_body = func_body.Insert(0, "void  ");
        }
         public int generateCPP(string func_body, string cppoutpath, string argu_list, string func_name, string out_list, string templatepath)
        //创建cpp成功返回0,返回1创建文件失败
        {
            string include = "  #include \"stdlib.h\" \n  #include \"math.h\" \n #include \"string.h\" \n";
            string str;
            formatFunc_body(ref func_body);
            str = formatInput(func_name, argu_list, templatepath);
            str = str + formatOutput(out_list, templatepath);
            str = include + func_body + str;
            FileStream cppout = new FileStream(cppoutpath + func_name + ".cpp", FileMode.OpenOrCreate);
            if (cppout == null)
            {
                return 1;//文件创建失败
            }
            StreamWriter cw = new StreamWriter(cppout, Encoding.ASCII);
            cw.WriteLine(str);
            cw.Close();
            cppout.Close();
            return 0;
        }
         public int generateDLL(string includepath,string clpath,string linkpath,string inputpath/*cpp源文件位置*/, string filename/*文件名*/, string objoutpath/*obj输出路径*/, string dlloutpath/*dll输出路径*/, out string errorc, out string errorl/*收集编译器的错误信息并返回*/)
        //输入源代码地址，产生相应 "dll"文件,成功返回0，编译错误返回1，链接错误返回2
        {
            string arguments, name;
            int i;
            //實例一個Process類，啟動一個獨立進程
            Process cl = new Process();
            string cl_out;
            Regex clexp = new Regex(@"error\sC\d{4}(.*)");
            Regex linkexp = new Regex(@"error\sLNK\d{4}(.*)");
            errorc = "";
            errorl = "";
            name = filename + ".cpp";
            arguments = " /X /c  /Fo" + "\"" + objoutpath + "\"" + "  /ZI  /I" + "\"" + includepath + "\\\"" + " /Fd" + "\"" + objoutpath + "vc60.pdb\"";
            //Process類有一個StartInfo屬性，這個是ProcessStartInfo類，包括了一些屬性和方法，下面我們用到了他的幾個屬性：
            cl.StartInfo.FileName = clpath+"cl.exe"; //設定程序名
            cl.StartInfo.Arguments = "\""+inputpath + name +"\""+ arguments;    //設定程式執行參數
            cl.StartInfo.UseShellExecute = false;        //關閉Shell的使用
            cl.StartInfo.RedirectStandardInput = true;   //重定向標準輸入
            cl.StartInfo.RedirectStandardOutput = true;  //重定向標準輸出
            cl.StartInfo.RedirectStandardError = true;   //重定向錯誤輸出
            cl.StartInfo.CreateNoWindow = true;          //設置不顯示窗口
            cl.Start();   //啟動 
            //cl.StandardInput.WriteLine("exit");        //不過要記得加上Exit要不然下一行程式執行的時候會當機
            if (!cl.WaitForExit(5000))
            {  
                cl.Kill();
                return 3;
            }
            cl_out = cl.StandardOutput.ReadToEnd();//從輸出流取得命令執行結果 

             MatchCollection clexp_matchs = clexp.Matches(cl_out);
            if (clexp_matchs.Count > 0)
            //检查编译错误
            {

                for (i = 0; i < clexp_matchs.Count; i++)
                {
                    errorc = errorc + clexp_matchs[i].ToString() + "]";
                }
               
                return 1;//编译错误
            }
            else
            {
                
                name = filename + ".obj";
                arguments = @" /DLL /OUT:" + "\"" + dlloutpath + filename + ".dll" + "\"";
                //Process類有一個StartInfo屬性，這個是ProcessStartInfo類，包括了一些屬性和方法，下面我們用到了他的幾個屬性：
                cl.StartInfo.FileName =linkpath+"link.exe"; //設定程序名
                cl.StartInfo.Arguments = "\"" + objoutpath + name + "\"" + arguments;    //設定程式執行參數
                cl.StartInfo.UseShellExecute = false;        //關閉Shell的使用
                cl.StartInfo.RedirectStandardInput = true;   //重定向標準輸入
                cl.StartInfo.RedirectStandardOutput = true;  //重定向標準輸出
                cl.StartInfo.RedirectStandardError = true;   //重定向錯誤輸出
                cl.StartInfo.CreateNoWindow = true;          //設置不顯示窗口
                cl.Start();   //啟動
                //cl.StandardInput.WriteLine("exit");        //不過要記得加上Exit要不然下一行程式執行的時候會當機
                if (!cl.WaitForExit(5000))
                {
                    cl.Kill();
                    return 3;
                }
                cl_out = cl.StandardOutput.ReadToEnd();//從輸出流取得命令執行結果
                MatchCollection linkexp_matchs = linkexp.Matches(cl_out);
                if (linkexp_matchs.Count > 0)
                //校验链接错误
                {
                    //返回错误
                    for (i = 0; i < linkexp_matchs.Count; i++)
                    {
                        errorl = errorl + linkexp_matchs[i].ToString() + "]";
                    }

                    return 2;//链接错误
                    //返回
                }


            }

            return 0;//成功
        }
        
    }
}
