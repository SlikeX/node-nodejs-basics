const parseArgs = () => {
    const args = process.argv;
    const res = args.reduce((acc, elem, index, arr)=>{
        if (elem.startsWith('--')){
            acc.push(`${elem.slice(2)} is ${arr[index+1]}`)
        }
        return acc
    },[])
    console.log(res.join(', '));
};

parseArgs();
