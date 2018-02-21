//---Data-------------------------------------------------
var Orders = [
	{
		id: "1",
		OrderInfo: {
			createdAt	: "10.08.1991",
			customer	: "Alfreds Futterkiste",
			status		: "Accepted",
			shippedAt	: "8.09.1991"
		},
		ShipTo: {
			name: "Maria Anders",
			Address: "Obere Str. 57",
			ZIP: "12209",
			Region: "Germany",
			Country: "Germany"
		},
		CustomerInfo: {
			firstName: "Maria",
			lastName: "Anders",
			address: "Obere Str. 57",
			phone: "030-0074321",
			email: "Maria.Anders@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Chai",
				price		: "18",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "36"
			},
			{
				id			: "2",
				name		: "Aniseed Syrup",
				price		: "10",
				currency	: "USD",
				quantity	: "3",
				totalPrice	: "30"
			},
			{
				id			: "3",
				name		: "Chef Anton's Cajun Seasoning",
				price		: "22",
				currency	: "USD",
				quantity	: "2",
				totalPrice	: "44"
			},
			{
				id			: "4",
				name		: "Chef Anton's Gumbo Mix",
				price		: "36",
				currency	: "EUR",
				quantity	: "21",
				totalPrice	: "756"
			},
			{
				id			: "5",
				name		: "Grandma's Boysenberry Spread",
				price		: "25",
				currency	: "USD",
				quantity	: "5",
				totalPrice	: "125"
			}
		]
	},
	{
		id: "2",
		OrderInfo: {
			createdAt	: "23.12.2006",
			customer	: "Bon app",
			status		: "Pending",
			shippedAt	: "13.02.2007"
		},
		ShipTo: {
			name: "Laurence Lebihan",
			Address: "12, rue des Bouchers",
			ZIP: "13008",
			Region: "France",
			Country: "France"
		},
		CustomerInfo: {
			firstName: "Laurence",
			lastName: "Lebihan",
			address: "12, rue des Bouchers",
			phone: "91.24.45.40",
			email: "Laurence.Lebihan@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Queso Cabrales",
				price		: "21",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "105"
			},
			{
				id			: "2",
				name		: "Queso Manchego La Pastora",
				price		: "38",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "114"
			},
			{
				id			: "3",
				name		: "Pavlova",
				price		: "120",
				currency	: "RUB",
				quantity	: "5",
				totalPrice	: "600"
			},
			{
				id			: "4",
				name		: "Sir Rodney's Marmalade",
				price		: "5",
				currency	: "BYN",
				quantity	: "3",
				totalPrice	: "15"
			},
			{
				id			: "5",
				name		: "Genen Shouyu",
				price		: "40",
				currency	: "USD",
				quantity	: "7",
				totalPrice	: "280"
			},
			{
				id			: "6",
				name		: "Tofu",
				price		: "23.25",
				currency	: "USD",
				quantity	: "1",
				totalPrice	: "23.25"
			},
			{
				id			: "7",
				name		: "Alice Mutton",
				price		: "32",
				currency	: "UAH",
				quantity	: "39",
				totalPrice	: "1248"
			}
		]
	}
];

// alert(typeof Orders);

var _model = new Model(Orders);

var _view = new View();
// var _orders = _model.getAllDataOf("OrderInfo");
// var _ids = _model.getAllDataOf("id");
// var newArr1 = (new Controller).joinArrays("id", _ids, _orders);

(new Controller(new View, new Model(Orders))).init();

// adding(Orders);

function adding(list){
	for (var i = 0; i < 6; i++) {
		list.push(cloneObject(list[0]));
		list.push(cloneObject(list[1]));
	}

	for (var j = 0; j < list[0].products.length; j++)
		list[1].products.push(cloneObject(list[0].products[j]));
}

// GetListOfOrders(Orders);

// _view.showListOfOrders(_model.getAllDataOf("OrderInfo"));

// textChange_on_SearchBox(Orders);
//после работы с поиском не выполняется ShowDetails или click_on(".navigation .orders li", ShowDetails, Orders);

