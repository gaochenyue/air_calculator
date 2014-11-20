set title "1/x"
set grid
set samples 100,100
set term jpeg
set out 'D:\Air Calculator\users\gcy\image\kan.jpeg'
set xrange [-5:5] noreverse nowriteback
plot 1/x
