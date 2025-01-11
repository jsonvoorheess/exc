import styles from "./BackgroundZone.module.css";
import {FC} from "react";
import classNames from "classnames";


interface BackgroundZoneProps {
    size: "s" | "m"
}

export const BackgroundZone:FC<BackgroundZoneProps> = ({size = "s"}) => {
    return (
        <div className={classNames(styles.backgr, {
            [styles.s]: size === "s",
            [styles.m]: size === "m"
        })}></div>
    );
};