// click_on(".navigation .orders li", ShowDetails, Orders);
// var indexOfSelectedItem = 0;// view.click_on(".navigation .orders li"/*, ShowDetails, Orders*/);
// var _id = _model.getDataOf("id", indexOfSelectedItem);
// var _orderInfo_ = _model.getDataOf("OrderInfo", indexOfSelectedItem);
// var _orderInfo = Controller.joinObjects("id", _id, _orderInfo_);
// var _addressInfo = _model.getDataOf("ShipTo", indexOfSelectedItem);
// var _products = Model.reformToArray(_model.getDataOf("products", indexOfSelectedItem));
// _view.ShowDetails(_orderInfo, _addressInfo, _products);

// var indexOfSelectedItem = _view.click_on(".navigation .orders li", _view.GetOrderInfo, _orderInfo);
// var indexOfSelectedItem = _view.click_on(".navigation .orders li", _view.GetAddressInfo, _addressInfo);
// var indexOfSelectedItem = _view.click_on(".navigation .orders li", _view.GetPurchasesInfo, _products);





//
//---Orders_list-------------------------------------------------
// function GetListOfOrders(list){
// 	var listClassName = ".navigation .orders";
// 	var numberOfElements = list.length;
// 	var template = ".templates .itemForOrders";

// 	ClearList(listClassName);	
// 	CreateElementsForList(listClassName, template, numberOfElements);
// 	FillingTheOrders(listClassName, list);
// }

// function CreateElementsForList(listClassName, template, numberOfElements){
// 	for (var i = 0; i < numberOfElements; i++) {
// 		var parent = document.querySelector(listClassName);
// 		var li = document.createElement("li");
// 		li.appendChild(document.querySelector(template).cloneNode(true));
// 		li.setAttribute("id", i);
// 		parent.appendChild(li);
// 	}
// }

// function FillingTheOrders(listClassName, outList){
// 	var list = document.querySelectorAll(listClassName + " " + "li");

// 	for (var i = 0;  (i < list.length) && (i < outList.length); i++) {
// 		list[i].querySelector(".orderId").innerHTML = outList[i].id || i + 1;
// 		list[i].querySelector(".customer").innerHTML = outList[i].customer;
// 		list[i].querySelector(".createdAt").innerHTML = outList[i].createdAt;
// 		list[i].querySelector(".shipped").innerHTML = outList[i].shippedAt;
// 		list[i].querySelector(".status").innerHTML = outList[i].status;

// 		list[i].querySelector(".itemForOrders").setAttribute("id", i);
// 	}
// }

//---OrderInfo-------------------------------------------------
// function GetOrderInfo(index, list){
// 	document.querySelector(".informationBoard .orderInfo .orderId").innerHTML = list[index].id;
// 	document.querySelector(".informationBoard .orderInfo .customer").innerHTML = list[index].OrderInfo.customer;
// 	document.querySelector(".informationBoard .orderInfo .ordered").innerHTML = list[index].OrderInfo.createdAt;
// 	document.querySelector(".informationBoard .orderInfo .shipped").innerHTML = list[index].OrderInfo.shippedAt;
// 	/*document.querySelector(".informationBoard .orderInfo .currency").innerHTML = list[index].	//посчитать сумму покупок и сделать конвертер валют,
// 	document.querySelector(".informationBoard .orderInfo .orderTotal").innerHTML = list[index].*/ // чтобы сумму показывать в одной вал.
// }

// function CountItems(listClassName){
// 	var list = document.querySelector(listClassName);
// 	return list.getElementsByTagName('li').length;
// }
//---AddressInfo-------------------------------------------------
// function GetAddressInfo(index, list){
// 	document.querySelector(".informationBoard .addressInfo .name").innerHTML = list[index].ShipTo.name;
// 	document.querySelector(".informationBoard .addressInfo .Address").innerHTML = list[index].ShipTo.Address;
// 	document.querySelector(".informationBoard .addressInfo .ZIP").innerHTML = list[index].ShipTo.ZIP;
// 	document.querySelector(".informationBoard .addressInfo .Region").innerHTML = list[index].ShipTo.Region;
// 	document.querySelector(".informationBoard .addressInfo .Country").innerHTML = list[index].ShipTo.Country;
// }
//---ProductsInfo-------------------------------------------------
// function GetPurchasesInfo(index, list){
// 	tableClassName = ".informationBoard .purchasesInfo .products";

