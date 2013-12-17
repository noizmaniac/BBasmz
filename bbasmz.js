var FADEIN_SPEED = 120;
var COLOR_SELECT = "#EAEA30";	//選択時
var COLOR_MINUS = "red";		//マイナス
var COLOR_PLUS = "green";		//プラス
var COLOR_RANKS = "orange"; 	//Sランク
var COLOR_BG_DS = "#ffffc0";	//table
var COLOR_BG_EN = "#B8AFB1";	//table

//機体の列
var CLM_BR_PID = 0;
var CLM_BR_NAME = 1;
var CLM_BR_WEIGHT = 2;
var CLM_BR_ARMOR = 4;
var CLM_BR_WALK = 6;
var CLM_BR_DASH = 8;
var CLM_BR_GRACE = 10;
var CLM_BR_CHIP = 11;

//チップの列
var CLM_CP_ID = 0;
var CLM_CP_CONF = 1;
var CLM_CP_TYPE = 2;
var CLM_CP_NAME = 3;
var CLM_CP_COMM = 4;
var CLM_CP_COST = 5;

var CP_TYPE_WP = "機体強化(武器)";
var CP_TYPE_BR = "機体強化(機体)";

//フルセットボーナス
var fsb = {
	"1":{"val":150,	"name":"重量耐性UP (+150)"},
	"2":{"val":3,	"name":"装甲UP(+3%)"},
	"3":{"val":1.62,"name":"歩行速度UP (+1.62km/h)"},
	"4":{"val":3,	"name":"ブースタ容量UP (+3)"},
	"5":{"val":15,	"name":"索敵UP(+15)"},
	"6":{"val":5,	"name":"反動吸収UP (+5%)"},
	"7":{"val":3,	"name":"リロード速度UP (3%)"},
	"8":{"val":2.16,"name":"ダッシュ速度UP (+2.16km/h)"},
	"9":{"val":5,	"name":"SP供給率UP(5%)"},
	"A":{"val":0.5,	"name":"エリア移動UP (-0.5)"},
	"B":{"val":3,	"name":"射撃補正UP (+3%)"},
	"C":{"val":5,	"name":"ロックオン距離UP (+5m)"},
	"D":{"val":3,	"name":"装甲UP(+3%)"},
	"E":{"val":2.16,"name":"通常移動速度UP (+2.16km/h)"},
	"F":{"val":150,	"name":"重量耐性UP (+150)"},
	"G":{"val":2.592,"name":"高速移動UP (+2.592km/h)"},
	"H":{"val":3,	"name":"ブースタ容量UP (+3)"},
	"I":{"val":2.16,"name":"ダッシュ速度UP (+2.16km/h)"},
	"M":{"val":5,	"name":"武器変更UP (+5%)"}
};

var swtfsb1 = {
	"3":{"val":1.62,"name":"歩行速度UP (+1.62km/h)"},
	"8":{"val":2.16,"name":"ダッシュ速度UP (+2.16km/h)"},
	"E":{"val":2.16,"name":"通常移動速度UP (+2.16km/h)"},
	"G":{"val":2.592,"name":"高速移動UP (+2.592km/h)"},
	"I":{"val":2.16,"name":"ダッシュ速度UP (+2.16km/h)"}
};

var swtfsb2 = {
	"3":{"val":0.45,"name":"歩行速度UP (+0.45m/s)"},
	"8":{"val":0.6,"name":"ダッシュ速度UP (+0.6m/s)"},
	"E":{"val":0.6,"name":"通常移動速度UP (+0.6m/s)"},
	"G":{"val":0.72,"name":"高速移動UP (+0.72m/s)"},
	"I":{"val":0.6,"name":"ダッシュ速度UP (+0.6m/s)"}
};

//その他の重さ
var ETC = {
	"sateN":800,
	"sateR":1600,
	"req1":720,
	"req2":600,
	"req3":660
};

// セットボーナス強化チップ
var chipFullSet = {
	"cp227":2,
	"cp268":3
};

//チップの増加値 /カテゴリ文字列
var chips = {
	// 重量耐性
	"weight": [
		{"num": 1, "id": "cp225", "val": 60  },
		{"num": 2, "id": "cp226", "val": 150 },
		{"num": 3, "id": "cp267", "val": 240 },
		{"num": 4, "id": "cp273", "val": 50 }
	],
	//装甲(%
	"armor": [
		{"num": 1, "id": "cp201", "val": 1 },
		{"num": 2, "id": "cp202", "val": 2 },
		{"num": 3, "id": "cp251", "val": 3 }
	],
	//歩行
	"walk": [
		{"num": 1, "id": "cp221", "val": 0.972, "hover": 1.296, disp1:"歩行 +0.972km/h (ホバー +1.296km/h)", disp2:"歩行 +0.27m/s (ホバー +0.36m/s)"},
		{"num": 2, "id": "cp222", "val": 2.916, "hover": 3.888, disp1:"歩行 +2.916km/h (ホバー +3.888km/h)", disp2:"歩行 +0.81m/s (ホバー +1.08m/s)"},
		{"num": 3, "id": "cp265", "val": 4.860, "hover": 6.480, disp1:"歩行 +4.860km/h (ホバー +6.480km/h)", disp2:"歩行 +1.35m/s (ホバー +1.80m/s)"},
		{"num": 4, "id": "cp273", "val": 0.972, "hover": 1.296, disp1:"歩行+0.972km/h、ダッシュ+1.08km/h、重量耐性+50", disp2:"歩行+0.27m/s、ダッシュ+0.30m/s、重量耐性+50"}
	],
	//ダッシュ
	"dash": [
		{"num": 1, "id": "cp223", "val": 1.080, "hover": 0.864, disp1:"ダッシュ +1.08km/h (ホバー +0.864km/h)", disp2:"ダッシュ +0.30m/s (ホバー +0.24m/s)"},
		{"num": 2, "id": "cp224", "val": 2.160, "hover": 1.728, disp1:"ダッシュ +2.16km/h (ホバー +1.728km/h)", disp2:"ダッシュ +0.60m/s (ホバー +0.48m/s)"},
		{"num": 3, "id": "cp266", "val": 3.240, "hover": 2.592, disp1:"ダッシュ +3.24km/h (ホバー +2.592km/h)", disp2:"ダッシュ +0.90m/s (ホバー +0.72m/s)"},
		{"num": 4, "id": "cp273", "val": 1.080, "hover": 0.864, disp1:"歩行+0.972km/h、ダッシュ+1.08km/h、重量耐性+50", disp2:"歩行+0.27m/s、ダッシュ+0.30m/s、重量耐性+50"}
	],
	//運搬適性 valは倍率
	"carriage": [
		{"num": 1, "id": "cp146", "val": 0.25},
		{"num": 2, "id": "cp147", "val": 0.50}
	]
};

//ホバー
var aryHover = [
	'B', 'D', 'E', 'G'
];

