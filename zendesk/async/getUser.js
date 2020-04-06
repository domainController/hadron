const fetch = require("node-fetch");
const uri = "https://admintestpatrice.zendesk.com/api/v2/users/371515625577.json";
const basicAuth = "Y3Aua2VubW9lQGdtYWlsLmNvbTpyb3lmaWVsZGluZwo="
let login = 'cp.kenmoe@gmail.com';
let password = 'royfielding';

let h = new Headers ();
h.append('Accept', 'application/json');
let encoded = window.btoa('cp.kenmoe@gmail.com|royfielding')



const getUser = async url => {
  try {
    const response = await fetch(url,{
    	method: "GET",
    	headers: new Headers ({ 
    		"Authorization": "Basic Y3Aua2VubW9lQGdtYWlsLmNvbTpyb3lmaWVsZGluZwo="
		})
	});
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getUser(url);	
