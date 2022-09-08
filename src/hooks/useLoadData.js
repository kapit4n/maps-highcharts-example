import { useEffect, useState } from 'react'

export default function useLoadData({ url }) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    // move this to custom hook
    useEffect(() => {
        async function loadData() {
            setLoading(true)
            if (url) {
                const t = await fetch(url).then(response => response.json());
                setData(t)
            }
            setLoading(false)
        }

        loadData()
    }, [url])

    return { loading, data }
}