// カテゴリID
var aryCid = [
	aryCidB[0], aryCidB[1], aryCidB[2], aryCidB[3],
	aryCidA[0], aryCidA[1], aryCidA[2], aryCidA[3],
	aryCidH[0], aryCidH[1], aryCidH[2], aryCidH[3],
	aryCidS[0], aryCidS[1], aryCidS[2], aryCidS[3],
	aryCidP[0], aryCidP[1], aryCidP[2], aryCidP[3],
	"cp"
];

var aryCidB = ["bh", "bb", "ba", "bl"];
var aryCidA = ["am", "as", "ae", "ap"];
var aryCidH = ["hm", "hs", "he", "hp"];
var aryCidS = ["sm", "ss", "se", "sp"];
var aryCidP = ["pm", "ps", "pe", "pp"];

var aryCsvFile = [
	'bw_b1.csv', 'bw_b2.csv', 'bw_b3.csv', 'bw_b4.csv',
	'bw_a1.csv', 'bw_a2.csv', 'bw_a3.csv', 'bw_a4.csv',
	'bw_h1.csv', 'bw_h2.csv', 'bw_h3.csv', 'bw_h4.csv',
	'bw_s1.csv', 'bw_s2.csv', 'bw_s3.csv', 'bw_s4.csv',
	'bw_p1.csv', 'bw_p2.csv', 'bw_p3.csv', 'bw_p4.csv',
];

var chipCsvFile = 'bchip.csv';

//tablesortrのパーサ
$.tablesorter.addParser({
	id: 'rank',
	is: function(s) {
		return false;
	},
	format: function(s) {
		// +, 半角空白, - の順番に並び替える
		return s.replace(/\+/,0).replace(/\s/,1).replace(/\-/,2).replace(/S/,0);
	},
	type: 'text'
});

$.tablesorter.addParser({
	id: 'textnum',
	is: function(s) {
		return false;
	},
	format: function(s) {
		// 半角空白を0にする
		return s.replace(/\s/,0);
	},
	type: 'text'
});

//グローバル
var blastCur = null;		// 装備中(current
var blastAfter = null;		// 装備後
var aryTop = new Array();		// CVSのなかみ 連想配列 key:カテゴリID(0行目前2桁,cid
var arySelParts = new Array();	// 選択中パーツ 連想配列 key:パーツID(pid

