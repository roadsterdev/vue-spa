let tabledata = [{
		date: '2018/4/10',
		type: 　 'get',
		count: 5000,
		way: '工资',
		desc: '发薪水了',
		from: '银行卡',
	},
	{
		date: '2018/4/21',
		type: 　 'get',
		count: 20,
		way: '兼职',
		desc: '派发传单3小时所得',
		from: '银行卡',
	},
	{
		date: '2018/4/25',
		type: 'get',
		count: 　200,
		way: 　 '股票',
		desc: '涨停卖出',
		from: '银行卡',
	},
	{
		date: '2018/4/26',
		type: 'cost',
		count: 　4.5,
		way: 　 '食物',
		desc: '买早餐',
		from: '银行卡',
	},
	{
		date: '2018/4/26',
		type: 　 'cost',
		count: 13.1,
		way: '食物',
		desc: '买水果',
		from: '银行卡',
	},
	{
		date: '2018/4/26',
		type: 　 'cost',
		count: 1.2,
		way: '交通',
		desc: '地铁上班',
		from: '羊城通',
	},
	{
		date: '2018/4/28',
		type: 　 'cost',
		count: 1.2,
		way: '交通',
		desc: '地铁上班',
		from: '羊城通',
	},
	{
		date: '2018/4/28',
		type: 　 'cost',
		count: 4.5,
		way: '食物',
		desc: '早餐',
		from: '银行卡',
	},
	{
		date: '2018/4/29',
		type: 'cost',
		count: 52,
		way: '交通',
		desc: '51节坐大巴',
		from: '银行卡',
	},
	{
		date: '2018/4/29',
		type: 'cost',
		count: 30,
		way: '话费',
		desc: '手机充值话费',
		from: '银行卡',
	}, {
		date: '2018/4/30',
		type: 'cost',
		count: 5,
		way: '流量',
		desc: '手机充值流量',
		from: '银行卡',
	}, {
		date: '2018/4/30',
		type: 'cost',
		count: 108,
		way: '食物',
		desc: '买米',
		from: '银行卡',
	},
	{
		date: '2018/5/1',
		type: 'cost',
		count: 50,
		way: '话费',
		desc: '月结充值',
		from: '银行卡',
	},
	{
		date: '2018/5/1',
		type: 'cost',
		count: 70,
		way: '交通',
		desc: '51返程大巴',
		from: '银行卡',
	},
	{
		date: '2018/5/1',
		type: 'cost',
		count: 24,
		way: '房租',
		desc: '每月网费',
		from: '银行卡',
	},
	{
		date: '2018/5/2',
		type: 'cost',
		count: 4.5,
		way: 　 '食物',
		desc: '买早餐',
		from: '银行卡',
	},
	{
		date: '2018/5/2',
		type: 'cost',
		count: 39,
		way: '其他',
		desc: '大扫除工具购买',
		from: '银行卡',
	},
	{
		date: '2018/5/2',
		type: 'cost',
		count: 50,
		way: '交通',
		desc: '羊城通充值',
		from: '银行卡',
	},
	{
		date: '2018/5/2',
		desc: '地铁上班',
		type: 'cost',
		count: 4,
		way: '交通',
		from: '羊城通',
	},
	{
		date: '2018/5/2',
		type: 'cost',
		count: 4.5,
		way: '食物',
		desc: '买早餐',
		from: '银行卡',
	},
	{
		date: '2018/5/2',
		type: 'cost',
		count: 24,
		way: '其他',
		desc: '购买杀虫剂以及牙刷',
		from: '银行卡',
	},
	{
		date: '2018/5/3',
		type: 'cost',
		count: 4,
		way: 　 '交通',
		desc: '地铁上班',
		from: '羊城通',
	},
	{
		date: '2018/5/3',
		type: 'cost',
		count: 4.5,
		way: 　 '食物',
		desc: '买早餐',
		from: '银行卡',
	},
	{
		date: '2018/5/4',
		type: 'cost',
		count: 4,
		way: '交通',
		desc: '地铁上班',
		from: '羊城通'
	},
	{
		date: '2018/5/5',
		type: 'cost',
		count: 30,
		way: '食物',
		desc: '买菜',
		from: '银行卡'
	},
	{
		date: '2018/5/7',
		type: 'cost',
		count: 436,
		way: '其他',
		desc: '看病体检',
		from: '银行卡'
	},
	{
		date: '2018/5/8',
		type: 　 'cost',
		count: 4,
		way: '交通',
		desc: '地铁上班',
		from: '羊城通',
	},
	{
		date: '2018/5/8',
		type: 'cost',
		count: 50,
		way: '交通',
		desc: '滴滴去奥体',
		from: '银行卡',
	},
	{
		date: '2018/5/8',
		type: 'cost',
		count: 110,
		way: '其他',
		desc: '看病拿药',
		from: '现金',
	},
	{
		date: '2018/5/9',
		type: 'cost',
		count: 1000,
		way: '其他',
		desc: '处理交通违法罚款扣分',
		from: '银行卡',
	},
	{
		date: '2018/5/9',
		type: 'cost',
		count: 4,
		way: '交通',
		desc: '地铁上班',
		from: '羊城通',
	},
	{
		date: '2018/5/9',
		type: 'cost',
		count: 50,
		way: '交通',
		desc: '重置羊城通',
		from: '银行卡',
	},
	{
		date: '2018/5/9',
		type: 'get',
		count: 50,
		way: 　 '充值',
		desc: '充值羊城通',
		from: '羊城通',
	},
	{
		date: '2018/5/10',	
		type: 'cost',
		count: 　3,
		way: 　 '食物',
		desc: '买早餐',
		from: '银行卡',
	},
	{
		date: '2018/5/10',	
		type: 'cost',
		count: 　3,
		way: 　 '交通',
		desc: '地铁上班',
		from: '羊城通',
	},
	{
		date: '2018/5/11',	
		type: 'cost',
		count: 　3,
		way: 　 '食物',
		desc: '买早餐',
		from: '银行卡',
	},
	{
		date: '2018/5/11',	
		type: 'cost',
		count: 　3,
		way: 　 '交通',
		desc: '地铁上班',
		from: '羊城通',
	}
]
export {
	tabledata
}
