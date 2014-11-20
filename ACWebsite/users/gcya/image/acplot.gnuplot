set pm3d
set samples 50,50
set term jpeg
set out 'D:\Air Calculator Website\users\gcy\image\test1.jpeg'
set isosamples 100,100
set xrange [-3:3] noreverse nowriteback
set yrange [-3:3] noreverse nowriteback
splot sin(x**2+y**2)
