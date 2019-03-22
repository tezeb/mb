#!/bin/bash

maxCPU=4

function help {
	if [ $# -eq 0 ]; then echo "Missing argument"; fi
	echo -e "Must be run in "img/full" directory.\nRequires "../thumbs" directory\nUsage: ";
	exit 1
}

if [ $# -eq 0 ]; then help; fi

if [[ $(basename $(pwd)) != "full" || ! -d ../thumbs ]]; then 
  help;
fi

srcdir="$1"

if [ -d "../thumbs/$srcdir" ]; then
	echo "Directory in thumbs already exists!";
	echo "Nothing changed";
	exit 0
fi
mkdir "../thumbs/$srcdir"
list=`ls $srcdir/*.jpg`
threads=0
echo "Creating smaller copies of images"
for i in $list; do 
	#	TODO: add support for restarting
#	echo "$threads -> convert \"$i\" -resize 1600x900 \"small/$i\"";
	{(
		convert "$i" -resize 160x90 "../thumbs/$i";
	) &};
	((threads++));
	if [ $threads -eq $maxCPU ]; then wait; threads=0; fi
done
