//tính trung bình 3 môn
function tinhtrungbinh(){
        toan= document.getElementById('toan').value;
        ly= document.getElementById('ly').value;
        hoa= document.getElementById('hoa').value;
        tong= (Number(toan)+Number(ly)+Number(hoa))/3;

        document.getElementById('ketqua').innerHTML= tong;
}
//tinh dien tich chu vi hinh chu nhat
function dientich(){
        
    cd= document.getElementById('a').value;
    cr= document.getElementById('b').value;
    kqchuvi=(Number(cd)+ Number(cr))*2;
    kqdientich= cd*cr;
    document.getElementById('cv').innerHTML=kqchuvi;
    document.getElementById('dt').innerHTML=kqdientich;
    
}
//Tìm ước chung lớn nhất, bội chung nhỏ nhất.
function lonnhat(){
    a = document.getElementById('so-a').value;
    b = document.getElementById('so-b').value;

    so_a = a;
    so_b = b;
     while(so_a !=so_b)
     if(so_a >so_b){
        so_a -= so_b;
     }else{
        so_b -= so_a;
     }
     ketqua1 =  so_a;
     ketqua2 = (a*b)/so_a;
    document.getElementById('ucln').innerHTML=ketqua1;
    document.getElementById('bcnn').innerHTML=ketqua2;
}
//Tìm năm nhuần
function leapYear() {
    year=document.getElementById('year').value;
  if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    document.getElementById('nn').innerHTML =  year;
  }else{
    document.getElementById('kpnn').innerHTML = year; 
  }
  
}