using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Diagnostics;
namespace AC
{

    public class Symbolic
    {
        public  string symbol(string expression, string enginepath)
        //符号计算，expression:要计算的表达式。enginepath计算引擎的路径
        {
            //實例一個Process類，啟動一個獨立進程
            Process p = new Process();
            string s;
            int start, end;

            //Process類有一個StartInfo屬性，這個是ProcessStartInfo類，包括了一些屬性和方法，下面我們用到了他的幾個屬性：
            p.StartInfo.FileName = enginepath;         //設定程序名
            p.StartInfo.Arguments = "-eval \"(cl-user::run)\" -f";    //設定程式執行參數
            p.StartInfo.UseShellExecute = false;        //關閉Shell的使用
            p.StartInfo.RedirectStandardInput = true;   //重定向標準輸入
            p.StartInfo.RedirectStandardOutput = true;  //重定向標準輸出
            p.StartInfo.RedirectStandardError = true;   //重定向錯誤輸出
            p.StartInfo.CreateNoWindow = true;          //設置不顯示窗口
            p.Start();   //啟動
            p.StandardInput.WriteLine("display2d:false$");
            p.StandardInput.WriteLine(expression);       //也可以用這種方式輸入要執行的命令
            p.StandardInput.WriteLine("quit();");        //不過要記得加上Exit要不然下一行程式執行的時候會當機
            if (!p.WaitForExit(5000))
            {
                p.Kill();
                return "Time out!!!";
            }
            s = p.StandardOutput.ReadToEnd();//從輸出流取得命令執行結果

            if ((end = s.IndexOf("(%o2)")) >= 0)
            {
                start = s.IndexOf("Maxima");
                s = s.Remove(start, end - start + 6);
                start = s.Length - 6;
                s = s.Remove(start, 5);
                return s;
            }
            else
            {
                start = s.IndexOf("(%i2)");
                s = s.Substring(start);
                s = s.Replace("(%i2)", "");
                return s;

            }
        }
    }
}
