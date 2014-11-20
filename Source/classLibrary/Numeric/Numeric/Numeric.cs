using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Runtime.InteropServices;
using System.IO;

namespace AC
{
    public class Numeric
    {

        [DllImport("dllproxy.dll", EntryPoint = "dllProxy")]
        private static extern string dllProxy(string dllpath, string funcname, string arguments);

        public string symCalculate(string dllpath, string funcname, string arguments)
        {
            //dllpath:dll文件路径 funcname:函数名称,arguments:参数
            //返回"error1"没有找到dll文件
            //返回"error2"没有找到指定函数
            string result;
            result = dllProxy(dllpath, funcname, arguments);
            return result;
        }
        public int readCommand(string command, out string funcname, out string arguments)
        {
            Regex expr = new Regex(@"(.*)(\(.*\))");
            Match temp = expr.Match(command);
            funcname = "";
            arguments = "";
            if (!temp.Success)
            {
                return 1;//命令格式错误，无法匹配
            }
            funcname = temp.Groups[1].ToString();
            funcname = funcname.Trim();
            arguments = temp.Groups[2].ToString();
            arguments = arguments.Trim();
            return 0;
        }
    }
}
