import { CustomLine } from '../CustomLine/CustomLine'
import style from './styles/index.module.css'
export const CustomTitleSection = ({title, textColor, bgLine}) => {
    return (
        <div className={style.containerGeneralTitle}>
            <div className={style.containerTitle}>
                <label className={style.title} style={{color: `${textColor}`}}>{title}</label>
            </div>
            <CustomLine color={bgLine} />
        </div>
    )
}