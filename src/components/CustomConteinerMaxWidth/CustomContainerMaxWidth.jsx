
export const CustomContainerMaxWidth = ({ children, ventajas, FAQ }) => {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '-webkit-fill-available',
        maxWidth: ventajas || FAQ ? '-webkit-fill-available' : '1440px',
        height: '-webkit-fill-available',
    }}>{children}</div>
}