// 	ClearTable(tableClassName, 1);
// 	CreateElementsForTable(tableClassName, ".templates .itemForProducts", list[index].products.length);
// 	FillingTheProducts(tableClassName + " " + ".itemForProducts", list[index].products);
// }

// function CreateElementsForTable(tableClassName, template, numberOfElements){
// 	for (var i = 0; i < numberOfElements; i++) {
// 		var parent = document.querySelector(tableClassName);
// 		parent.appendChild(document.querySelector(template).cloneNode(true));
// 	}
// }

// function FillingTheProducts(itemClassName, products){
// 	var list = document.querySelectorAll(itemClassName);

// 	for (var i = 0; (i < products.length) && (i < list.length); i++) {
// 		list[i].querySelector(".name").innerHTML = products[i].name;
// 		list[i].querySelector(".price").innerHTML = products[i].price;
// 		//list[i].querySelector(".currency").innerHTML = products[i].currency;// currency
// 		list[i].querySelector(".quantity").innerHTML = products[i].quantity;
// 		list[i].querySelector(".totalPrice").innerHTML = products[i].totalPrice;

// 		list[i].setAttribute("id", i);
// 	}
// }

//---total-------------------------------------------------

// function ShowDetails(index, list){
// 	GetOrderInfo(index, list);
// 	GetAddressInfo(index, list);
// 	GetPurchasesInfo(index, list);
// }

//---the interface reaction-----------------------------------------
// function click_on(classNameOfItem, action, outList){
// 	var list = document.querySelectorAll(classNameOfItem);

// 	for (var i = 0; i < list.length; i++) {
// 		list[i].addEventListener("click", function(event) {
// 			action(event.target.getAttribute("id"), outList);
// 		});

// 		var childs = list[i].childNodes;
// 		for(var j = 0; j < childs.length; j++)
// 			childs[j].addEventListener("click", function(event) {
// 				action(event.target.parentNode.getAttribute("id"), outList);
// 			});
// 	}
// }

// function textChange_on_SearchBox(data){
// 	input = document.querySelector(".navigation .searchBox input");
// 	input.addEventListener("keyup", function(event) {
// 		// input.value;

// 		var indexesOfFoundElements  = [];
// 		//передавать не весь ордерс, а массив со соответствующим свойством
// 		indexesOfFoundElements = getIndexesCorrespondingTo(input.value, data, "OrderInfo");
// 		// alert(indexesOfFoundElements);
// 		var foundItems = [];
// 		for(i in indexesOfFoundElements){
// 			foundItems.push(cloneObject(data[indexesOfFoundElements[i]]));
// 		}
// 		if((input.value == "") || (input.value == " "))
// 			GetListOfOrders(Orders);
// 		else
// 			GetListOfOrders(foundItems);
// 	});
// }

//тут я хотел через рекурсию раздать всем дочерним элементам листенеры
/*function click_on(classNameOfItem, ancestor){
	var list = document.querySelectorAll(classNameOfItem);
	for (var i = 0; i < list.length; i++) {

		list[i].addEventListener("click", function(event) {
			ShowDetails(event.target.getAttribute("id"));
		});
		if(list[i].firstElementChild){
			var childs = list[i].childNodes;
			for (var i = 0; i < childs.length; i++) {
				click_on(childs[i].className, ancestor)
			}
		}
	}
}
*/


//---collections--------------------------------------------------------

// function ClearList(listClassName, startItem){
// 	startItem = startItem || 0;
// 	var parent = document.querySelectorAll(listClassName + " li");
// 	var size = CountItems(listClassName);
// 	for (var i = startItem; i < size; i++)
// 		parent[i].remove();
// }

// function CountTableItems(tableClassName){
// 	var table = document.querySelector(tableClassName);
// 	return table.getElementsByTagName('tr').length;
// }

// function ClearTable(tableClassName, startStr){
// 	startStr = startStr || 0;
// 	var size = CountTableItems(tableClassName);	
// 	var parent = document.querySelectorAll(tableClassName + " tr");
// 	for (var i = startStr; i < size; i++)
// 		parent[i].remove();
// }

