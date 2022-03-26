        setInterval(function () {
            rem_class();
            getTime();
        }, 1000);


function getTime() {

    var now = new Date().toLocaleTimeString();
    
    var splitted = now.split(':');
  
    perevod(splitted[0][0],".f_cifr");
    perevod(splitted[0][1],".s_cifr");
    perevod(splitted[1][0],".t_cifr");
    perevod(splitted[1][1],".fo_cifr");
    perevod(splitted[2][0],".secf_cifr");
    perevod(splitted[2][1],".secs_cifr");
    day();
}


function day() {
    // находим в теле HTML контейнер, куда будем выводить результат

// объявляем наши даты
var current = new Date(); // сегодня
var old = new Date("2022-02-24"); // !!! год-месяц-день !!!

// сначала находим количество дней между датами
var days = Math.ceil(Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24));
days=days-1;
$('#day_p').html('day:' + days);
console.log(days-1);
}
        function perevod(c,id) {
            
            if(c==1){
                one(id);
            }
            else if(c==2){
                two(id);
            }
            else if(c==3){
                three(id);
            }
            else if(c==4){
                four(id);
            }
            else if(c==5){
                five(id);
            }
            else if(c==6){
                six(id);
            }
            else if(c==7){
                seven(id);
            }
            else if(c==8){
                eight(id);
            }
            else if(c==9){
                nine(id);
            }
            else if(c==0){
                ziro(id);
            }
            else{
                nulll(id);
                
            }
            
        }
        function rem_class() {
            $(".1_l").removeClass('black');
            $(".2_l").removeClass('black');
            $(".3_l").removeClass('black');
            $(".4_l").removeClass('black');
            $(".5_l").removeClass('black');
            $(".6_l").removeClass('black');
            $(".7_l").removeClass('black'); 
        }
        function one(id) {
            
            let par=id+" ";
         
            $(par+'.1_l').addClass('black');
            $(par+".2_l").addClass('black');
            
            $(par+".4_l").addClass('black');
            $(par+".5_l").addClass('black');
          
            $(par+".7_l").addClass('black');
        }
        function two(id) {
            let par=id+" ";
            $(par+".2_l").addClass('black');
           
            $(par+".6_l").addClass('black');
           
        }
        function three(id) {
            let par=id+" ";
            $(par+".2_l").addClass('black');
            $(par+".5_l").addClass('black');
        }
        function four(id) {
            let par=id+" ";
            $(par+".1_l").addClass('black');
           
            
            $(par+".5_l").addClass('black');
           
            $(par+".7_l").addClass('black');
        }
        function five(id) {
            let par=id+" ";
            $(par+".3_l").addClass('black');
          
            $(par+".5_l").addClass('black');
   
        }
        function six(id) {
            let par=id+" ";
            $(par+".3_l").addClass('black');
         
        }
        function seven(id) {
            let par=id+" ";
            $(par+".2_l").addClass('black');
           
            $(par+".4_l").addClass('black');
            $(par+".5_l").addClass('black');
           
            $(par+".7_l").addClass('black');
        }
        function eight(id) {
            let par=id+" ";
            $(par+".1_l").removeClass('black');
            $(par+".2_l").removeClass('black');
            $(par+".3_l").removeClass('black');
            $(par+".4_l").removeClass('black');
            $(par+".5_l").removeClass('black');
            $(par+".6_l").removeClass('black');
            $(par+".7_l").removeClass('black'); 
        }
        function nine(id) {
            let par=id+" ";
            $(par+".5_l").addClass('black');
          
        }
        function ziro(id) {
            let par=id+" ";
            $(par+".4_l").addClass('black');
           
        }
        function nulll(id) {
            let par=id+" ";
            
            $(par+'.1_l').addClass('black');
            $(par+".2_l").addClass('black');
            $(par+".3_l").addClass('black');
            $(par+".4_l").addClass('black');
            $(par+".5_l").addClass('black');
            $(par+".6_l").addClass('black');
            $(par+".7_l").addClass('black'); 
        }
