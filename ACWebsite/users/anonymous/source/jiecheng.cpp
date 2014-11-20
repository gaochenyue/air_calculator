  #include "stdlib.h" 
  #include "math.h" 
 #include "string.h" 
void  jiecheng(int a,int* z)
{
    int i=0;
    int result=1;
    for(i=1;i<=a;i++)
    {
        result*=i;
    }
    *z=result;
    
}
 extern "C" {
  __declspec(dllexport) char* _jiecheng(char *input)
{
int a;
int z[1000];
int i,j,k;
 char temp_str[100],re_list[1000];
 j=0;re_list[0]='\0';
	for(k=0;input[j]!=')'&&input[j]!=']';j++)
	{
		if(input[j]=='-'||(input[j]>=48&&input[j]<=57)||input[j]=='.')
		{
			temp_str[k]=input[j];
			k++;
		}
	}
	temp_str[k]='\0';
	 a=atoi(temp_str);
	j++;


jiecheng( a, z);
	for(i=0;i<1;i++)
	{
		for(k=0;k<1;k++)
		{
			gcvt(z[k+i*1],10,temp_str);
			strcat(temp_str,",");
			strcat(re_list,temp_str);
		}

		strcat(re_list,"]");
	}
        strcat(re_list,"&");
return re_list;
}
}
