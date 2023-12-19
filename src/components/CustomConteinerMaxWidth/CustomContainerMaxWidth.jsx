import { useEffect, useState } from "react"

export const CustomContainerMaxWidth = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if(window !== 'undefined') {
            window?.innerWidth < 735 ?
            setIsMobile(true)
            : setIsMobile(false)
        }
    }, [])

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1440px',
        gap: isMobile ? '130px' : '0px',
    }}>{children}</div>
}