function cloneObject(obj) {  
	var newObj = {};  

	for (var prop in obj) {  
		if (typeof obj[prop] == 'object') {  
			newObj[prop] = cloneObject(obj[prop]);  
		} else {
			newObj[prop] = obj[prop];
		}
	} 

	return newObj;  
}

// function getIndexesCorrespondingTo(searchStr, data, property){
// 	var indexes = [];
// 	// var searchKeys;
// 	// searchKeys = searchStr.split(" ");
// 	if((searchStr != "") && (searchStr != " "))
// 		for(key in data)
// 			for(prop in data[key])
// 				if(prop == property)
// 					for(i in data[key][prop]){
// 						if(data[key][prop][i].indexOf(searchStr) >= 0){
// 							indexes.push(key);
// 						}
// 					}
// 	return removesDuplicatesFrom(indexes);
// }	

// function removesDuplicatesFrom(list){
// 	var resultList = [];
// 	for(key in list){
// 			// alert(list[key] + " " + !isHaveElement(list[key], list, key - 1, -1));
// 		if(!isHaveElement(list[key], list, key - 1, -1)){
// 			resultList.push(list[key]);
// 		}
// 	}
// 	return resultList;
// }

// function isHaveElement(value, list, startIndex, orientation){
// 	orientation = orientation || 1;
// 	startIndex = startIndex || 0;
// 	if(orientation >= 0){
// 		for(var i = startIndex; i < list.length; i++)
// 			if(list[i] == value)
// 				return true;
// 	}
// 	else{
// 		for (var i = startIndex; i >= 0; i--)
// 			if(list[i] == value)
// 				return true;
// 	}
// 	return false;
// }

function isArray(data){
		if(typeof data.length === "number" )
			return true;
		else
			 return false;
};





//---Model----------------------------------------------------------
function Model(data) {
	
	this.isArray = function(data){
		data = data || this.data;
		if(typeof data.length === "number" )
			return true;
		else
			 return false;
	};

	Model.isArray = function(data){
		if(typeof data === "object")
			if(typeof data.length === "number" )
				return true;
	 	return false;
	};

	this.isObject = function(data){
		data = data || this.data;
		if(this.isArray(data))
			return false;
		else if(typeof data === "object")
			return true;
		else
			return false;
	};

	Model.isObject = function(data){
		data = data || this.data;
		if(this.isArray(data))
			return false;
		else if(typeof data === "object")
			return true;
		else
			return false;
	};

	this.cloneObject = function(obj){
		obj = obj || this.data;
		var newObj = {};  
		for (var prop in obj) {  
			if (typeof obj[prop] == 'object') {  
				newObj[prop] = cloneObject(obj[prop]);  
			} else {
				newObj[prop] = obj[prop];
			}
		} 
		return newObj;  
	};

	Model.cloneObject = function(obj){
		var newObj = {};  
		for (var prop in obj) {  
			if (typeof obj[prop] == 'object') {  
				newObj[prop] = cloneObject(obj[prop]);  
			} else {
				newObj[prop] = obj[prop];
			}
		} 
		return newObj;  
	};

	this.cloneArray = function(array){
		array = array || this.data;
		var copiedArray = [];
		for(i in array)
			copiedArray.push(cloneObject(array[i]));
		return copiedArray;
	};

	Model.cloneArray = function(array){
		var newArray = [];
		for(i in array)
			newArray.push(cloneObject(array[i]));
		return newArray;
	};

	this.getAllDataOf = function(property, obj){
		obj = obj || this.data;
		if (Model.isArray(obj))
			var newObj = [];
		else
			var newObj = {};  

		for (var prop in obj) {
			var newObj;
			if(prop == property){
				if(Model.isArray(obj[prop]))
					newObj = Model.cloneArray(obj[prop]);
				else if(Model.isObject(obj[prop]))
					newObj = Model.cloneObject(obj[prop]);
				else
					newObj = obj[prop];
				return newObj;
			}
			else
				if (typeof obj[prop] == 'object') {  
					if (Model.isArray(obj)){
						newObj.push(this.getAllDataOf(property, obj[prop]));
					}
					else{
						newObj[prop] = this.getAllDataOf(property, obj[prop]);  
					}
				}
		}
		newObj = Model.correction(newObj);
		return newObj;  
	};

	this.getDataOf = function(property, index){
		if((index < this.data.length) && (index >= 0))
			var obj = Model.cloneObject(this.data[index]);
		else
			return null;

		return this.getAllDataOf(property, obj);  
	};

	Model.reformToArray = function(obj){
		var newArray = [];
		if(Model.isAllPropertiesNumeric(obj)){
			for(var prop in obj)
				newArray.push(Model.cloneObject(obj[prop]));
			return newArray;
		}
		else 
			return null;
	};

	Model.isAllPropertiesNumeric = function(obj){
		for(var prop in obj)
			if(typeof (+prop) != "number")
				return false;
		return true;
	};

	Model.correctionOfObject = function(obj){
		//удаляет лишнюю проперти
		var newObj = {};
		var propertyCount = 0;
		for (var prop in obj)
			propertyCount++;
		if(propertyCount > 1){
			for (var prop in obj)
				if (typeof obj[prop] == 'object')
					newObj[prop] = Model.correctionOfObject(obj[prop]); 
		}
		else{
			for (var prop in obj)
				for (var i in obj[prop]){
					newObj[i] = obj[prop][i]; 
				}
		}
		return newObj;
	};

	Model.correction = function(obj){
		//исправляет объект на массив примитивов
		//костыль
	
		if (Model.isArray(obj))
			var newObj = [];
		else
			var newObj;
		var propertyCount = 0, propertyName = "";
		for (var prop in obj){
			propertyCount = 0;
			propertyName = ""
			for (var i in obj[prop]){
				propertyCount++;
				propertyName = i;
			}
		}
		if((propertyCount == 1) && (propertyName == "0")){
			for (var prop in obj)
				for (var i in obj[prop])
					if(i == "0")
						newObj.push( obj[prop][i]);
			return newObj;		
		}
		return obj;
	};


//ctor
	if(this.isArray(data)){
		this.data = this.cloneArray(data);	
	}else if(this.isObject(data))
		this.data = this.cloneObject(data);
	else
		this.data = data;

};