//機体管理クラス
function BlastClass(){
	this.initialize.apply(this, arguments);
}
BlastClass.prototype = {
	arySelect: [],
	arySelectChip: [],
	weightEtc: 0,	//その他の重さ
	dispSpeed: true,	//表示
	//コンストラクタ
	initialize: function(){
		this.arySelect = new Array();	//選んでいるパーツ key:cid
	},
	//クローン
	clone: function(){
		var clone = new BlastClass();
		for(var i in aryCid) {
			clone.setSelect(new String(this.getSelectId(aryCid[i])));
		}
		clone.arySelectChip = this.getSelectChip();
		clone.weightEtc = this.getEtc();
		clone.dispSpeed = this.dispSpeed;
		return clone;
	},
	//パーツIDの前2桁がカテゴリ名
	category: function(pid){
		if (null != pid) {
			return pid.substr(0, 2);
		}
		return "";
	},
	//パーツを選択する
	setSelect: function(pid){
		this.arySelect[this.category(pid)] = pid;
	},
	//装備中パーツのスペックを取得。配列で上から
	getSpec: function() {
		var ary = [];

		ary[0] = this.getSelect("bh", 3) + "[" + this.getSelect("bh", 4) + "]";
		ary[1] = this.getSelect("bh", 5) + "[" + this.getSelect("bh", 6) + "]";
		ary[2] = this.getSelect("bh", 7) + "[" + this.getSelect("bh", 8) + "]";
		ary[3] = this.getSelect("bh", 9) + "[" + this.getSelect("bh", 10) + "]";
		ary[4] = this.getSelect("bh", 11);

		ary[5] = this.getSelect("bb", 3) + "[" + this.getSelect("bb", 4) + "]";
		ary[6] = this.getSelect("bb", 5) + "[" + this.getSelect("bb", 6) + "]";
		ary[7] = this.getSelect("bb", 7) + "[" + this.getSelect("bb", 8) + "]";
		ary[8] = this.getSelect("bb", 9) + "[" + this.getSelect("bb", 10) + "]";
		ary[9] = this.getSelect("bb", 11);

		ary[10] = this.getSelect("ba", 3) + "[" + this.getSelect("ba", 4) + "]";
		ary[11] = this.getSelect("ba", 5) + "[" + this.getSelect("ba", 6) + "]";
		ary[12] = this.getSelect("ba", 7) + "[" + this.getSelect("ba", 8) + "]";
		ary[13] = this.getSelect("ba", 9) + "[" + this.getSelect("ba", 10) + "]";
		ary[14] = this.getSelect("ba", 11);

		ary[15] = this.getSelect("bl", 3) + "[" + this.getSelect("bl", 4) + "]";
		ary[16] = this.getSelect("bl", 5) + "[" + this.getSelect("bl", 6) + "]";
		ary[17] = this.getSelect("bl", 7) + "[" + this.getSelect("bl", 8) + "]";
		ary[18] = this.getSelect("bl", 9) + "[" + this.getSelect("bl", 10) + "]";
		ary[19] = this.getSelect("bl", 11);

		return ary;
	},
	//装甲(パーツ4つの平均)
	getArmorPer: function(){
		var sum = 0;
		for(var i in aryCidB) {
			sum += parseFloat(this.getSelect(aryCidB[i], CLM_BR_ARMOR));
		}
		//％
		var per = this.getChipVal("armor");		// 装甲チップ
		per += this.getFullSetVal("2");
		per += this.getFullSetVal("D");
		per = sum * (per / 100);
		sum += per;
		//計算
		var ret = Math.floor((sum * 100) / 4);	// 小数は2桁
		return (ret / 100);
	},
	//装甲の値
	getArmorVal: function(){
		return (100 * this.getArmorPer()).toFixed(0);
	},
	//その他のセット
	setEtc: function(etcId){
		var wt = ETC[etcId];
		if(null!=wt){
			this.weightEtc = wt;
		}else{
			this.weightEtc = 0;
		}
	},
	getEtc: function(){
		var wt = this.weightEtc;
		var wc = wt - (wt * this.getChipVal("carriage"));	//運搬適性チップ
		return wc;
	},
	//重量
	getWeightB: function(){
		var sum = Number(this.getWeightAry(aryCidB));
		sum += this.getEtc();
		return sum;
	},
	getWeightA: function(){
		return Number(this.getGrace()) - this.getWeightB() - this.getWeightAry(aryCidA);
	},
	getWeightH: function(){
		return Number(this.getGrace()) - this.getWeightB() - this.getWeightAry(aryCidH);
	},
	getWeightS: function(){
		return Number(this.getGrace()) - this.getWeightB() - this.getWeightAry(aryCidS);
	},
	getWeightP: function(){
		return Number(this.getGrace()) - this.getWeightB() - this.getWeightAry(aryCidP);
	},
	//重量(引数の配列
	getWeightAry: function(aryCidName) {
		var sum=0;
		for(var i in aryCidName){
			sum += Number(this.getSelect(aryCidName[i], CLM_BR_WEIGHT));
		}
		return sum;
	},
	//重量(フルセットボーナスなし
	getNofsbWeight: function(){
		var sum = 0;
		for(var i in aryCidB) {
			sum += Number(this.getSelect(aryCidB[i], CLM_BR_WEIGHT));
		}
		return sum;
	},
	//積載猶予=重量耐性+チップ+フルセット
	getGrace: function(){
		var sum = Number(this.getSelect("bl", CLM_BR_GRACE));
		sum += this.getChipVal("weight");
		sum += this.getFullSetVal("1");	//クガ
		sum += this.getFullSetVal("F");	//蘭
		return sum;
	},
	//超過
	getPer: function(excess){
		var per = 0;
		if(0 > excess){
			per = excess * -1 / 10 * 0.250;	//重量超過10につき-0.25%
		}
		return per;
	},
	//ダッシュ表示
	getPerA: function(){
		return this.getPer(this.getWeightA());
	},
	getPerH: function(){
		return this.getPer(this.getWeightH());
	},
	getPerS: function(){
		return this.getPer(this.getWeightS());
	},
	getPerP: function(){
		return this.getPer(this.getWeightP());
	},
	//ダッシュ 戻り値：表示文字列
	getDash: function(excess){
		var calc = this.getSpeed(excess, CLM_BR_DASH);
		calc += this.swtSpeed(this.getChipWD("dash"));
		calc += this.swtSpeed(this.getFullSetVal("8"));
		calc += this.swtSpeed(this.getFullSetVal("G"));
		calc += this.swtSpeed(this.getFullSetVal("I"));
		//小数点以下を四捨五入でIEEE754対策
		if(blastCur.dispSpeed){
			calc = (Math.round(calc * 1000) / 1000).toFixed(3);
		}else{
			calc = (Math.round(calc * 100) / 100).toFixed(2);
		}
		return calc;
	},
	//ダッシュ表示
	getDashA: function(){
		return this.getDash(this.getWeightA());
	},
	getDashH: function(){
		return this.getDash(this.getWeightH());
	},
	getDashS: function(){
		return this.getDash(this.getWeightS());
	},
	getDashP: function(){
		return this.getDash(this.getWeightP());
	},
	//歩行 戻り値：表示文字列
	getWalk: function(excess){
		var calc = this.getSpeed(excess, CLM_BR_WALK);
		calc += this.swtSpeed(this.getChipWD("walk"));
		calc += this.getFullSetVal("3");
		calc += this.getFullSetVal("E");
		//小数点以下を四捨五入でIEEE754対策
		if(blastCur.dispSpeed){
			calc = (Math.round(calc * 1000) / 1000).toFixed(3);
		}else{
			calc = (Math.round(calc * 100) / 100).toFixed(2);
		}
		return calc;
	},
	//歩行表示
	getWalkA: function(){
		return this.getWalk(this.getWeightA());
	},
	getWalkH: function(){
		return this.getWalk(this.getWeightH());
	},
	getWalkS: function(){
		return this.getWalk(this.getWeightS());
	},
	getWalkP: function(){
		return this.getWalk(this.getWeightP());
	},
	//速度計算:小数点3桁表示
	getSpeed: function(excess, index){
		var speed = this.getSelect("bl", index);
		var calc = parseFloat(this.swtSpeed(speed));
		var per = 0;
		if(0 > excess){
			per = excess * -1 / 10 * 0.250;	//重量超過10につき-0.25%
			calc = speed - (speed * per / 100);
		}
		return calc;
	},
	swtSpeed: function(spd){
		var ret = spd;
		if(!blastCur.dispSpeed){
			ret = spd / 36 * 10;
		}
		return ret;
	},
	//フルセットボーナスチェック
	isFullSet: function(){
		//pidの3桁目でパーツブランドが同じか
		var ary1 = new Array();
		ary1.push(this.getSelectId("bh").charAt(2));
		ary1.push(this.getSelectId("bb").charAt(2));
		ary1.push(this.getSelectId("ba").charAt(2));
		ary1.push(this.getSelectId("bl").charAt(2));
		for(var i=0; i<ary1.length-1; i++) {
			if(ary1[i] != ary1[i+1]) {
				return false;
			}
		}
		return true;
	},
	//パーツIDに該当するフルセットの値取得。idに該当しない場合はゼロ。
	getFullSetVal: function(id){
		//idと同じか
		var fid = this.getSelectId("bh").charAt(2);
		if(id != fid){
			return 0;
		}
		//フルセットか
		if(!this.isFullSet()){
			return 0;
		}
		var fss = fsb[fid]
		if(null == fss){
			return 0;
		}
		//フルセットチップ有無
		for(var i in chipFullSet){
			if(this.isChip(i)){
				return (fss.val * chipFullSet[i]);
			}
		}
		return fss.val;
	},
	//チップ容量の総数(小数点1桁)
	getChip: function(){
		var sum = 0;
		for(var i in aryCidB) {
			sum += parseFloat(this.getSelect(aryCidB[i], CLM_BR_CHIP)) * 10;
		}
		return Math.round(sum) / 10;
	},
	//選んでいるパーツの値を取得
	getSelect: function(cid, index){
		return this.get(this.getSelectId(cid), index);
	},
	//選んでいるパーツIDを取得
	getSelectId: function(cid){
		return this.arySelect[cid];
	},
	//引数のパーツを取得
	get: function(pid, index){
		var ary1 = aryTop[this.category(pid)];
		for (var i=0; i<ary1.length; i++){
			if(pid == ary1[i][0]){
				return ary1[i][index];
			}
		}
		return "";	//エラー時は空白
	},
	//ホバーならtrue
	isHover: function(){
		for(var i in aryHover){
			var pid = this.getSelect("bl", CLM_BR_PID);
			if(pid.charAt(2)==aryHover[i]){
				return true;
			}
		}
		return false;
	},
	//チップをセットする
	setSelectChip: function(pid){
		this.arySelectChip[pid] = pid;	//連想配列
	},
	//チップの削除
	deleteChip: function(pid){
		delete this.arySelectChip[pid];
	},
	//チップ初期化
	emptyChip: function(){
		this.arySelectChip = [];
	},
	//配列を戻す
	getSelectChip: function(){
		return this.arySelectChip;
	},
	//チップが登録されていたらID戻る。なければundefind
	getFindChip: function(pid){
		return this.arySelectChip[pid];
	},
	//チップが登録されていればtrue
	isChip: function(pid){
		if(this.getFindChip(pid) == null){
			return false;
		}
		return true;
	},
	//リストの内、１つでもチップが登録されていればtrue
	isChipAry: function(ary){
		for(var i=0; i<ary.length; i++){
			if(this.getFindChip(ary[i]) != null){
				return true;
			}
		}
		return false;
	},
	//チップの値を取得。なければゼロが戻る。 /カテゴリ文字列
	getChipVal: function(cate){
		var aryId = this.getSelectChip();
		var aryCt = chips[cate];
		var ret = 0;
		for(var i=0; i<aryCt.length; i++){
			for(var k in aryId){
				if(aryId[k]==aryCt[i].id){
					ret += aryCt[i].val;
				}
			}
		}
		return ret;
	},
	//歩行とダッシュのチップの値を取得。なければゼロが戻る。 /カテゴリ文字列
	getChipWD: function(cate){
		var aryId = this.getSelectChip();
		var aryCt = chips[cate];
		var ret = 0.000;
		for(var i=0; i<aryCt.length; i++){
			for(var k in aryId){
				if(aryId[k]==aryCt[i].id){
					if(this.isHover()){		// ホバーチェック
						ret = ret + aryCt[i].hover;
					}else{
						ret = ret + aryCt[i].val;
					}
				}
			}
		}
		return ret;
	},
	//パーツURLを取得
	getURL: function() {
		var str = [];
		for(var i=0; i<aryCid.length-1; i++) {
			var id = this.getSelectId(aryCid[i]);
			str.push(id.substr(2, 2));
		}
		//チップ調べる(3桁
		var aryChipId = this.getSelectChip();
		for(var i in aryChipId) {
			str.push(aryChipId[i].substr(2, 3));
		}
		return str.join("");
	},
	//パーツURLを登録
	setURL: function(url) {
		//入力チェック
		if (url.length < 40) {
			return false;
		}
		var ary = [];
		var index = 0;
		while(index < 40) {
			ary.push(url.substr(index, 2));
			index += 2;
		}
		index = 40;
		while(index < url.length) {
			ary.push(url.substr(index, 3));
			index += 3;
		}
		//セットする
		for(var i=0; i<20; i++) {
			this.setSelect(aryCid[i] + ary[i]);
			$("#" + aryCid[i]).val(this.getSelect(aryCid[i], CLM_BR_NAME));	//ボタン名も変える
		}
		this.emptyChip();
		while(i < ary.length) {
			this.setSelectChip("cp" + ary[i++]);
		}
	}
};

