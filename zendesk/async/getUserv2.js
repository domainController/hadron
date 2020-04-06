const fetch = require("node-fetch");

const basicAuth = "Y3Aua2VubW9lQGdtYWlsLmNvbTpyb3lmaWVsZGluZwo="
let login = 'cp.kenmoe@gmail.com';
let password = 'royfielding';


function doFetch(ev) {
    let uri = "https://admintestpatrice.zendesk.com/api/v2/users/371515625577.json";

    let h = new Headers ();
    h.append('Accept', 'application/json');
    let encoded = "Y3Aua2VubW9lQGdtYWlsLmNvbTpyb3lmaWVsZGluZwo=";
    let auth =  'Basic ' + encoded;
    h.append('Authorization', auth );
    console.log ( auth );

    let req = new Request(uri, {
      method: 'GET',
      headers: h,
      credentials: 'same-origin'
    });



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
