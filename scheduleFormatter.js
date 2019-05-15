
let week1 = []
let week2 = []
let week3 = []
let week4 = []
let week5 = []
let week6 = []
let week7 = []
let week8 = []
let week9 = []
let week10 = []
let week11 = []
let week12 = []
let week13 = []
let week14 = []

//each team's weekly opponent 
let one = [10,6,2,7,2,4,3,5,8,9,3,10,5,4]
let two = [9,10,1,3,1,3,4,6,5,7,8,9,4,10]
let three = [8,9,10,2,4,2,1,7,6,5,1,8,9,6]
let four = [7,8,9,10,3,1,2,9,7,8,5,6,2,1]
let five = [6,7,8,9,10,8,6,1,2,3,4,7,1,9]
let six = [5,1,7,8,9,10,5,2,3,10,7,4,8,3]
let seven = [4,5,6,1,8,9,10,3,4,2,6,5,10,8]
let eight = [3,4,5,6,7,5,9,10,1,4,2,3,6,7]
let nine = [2,3,4,5,6,7,8,4,10,1,10,2,3,5]
let ten = [1,2,3,4,5,6,7,8,9,6,9,1,7,2]

let numberToText = (int) => {
	switch (int) {
		case 1: 
			return '0001'
			break;
		case 2: 
			return '0002'
			break;
		case 3: 
			return '0003'
			break;
		case 4: 
			return '0004'
			break;
		case 5: 
			return '0005'
			break;
		case 6: 
			return '0006'
			break;
		case 7: 
			return '0007'
			break;
		case 8: 
			return '0008'
			break;
		case 9: 
			return '0009'
			break;
		case 10: 
			return '0010'
			break;
	}
}

let scheduleToText = (arr) => {
	return arr.map(item => numberToText(item))
}

//converts an array of matchups to an array of matchup pairs (ie add team the array refers to)
let pairGenerator = (arr, string) => {
	let stringDictionary = {one: '0001', two: '0002', three: '0003', four: '0004', five: '0005', six: '0006', seven: '0007', eight: '0008', nine: '0009', ten: '0010'}
	return arr.map(item=>[stringDictionary[string], item])
}

//takes a pair and adds it to the appropriate week
let weekPopulator = (arrOfPairs) => {
	for(let i=0;i<arrOfPairs.length;i++){
		switch(i) {
			case 0:
				week1.push(arrOfPairs[i])
				break;
			case 1:
				week2.push(arrOfPairs[i])
				break;
			case 2:
				week3.push(arrOfPairs[i])
				break;
			case 3:
				week4.push(arrOfPairs[i])
				break;
			case 4:
				week5.push(arrOfPairs[i])
				break;
			case 5:
				week6.push(arrOfPairs[i])
				break;
			case 6:
				week7.push(arrOfPairs[i])
				break;
			case 7:
				week8.push(arrOfPairs[i])
				break;
			case 8:
				week9.push(arrOfPairs[i])
				break;
			case 9:
				week10.push(arrOfPairs[i])
				break;
			case 10:
				week11.push(arrOfPairs[i])
				break;
			case 11:
				week12.push(arrOfPairs[i])
				break;
			case 12:
				week13.push(arrOfPairs[i])
				break;
			case 13:
				week14.push(arrOfPairs[i])
				break;
			default: 
				console.log('Error: too many weeks')
		}
	}
}

weekPopulator(pairGenerator(scheduleToText(one), 'one'))
weekPopulator(pairGenerator(scheduleToText(two), 'two'))
weekPopulator(pairGenerator(scheduleToText(three), 'three'))
weekPopulator(pairGenerator(scheduleToText(four), 'four'))
weekPopulator(pairGenerator(scheduleToText(five), 'five'))
weekPopulator(pairGenerator(scheduleToText(six), 'six'))
weekPopulator(pairGenerator(scheduleToText(seven), 'seven'))
weekPopulator(pairGenerator(scheduleToText(eight), 'eight'))
weekPopulator(pairGenerator(scheduleToText(nine), 'nine'))
weekPopulator(pairGenerator(scheduleToText(ten), 'ten'))

//removes duplicate matchups from weeks
let duplicateFilter = (arr) => {
	let teams = []
	let noDuplicates = []
	for(let i = 0; i<arr.length; i++){
		if(!teams.includes(arr[i][0])){
			teams.push(arr[i][0])
			teams.push(arr[i][1])
			noDuplicates.push(arr[i])
		}
	}
	return noDuplicates
}

//adds the week number to the matchup
let scheduleFormatter = (arr, string) => {
	for(let i = 0; i<arr.length; i++){
		switch(string){
			case 'week1':
				arr[i].unshift('01')
				break;
			case 'week2':
				arr[i].unshift('02')
				break;
			case 'week3':
				arr[i].unshift('03')
				break;
			case 'week4':
				arr[i].unshift('04')
				break;
			case 'week5':
				arr[i].unshift('05')
				break;
			case 'week6':
				arr[i].unshift('06')
				break;
			case 'week7':
				arr[i].unshift('07')
				break;
			case 'week8':
				arr[i].unshift('08')
				break;
			case 'week9':
				arr[i].unshift('09')
				break;
			case 'week10':
				arr[i].unshift('10')
				break;
			case 'week11':
				arr[i].unshift('11')
				break;
			case 'week12':
				arr[i].unshift('12')
				break;
			case 'week13':
				arr[i].unshift('13')
				break;
			case 'week14':
				arr[i].unshift('14')
				break;
		}
	}
	return arr
}