// はじめ
$(document).ready(function(){

	//まずは機体を初期化
	blastCur = new BlastClass();

	// CSVを全部読み込む
	for(var i=0; i<aryCsvFile.length; i++){
		jQuery.when(readCsv(aryCsvFile[i])).done(function(){
			var cid = aryCid[i];
			var ary1 = aryTop[cid][2];			//初期はクーガー1
			blastCur.setSelect(ary1[CLM_BR_PID]);	//パーツを選択
			$("#"+cid).val(ary1[CLM_BR_NAME]);	//ボタンに名前を入れる
		});
	}

	//チップ
	readCsv(chipCsvFile);

	//URLパラメータの解釈
	if(location.search){
		var url = location.search.substring(3, location.search.length);		// 3は ?p=
		blastCur.setURL(url);
	}

	//表示用関数はリフレッシュ
	//速度
	var dss = $.cookie("DS");
	if("false"==dss){
		chkSpeed();
	}else{
		viewCurrent();
		viewComment();
	}
	chipView();
});

//リセットする
function reset(){
	document.cookie = "PARTS=";
	//パラメタ無しアクセス
	location.href = getSiteURL();
}

function getSiteURL(){
	var url = document.URL;
	url = url.substring(0, url.lastIndexOf("/")+1);
	return url;
}

function getOutputURL(){
	var url = getSiteURL() + "?p=" + blastCur.getURL();
	return url;
}

//URL出力
function outputURL(){
	location.href = getOutputURL();
}

function saveAsm(n){
	$.cookie("PT"+n, blastCur.getURL(), { expires:365 });
	viewComment();	//コメント表示して読込アピール
}

function loadAsm(n){
	var asm = $.cookie("PT"+n);
	blastCur.setURL(asm);
	//表示用
	viewCurrent();
	chipView();
	viewComment();
}

//CSVを非同期で読み込んでaryTop[keyはcid]で格納
function readCsv(filename){
	return jQuery.ajax({
		url: filename,
		async: false,
		cache: false,
		success: function(data){
			var ary = new Array();
			var index = 0;
			var csv = $.csv()(data);
			$(csv).each(function(index){
				ary[index] = this;
				index++;
			});
			var aryTemp = ary[0];
			aryTop[aryTemp[0].substr(0,2)] = ary;
		}
	});
}

//ボタンの色を元に戻す
function clearBtnColor(){
	for(var i=0; i<aryCid.length; i++){
		$("#"+aryCid[i]).css('background-color', '');
	}
	$("#cp1").css('background-color', '');
	$("#cp2").css('background-color', '');
	$("#cp3").css('background-color', '');
	$("#cp4").css('background-color', '');
}

//リスト出力ボタン
function selectList(cid){
	//ボタンの色を変える
	clearBtnColor();
	$("#"+cid).css('background-color', COLOR_SELECT);
	// リスト描画
	var selectId = blastCur.getSelectId(cid);
	writeTable(cid, selectId);
	//開始時に選択されていたら色付け
	if(selectId != null){
		selectParts(selectId, $("#" + cid).val());
	}

	//after側の文字を全消し
	viewAfterEmpty();
}

function changeSpeedValue(val){
	if(blastCur.dispSpeed){
		return val;
	}
	var speed = parseFloat(val);
	speed = speed / 36 * 10;
	speed = (Math.round(speed * 100) / 100).toFixed(2);
	return speed;
}

//テーブル出力
function writeTable(cid, selectId){
	var str = [];
	var ary1 = aryTop[cid];
	var aryRgt = new Array();
	for(var i=0; i < ary1.length; i++){
		var ary2 = ary1[i];
		//0行目はヘッダ
		if(0==i){
			str.push("<thead><tr><th>");
			for(var k=0; k < ary2.length; k++) {
				if(0==k){
					continue;	//0行目はIDなので飛ばす
				}
				if("bl"==cid && (CLM_BR_WALK==k || CLM_BR_DASH==k)){
					//速度切替
					if(blastCur.dispSpeed){
						str.push(ary2[k] + "</th>");
					}else{
						str.push("(m/s)</th>");
					}
				}else{
					str.push(ary2[k] + "</th>");
				}
				//閉じる
				if((ary2.length-1)==k){
					str.push("</tr></thead><tbody>");
				}else if(1==k){
					str.push("<th><a onClick='chkDel(\"" + cid + "\")'>比較</a></th><th>");
				}else{
					str.push("<th>");
				}
			}
		}else if(1==i){
			//1行目に寄せる方向が入っているか？
			for(var k=0; k < ary2.length; k++){
				if("t"==ary2[k] || ""==ary2[k]){
					//右寄せのcss
					aryRgt.push("class='rgt' ");
				}else{
					//空白だと左寄せ
					aryRgt.push("");
				}
			}
		}else{
			var strName = "";		// 名称
			var strOneLine = "";	// 1行分
			for(var k=0; k < ary2.length; k++) {
				if(0==k){
					strOneLine += "<tr id='" + ary2[0] + "'>";
				}else if(1==k){
					var temp1 = "</td><td><input type='checkbox' id='c" + ary2[0] + "' class='conttableCheck'>";
					strOneLine += "<td><input type='button' value='" + ary2[1] + "' class='conttableBtn' onclick='selectParts(\"" + ary2[0] + "\",\"" + ary2[1] + "\")'></td>" + temp1;
					strName = ary2[k];
				}else if((ary2.length-1)==k){
					strOneLine += "<td " + aryRgt[k] + "id='" + ary2[0] + k + "'>" + ary2[k] + "</td></tr>";
				}else if("bl"==cid && (CLM_BR_WALK==k || CLM_BR_DASH==k)){
					//脚で速度切替
					strOneLine += "<td " + aryRgt[k] + "id='" + ary2[0] + k + "'>" + changeSpeedValue(ary2[k]) + "</td>";
				}else{
					strOneLine += "<td " + aryRgt[k] + "id='" + ary2[0] + k + "'>" + ary2[k] + "</td>";
				}
			}
			str.push(strOneLine);	// 1行分追加
		}
	}
	str.push("</tbody>");
	$("#conttable")
		.html(str.join(""))
		.hide()
		.fadeIn(FADEIN_SPEED);

	setTablesorter(cid);
}

