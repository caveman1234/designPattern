self.onmessage = function(event){
	var data = event.data.sort((a,b)=>a-b);
	self.postMessage(data);
};