using System;
using System.Collections.Generic;
using System.Text;
using System.Diagnostics;
using System.Text.RegularExpressions;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;

namespace AC
{
    public class Plot
    {
        //3D画图
        public int plot3d(string filepath, string filename, string expression, string axisx, string axisy, string grid, string filetype, string enginepath, string plotdatapath)
        {

            string command, argu;
            Process plot = new Process();
            command = "set title " + "\"" + expression + "\"";
            expression = expression.Replace("^", "**");
            command = "set pm3d\n";
            command += "set samples 50,50\n";//差值采样密度
            command += "set term " + filetype + "\n";//图片类型
            command += "set out " + "'" + filepath + filename + "." + filetype + "'" + "\n";//输出路径
            command += "set isosamples " + grid + "\n";//网格密度
            command += "set xrange " + axisx + " noreverse nowriteback\n";//x轴取值范围
            command += "set yrange " + axisx + " noreverse nowriteback\n";//y轴取值范围
            command += "splot " + expression;
            FileStream fs = new FileStream(plotdatapath, FileMode.Create);
            if (fs == null)
            {
                return 1;//数据文件创建失败
            }
            StreamWriter data = new StreamWriter(fs, Encoding.ASCII);
            plotdatapath = "\"" + plotdatapath + "\"";
            data.WriteLine(command);
            data.Close();
            plot.StartInfo.FileName = enginepath; //設定程序名
            plot.StartInfo.Arguments = plotdatapath;    //設定程式執行參數
            plot.StartInfo.UseShellExecute = false;        //關閉Shell的使用
            plot.StartInfo.RedirectStandardInput = true;   //重定向標準輸入
            plot.StartInfo.RedirectStandardOutput = true;  //重定向標準輸出
            plot.StartInfo.RedirectStandardError = true;   //重定向錯誤輸出
            plot.StartInfo.CreateNoWindow = true;          //設置不顯示窗口
            plot.Start();   //啟動
            plot.WaitForExit(1000);//等待进程关闭，最长等待1s
            //plot.StandardInput.WriteLine(command);
            // plot.StandardInput.WriteLine("exit");

            return 0;

        }
       public int plot2d(string filepath, string filename, string expression, string axisx, string grid, string filetype, string enginepath, string plotdatapath)
        {

            string command, argu;
            Process plot = new Process();
            command = "set title " + "\"" + expression + "\"\n";
            expression = expression.Replace("^", "**");
            command += "set grid\n";
            command += "set samples " + grid + "," + "100\n";//差值采样密度
            command += "set term " + filetype + "\n";//图片类型
            command += "set out " + "'" + filepath + filename + "." + filetype + "'" + "\n";//输出路径
            command += "set xrange " + axisx + " noreverse nowriteback\n";//x轴取值范围
            command += "plot " + expression;
            FileStream fs = new FileStream(plotdatapath, FileMode.Create);
            if (fs == null)
            {
                return 1;//数据文件创建失败
            }
            StreamWriter data = new StreamWriter(fs, Encoding.ASCII);
            plotdatapath = "\"" + plotdatapath + "\"";
            data.WriteLine(command);
            data.Close();
            plot.StartInfo.FileName = enginepath; //設定程序名
            plot.StartInfo.Arguments = plotdatapath;    //設定程式執行參數
            plot.StartInfo.UseShellExecute = false;        //關閉Shell的使用
            plot.StartInfo.RedirectStandardInput = true;   //重定向標準輸入
            plot.StartInfo.RedirectStandardOutput = true;  //重定向標準輸出
            plot.StartInfo.RedirectStandardError = true;   //重定向錯誤輸出
            plot.StartInfo.CreateNoWindow = true;          //設置不顯示窗口
            plot.Start();   //啟動
            plot.WaitForExit(1000);//等待进程关闭，最长等待1s
            //plot.StandardInput.WriteLine(command);
            // plot.StandardInput.WriteLine("exit");
            return 0;

        }
       private ImageCodecInfo GetCodecInfo(string mimeType)
       {
           ImageCodecInfo[] CodecInfo = ImageCodecInfo.GetImageEncoders();
           foreach (ImageCodecInfo ici in CodecInfo)
           {
               if (ici.MimeType == mimeType) return ici;
           }
           return null;
       }
       public int compactImage(string filepath, string filename, string filetype, int qty)
       {
           Bitmap bm = new Bitmap(filepath + filename + "." + filetype);
           EncoderParameter p;
           EncoderParameters ps;
           ps = new EncoderParameters(1);
           p = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, qty);
           ps.Param[0] = p;
           bm.Save(filepath + "_" + filename + "." + filetype, GetCodecInfo("image/" + filetype), ps);
           return 0;


       }
    }
}