//ソートヘッダを作り、ソート機能実行
function setTablesorter(cid){
	var str = [];
	var ary1 = aryTop[cid][1];
	for(var i=0; i < ary1.length; i++){
		if("r"==ary1[i]){
			str.push('"' + i + '":{"sorter":"rank"},');
		}
		if("t"==ary1[i]){
			str.push('"' + i + '":{"sorter":"textnum"},');
		}
	}
	//JSON変換
	if(0!=str.length){
		//json変換結合して、最後の余計な,を削る
		var strs = str.join("")
		var cst = '{ "headers": {' + strs.substring(0, strs.length-1) + '}}';
		var jst = jQuery.parseJSON(cst);
		//ソート機能実行
		$("#conttable").tablesorter(jst);
	}else{
		$("#conttable").tablesorter();
	}
}

//パーツの選択　引数1:パーツID, 引数2:パーツ名称(ボタン名切り替え用)
function selectParts(pid, str){
	var cid = blastCur.category(pid);

	if(pid != arySelParts[cid]){
		// 1回目は、テーブル内すべての色を最初の状態に
		var ary = aryTop[cid];
		for(var i=0; i < ary.length; i++){	//0行目はIDだから出力しない
			$("#" + ary[i][0]).css('background-color', '');
		}
		$("#" + pid).hide();
		arySelParts[cid] = pid;
		viewAfter(pid);		//各種計算
		$("#nFullSet").css("font-weight", "normal");

	}else{
		// 2回目は、メニュー側ボタンの文字変更
		var cidid = $("#" + cid);
		cidid
			.hide()
			.val(str)
			.fadeIn(FADEIN_SPEED);

		blastCur.setSelect(pid);	//パーツの確定
		viewCurrent();		//各種計算
	}
	//背景色を塗る
	$("#" + pid)
		.css('background-color', COLOR_SELECT)
		.fadeIn(FADEIN_SPEED);
}

function viewAfter(pid){
	//パーツクラスのクローンを作って、after側表示用にする
	blastAfter = blastCur.clone();
	blastAfter.setSelect(pid);

	var cid = blastAfter.category(pid);
	var bid = cid.charAt(0);

	if("b"==bid) {
		var sumChip = Number(blastAfter.getChip()).toFixed(1);
		var idChipAfter = $("#nChipAfter");
		idChipAfter.html(sumChip);
		changeColor(sumChip, $("#nChipBefore1"), idChipAfter, true);

		var sumArmorVal = blastAfter.getArmorVal();
		var idArmorValAfter = $("#nArmorValAfter");
		idArmorValAfter.html(sumArmorVal);
		changeColor(sumArmorVal, $("#nArmorValBefore"), idArmorValAfter, true);

		var sumWeight = blastAfter.getWeightB();
		var idWeightAllAfter = $("#nWeightAllAfter");
		idWeightAllAfter.html(sumWeight);
		changeColor(sumWeight, $("#nWeightAllBefore"), idWeightAllAfter, false);

		var grace = Number(blastAfter.getGrace());	// 積載猶予
		var idWeightGraceAfter = $("#nWeightGraceAfter");
		idWeightGraceAfter.html(grace);
		changeColor(grace, $("#nWeightGraceBefore"), idWeightGraceAfter, true);
	}

	if("a"==bid || "b"==bid) {
		calcAfterSpec("a", blastAfter.getWeightA(), blastAfter.getDashA(), blastAfter.getWalkA(), blastAfter.getPerA());
	}
	if("h"==bid || "b"==bid) {
		calcAfterSpec("h", blastAfter.getWeightH(), blastAfter.getDashH(), blastAfter.getWalkH(), blastAfter.getPerH());
	}
	if("s"==bid || "b"==bid) {
		calcAfterSpec("s", blastAfter.getWeightS(), blastAfter.getDashS(), blastAfter.getWalkS(), blastAfter.getPerS());
	}
	if("p"==bid || "b"==bid) {
		calcAfterSpec("p", blastAfter.getWeightP(), blastAfter.getDashP(), blastAfter.getWalkP(), blastAfter.getPerP());
	}

	//チップの太字
	viewBold();

	//破棄
	blastAfter = null;
}

function calcAfterSpec(id, weight, dash, walk, per){
	//重量
	colorAfterWeight($("#" + id + "WeightAfter"), weight);
	//走歩
	var chipDash = blastCur.getChipVal("dash");	//チップある？
	var chipWalk = blastCur.getChipVal("walk");
	colorWD($("#"+ id +"DashAfter"), $("#"+ id +"PerAfter"), dash, per, chipDash);
	colorWD($("#"+ id +"WalkAfter"), $("#"+ id +"PerAfter"), walk, per, chipDash);
}

function colorAfterWeight(afterId, weight){
	//負数ならminus色
	afterId.html(weight);
	if(0 > weight){
		afterId.css("color", COLOR_MINUS);
	}else{
		afterId.css("color", COLOR_PLUS);
	}
}

//after側の色を変える
// boolMin:trueなら数値が低くなったら緑にする
function changeColor(value, beforeId, afterId, boolMin){
	var minus = COLOR_MINUS;
	var plus = COLOR_PLUS;
	if(boolMin){
		minus = COLOR_PLUS;
		plus = COLOR_MINUS;
	}

	var bval = beforeId.html();
	if(value == bval){
		afterId.css("color", "");		//同じなら色は初期値
	}else if(value > bval){
		afterId.css("color", minus);
	}else{
		afterId.css("color", plus);
	}
}

