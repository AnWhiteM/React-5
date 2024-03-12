import { RevolvingDot } from "react-loader-spinner";
import css from './Loader.module.css'

export const Loader = () => {
    return(
        <RevolvingDot
            visible={true}
            height="80"
            width="80"
            color="#fff"
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass={css.spinner} />
    )

}