const parseArgs = () => {
    const args = process.argv;
    const newArr = args.reduce((acc, elem, index, arr)=>{
        if (elem.startsWith('--')){
            acc.push(`${elem.slice(2)} is ${arr[index+1]}`)
        }
        return acc
    },[])
    console.log(newArr.join(', '));
};

parseArgs();
