const parseEnv = () => {
    const args = Object.entries(process.env).reduce((acc, [key,value])=>{
        if (key.startsWith('RSS_')) acc.push(`${key}=${value}`)
        return acc
    }, [])
    console.log(args.join('; '));
};

parseEnv();
