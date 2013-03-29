#基于nodejs的前端静态文件打包部署工具
v1
搜狐武研院 张徐辰 ccnueca@gmail.com

##简介
1. 使用nodejs的fileSystem进行文件遍历；
2. js压缩使用google的compiler(compiler.jar)；
3. css压缩使用yahoo的compressor(compressor.jar)；
4. jpg\png\gif压缩分别使用jpegtran\pngcrush\gifsicle

##compileFiles(options)
此函数为整个的入口函数options主要有三个属性file,srcPath,desPath。如果我要把当前目录test/src目录中的文件压缩至test/des目录，就这样调用:

	//三个调用函数srcPath和desPath可以不一样
	//编译js
	compileFiles({
		file : "js",
		srcPath : "./test/src",
		desPath : "./test/des"
	});

	//编译css
	compileFiles({
		file : "css",
		srcPath : "./test/src",
		desPath : "./test/des"
	});

	//编译图片
	compileFiles({
		file : "images",
		srcPath : "./test/src",
		desPath : "./test/des"
	});

之所以把js/css/图片分三次调用，主要是在实际开发中，这个三个文件夹可能不在一个目录下

##使用方法
修改compile.js中相关代码：

1. srcDir和desDir（这两个变量都在文件头）分别为源代码文件夹和压缩后代码文件夹，可以为相对位置（相对compile.js），也可以是绝对位置，如D:/test/src;
2. compiler（此变量在头部）为存放压缩工具的路径，目前编译工具使用的主要是默认配置，日常工作中已经够用，可以不修改；
3. jumpDir对象中存放的是不需要编译的目录，对于此类目录，直接复制文件;
4. test文件夹中放置的为测试代码，如要使用把尾部注释代码去掉;
5. 实际使用时，直接运行compile.bat;