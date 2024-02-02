var clg=new String("IET-DAVV");
for(var i=0;i<clg.length;i++)
{
	var node = document.createElement("span");
	var textnode = document.createTextNode(clg[i]+"\xa0");
	node.appendChild(textnode);
	//node.setAttribute('id','clg'+i);
	document.getElementById("clg").appendChild(node); 
}