//---Controller----------------------------------------------------------
function Controller(view, model){

	this.init = function(){
		var ids = model.getAllDataOf("id");
		var orders = model.getAllDataOf("OrderInfo");
		orders = Controller.joinArrays("id", ids, orders);
		view.showListOfOrders(orders);

		var orderList = view.getListOfOrders();
		var searchString = view.getSearchBox_input();

		orderList.addEventListener("click", this._onOrderClick);
		searchString.addEventListener("keyup", this._realTimeSearch);
	};

	this._realTimeSearch = function(e){
		var ids = model.getAllDataOf("id");
		var orders = model.getAllDataOf("OrderInfo");
		orders = Controller.joinArrays("id", ids, orders);
		var data = orders;
		var indexesOfFoundElements  = [];
		var input = e.target;
		//передавать не весь ордерс, а массив со соответствующим свойством
		indexesOfFoundElements = Controller.getIndexesCorrespondingTo(input.value, data);
		var foundItems = [];
		for(var i in indexesOfFoundElements){
			foundItems.push(Controller.cloneObject(data[indexesOfFoundElements[i]]) );
		}

		if((input.length < 1) || (input.value == " ") || (input.value == ""))
			view.showListOfOrders(orders);
		else
			view.showListOfOrders(foundItems);
	};

	Controller.getIndexesCorrespondingTo = function(searchStr, data){
		var indexes = [];
		if((searchStr.length > 0) && (searchStr != " ") && (searchStr != ""))
			for(var i in data)
				for(var prop in data[i])
					if(data[i][prop].indexOf(searchStr) >= 0)
						indexes.push(i);
		return Controller.removesDuplicatesFrom(indexes);
	};	

	Controller.removesDuplicatesFrom = function(list){
		var resultList = [];
		for(key in list){
			if(!Controller.isHaveElement(list[key], list, key - 1, -1)){
				resultList.push(list[key]);
			}
		}
		return resultList;
	};

	Controller.isHaveElement = function(value, list, startIndex, orientation){
		orientation = orientation || 1;
		startIndex = startIndex || 0;
		if(orientation >= 0){
			for(var i = (startIndex >= 0) ? startIndex : 0; i < list.length; i++)
				if(list[i] == value)
					return true;
		}
		else{
			for (var i = (startIndex < list.length) ? startIndex : list.length - 1; i >= 0; i--)
				if(list[i] == value)
					return true;
		}
		return false;
	};

	this._onOrderClick = function(e){
		var index;
		if(e.target.className === "itemForOrders")
			index = e.target.getAttribute("id");
		else if(event.target.parentElement.className === "itemForOrders")
			index = event.target.parentElement.getAttribute("id");
		else if(e.target.tagName === "LI")
			index = e.target.getAttribute("id");
		else if(event.target.parentElement.tagName  === "LI")
			index = event.target.parentElement.getAttribute("id");
		else
			return;

		var id = model.getDataOf("id", index);
		var orderInfo = model.getDataOf("OrderInfo", index);
		var fullOrderInfo = Controller.joinObjects("id", id, orderInfo);
		var addressInfo = model.getDataOf("ShipTo", index);
		var products = Model.reformToArray(model.getDataOf("products", index));
		view.ShowDetails(fullOrderInfo, addressInfo, products);
	};

	Controller.joinArrays = function(propertyName1, array1, propertyName2, array2){
		//На случай, если параметры не будут находиться в заданном виде
		propertyName2 = propertyName2 || "";
		array2 = array2 || array1;
		if((Controller.isArray(propertyName2)) && (typeof propertyName2 != "string")){
			array2 = Controller.cloneArray(propertyName2);
			propertyName2 = "";
		}
		if(typeof array1 === "string")
			propertyName2 = array1;
		if((Controller.isArray(propertyName1)) && (typeof propertyName1 != "string")){
			array1 = Controller.cloneArray(propertyName1);
			propertyName1 = "";
		}

		var newArray = [];
		for(var i = 0; (i < array1.length) && (i < array2.length); i++){
			var newObj = {};
			if((propertyName1 == "") && (propertyName2 == "")){//~
				newObj = Controller.getAllPropertiesDataOf(array1[i]);
				newObj = Controller.addAllPropertiesDataOf(newObj, array2[i]);
			}
			else if(propertyName2 == ""){
				newObj = Controller.getAllPropertiesDataOf(array2[i]);
				newObj[propertyName1] = Controller.getAllPropertiesDataOf(array1[i]);
			}
			else if(propertyName1 == ""){
				newObj = Controller.getAllPropertiesDataOf(array1[i]);
				newObj[propertyName2] = Controller.getAllPropertiesDataOf(array2[i]);
			}
			else{
				newObj[propertyName1] = Controller.getAllPropertiesDataOf(array1[i]);
				newObj[propertyName2] = Controller.getAllPropertiesDataOf(array2[i]);
			}
			newArray.push(newObj);
		}
		return newArray;
	};

	Controller.joinObjects = function(propertyName1, obj1, propertyName2, obj2){///////////////
		propertyName2 = propertyName2 || "";
		obj2 = obj2 || obj1;
		
		if((Controller.isObject(propertyName2)) && (typeof propertyName2 != "string")){
			obj2 = Controller.cloneObject(propertyName2);
			propertyName2 = "";
		}
		if((typeof obj1 === "string") && (typeof propertyName2 === "object"))
			propertyName2 = obj1;
		if((Controller.isObject(propertyName1)) && (typeof propertyName1 != "string")){
			obj1 = Controller.cloneObject(propertyName1);
			propertyName1 = "";
		}
			var newObj = {};
			if((propertyName1 == "") && (propertyName2 == "")){//~
				newObj = Controller.getAllPropertiesDataOf(obj1);
				newObj = Controller.addAllPropertiesDataOf(newObj, obj2);
			}
			else if(propertyName2 == ""){
				newObj = Controller.getAllPropertiesDataOf(obj2);
				newObj[propertyName1] = Controller.getAllPropertiesDataOf(obj1);
			}
			else if(propertyName1 == ""){
				newObj = Controller.getAllPropertiesDataOf(obj1);
				newObj[propertyName2] = Controller.getAllPropertiesDataOf(obj2);
			}
			else{
				newObj[propertyName1] = Controller.getAllPropertiesDataOf(obj1);
				newObj[propertyName2] = Controller.getAllPropertiesDataOf(obj2);
			}
		return newObj;
	};

	Controller.getAllPropertiesDataOf = function(obj){
		var newObj;
			newObj = obj;
		if((Controller.isHaveProperty(obj)))
		{
			newObj = {};
			for(var prop in obj)
				newObj[prop] = obj[prop];
		}
		return newObj;
	};

	Controller.addAllPropertiesDataOf = function(obj1, obj2){
		var newObj = Controller.cloneObject(obj1);
		for(var prop in obj2)
			newObj[prop] = obj2[prop];
		return newObj;
	}

	Controller.isArray = function(data){
		if(typeof data === "object")
			if(typeof data.length === "number" )
				return true;
	 	return false;
	};

	Controller.isObject = function(data){
		if(this.isArray(data))
			return false;
		else if(typeof data === "object")
			return true;
		else
			return false;
	};

	Controller.cloneArray = function(array){
		var newArray = [];
		for(i in array)
			newArray.push(cloneObject(array[i]));
		return newArray;
	};

	Controller.cloneObject = function(obj){
		var newObj = {};  
		for (var prop in obj) {  
			if (typeof obj[prop] == 'object') {  
				newObj[prop] = cloneObject(obj[prop]);  
			} else {
				newObj[prop] = obj[prop];
			}
		} 
		return newObj;  
	};

	Controller.isHaveProperty = function(obj){
		// по возможности не использовать
		var properties = [];
		for(var i in obj)
			properties.push(i);
		if(((properties.length == 1) && (properties[0] == "0")) || (!Controller.isObject(obj) && !Controller.isArray(obj)) )
			return false;
		else
			return true;
	};

	

};

