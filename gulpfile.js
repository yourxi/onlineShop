// 在这里书写cyrshop这个项目的打包配置

// 1 导入gulp这个第三方模块
const gulp = require('gulp');

// 2-1 导入gulp-cssmin这个第三方模块
const cssmin = require('gulp-cssmin');

// 2-2 导入gulp-autoprefixer这个第三方模块
const autoprefixer = require('gulp-autoprefixer');

// 4-1 导入gulp-babel这个第三方模块
const babel = require('gulp-babel');
// 4-2 导入gulp-uglify这个第三方模块
const uglify = require('gulp-uglify');

// 6-1 导入gulp-htmlmin这个第三方模块
const htmlmin = require('gulp-htmlmin');

const sass = require('gulp-sass');

// 7-1 导入del这个第三方模块
const del = require('del')

// 9-1 导入gulp-webserver这个第三方模块
const webserver = require('gulp-webserver');

// 2-3 书写一个打包css的方法
const cssHandler = ()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

// 3-1 书写一个移动images文件夹的方法
const imgHandler = ()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}

// 4-3 书写一个压缩js文件的方法
const jsHandler = ()=>{
    return gulp.src('./src/js/*.js')
    // es6转es5
    .pipe(babel({
        presets: ['@babel/env']
    }))
    // 压缩代码
    .pipe(uglify())
    // 写入到dist的js文件夹里面
    .pipe(gulp.dest('./dist/js'))
}

// 5-1 书写一个移动lib文件夹的方法
const libHandler = ()=>{
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}

// 5-2 书写一个移动font文件夹的方法
const fontHandler = ()=>{
    return gulp.src('./src/font/**')
    .pipe(gulp.dest('./dist/font'))
}

// 5-3 书写一个移动interface文件夹的方法
const interfaceHandler = ()=>{
    return gulp.src('./src/interface/**')
    .pipe(gulp.dest('./dist/interface'))
}

// 6-2 书写一个压缩html文件的方法
const htmlHandler = ()=>{
    return gulp.src('./src/pages/*.html')
    // 压缩html需要配置压缩的参数
    .pipe(htmlmin({
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes:true, //移除属性的引号
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true,//移除注释
        minifyCSS:true,//把页面里面的style标签里面的css样式也去空格
        minifyJS:true,//把页面里的script标签里面的js代码给去空格
    }))
    .pipe(gulp.dest('./dist/pages'))
}

// 书写一个打包sass文件的方法
const sassHandler = ()=>{
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}

// 7-2 书写一个任务,自动删除dist目录
const delHandler = ()=>{
    // 这个函数的目的就是为了删除dist目录使用的
    return del(['./dist'])
}



// 8 书写一个自动监控文件的任务
const watchHandler = ()=>{
    // 监控src下面的css文件夹下的所以css文件,只要里面的文件一修改,我就执行一下cssHanlder这个任务
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/images/**',imgHandler);
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/lib/**',libHandler)
    gulp.watch('./src/font/**',libHandler)
    gulp.watch('./src/interface/**',libHandler)
    gulp.watch('./src/pages/*.html',htmlHandler)
}

// 9 书写一个配置服务器的任务
const serverHandler = ()=>{
    return gulp.src('./dist') //找到我要打开的页面的文件夹,把这个文件夹当做网站跟目录
    .pipe(webserver({ // 需要一些配置项
        port:8080, //端口号,0-65535,尽量不要用0-1023
        open:'./pages/index.html', //你默认打开的首页,从dist下面的目录开始书写
        livereload:true, //自动刷新浏览器-热启动
        // proxies:[
        //     // 每一个代理配置就是一个对象
        //     {
        //         source:'/weather', //源,你的代理标识符
        //         // 你直接请求下面这个地址压根也拿不到东西,因为跨域了
        //         target:'https://way.jd.com/jisuapi/weather' //目标,你要代理的地址
        //     }
        // ]
    }))
}

// 导出一个默认任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,
        imgHandler,
        jsHandler,
        libHandler,
        fontHandler,
        interfaceHandler,
        htmlHandler,
        sassHandler
    ),
    serverHandler,
    watchHandler    
)

