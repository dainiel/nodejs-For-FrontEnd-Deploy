/**
	* Zhang Xuchen
	* ccnueca@gmail.com
	* If u have any trouble,don't contact me.（最终解释权归本人所有）
*/

//需要编译的文件的源路径和目标路径
var srcDir = "./test/src/",
	desDir = "./test/statics/";

//编译器路径
var compilerPath = "./compiler/"
	compiler = {
	js : "java -jar "+ compilerPath +"compiler.jar --compilation_level=SIMPLE_OPTIMIZATIONS --js ",
	css : "java -jar "+ compilerPath +"yuicompressor.jar --type css --charset utf-8 ",
	jpg : "jpegtran.exe ",
	png : "pngcrush.exe ",
	gif : "gifsicle.exe "
};

var fs = require("fs"),
	exec = require('child_process').exec;

//不需要编译文件夹
var jumpDir = {
		base : true,
		seajs : true
	};

//不同类型的文件，不同处理方法
function compileFiles(options) {
	var file = options.file,
		srcPath = options.srcPath,
		desPath = options.desPath;

	var srcFile = srcPath + file,
		desFile = desPath + file;
	
	//判断文件类型
	fs.stat(srcFile, function(err, stats) {		
		//此时是文件夹
		if(stats.isDirectory()) {
			mkdirSync(desFile);

			//读取文件夹中内容，同时进行相关操作	
			fs.readdir(srcFile, function (err, resolvedPath) {
				var currentCompile;

				//如果是不需要编译的，进行复制操作
				if(jumpDir[file]) {
					currentCompile = copyFile;
				}
				else {
					currentCompile = compileFile;
				}

				for(var i = 0,l = resolvedPath.length;i < l;i++) {	
					//将当前文件的传入
					(function(file) {
						compileFiles({
							file : file,
							srcPath : srcFile + "/",
							desPath : desFile + "/",
							compile : currentCompile
						});
					})(resolvedPath[i]);		
				}				
			});
		}
		//此时是普通文件，直接进行编译操作
		else if(stats.isFile()){
			//如果直接传进来的是个文件，就默认是需要编译
			var currentCompile = options.compile || compileFile;

			currentCompile({
				file : file,
				srcPath : srcPath,
				desPath : desPath
			});
		}
	}); 
}

//不同类型的文件，不同处理方法
function compileFile(options) {
	//提取出路径
	var file = options.file,
		srcPath = options.srcPath,
		desPath = options.desPath;

	//提取出文件类型
	var fileSplit = file.split("."),
		fileType = fileSplit[fileSplit.length - 1];

	var srcFile = srcPath + file,
		desFile = desPath + file;

	switch(fileType) {
		case("js") :
			//组合出需要的语句
			var compile = compiler.js,
				compile2 = srcFile + " --js_output_file " + desFile;

			//执行编译
			exec(compile + compile2, function (error, stdout, stderr) {
				if(error) {
					console.log("js文件" + srcFile + "压缩错误 " + error);
				}
				else {
					//console.log("js文件"+ src + currentPath2 +"压缩成功");
				}
			});
			break;
		case("css") :
			var compile = compiler.css,
				compile2 = srcFile + ">" + desFile;
		
			//执行编译
			exec(compile + compile2, function (error, stdout, stderr) {
				if(error) {
					console.log("js文件" + srcFile + "压缩错误 " + error);
				}
				else {
					//console.log("js文件"+ src + currentPath2 +"压缩成功");
				}
			});
			break;
		case("jpg") :
			var com = compiler.jpg + srcFile + " " + desFile;
			
			exec(com, function(err) {
				if(err) {
					console.log("jpg文件" + srcPath + file + "压缩错误 " + err);
				}
			});
			break;
		case("png") :
			var com = compiler.png + srcFile + " " + desFile;			
			exec(com, function(err) {
				if(err) {
					console.log("png文件" + srcPath + file + "压缩错误 " + err);
				}
			}); 
			break;
		case("gif") :
			var com = compiler.gif + srcFile + ">" + desFile;
			exec(com, function(err) {
				if(err) {
					console.log("gif文件" + srcPath + file + "压缩错误 " + err);
				}
			}); 
			break;
	}
}