//---View----------------------------------------------------------
function View(){
	this.templates = ".templates";
	this.itemForOrders_template = ".templates .itemForOrders";
	this.itemForProducts_template = ".templates .itemForProducts";
	this.orders_OnNavigation = ".navigation .orders";
	this.orderInfo_onInformationBoard = ".informationBoard .orderInfo ";
	this.addressInfo_onInformationBoard = ".informationBoard .addressInfo ";
	this.products_onInformationBoard = ".informationBoard .purchasesInfo .products";
	this.searchBox_input = ".navigation .searchBox input";

	this.getListOfOrders = function(){
		return document.querySelector(this.orders_OnNavigation);
	};

	this.getSearchBox_input = function(){
		return document.querySelector(this.searchBox_input);
	};

	// this.getIdOf(obj){
	// 	var id;
	// 	if(obj.getAttribute("id") == null);
	// 	id = obj.getAttribute("id");
	// 	return id;
	// }

	this.showListOfOrders = function(list){
		var listClassName = this.orders_OnNavigation;
		var numberOfElements = list.length;
		var template = this.itemForOrders_template;

		View.ClearList(listClassName);	
		View.CreateElementsForList(listClassName, template, numberOfElements);
		View.FillingTheOrders(listClassName, list);
	};

	View.CreateElementsForList = function(listClassName, template, numberOfElements){
		for (var i = 0; i < numberOfElements; i++) {
			var parent = document.querySelector(listClassName);
			var li = document.createElement("li");
			li.appendChild(document.querySelector(template).cloneNode(true));
			li.setAttribute("id", i);
			parent.appendChild(li);
		}
	};

	View.FillingTheOrders = function(listClassName, outList){
		var list = document.querySelectorAll(listClassName + " " + "li");

		for (var i = 0;  (i < list.length) && (i < outList.length); i++) {
			list[i].querySelector(".orderId").innerHTML = outList[i].id || i + 1;
			list[i].querySelector(".customer").innerHTML = outList[i].customer;
			list[i].querySelector(".createdAt").innerHTML = outList[i].createdAt;
			list[i].querySelector(".shipped").innerHTML = outList[i].shippedAt;
			list[i].querySelector(".status").innerHTML = outList[i].status;

			list[i].querySelector(".itemForOrders").setAttribute("id", i);
		}
	};

	View.ClearList = function(listClassName, startItem){
		startItem = startItem || 0;
		var parent = document.querySelectorAll(listClassName + " li");
		var size = View.CountListItems(listClassName);
		for (var i = startItem; i < size; i++)
			parent[i].remove();
	};
//---the interface reaction-----------------------------------------

//---total-------------------------------------------------
	this.ShowDetails = function(/*index,*/ orderInfo, addressInfo, products){
		this.GetOrderInfo(/*index,*/ orderInfo);
		this.GetAddressInfo(/*index,*/ addressInfo);
		this.GetPurchasesInfo(/*index,*/ products);
	};

//---OrderInfo-------------------------------------------------
	this.GetOrderInfo = function(/*index,*/ obj){//<------
		document.querySelector(this.orderInfo_onInformationBoard + ".orderId").innerHTML = obj/*[index]*/.id;
		document.querySelector(this.orderInfo_onInformationBoard + ".customer").innerHTML = obj/*[index]*/.customer;
		document.querySelector(this.orderInfo_onInformationBoard + ".ordered").innerHTML = obj/*[index]*/.createdAt;
		document.querySelector(this.orderInfo_onInformationBoard + ".shipped").innerHTML = obj/*[index]*/.shippedAt;
		/*document.querySelector(this.orderInfo_onInformationBoard + ".currency").innerHTML = obj[index].	//посчитать сумму покупок и сделать конвертер валют,
		document.querySelector(this.orderInfo_onInformationBoard + ".orderTotal").innerHTML = obj[index].*/ // чтобы сумму показывать в одной вал.
	};

	View.CountListItems = function(listClassName){
		var list = document.querySelector(listClassName);
		return list.getElementsByTagName('li').length;
	};
//---AddressInfo-------------------------------------------------
	this.GetAddressInfo = function(/*index,*/ obj){//<------
		document.querySelector(this.addressInfo_onInformationBoard + ".name").innerHTML = obj/*[index]*/.name;
		document.querySelector(this.addressInfo_onInformationBoard + ".Address").innerHTML = obj/*[index]*/.Address;
		document.querySelector(this.addressInfo_onInformationBoard + ".ZIP").innerHTML = obj/*[index]*/.ZIP;
		document.querySelector(this.addressInfo_onInformationBoard + ".Region").innerHTML = obj/*[index]*/.Region;
		document.querySelector(this.addressInfo_onInformationBoard + ".Country").innerHTML = obj/*[index]*/.Country;
	};
//---ProductsInfo-------------------------------------------------
	this.GetPurchasesInfo = function(/*index,*/ list){//<------
		var tableClassName = this.products_onInformationBoard;
		var item = this.itemForProducts_template.replace(this.templates + " ", '');

		View.ClearTable(tableClassName, 1);
		View.CreateElementsForTable(tableClassName, this.itemForProducts_template, list/*[index]*/.length);
		this.FillingTheProducts(tableClassName + " " + item/*".itemForProducts"*/, list/*[index]*/);
	};

	View.CreateElementsForTable = function(tableClassName, template, numberOfElements){
		for (var i = 0; i < numberOfElements; i++) {
			var parent = document.querySelector(tableClassName);
			parent.appendChild(document.querySelector(template).cloneNode(true));
		}
	};

	this.FillingTheProducts = function(itemClassName, products){
		var list = document.querySelectorAll(itemClassName);

		for (var i = 0; (i < products.length) && (i < list.length); i++) {
			list[i].querySelector(".name").innerHTML = products[i].name;
			list[i].querySelector(".price").innerHTML = products[i].price;
			//list[i].querySelector(".currency").innerHTML = products[i].currency;// currency
			list[i].querySelector(".quantity").innerHTML = products[i].quantity;
			list[i].querySelector(".totalPrice").innerHTML = products[i].totalPrice;

			list[i].setAttribute("id", i);
		}
	};

	View.CountTableItems = function(tableClassName){
		var table = document.querySelector(tableClassName);
		return table.getElementsByTagName('tr').length;
	};

	View.ClearTable = function(tableClassName, startStr){
		startStr = startStr || 0;
		var size = View.CountTableItems(tableClassName);	
		var parent = document.querySelectorAll(tableClassName + " tr");
		for (var i = startStr; i < size; i++)
			parent[i].remove();
	};

};