//装備中の値を更新
function viewCurrent(){
	// チップ
	var sumChip = Number(blastCur.getChip()).toFixed(1);
	$("#nChipBefore1").html(sumChip);
	$("#nChipBefore2").html(sumChip);
	$("#nChipAfter").html("");

	// 装甲値
	$("#nArmorValBefore").html(blastCur.getArmorVal());
	$("#nArmorValAfter").html("");

	// 重量
	$("#nWeightAllBefore").html(blastCur.getWeightB());
	$("#nWeightAllAfter").html("");

	// 積載猶予
	$("#nWeightGraceBefore").html(Number(blastCur.getGrace()));
	$("#nWeightGraceAfter").html("");

	// 余剰重量
	colorWeight("#aWeightBefore", blastCur.getWeightA());
	colorWeight("#hWeightBefore", blastCur.getWeightH());
	colorWeight("#sWeightBefore", blastCur.getWeightS());
	colorWeight("#pWeightBefore", blastCur.getWeightP());

	var perA = blastCur.getPerA();
	var perH = blastCur.getPerH();
	var perS = blastCur.getPerS();
	var perP = blastCur.getPerP();

	var chipDash = blastCur.getChipVal("dash");
	var chipWalk = blastCur.getChipVal("walk");

	// ダッシュ
	colorWD($("#aDashBefore"), $("#aPerBefore"), blastCur.getDashA(), perA, chipDash);
	colorWD($("#hDashBefore"), $("#hPerBefore"), blastCur.getDashH(), perH, chipDash);
	colorWD($("#sDashBefore"), $("#sPerBefore"), blastCur.getDashS(), perS, chipDash);
	colorWD($("#pDashBefore"), $("#pPerBefore"), blastCur.getDashP(), perP, chipDash);

	// 歩行
	colorWD($("#aWalkBefore"), $("#aPerBefore"), blastCur.getWalkA(), perA, chipWalk);
	colorWD($("#hWalkBefore"), $("#hPerBefore"), blastCur.getWalkH(), perH, chipWalk);
	colorWD($("#sWalkBefore"), $("#sPerBefore"), blastCur.getWalkS(), perS, chipWalk);
	colorWD($("#pWalkBefore"), $("#pPerBefore"), blastCur.getWalkP(), perP, chipWalk);

	// スペック表
	var arySpec = blastCur.getSpec();
	for(var i=0; i<arySpec.length; i++){
		var id = $("#xh"+i);
		id.html(arySpec[i]);
		changeRankColor(arySpec[i], id); //色変え
	}
	
	//運搬適性
	var chipCar = blastCur.getChipVal("carriage");
	if(0!=chipCar){
		for(var i in ETC){
			var str = ETC[i] * chipCar;
			$("#etcval"+i)
				.html(" - " + str)
				.css("font-weight", "bolder");
		}
	}else{
		for(var i in ETC){
			$("#etcval"+i).html("");
		}
	}

	//太字
	viewBold();

	//tweet
	$('#buttonTweet').empty();
	$('<a>')
		.attr('href', 'http://twitter.com/share')
		.attr('class', 'twitter-share-button')
		.attr('data-url', getOutputURL())
		.attr('data-text', '【BBasmz】')
		.attr('data-count', 'none')
		.attr('data-lang', 'ja')
		.appendTo('#buttonTweet');

	//twitterボタン再描画
	twttr.ready(function() {
		twttr.widgets.load();
	});
}

function viewAfterEmpty(){
	$("#nChipAfter").html("");
	$("#nArmorValAfter").html("");
	$("#nWeightAllAfter").html("");
	$("#nWeightGraceAfter").html("");
	$("#aWeightAfter").html("");
	$("#hWeightAfter").html("");
	$("#sWeightAfter").html("");
	$("#pWeightAfter").html("");
	$("#aPerAfter").html("");
	$("#hPerAfter").html("");
	$("#sPerAfter").html("");
	$("#pPerAfter").html("");
	$("#aDashAfter").html("");
	$("#hDashAfter").html("");
	$("#sDashAfter").html("");
	$("#pDashAfter").html("");
	$("#aWalkAfter").html("");
	$("#hWalkAfter").html("");
	$("#sWalkAfter").html("");
	$("#pWalkAfter").html("");
}

// 太字まとめ
function viewBold(){
	//初期化
	var fw = "font-weight";
	var nm = "normal";
	var nb = "bolder";

	$("#nFullSet")
		.css(fw, nm)
		.html(""); //空白

	$("#nWeightGraceBefore").css(fw, nm);
	$("#aWalkBefore").css(fw, nm);
	$("#hWalkBefore").css(fw, nm);
	$("#sWalkBefore").css(fw, nm);
	$("#pWalkBefore").css(fw, nm);
	$("#aDashBefore").css(fw, nm);
	$("#hDashBefore").css(fw, nm);
	$("#sDashBefore").css(fw, nm);
	$("#pDashBefore").css(fw, nm);

	$("#xh1").css(fw, nm);
	$("#xh2").css(fw, nm);
	$("#xh3").css(fw, nm);
	$("#xh6").css(fw, nm);
	$("#xh7").css(fw, nm);
	$("#xh8").css(fw, nm);
	$("#xh11").css(fw, nm);
	$("#xh12").css(fw, nm);
	$("#xh13").css(fw, nm);
	$("#xh16").css(fw, nm);
	$("#xh17").css(fw, nm);
	$("#xh18").css(fw, nm);

	//重量
	var cpw = chips["weight"];
	for(var i=0; i<cpw.length; i++){
		if(blastCur.isChip(cpw[i].id)){
			$("#nWeightGraceBefore").css(fw, nb);
			$("#nWeightGraceAfter").css(fw, nb);
			break;
		}else{
			$("#nWeightGraceBefore").css(fw, nm);
			$("#nWeightGraceAfter").css(fw, nm);
		}
	}

	//装甲
	var cpa = chips["armor"];
	for(var i=0; i<cpa.length; i++){
		if(blastCur.isChip(cpa[i].id)){
			$("#nArmorValBefore").css(fw, nb);
			$("#nArmorValAfter").css(fw, nb);
			break;
		}else{
			$("#nArmorValBefore").css(fw, nm);
			$("#nArmorValAfter").css(fw, nm);
		}
	}

	//フルセット
	if(blastCur.isFullSet()){
		//文字列
		var fid = blastCur.getSelectId("bh").charAt(2);
		$("#nFullSet")
			.html(fsb[fid].name)
			.css(fw, nm)
			.css("color", COLOR_PLUS);

		if("1"==fid || "F"==fid){
			$("#nWeightGraceBefore").css(fw, nb);
		}else if("2"==fid || "D"==fid){
			$("#nArmorValBefore").css(fw, nb);
		}else if("B"==fid){	//射
			$("#xh1").css(fw, nb);
		}else if("5"==fid){	//索敵
			$("#xh2").css(fw, nb);
		}else if("C"==fid){	//ロ
			$("#xh3").css(fw, nb);
		}else if("4"==fid || "H"==fid){	//ブ
			$("#xh6").css(fw, nb);
		}else if("9"==fid){	//SP
			$("#xh7").css(fw, nb);
		}else if("A"==fid){	//エリア
			$("#xh8").css(fw, nb);
		}else if("6"==fid){	//反動
			$("#xh11").css(fw, nb);
		}else if("7"==fid){	//リロ
			$("#xh12").css(fw, nb);
		}else if("M"==fid){	//変
			$("#xh13").css(fw, nb);
		}else if("3"==fid || "E"==fid){	//歩
			$("#xh16").css(fw, nb);
			$("#aWalkBefore").css(fw, nb);
			$("#hWalkBefore").css(fw, nb);
			$("#sWalkBefore").css(fw, nb);
			$("#pWalkBefore").css(fw, nb);
		}else if("8"==fid || "G"==fid || "I"==fid){	//ダ
			$("#xh17").css(fw, nb);
			$("#aDashBefore").css(fw, nb);
			$("#hDashBefore").css(fw, nb);
			$("#sDashBefore").css(fw, nb);
			$("#pDashBefore").css(fw, nb);
		}
	}

	//afterがあるときだけ
	if(null!=blastAfter){
		//フルセット
		if(blastAfter.isFullSet()){
			var aid = blastAfter.getSelectId("bh").charAt(2);
			$("#nFullSet")
				.html(fsb[aid].name)
				.css(fw, nb)
				.css("color", COLOR_PLUS);

			if("1"==fid || "F"==fid){
				$("#nWeightGraceAfter").css(fw, nb);
			}else if("2"==fid || "D"==fid){
				$("#nArmorValBefore").css(fw, nb);
			}else if("3"==fid || "E"==fid){	//歩
				$("#aWalkAfter").css(fw, nb);
				$("#hWalkAfter").css(fw, nb);
				$("#sWalkAfter").css(fw, nb);
				$("#pWalkAfter").css(fw, nb);
			}else if("8"==fid || "G"==fid || "I"==fid){	//ダ
				$("#aDashAfter").css(fw, nb);
				$("#hDashAfter").css(fw, nb);
				$("#sDashAfter").css(fw, nb);
				$("#pDashAfter").css(fw, nb);
			}
		}else{
			//フルセットではない場合
			$("#nFullSet")
				.css(fw, nm)
				.html("");

			$("#nWeightGraceAfter").css(fw, nm);
			$("#aWalkAfter").css(fw, nm);
			$("#hWalkAfter").css(fw, nm);
			$("#sWalkAfter").css(fw, nm);
			$("#pWalkAfter").css(fw, nm);
			$("#aDashAfter").css(fw, nm);
			$("#hDashAfter").css(fw, nm);
			$("#sDashAfter").css(fw, nm);
			$("#pDashAfter").css(fw, nm);
		}
	}
}