//复制文件
function copyFile(options) {
	var file = options.file,
		srcPath = options.srcPath,
		desPath = options.desPath;

	var srcFileStream = fs.createReadStream(srcPath + file),
		desFileStream = fs.createWriteStream(desPath + file);

	srcFileStream.pipe(desFileStream);
	
	srcFileStream.on("error", function (error) {
	    // 输入流异常
	    console.log("js文件" + srcFile + error);
	});

	desFileStream.on("error", function (error) {
	    // 输出流异常
	    console.log("js文件" + srcFile + error);
	});

	srcFileStream.on("close", function () {
	    //console.log("文件" + srcFile +"复制成功");
	});	
}

//编译js文件
function compileJs(options) {
	//提取出路径
	var file = options.file,
		srcPath = options.srcPath,
		desPath = options.desPath;

	var fileSplit = file.split(".");
	//如果不是js文件，退出
	if(fileSplit[fileSplit.length - 1] != "js") {
		return;
	}	

	//组合出需要的语句
	var compile = compiler.js,
		compile2 = srcPath + file + " --js_output_file " + desPath + file;

	//执行编译
	exec(compile + compile2, function (error, stdout, stderr) {
		if(error) {
			console.log("js文件" + srcPath + file + "压缩错误 " + error);
		}
		else {
			//console.log("js文件"+ src + currentPath2 +"压缩成功");
		}
	});	
}

//编译css文件
function compileCss(options) {
	//提取出路径
	var file = options.file,
		srcPath = options.srcPath,
		desPath = options.desPath;

	var fileSplit = file.split(".");
	//如果不是css文件，退出
	if(fileSplit[fileSplit.length - 1] != "css") {
		return;
	}

	var compile = compiler.css,
		compile2 = srcPath + file + ">" + desPath + file;
	
	//执行编译
	exec(compile + compile2, function (error, stdout, stderr) {
		if(error) {
			console.log("js文件" + srcPath + file + "压缩错误 " + error);
		}
		else {
			//console.log("js文件"+ src + currentPath2 +"压缩成功");
		}
	});	

	/*var compressor = require("yuicompressor");
	compressor.compress(srcPath + file, {
		type : "css",
		o : desPath + file
	}, function(err, data, extra) {
		if(err) {
			console.log(err);
		}
		console.log(data);
	});*/
}

//编译图片
function compilePic(options) {
	//提取出路径
	var file = options.file,
		srcPath = options.srcPath,
		desPath = options.desPath;

	var fileSplit = file.split("."),
		fileType = fileSplit[fileSplit.length - 1];

	var srcFile = srcPath + file,
		desFile = desPath + file;

	//针对不同文件类型，进行相关操作
	switch(fileType) {
		case("jpg") :
			var com = compiler.jpg + srcFile + " " + desFile;
			
			exec(com, function(err) {
				if(err) {
					console.log("jpg文件" + srcPath + file + "压缩错误 " + err);
				}
			});
			break;
		case("png") :
			var com = compiler.png + srcFile + " " + desFile;			
			exec(com, function(err) {
				if(err) {
					console.log("png文件" + srcPath + file + "压缩错误 " + err);
				}
			}); 
			break;
		case("gif") :
			var com = compiler.gif + srcFile + ">" + desFile;
			exec(com, function(err) {
				if(err) {
					console.log("gif文件" + srcPath + file + "压缩错误 " + err);
				}
			}); 
			break;
	}
}

//创建文件夹
function mkdirSync(url,mode,cb){
    var arr = url.split("/");
    mode = mode || 0755;
    cb = cb || function(){};
    if(arr[0]==="."){//处理 ./aaa
        arr.shift();
    }
    if(arr[0] == ".."){//处理 ../ddd/d
        arr.splice(0,2,arr[0]+"/"+arr[1])
    }

    function inner(cur){
        if(!fs.existsSync(cur)){//不存在就创建一个
            fs.mkdirSync(cur, mode)
        }
        if(arr.length){
            inner(cur + "/"+arr.shift());
        }else{
            cb();
        }
    }
    arr.length && inner(arr.shift());
}

//编译js
compileFiles({
	file : "js",
	srcPath : srcDir,
	desPath : desDir
});

//编译css
compileFiles({
	file : "css",
	srcPath : srcDir,
	desPath : desDir
});

//编译图片
compileFiles({
	file : "images",
	srcPath : srcDir,
	desPath : desDir
});