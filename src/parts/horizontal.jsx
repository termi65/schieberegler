
export default Horizontal = (anzahl, min, max) => {
    const [length, setLength] = useState(0);
    const [defaultString, setDefaultString] = useState('=');

    const inc = () => {
        if (defaultString.length < max) {
            setDefaultString (defaultString.concat('='));
            setLength(length + 1);
        }
    }

    const dec = () => {
        if (defaultString.length > min) {
            setDefaultString (defaultString.substring(0, length));
            setLength(length - 1);
        }

    }

    useEffect(() => {
        if (id) ladeMitglied();
        console.log(mitglied);
        }, []);

    return (
        <>
            <button type="button" 
                onClick={dec}
            >
                -
            </button>
            <p>
            while ({length < anzahl}) {
                inc()
            }
           </p> 
           <button type="button" 
            onClick={inc}
            >
                -
            </button>
        </>
    )
}