//ランクの色変え
function changeRankColor(rank, id){
	var at = rank.charAt(0);
	if("S"==at) {
		id.css("color", COLOR_RANKS);
	}else if("A"==at || "B"==at) {
		id.css("color", COLOR_PLUS);
	}else if("D"==at || "E"==at) {
		id.css("color", COLOR_MINUS);
	}else{
		id.css("color", "");
	}
}

//重量の色を変える
function colorWeight(beforeId, weight) {
	var before = $(beforeId);
	before.html(weight);
	if(0 > weight){
		before.css("color", COLOR_MINUS);
	}else{
		before.css("color", "");		//マイナスでないなら初期値
	}
}

//ダッシュ・歩行
function colorWD(valId, perId, weight, perVal, valChip){

	if(blastCur.dispSpeed){
		valId.html(digits(weight,3));
	}else{
		valId.html(digits(weight,2));
	}
	if(0 < perVal){
		valId.css("color", COLOR_MINUS);
		perId.html(digits(perVal,2) + '%');
		perId.css("color", COLOR_MINUS);
	}else{
		//マイナスでないなら初期値
		valId.css("color", "");
		perId.html("&nbsp;0.00%");
		perId.css("color", "");
	}

	//チップがあったら太字
	if(0==valChip){
		valId.css("font-weight", "normal");
	}else{
		valId.css("font-weight", "bolder");
	}
}

function digits(num, p){
	//小数点p桁まで表示
	var ret = Number(num).toFixed(p);;
	//整数値が1桁の場合は半角スペース入れる
	if(1==String(ret).indexOf(".")){
		ret = "&nbsp;" + String(ret);
	}
	return ret;
}

// チップのリストの初期表示
function selectListChip(sel){
	//ボタンの色を変える
	clearBtnColor();
	$("#cp"+sel).css('background-color', COLOR_SELECT);
	//selとチップ3桁目の整合性をとる
	var chkSel = sel;
	var flgSel = true;
	if(3==sel){
		chkSel = 2;
		flgSel = false;	//装備チップ
	}else if(4==sel){
		chkSel = 3;
	}
	//表示
	var str = [];
	var ary1 = aryTop["cp"];
	for(var i=0; i < ary1.length; i++){
		var ary2 = ary1[i];
		//0行目はヘッダ
		if(0==i){
			str.push("<thead><tr><th>");
			for(var k=0; k < ary2.length; k++) {
				if(CLM_CP_CONF==k){
					continue;	// コンフリクトフラグは出力しない
				}
				if(CLM_CP_ID==k){
					str.push("選択</th><th>");
					continue; //IDなので飛ばす
				}
				str.push(ary2[k] + "</th>");
				if((ary2.length-1)==k){
					str.push("<th>検証</th></tr></thead><tbody>");
				}else{
					str.push("<th>");
				}
			}
			continue;
		}
		//3桁目が同じでないなら表示しない
		var chkChip3 = ary2[0].charAt(2);
		if(chkSel != chkChip3){
			continue;
		}
		//機体か装備か
		if(2==chkChip3){
			if(flgSel){
				if(CP_TYPE_BR!=ary2[CLM_CP_TYPE]){
					continue;
				}
			}else{
				if(CP_TYPE_WP!=ary2[CLM_CP_TYPE]){
					continue;
				}
			}
		}
		//1行出力
		var strOneLine = [];	// 1行分
		for(var k=0; k < ary2.length; k++) {
			if(CLM_CP_CONF==k){
				continue;	// コンフリクトフラグは出力しない
			}
			if(CLM_CP_ID==k){
				strOneLine.push("<tr id='" + ary2[CLM_CP_ID] + "'>");
			}else if(CLM_CP_TYPE==k){
				//選択されていたチップならチェックつけておく
				strOneLine.push("<td onClick='selectChip(\"" + ary2[CLM_CP_ID] + "\")'><input type='checkbox' id='c" + ary2[CLM_CP_ID] + "' class='conttableCheck' ");
				if(ary2[CLM_CP_ID]==blastCur.getFindChip(ary2[CLM_CP_ID])){
					strOneLine.push("checked></td><td>" + ary2[CLM_CP_TYPE] + "</td>");
				}else{
					strOneLine.push("></td><td>" + ary2[CLM_CP_TYPE] + "</td>");
				}
			}else if((ary2.length-1)==k){
				var temp = "</td><td><a href='http://www.nicovideo.jp/search/" + ary2[CLM_CP_NAME] + "%20検証' target='_new'>表示</a></td></tr>";
				strOneLine.push("<td id='" + ary2[CLM_CP_ID] + k + "'>" + ary2[k] + temp);
			}else{
				strOneLine.push("<td id='" + ary2[CLM_CP_ID] + k + "'>" + ary2[k] + "</td>");
			}
		}
		str.push(strOneLine.join(""));	// 1行分追加
	}
	str.push("</tbody>");
	var table = $("#conttable");
	table
		.html(str.join(""))
		.hide()
		.fadeIn(FADEIN_SPEED);
	table.tablesorter();

	chipConf();	//コンフリクト対応
	viewAfterEmpty();
}

