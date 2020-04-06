const fetch = require("node-fetch");
        
        function doFetch(ev){
             let uri = "https://admintestpatrice.zendesk.com/api/v2/users/371515625577.json";
            
            let h = new Headers();
            h.append('Accept', 'application/json');
            let encoded = "704c42d2da90a1759c73e25d7fea0012d084d207a56bbcdf1438b705b7066892";
            let auth = 'Bearer ' + encoded;
            h.append('Authorization', auth );
            console.log( auth );
            
            let req = new Request(uri, {
                method: 'GET',
                headers: h,
                credentials: 'include'
            });
            //credentials: 'same-origin'

            doFetch(ev)
            
            fetch(req)
            .then( (response)=>{
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error('BAD HTTP stuff');
                }
            })
            .then( (jsonData) =>{
                console.log(jsonData);
           //     p.textContent = JSON.stringify(jsonData, null, 4);
            })
            .catch( (err) =>{
                console.log('ERROR:', err.message);
            });
        }
 