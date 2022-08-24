
function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
}


async function main() {
    await sleep(3000)
    console.log('你好')
}

main() // 延迟三秒打印你好