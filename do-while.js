let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let do_dai = arr.length

function cauA(){
    let i = 0
    do{
        console.log(arr[i])
        i ++
    }while(i < do_dai)
}
// cauA()

// b. Tính tổng các phần tư trong mảng
function cauB(){
    let i = 0
    let sum = 0
    do{
        sum = sum + arr[i]     
        i ++
    }while(i < do_dai)
    console.log("Tong = " + sum)   
}
// cauB()

// c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
function cauC(){
    let i = 0 
    let min = 100
    let max = 0 
    do{
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i] 
        }
        i = i + 1
    }while(i < do_dai)
    console.log("Số lớn nhất = ", max)
    console.log("Số nhỏ nhất = ", min)
}
// cauC()

// d. Tính trung bình cộng các phần tử trong mảng
function cauD(){
    let a = 0 
    let b = do_dai
    let i = 0
    do{
        a = a + arr[i]
        i++
    }while(i < do_dai)
    let tbc = a / b 
    console.log("Trung bình cộng = " + tbc)
}
// cauD()

// e. Đảo ngược thứ tự các phần tử trong mảng
function cauE(){
    let i = 0 
    do{
        let j = i + 1
        do{
            if(arr[i] > arr[j]){
                sum = arr[i]
                arr[i] = arr[j]
                arr[j] = sum
            }
            
                 j ++
            }while(j < do_dai)
        i ++
    }while(i < do_dai)
console.log(arr)
}
cauE()