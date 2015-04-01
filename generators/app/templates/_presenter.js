function Addon<%= appname %>_create(){

    var presenter = function(){};


    presenter.run = function(view, model){
      //todo
    };


    return presenter;
}

/*
* 说明：
* 此处为presenter的api说明，可以直接删除
*
* 整个代码中，只有run是必须的，其他的可以不需要
*
* function run(view, model) 当addon加载后初始化addon
* @param view DOM  addon的DOM节点 自动生成一个class为addon_+(addon名字)的div作为addon最外层
* @param model Array  addon接收的数据
* model[Bottom, Height, ID, IS Visibel, Layout, Left, Right, Top, Width] and 自定义的
*
* function createPreview(view, model) 创建预览，即该addon在editor中的显示。参数与run一致
* ps: preview中不能使用事件
*
* function setPlayerController(controller)  定义该函数，可以使用player的方法
* @param controller Object controller是Player Controller 。内部api太多，具体参考Player-services.htm
*
* PS:以上为常用的接口，其他接口直接查看doc
*
*/
