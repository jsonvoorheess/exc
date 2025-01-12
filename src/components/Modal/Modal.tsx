import classNames from "classnames";
import styles from "./Modal.module.css"
import {FC, ReactNode} from "react";
import {createPortal} from "react-dom";

interface ModalProps {
    children: ReactNode,
    isWarningModal: boolean,
    opened?:boolean
}


export const Modal:FC<ModalProps> = ({ children, isWarningModal, opened = false }) => {
    return (
        createPortal(<div className={classNames(styles.modal, {
            [styles.opened]: opened
        })}>
            <div className={classNames({
                [styles.overlayWarning]: isWarningModal,
                [styles.overlayCookie]: !isWarningModal
            })}>
                <div className={classNames({
                    [styles.contentOpened]: opened,
                    [styles.contentWarning]: isWarningModal,
                    [styles.contentCookie]: !isWarningModal
                })}>
                    {children}
                </div>
            </div>
        </div>, document.body)

    );
};