//joins the weeks into an array of matchups
let schedule = [
	...scheduleFormatter(duplicateFilter(week1), 'week1'),
	...scheduleFormatter(duplicateFilter(week2), 'week2'),
	...scheduleFormatter(duplicateFilter(week3), 'week3'),
	...scheduleFormatter(duplicateFilter(week4), 'week4'),
	...scheduleFormatter(duplicateFilter(week5), 'week5'),
	...scheduleFormatter(duplicateFilter(week6), 'week6'),
	...scheduleFormatter(duplicateFilter(week7), 'week7'),
	...scheduleFormatter(duplicateFilter(week8), 'week8'),
	...scheduleFormatter(duplicateFilter(week9), 'week9'),
	...scheduleFormatter(duplicateFilter(week10), 'week10'),
	...scheduleFormatter(duplicateFilter(week11), 'week11'),
	...scheduleFormatter(duplicateFilter(week12), 'week12'),
	...scheduleFormatter(duplicateFilter(week13), 'week13'),
	...scheduleFormatter(duplicateFilter(week14), 'week14')
]

//count home games for each team
let homeCounter = (arr) => {
	let oneHome = 0
	let twoHome = 0
	let threeHome = 0
	let fourHome = 0
	let fiveHome = 0
	let sixHome = 0
	let sevenHome = 0
	let eightHome = 0
	let nineHome = 0
	let tenHome = 0
	for(let i = 0; i<arr.length; i++){
		switch(arr[i][2]){
			case '0001':
				oneHome++
				break;
			case '0002':
				twoHome++
				break;
			case '0003':
				threeHome++
				break;
			case '0004':
				fourHome++
				break;
			case '0005':
				fiveHome++
				break;
			case '0006':
				sixHome++
				break;
			case '0007':
				sevenHome++
				break;
			case '0008':
				eightHome++
				break;
			case '0009':
				nineHome++
				break;
			case '0010':
				tenHome++
				break;
		}
	}
	return [oneHome, twoHome, threeHome, fourHome, fiveHome, sixHome, sevenHome, eightHome, nineHome, tenHome]
}

//flip home vs away team
let homeSwitcher = arr => {
	let tmp = arr[2]
	arr[2] = arr[1]
	arr[1] = tmp
}

//balance each team's home vs away games
let homeBalancer = arr => {
	let [oneHome, twoHome, threeHome, fourHome, fiveHome, sixHome, sevenHome, eightHome, nineHome, tenHome] = homeCounter(arr)
	let homeMap = {'0001': oneHome, '0002': twoHome, '00003': threeHome, '0004': fourHome, '0005': fiveHome, '0006': sixHome, '0007': sevenHome, '0008': eightHome, '0009': nineHome, '0010':tenHome}
	for(let i = 0; i<arr.length; i++){
		let home = arr[i][2]
		let away = arr[i][1]
		if(homeMap[home]>7){
			homeSwitcher(arr[i])
			homeMap[home]--
			homeMap[away]++
		} if(homeMap[away]<7){
			homeSwitcher(arr[i])
			homeMap[home]--
			homeMap[away]++
		}
	}
	return arr
}

homeBalancer(schedule)
homeBalancer(schedule)
homeBalancer(schedule)
homeBalancer(schedule)
homeBalancer(schedule)
homeBalancer(schedule)
homeBalancer(schedule)
//verifies each team has the same number of home and away games
console.log(homeCounter(schedule))
//joins the schedule into the appropriate format to be pasted into the myFantasyLeague website
console.log(schedule.join('\n'))

/*
Required format: week, home, away, /n

01, 0005, 0010
01, 0006, 0004
01, 0007, 0003
01, 0008, 0002
01, 0001, 0009
02, 0004, 0005
02, 0003, 0006
02, 0002, 0007
02, 0001, 0008
02, 0009, 0010
03, 0005, 0003
03, 0006, 0002
03, 0007, 0001
03, 0008, 0009
03, 0004, 0010
04, 0002, 0005
04, 0001, 0006
04, 0008, 0007
04, 0010, 0003
04, 0009, 0004
05, 0005, 0001
05, 0006, 0008
05, 0007, 0009
05, 0002, 0010
05, 0003, 0004
06, 0008, 0005
06, 0007, 0006
06, 0010, 0001
06, 0002, 0004
06, 0009, 0003
07, 0005, 0007
07, 0006, 0009
07, 0010, 0008
07, 0001, 0004
07, 0002, 0003
08, 0006, 0005
08, 0010, 0007
08, 0004, 0008
08, 0003, 0001
08, 0009, 0002
09, 0005, 0009
09, 0006, 0010
09, 0007, 0004
09, 0008, 0003
09, 0001, 0002
10, 0010, 0005
10, 0004, 0006
10, 0003, 0007
10, 0002, 0008
10, 0009, 0001
11, 0005, 0004
11, 0003, 0006
11, 0007, 0002
11, 0008, 0001
11, 0010, 0009
12, 0003, 0005
12, 0002, 0006
12, 0001, 0007
12, 0009, 0008
12, 0004, 0010
13, 0005, 0002
13, 0006, 0001
13, 0007, 0008
13, 0003, 0010
13, 0004, 0009
14, 0001, 0005
14, 0008, 0006
14, 0009, 0007
14, 0010, 0002
14, 0004, 0003

*/
