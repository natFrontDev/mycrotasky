type FooterType = {
    titleForFooter: string
}



export const Footer = (props:FooterType)=>{
    return <>
        {props.titleForFooter}
    </>
}