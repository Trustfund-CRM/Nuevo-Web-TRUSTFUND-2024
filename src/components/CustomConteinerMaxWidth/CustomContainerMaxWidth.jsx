
export const CustomContainerMaxWidth = ({ children, ventajas, FAQ }) => {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: ventajas || FAQ ? '-webkit-fill-available' : '1440px',
        height: '-webkit-fill-available',
    }}>{children}</div>
}