//現在選ばれているチップから、コンフリクトをグレーアウト
function chipConf(){
	var aryChip = blastCur.getSelectChip();
	var len = 0;
	for(var i in aryChip) len++;
	//なにも選ばれていないなら、全部クリアにして終了。
	if(0==len){
		var ary1 = aryTop["cp"];
		for(var i=0; i<ary1.length; i++){
			$("#c"+ary1[i][CLM_CP_ID]).removeAttr('disabled');
			$("#"+ary1[i][CLM_CP_ID]).css('background-color', COLOR_BG_DS);
		}
		return;
	}
	var aryConf = new Array();
	for(var i in aryChip){
		aryConf.push(blastCur.get(aryChip[i], CLM_CP_CONF));
	}
	var ary1 = aryTop["cp"];
	for(var i=0; i<ary1.length; i++){
		var conf = ary1[i][CLM_CP_CONF];
		if(''==conf){
			continue;
		}
		//チェック済みは飛ばす
		if(ary1[i][CLM_CP_ID] == aryChip[ary1[i][CLM_CP_ID]]){
			continue;
		}
		var boolConf = false;
		for(var k=0; k<aryConf.length; k++){
			if(aryConf[k] == conf){
				boolConf = true;
			}
		}
		if(true == boolConf) {
			$("#c"+ary1[i][CLM_CP_ID]).attr('disabled', 'disabled');
			$("#"+ary1[i][CLM_CP_ID]).css('background-color', COLOR_BG_EN);
		}else{
			$("#c"+ary1[i][CLM_CP_ID]).removeAttr('disabled');
			$("#"+ary1[i][CLM_CP_ID]).css('background-color', COLOR_BG_DS);
		}
	}
}

//チップリストの選択ボタン
function selectChip(pid){

	var checked = $("#c"+pid).is(':checked');	// チェックされていたら、checkedの文字列
	if(checked){
		blastCur.setSelectChip(pid);
	}else{
		blastCur.deleteChip(pid);
	}

	chipView();
	chipConf();
	viewCurrent();
}

function chipView() {
	var str = [];
	var cost = 0;
	var aryChip = blastCur.getSelectChip();
	for(var i in aryChip){
		str.push("<tr><td>" + blastCur.get(aryChip[i], CLM_CP_NAME) + "</td></tr>");
		cost += Number(blastCur.get(aryChip[i], CLM_CP_COST));
	}
	$("#cplist").html(str.join(""));

	var idnChipAmount = $("#nChipAmount");
	idnChipAmount.html(cost);

	var bval = $("#nChipBefore2").html();
	if(cost == bval){
		idnChipAmount.css("color", "");		//同じなら色は初期値
	}else if(cost > bval){
		idnChipAmount.css("color", COLOR_MINUS);
	}else{
		idnChipAmount.css("color", COLOR_PLUS);
	}
}

//比較：チェックしていないのを隠す
function chkDel(cid){
	var sum = 1; //タイトル分+1
	var ary1 = aryTop[cid];
	for(var i=1; i<ary1.length; i++){
		var ary2 = ary1[i];
		var chk = $("#c"+ary2[0]).is(":checked");
		if(!chk){
			$("#"+ary2[0]).hide();
			sum++;
		}
	}
	if(sum == ary1.length){
		for(var i=1; i<ary1.length; i++){
			var ary2 = ary1[i];
			$("#"+ary2[0]).show();
		}
	}
}

//その他チェック
function chkEtc(etcId){
	var flg = "";
	var chk = $("#etc"+etcId).is(":checked");
	if(chk){
		flg = etcId;
	}
	//パーツにセット
	blastCur.setEtc(flg);
	//チェック状態を最新に
	for(var i in ETC){
		if(i != flg){
			$("#etc"+i).attr("checked", false);
		}
	}
	//リフレッシュ
	viewCurrent();
}

//速度表記切り替え(km/h,m/s)
function chkSpeed(){
	var disp11 = "走[km/h]";
	var disp12 = "歩[km/h]";
	var disp21 = "走[m/s]";
	var disp22 = "歩[m/s]";
	if(blastCur.dispSpeed){
		$.cookie("DS", "false", { expires:60 });
		blastCur.dispSpeed = false;
		$("#chkSpeed").html("速度：m/s");
		$("#aDashDisp").html(disp21);
		$("#hDashDisp").html(disp21);
		$("#sDashDisp").html(disp21);
		$("#pDashDisp").html(disp21);
		$("#aWalkDisp").html(disp22);
		$("#hWalkDisp").html(disp22);
		$("#sWalkDisp").html(disp22);
		$("#pWalkDisp").html(disp22);
		fsb["3"] = swtfsb2["3"];
		fsb["8"] = swtfsb2["8"];
		fsb["E"] = swtfsb2["E"];
		fsb["G"] = swtfsb2["G"];
		fsb["I"] = swtfsb2["I"];
		changeChipDisp();
	}else{
		$.cookie("DS", "true", { expires:60 });
		blastCur.dispSpeed = true;
		$("#chkSpeed").html("速度：km/h");
		$("#aDashDisp").html(disp11);
		$("#hDashDisp").html(disp11);
		$("#sDashDisp").html(disp11);
		$("#pDashDisp").html(disp11);
		$("#aWalkDisp").html(disp12);
		$("#hWalkDisp").html(disp12);
		$("#sWalkDisp").html(disp12);
		$("#pWalkDisp").html(disp12);
		fsb["3"] = swtfsb1["3"];
		fsb["8"] = swtfsb1["8"];
		fsb["E"] = swtfsb1["E"];
		fsb["G"] = swtfsb1["G"];
		fsb["I"] = swtfsb1["I"];
		changeChipDisp();
	}
	viewCurrent();
	viewComment();
}

function changeChipDisp(){
	var walk = chips["walk"];
	var dash = chips["dash"];
	var ary1 = aryTop["cp"];
	for(var i=1; i<ary1.length; i++){
		var ary2 = ary1[i];
		for(var wk=0; wk<walk.length; wk++){
			if(ary2[CLM_CP_ID]==walk[wk].id){
				if(blastCur.dispSpeed){
					ary2[CLM_CP_COMM] = walk[wk].disp1;
					continue;
				}else{
					ary2[CLM_CP_COMM] = walk[wk].disp2;
					continue;
				}
			}
		}
		for(var wk=0; wk<dash.length; wk++){
			if(ary2[CLM_CP_ID]==dash[wk].id){
				if(blastCur.dispSpeed){
					ary2[CLM_CP_COMM] = dash[wk].disp1;
					continue;
				}else{
					ary2[CLM_CP_COMM] = dash[wk].disp2;
					continue;
				}
			}
		}
	}
}


//コメント枠表示
function viewComment(){
	viewConttable("comment.html");
}
function viewConttable(file){
	$("#conttable")
		.empty()
		.load(file)
		.hide()
		.fadeIn(FADEIN_SPEED);
}

