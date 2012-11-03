// 8:00
function AssetManager() {
	this.successCount = 0;
	this.errorCount = 0;
	this.cache = {};
	this.downloadQueue = [];
}

/*
* @params Object -> {name:'', path:''}
*/
AssetManager.prototype.queueDownload = function(obj) {
	this.downloadQueue.push(obj);
}

AssetManager.prototype.isDone = function() {
	return (this.downloadQueue.length == this.successCount + this.errorCount);
}

AssetManager.prototype.downloadAll = function(callback) {
	for(var i = 0, len = this.downloadQueue.length; i < len; i++) {
		var path = this.downloadQueue[i].path,
			name = this.downloadQueue[i].name
			img = new Image(),
			self = this;
		
		img.addEventListener('load', function() {
			self.successCount += 1;
			if (self.isDone) { callback(); }
		});

		img.addEventListener('error', function() {
			self.errorCount += 1;
			if (self.isDone) { callback(); }
		});
		img.src = path;
		this.cache[name] = img;
	}

	this.downloadQueue = null;
}

AssetManager.prototype.getAsset = function(name) {
	return this.cache[name];
}