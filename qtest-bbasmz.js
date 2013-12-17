
var testPt;	//初期化が必要なのでグローバルに

module("bbasmz", {
	setup: function(){
		//parts初期化
		testPt = new PartsClass();
		for(var i=0; i<aryCsvFile.length; i++){
			jQuery.when(readCsv(aryCsvFile[i])).done(function(){
				var cid = aryCid[i];
				var ary1 = aryTop[cid][2];			//初期はクーガー1
				testPt.setSelect(ary1[indexPid]);	//パーツを選択
			});
		}
	}
});

//クーガー1の値でチェック
test("test PartsClass", function(){

	ok(10000==testPt.getArmorVal(), "getArmorVal");
	
	ok(3700==testPt.getWeightB(), "getWeightB");
	ok(300==testPt.getWeightA(), "getWeightA");
	ok(-800==testPt.getWeightH(), "getWeightH");
	ok(0==testPt.getWeightS(), "getWeightS");
	ok(-400==testPt.getWeightP(), "getWeightP");

	ok(4700==testPt.getGrace(), "getGrace");
});

//test("NG pattern", function(){
//	ok(9000==testPt.getArmorVal(), "getArmorVal");
//});


test("fsb", function(){
	
	var f1 = fsb["1"];
	ok(150==f1.val);

	var f3 = fsb["3"];
	ok(1.62==f3.val);

	var fI = fsb["I"];
	ok(2.16==fI.val);
	
});


