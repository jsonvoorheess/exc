import classNames from "classnames";
import styles from "./Modal.module.css"
import {FC, ReactNode} from "react";
import {createPortal} from "react-dom";

interface ModalProps {
    children: ReactNode,
    isWarningModal: boolean
}


export const Modal:FC<ModalProps> = ({ children, isWarningModal }) => {
    return (
        createPortal(<div className={classNames(styles.modal)}>
            <div className={classNames({
                [styles.overlayWarning]: isWarningModal,
                [styles.overlayCookie]: !isWarningModal
            })}>
                <div className={classNames({
                    [styles.contentWarning]: isWarningModal,
                    [styles.contentCookie]: !isWarningModal
                })}>
                    {children}
                </div>
            </div>
        </div>, document.body)

    );
};
