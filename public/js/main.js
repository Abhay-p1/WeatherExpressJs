const Sbtn = document.getElementById('sbtn');
const cityName = document.getElementById('cityname');
const cityOut = document.getElementById('cityout');
const tempVal = document.getElementById('temp');
const Status = document.getElementById('status');
const dataHide = document.querySelector('.middle_layer');
const getInfo = async(event)=>{
    console.log('gmbc');
    event.preventDefault();
    let cityVal = cityName.value;
   if(cityVal===""){
      cityOut.innerHTML = 'Please Write Name Before You Search';
      dataHide.classList.add('data_hide');
    }
   else{
       try{
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c10ee5932c073b2d903ee0c23040d6ad`;
       const resp = await fetch(url);
       const data= await resp.json(); 
       console.log(data);
       const arrdata=[data];
       tempVal.innerHTML=`${arrdata[0].main.temp} <span id="temp_real"><sup>o</sup>C</span>`;
    //    Status.innerText=arrdata[0].weather[0].main;
       cityOut.innerText=` ${arrdata[0].name}, ${arrdata[0].sys.country}`;
       const temptype=arrdata[0].weather[0].main;
        if(temptype=="Sunny"){
            Status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
        }
        else if(temptype=="Clear"){
            Status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
        }
        else if(temptype=="Clouds"){
            Status.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea'></i>"
        }
        else if(temptype=="Rainy"){
            Status.innerHTML = "<i class='fas fa-rain' style='color: #a4b0be'></i>"
        }
        else if(temptype=="Smoke"){
            Status.innerHTML = "<i class='fas fa-smoke'></i>"
        }
        else{
            Status.innerHTML = "<i class='fas fa-cloud-sun'></i>"
        }

        dataHide.classList.remove('data_hide');
       }
       catch{
        cityOut.innerHTML = 'Please Enter City Name Properly';   
        dataHide.classList.add('data_hide');
       }
   }    
}
Sbtn.addEventListener('click',getInfo);

