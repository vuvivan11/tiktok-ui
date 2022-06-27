import React, { useEffect, useState } from 'react'

export default function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => { setDebounce(value) }, delay)

        return () => clearTimeout(handler)
    }, [value, delay])

    return debounce
}
