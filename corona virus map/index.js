function updateMap()
{
    fetch("/data.json")
    .then(response=> response.json())
    .then(rsp=>{
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude= element.longitude;

            cases = element.infected;
            if (cases <500){
                color = "grey";
            }
            else if(cases<5000 ){ 
                color = "black";
            
            }
            else{
                color="red"
            
            }

            //map mark
            new mapboxgl.Marker({
                draggable: false,
                color: color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        })
    })

}

updateMap();