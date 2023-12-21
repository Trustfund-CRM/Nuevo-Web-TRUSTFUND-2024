
export const CustomContainerMaxWidth = ({ children, ventajas }) => {

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: ventajas ? '-webkit-fill-available' : '1440px',
        height: '-webkit-fill-available',
    }}>{children}</div>
}