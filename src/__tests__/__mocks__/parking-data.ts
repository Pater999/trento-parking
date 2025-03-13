import type { ParkingData } from "../../models";

export const parkingData: Omit<
	ParkingData,
	"getDistances" | "getDistancesCompleted" | "isAvailable" | "isFull"
>[] = [
	{
		id: 203,
		driver: "ID01",
		geom: "POINT(11.124432 46.073923)",
		name: "Garage Autosilo Buonconsiglio - P3",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 188,
		freeslots: 0,
		diag: "16",
		threshold: 600,
		timestamp: 1741860086,
		distances:
			'[{"id": 78487, "meters": 1161.3940588}, {"id": 212, "meters": 967.32773439}, {"id": 204, "meters": 1172.15663853}, {"id": 211, "meters": 168.78322164}, {"id": 161639, "meters": 1104.76371846}, {"id": 161635, "meters": 931.07671601}, {"id": 161636, "meters": 2331.08918548}, {"id": 161641, "meters": 2019.3185876}, {"id": 161637, "meters": 3737.7170531}, {"id": 161642, "meters": 355.80251586}, {"id": 161638, "meters": 533.00600549}, {"id": 161643, "meters": 1984.54008498}, {"id": 161640, "meters": 1157.6539475}, {"id": 161644, "meters": 344.38312063}, {"id": 408, "meters": 2272.05429127}, {"id": 91723, "meters": 2035.76982417}, {"id": 91722, "meters": 1013.98718504}, {"id": 213, "meters": 1170.5674871}]',
		currentTimestamp: 1741860181,
		address: "VIA F. PETRARCA, 1/5",
		gmaps: "https://maps.app.goo.gl/qVHmRxz8VeksTDrp7",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-coperti/Garage-Autosilo-Buonconsiglio-P3",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 204,
		driver: "ID01",
		geom: "POINT(11.114866 46.065733)",
		name: "Parcheggio piazzale Sanseverino - P7",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 323,
		freeslots: 0,
		diag: "16",
		threshold: 600,
		timestamp: 1741860086,
		distances:
			'[{"id": 203, "meters": 1172.15663853}, {"id": 78487, "meters": 1199.65326028}, {"id": 212, "meters": 717.64023149}, {"id": 211, "meters": 1104.39508357}, {"id": 161639, "meters": 1118.64417389}, {"id": 161635, "meters": 505.90970877}, {"id": 161636, "meters": 2057.15618515}, {"id": 161641, "meters": 917.1780228}, {"id": 161637, "meters": 2929.31290051}, {"id": 161642, "meters": 899.58290228}, {"id": 161638, "meters": 1163.72403106}, {"id": 161643, "meters": 2709.71885638}, {"id": 161640, "meters": 27.88138452}, {"id": 161644, "meters": 939.1338137}, {"id": 408, "meters": 1976.92026906}, {"id": 91723, "meters": 944.50169424}, {"id": 91722, "meters": 178.50514203}, {"id": 213, "meters": 150.48263368}]',
		currentTimestamp: 1741860181,
		address: "VIA R. DA SANSEVERINO",
		gmaps:
			"https://www.google.com/maps/place/Parcheggio+Sanseverino+-+P7/@46.0658401,11.1153195,326m/data=!3m1!1e3!4m6!3m5!1s0x4782714ecd6065e9:0x7949b3cb497edcb6!8m2!3d46.0658632!4d11.1148535!16s%2Fg%2F11clvsmxdq?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-scoperti/Parcheggi-a-disco-orario/Parcheggio-piazzale-Sanseverino-P7",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 211,
		driver: "ID01",
		geom: "POINT(11.122288 46.074226)",
		name: "Garage Centro Europa - P2",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 330,
		freeslots: 14,
		diag: "16",
		threshold: 600,
		timestamp: 1741860086,
		distances:
			'[{"id": 203, "meters": 168.78322164}, {"id": 78487, "meters": 992.6224523}, {"id": 212, "meters": 1010.89199937}, {"id": 204, "meters": 1104.39508357}, {"id": 161639, "meters": 936.40240051}, {"id": 161635, "meters": 804.62328345}, {"id": 161636, "meters": 2430.36531482}, {"id": 161641, "meters": 1984.12105503}, {"id": 161637, "meters": 3776.32981263}, {"id": 161642, "meters": 222.48036524}, {"id": 161638, "meters": 668.7118671}, {"id": 161643, "meters": 1888.72642937}, {"id": 161640, "meters": 1086.79058648}, {"id": 161644, "meters": 197.53858639}, {"id": 408, "meters": 2368.04681538}, {"id": 91723, "meters": 2003.72551205}, {"id": 91722, "meters": 935.9474129}, {"id": 213, "meters": 1123.67627963}]',
		currentTimestamp: 1741860181,
		address: "VIA G. SEGANTINI, 7",
		gmaps: "https://maps.app.goo.gl/wA2DTAC2gVFuYS8S7",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-coperti/Garage-Centro-Europa-P2",
		offline: false,
		opening: {
			lunven: ["07:00-20:30"],
			sab: ["07:00-20:30"],
			fes: ["07:00-20:30"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 212,
		driver: "ID01",
		geom: "POINT(11.124139 46.065226)",
		name: "Garage piazza Fiera - P4",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 448,
		freeslots: 0,
		diag: "16",
		threshold: 600,
		timestamp: 1741860086,
		distances:
			'[{"id": 203, "meters": 967.32773439}, {"id": 78487, "meters": 1630.19228531}, {"id": 204, "meters": 717.64023149}, {"id": 211, "meters": 1010.89199937}, {"id": 161639, "meters": 1547.96343453}, {"id": 161635, "meters": 982.00897239}, {"id": 161636, "meters": 1501.96869858}, {"id": 161641, "meters": 1208.42859495}, {"id": 161637, "meters": 2771.02767908}, {"id": 161642, "meters": 919.94203928}, {"id": 161638, "meters": 640.28079202}, {"id": 161643, "meters": 2883.02629693}, {"id": 161640, "meters": 729.23258911}, {"id": 161644, "meters": 960.21735267}, {"id": 408, "meters": 1429.81690718}, {"id": 91723, "meters": 1211.28080967}, {"id": 91722, "meters": 711.91184037}, {"id": 213, "meters": 592.48098568}]',
		currentTimestamp: 1741860181,
		address: "PIAZZA DI FIERA",
		gmaps:
			"https://www.google.com/maps/place/Parcheggio+Piazza+Fiera/@46.0650867,11.1242193,169m/data=!3m1!1e3!4m6!3m5!1s0x478276b4ab2c02a9:0x141e8691039d1d6!8m2!3d46.0655767!4d11.1251863!16s%2Fg%2F1tdwzd9z?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-coperti/Garage-piazza-Fiera-P4",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 213,
		driver: "ID01",
		geom: "POINT(11.116469 46.064962)",
		name: "Parcheggio Cittadella dello studente - P6",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 145,
		freeslots: 108,
		diag: "0",
		threshold: 600,
		timestamp: 1741860086,
		distances:
			'[{"id": 203, "meters": 1170.5674871}, {"id": 78487, "meters": 1324.82263238}, {"id": 212, "meters": 592.48098568}, {"id": 204, "meters": 150.48263368}, {"id": 211, "meters": 1123.67627963}, {"id": 161639, "meters": 1242.58875687}, {"id": 161635, "meters": 622.50476024}, {"id": 161636, "meters": 1906.79807474}, {"id": 161641, "meters": 862.66240457}, {"id": 161637, "meters": 2815.82639014}, {"id": 161642, "meters": 933.76315537}, {"id": 161638, "meters": 1094.65886882}, {"id": 161643, "meters": 2802.72645155}, {"id": 161640, "meters": 173.76056056}, {"id": 161644, "meters": 975.5661884}, {"id": 408, "meters": 1826.63258357}, {"id": 91723, "meters": 884.67751982}, {"id": 91722, "meters": 271.96660614}]',
		currentTimestamp: 1741860181,
		address: "VIA DI BRIAMASCO, 2",
		gmaps: "https://maps.app.goo.gl/RcvM8gxahiSed8a77",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-scoperti/Parcheggi-a-pagamento/Parcheggio-CTE-via-Bomporto-P6",
		offline: false,
		opening: {
			lunven: ["08:00-20:00"],
			sab: ["08:00-20:00"],
			fes: [],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 408,
		driver: "ID04",
		geom: "POINT(11.135182 46.0549)",
		name: "Parcheggio Santa Chiara",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 205,
		freeslots: 11,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860064,
		distances:
			'[{"id": 203, "meters": 2272.05429127}, {"id": 78487, "meters": 3054.78705461}, {"id": 212, "meters": 1429.81690718}, {"id": 204, "meters": 1976.92026906}, {"id": 211, "meters": 2368.04681538}, {"id": 161639, "meters": 2971.83762909}, {"id": 161635, "meters": 2379.44270549}, {"id": 161636, "meters": 82.61651283}, {"id": 161641, "meters": 1737.6102102}, {"id": 161637, "meters": 1808.89754198}, {"id": 161642, "meters": 2326.93701427}, {"id": 161638, "meters": 1764.16824263}, {"id": 161643, "meters": 4254.39786662}, {"id": 161640, "meters": 2000.25336056}, {"id": 161644, "meters": 2363.77798733}, {"id": 91723, "meters": 1704.56520882}, {"id": 91722, "meters": 2056.1023474}, {"id": 213, "meters": 1826.63258357}]',
		currentTimestamp: 1741860181,
		address: "VIA S.F.CROSINA-B.SARTORI, 7",
		gmaps:
			"https://www.google.com/maps/place/Parcheggio+Santa+Chiara/@46.0547933,11.134613,78m/data=!3m1!1e3!4m6!3m5!1s0x478277d5e04ac23b:0xd67b7e9388c6cb9f!8m2!3d46.0548547!4d11.1345318!16s%2Fg%2F11w226r0j1?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-scoperti/Parcheggi-a-pagamento-disco-orario/Parcheggio-Santa-Chiara",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 78487,
		driver: "ID02",
		geom: "POINT(11.109647 46.075896)",
		name: "Parcheggio Area ex Zuffo - P9",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 390,
		freeslots: 24,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860150,
		distances:
			'[{"id": 203, "meters": 1161.3940588}, {"id": 212, "meters": 1630.19228531}, {"id": 204, "meters": 1199.65326028}, {"id": 211, "meters": 992.6224523}, {"id": 161639, "meters": 83.5630947}, {"id": 161635, "meters": 703.65538337}, {"id": 161636, "meters": 3129.02011595}, {"id": 161641, "meters": 2052.22950583}, {"id": 161637, "meters": 4126.44581474}, {"id": 161642, "meters": 862.94197611}, {"id": 161638, "meters": 1596.90121325}, {"id": 161643, "meters": 1605.57996349}, {"id": 161640, "meters": 1171.77319136}, {"id": 161644, "meters": 848.92959887}, {"id": 408, "meters": 3054.78705461}, {"id": 91723, "meters": 2087.25378582}, {"id": 91722, "meters": 1054.6388089}, {"id": 213, "meters": 1324.82263238}]',
		currentTimestamp: 1741860181,
		address: "PIAZZALE DELLA ZUFFO",
		gmaps:
			"https://www.google.com/maps/place/Piazzale+Zuffo/@46.0752295,11.1106145,411m/data=!3m1!1e3!4m6!3m5!1s0x4782713959ed68b7:0xfcfcdf7a5258d9bb!8m2!3d46.0758479!4d11.1096253!16s%2Fg%2F11clvvr8ww?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-scoperti/Parcheggi-gratuiti/Parcheggio-Area-ex-Zuffo-P9",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 91722,
		driver: "ID03",
		geom: "POINT(11.115406 46.067294)",
		name: "Garage Parcheggio Duomo - P5",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 119,
		freeslots: 10,
		diag: "0",
		threshold: 600,
		timestamp: 1741860164,
		distances:
			'[{"id": 203, "meters": 1013.98718504}, {"id": 78487, "meters": 1054.6388089}, {"id": 212, "meters": 711.91184037}, {"id": 204, "meters": 178.50514202}, {"id": 211, "meters": 935.9474129}, {"id": 161639, "meters": 972.04878438}, {"id": 161635, "meters": 351.25202407}, {"id": 161636, "meters": 2134.55834986}, {"id": 161641, "meters": 1095.23070273}, {"id": 161637, "meters": 3087.08663564}, {"id": 161642, "meters": 726.53354893}, {"id": 161638, "meters": 1062.89363468}, {"id": 161643, "meters": 2538.3344181}, {"id": 161640, "meters": 155.72868734}, {"id": 161644, "meters": 765.14630488}, {"id": 408, "meters": 2056.1023474}, {"id": 91723, "meters": 1122.05535633}, {"id": 213, "meters": 271.96660614}]',
		currentTimestamp: 1741860181,
		address: "PIAZZA E. MOSNA, 1/A",
		gmaps:
			"https://www.google.com/maps/place/Parcheggio+Duomo+-+P5/@46.067302,11.1144198,121m/data=!3m1!1e3!4m6!3m5!1s0x47827149217a75c3:0xc909a3601c411db4!8m2!3d46.0668611!4d11.1148425!16s%2Fg%2F11cp6ft7zj?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-coperti/Garage-Parcheggio-Duomo-P5",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 91723,
		driver: "ID03",
		geom: "POINT(11.113365 46.057303)",
		name: "Parcheggio via Monte Baldo - P8",
		type: "park",
		city: "Trento",
		color: null,
		capacity: 202,
		freeslots: 18,
		diag: "0",
		threshold: 600,
		timestamp: 1741860164,
		distances:
			'[{"id": 203, "meters": 2035.76982417}, {"id": 78487, "meters": 2087.25378582}, {"id": 212, "meters": 1211.28080967}, {"id": 204, "meters": 944.50169425}, {"id": 211, "meters": 2003.72551205}, {"id": 161639, "meters": 2012.09739298}, {"id": 161635, "meters": 1434.21895208}, {"id": 161636, "meters": 1784.68701513}, {"id": 161641, "meters": 42.36551264}, {"id": 161637, "meters": 2085.94970909}, {"id": 161642, "meters": 1818.31437092}, {"id": 161638, "meters": 1843.87256855}, {"id": 161643, "meters": 3645.10403006}, {"id": 161640, "meters": 969.61727798}, {"id": 161644, "meters": 1860.21109462}, {"id": 408, "meters": 1704.56520882}, {"id": 91722, "meters": 1122.05535633}, {"id": 213, "meters": 884.67751982}]',
		currentTimestamp: 1741860181,
		address: "VIA R. DA SANSEVERINO",
		gmaps: "https://maps.app.goo.gl/kiX6pM79ddvrUGW67",
		link: "https://www.comune.trento.it/Citta/Come-orientarsi/Parcheggi/Parcheggi-scoperti/Parcheggi-a-pagamento/Parcheggio-via-Monte-Baldo-P8",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 1,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161635,
		driver: "ID06",
		geom: "POINT(11.113621 46.0702)",
		name: "Piedicastello",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 26,
		freeslots: 1,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 931.07671601}, {"id": 78487, "meters": 703.65538337}, {"id": 212, "meters": 982.00897239}, {"id": 204, "meters": 505.90970877}, {"id": 211, "meters": 804.62328345}, {"id": 161639, "meters": 620.90007199}, {"id": 161636, "meters": 2456.14749399}, {"id": 161641, "meters": 1403.32432545}, {"id": 161637, "meters": 3434.03387876}, {"id": 161642, "meters": 583.02761718}, {"id": 161638, "meters": 1154.14817902}, {"id": 161643, "meters": 2211.01836827}, {"id": 161640, "meters": 478.32360753}, {"id": 161644, "meters": 608.21477081}, {"id": 408, "meters": 2379.44270549}, {"id": 91723, "meters": 1434.21895208}, {"id": 91722, "meters": 351.25202407}, {"id": 213, "meters": 622.50476024}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161636,
		driver: "ID06",
		geom: "POINT(11.136164 46.054604)",
		name: "Osp. Santa Chiara",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 16,
		freeslots: 12,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 2331.08918548}, {"id": 78487, "meters": 3129.02011595}, {"id": 212, "meters": 1501.96869858}, {"id": 204, "meters": 2057.15618515}, {"id": 211, "meters": 2430.36531482}, {"id": 161639, "meters": 3046.19626685}, {"id": 161635, "meters": 2456.14749399}, {"id": 161641, "meters": 1818.02434164}, {"id": 161637, "meters": 1814.77795457}, {"id": 161642, "meters": 2393.97981346}, {"id": 161638, "meters": 1818.64716736}, {"id": 161643, "meters": 4314.80204785}, {"id": 161640, "meters": 2080.33769341}, {"id": 161644, "meters": 2430.34918489}, {"id": 408, "meters": 82.61651283}, {"id": 91723, "meters": 1784.68701513}, {"id": 91722, "meters": 2134.55834986}, {"id": 213, "meters": 1906.79807474}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161637,
		driver: "ID06",
		geom: "POINT(11.124815 46.04031)",
		name: "Via Bartali",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 12,
		freeslots: 10,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 3737.7170531}, {"id": 78487, "meters": 4126.44581474}, {"id": 212, "meters": 2771.02767908}, {"id": 204, "meters": 2929.31290051}, {"id": 211, "meters": 3776.32981263}, {"id": 161639, "meters": 4046.53548067}, {"id": 161635, "meters": 3434.03387876}, {"id": 161636, "meters": 1814.77795457}, {"id": 161641, "meters": 2126.55511955}, {"id": 161642, "meters": 3652.64325931}, {"id": 161638, "meters": 3324.11667353}, {"id": 161643, "meters": 5602.87895672}, {"id": 161640, "meters": 2957.13164195}, {"id": 161644, "meters": 3695.5470231}, {"id": 408, "meters": 1808.89754198}, {"id": 91723, "meters": 2085.94970909}, {"id": 91722, "meters": 3087.08663564}, {"id": 213, "meters": 2815.82639014}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161638,
		driver: "ID06",
		geom: "POINT(11.128581 46.07009)",
		name: "Ex lavatoio pubblico",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 38,
		freeslots: 3,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 533.00600549}, {"id": 78487, "meters": 1596.90121325}, {"id": 212, "meters": 640.28079202}, {"id": 204, "meters": 1163.72403106}, {"id": 211, "meters": 668.7118671}, {"id": 161639, "meters": 1527.36925867}, {"id": 161635, "meters": 1154.14817902}, {"id": 161636, "meters": 1818.64716736}, {"id": 161641, "meters": 1837.97509814}, {"id": 161637, "meters": 3324.11667353}, {"id": 161642, "meters": 734.939791}, {"id": 161643, "meters": 2508.64780005}, {"id": 161640, "meters": 1161.35927552}, {"id": 161644, "meters": 753.77078601}, {"id": 408, "meters": 1764.16824263}, {"id": 91723, "meters": 1843.87256855}, {"id": 91722, "meters": 1062.89363468}, {"id": 213, "meters": 1094.65886882}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161639,
		driver: "ID06",
		geom: "POINT(11.110242 46.075268)",
		name: "Area ex Zuffo",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 200,
		freeslots: 158,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 1104.76371846}, {"id": 78487, "meters": 83.5630947}, {"id": 212, "meters": 1547.96343453}, {"id": 204, "meters": 1118.64417389}, {"id": 211, "meters": 936.40240051}, {"id": 161635, "meters": 620.90007199}, {"id": 161636, "meters": 3046.19626685}, {"id": 161641, "meters": 1977.5126377}, {"id": 161637, "meters": 4046.53548067}, {"id": 161642, "meters": 795.66237563}, {"id": 161638, "meters": 1527.36925867}, {"id": 161643, "meters": 1666.6825453}, {"id": 161640, "meters": 1090.76372668}, {"id": 161644, "meters": 784.22726143}, {"id": 408, "meters": 2971.83762909}, {"id": 91723, "meters": 2012.09739298}, {"id": 91722, "meters": 972.04878438}, {"id": 213, "meters": 1242.58875687}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161640,
		driver: "ID06",
		geom: "POINT(11.114748 46.06597)",
		name: "Parcheggio Sanseverino",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 18,
		freeslots: 6,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 1157.6539475}, {"id": 78487, "meters": 1171.77319136}, {"id": 212, "meters": 729.23258911}, {"id": 204, "meters": 27.88138452}, {"id": 211, "meters": 1086.79058648}, {"id": 161639, "meters": 1090.76372668}, {"id": 161635, "meters": 478.32360753}, {"id": 161636, "meters": 2080.33769341}, {"id": 161641, "meters": 941.86574226}, {"id": 161637, "meters": 2957.13164195}, {"id": 161642, "meters": 880.18973649}, {"id": 161638, "meters": 1161.35927552}, {"id": 161643, "meters": 2683.04702124}, {"id": 161644, "meters": 919.34808579}, {"id": 408, "meters": 2000.25336056}, {"id": 91723, "meters": 969.61727798}, {"id": 91722, "meters": 155.72868734}, {"id": 213, "meters": 173.76056056}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161641,
		driver: "ID06",
		geom: "POINT(11.112999 46.057587)",
		name: "Parcheggio Monte Baldo",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 48,
		freeslots: 33,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 2019.3185876}, {"id": 78487, "meters": 2052.22950583}, {"id": 212, "meters": 1208.42859495}, {"id": 204, "meters": 917.1780228}, {"id": 211, "meters": 1984.12105503}, {"id": 161639, "meters": 1977.5126377}, {"id": 161635, "meters": 1403.32432545}, {"id": 161636, "meters": 1818.02434164}, {"id": 161637, "meters": 2126.55511955}, {"id": 161642, "meters": 1796.35408275}, {"id": 161638, "meters": 1837.97509814}, {"id": 161643, "meters": 3613.72487743}, {"id": 161640, "meters": 941.86574226}, {"id": 161644, "meters": 1838.02831376}, {"id": 408, "meters": 1737.6102102}, {"id": 91723, "meters": 42.36551264}, {"id": 91722, "meters": 1095.23070273}, {"id": 213, "meters": 862.66240457}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161643,
		driver: "ID06",
		geom: "POINT(11.113514 46.090084)",
		name: "Via Unterveger",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 16,
		freeslots: 4,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 1984.54008498}, {"id": 78487, "meters": 1605.57996349}, {"id": 212, "meters": 2883.02629693}, {"id": 204, "meters": 2709.71885638}, {"id": 211, "meters": 1888.72642937}, {"id": 161639, "meters": 1666.6825453}, {"id": 161635, "meters": 2211.01836827}, {"id": 161636, "meters": 4314.80204785}, {"id": 161641, "meters": 3613.72487743}, {"id": 161637, "meters": 5602.87895672}, {"id": 161642, "meters": 1965.89015071}, {"id": 161638, "meters": 2508.64780005}, {"id": 161640, "meters": 2683.04702124}, {"id": 161644, "meters": 1924.44169678}, {"id": 408, "meters": 4254.39786662}, {"id": 91723, "meters": 3645.10403006}, {"id": 91722, "meters": 2538.3344181}, {"id": 213, "meters": 2802.72645155}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
	{
		id: 161644,
		driver: "ID06",
		geom: "POINT(11.120037 46.073379)",
		name: "Stazione di Trento 2",
		type: "bike",
		city: "Trento",
		color: null,
		capacity: 70,
		freeslots: 27,
		diag: "0",
		threshold: 1200,
		timestamp: 1741860134,
		distances:
			'[{"id": 203, "meters": 344.38312063}, {"id": 78487, "meters": 848.92959887}, {"id": 212, "meters": 960.21735267}, {"id": 204, "meters": 939.1338137}, {"id": 211, "meters": 197.53858639}, {"id": 161639, "meters": 784.22726143}, {"id": 161635, "meters": 608.21477081}, {"id": 161636, "meters": 2430.34918489}, {"id": 161641, "meters": 1838.02831376}, {"id": 161637, "meters": 3695.5470231}, {"id": 161642, "meters": 43.27476052}, {"id": 161638, "meters": 753.77078601}, {"id": 161643, "meters": 1924.44169678}, {"id": 161640, "meters": 919.34808579}, {"id": 408, "meters": 2363.77798733}, {"id": 91723, "meters": 1860.21109462}, {"id": 91722, "meters": 765.14630488}, {"id": 213, "meters": 975.5661884}]',
		currentTimestamp: 1741860181,
		address: "",
		gmaps: "",
		link: "https://www.trentinomobilita.it/biciclette-cp-trento",
		offline: false,
		opening: {
			lunven: ["00:00-24:00"],
			sab: ["00:00-24:00"],
			fes: ["00:00-24:00"],
		},
		open: 2,
		phone: "",
		website: "",
		openingFlag: "",
	},
];
