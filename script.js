
//导航菜单的显示/隐藏


function byid(id){	
	return typeof(id) === "string"?document.getElementById(id):id;
}
var menu = byid("menu-content"),
	menuItems = menu.getElementsByClassName("menu-item"),
	
	subMenu = byid("sub-menu"),
   innerBox = subMenu.getElementsByClassName("inner-box");
function slideImg(){
	//遍历主菜单且绑定事件
	for(var m=0;m<menuItems.length;m++){
		//给每一个menu-item的添加属性data-index，作为索引，自定义的属性不能这么用menuItems[m].data-index = m;
		menuItems[m].setAttribute("data-index",m);
		// innerBox[m].style.display = "none";
		menuItems[m].onmouseover = function(){
			//给每一个menu-item的添加属性data-index，作为索引，自定义的属性不能这么用menuItems[m].data-index = m;
			var idx = this.getAttribute("data-index");
			//console.log(idx);
			subMenu.className = "sub-menu";
			for(var j=0;j<innerBox.length;j++){
				innerBox[j].style.display="none";
				menuItems[j].style.background="none";
			}
			menuItems[idx].style.background="rgba(0,0,0,0.1)";
			innerBox[idx].style.display="block";
		}
	}
		menu.onmouseout = function(){
			subMenu.className = "sub-menu hide";
		}
		subMenu.onmouseover = function(){
			this.className = "sub-menu";
		}
		subMenu.onmouseout = function(){
			subMenu.className = "sub-menu hide";
		}
}

slideImg();
