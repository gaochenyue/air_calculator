  #include "stdlib.h" 
  #include "math.h" 
 #include "string.h" 
void  add(int a,int b,int* s)
{
   *s=a+b;
   
}
 extern "C" {
  __declspec(dllexport) char* _add(char *input)
{
int a;
int b;
int s[1000];
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
	for(k=0;input[j]!=')'&&input[j]!=']';j++)
	{
		if(input[j]=='-'||(input[j]>=48&&input[j]<=57)||input[j]=='.')
		{
			temp_str[k]=input[j];
			k++;
		}
	}
	temp_str[k]='\0';
	 b=atoi(temp_str);
	j++;


add( a, b, s);
	for(i=0;i<1;i++)
	{
		for(k=0;k<1;k++)
		{
			gcvt(s[k+i*1],10,temp_str);
			strcat(temp_str,",");
			strcat(re_list,temp_str);
		}

		strcat(re_list,"]");
	}
        strcat(re_list,"&");
return re_list;
}
}
