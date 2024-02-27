# React学习错误记录

## 关于Class式声明super报错
原因：在于super关键字的使用，这是一个考点，react的考点。

1.es6的类知识点，类与函数的this被赋值情况。
es6类默认是严格模式，无论是否开启use strict，所以如果不指定this，那么类中默认的会被设定为undefined；而在函数中的this在非严格模式下也是undefined，但最终undefined会被设置为全局

2.React中的类都是继承react Component这个类，只有初始化super才能使用this

## 盒子模型
标准盒子模型，由四部分组成，content，padding，border，margin

## webpack的解析

webpack在解析时，通过设置resolve参数可以搞定路径别名，因为路径别名就是一种替换
