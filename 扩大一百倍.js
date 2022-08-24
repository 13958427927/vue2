let num = 0
function sum(arr) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * 100
            // console.log(arr[i]);   
            num += arr[i]
        }
        resolve()
    })
}

async function main(e) {
    await sum(e)
    console.log(num);
}

main([1, 2, 3]) // [1,2,3] ==> [100,200,300] ==> 求和