import React from 'react';
import useKeyPress from '../hooks/useKeyPress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Character from './character';


function TypingText({ text }) {
    const textByLine = text.split("\n")

    /** States: */
    const [chrsTyped, setChrsTyped] = React.useState([]);
    const [charsToType, setCharsToType] = React.useState([]);
    const [seconds, setSeconds] = React.useState(0);

    /** Refs: */
    const timer = React.useRef();

    React.useEffect(() => {
        const chars = textByLine.map(line => line.trim().split("")).flat()
        setCharsToType(chars);
    }, []);


    useKeyPress(key => {
        if (key != "Backspace") {
            setChrsTyped((prevChrsTyped) => ([...prevChrsTyped, key]))
        } else {
            // Create a shallow copy of prev Chrs typed excluding the last element.
            setChrsTyped((prevChrsTyped) => (prevChrsTyped.filter((_, i) => i != prevChrsTyped.length - 1)))
        }
    })

    // Start timer when user types first character.
    if (timer.current === undefined && chrsTyped.length > 0) {
        var start = Date.now();
        timer.current = setInterval(() => {
            var delta = Date.now() - start; // milliseconds elapsed since start
            setSeconds(delta / 1000);
        }, 100) // update about every 100ms

    }

    if (timer.current && charsToType.length <= chrsTyped.length) {
        clearInterval(timer.current);
        timer.current = null;
    }

    let chrCount = -1;

    // Calculate accuracy and wpm
    const correct = chrsTyped.reduce((acc, chr, i) => {
        return chr == charsToType[i] ? acc + 1 : acc;
    }, 0)

    const accuracy = correct / chrsTyped.length * 100;
    const accuracyText = `${correct} / ${chrsTyped.length} (${(accuracy).toFixed(0)}%)`
    const wpm = (chrsTyped.length / 5) / (seconds / 60);

    return (
        <>
            <Box>
                <Typography>{`Accuracy: ${isNaN(accuracy) ? '-' : accuracyText}`}</Typography>
                <Typography>{`WPM: ${isNaN(wpm) ? '-' : (wpm).toFixed(0)}`}</Typography>
            </Box>
            {textByLine.map((line, i) =>
                <Box key={i}>
                    {
                        line.trim().split("").map((chr) => {
                            chrCount += 1
                            return (
                                <Character chr={chr} key={chrCount} id={chrCount} chrsTyped={chrsTyped} />
                            )
                        })
                    }
                </Box>
            )}
        </>
    )
}

export default TypingText;