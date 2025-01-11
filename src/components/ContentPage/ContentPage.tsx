import styles from "./ContentPage.module.css"



import {Container} from "../Container/Container.tsx";
import {MiddleSection} from "../MiddleSection/MiddleSection.tsx";
import {BackgroundZone} from "../BackgroundZone/BackgroundZone.tsx";
import {TopWarningMessageComponent} from "../TopWarningMessageComponent/TopWarningMessageComponent.tsx";
import {GamePreviewComponent} from "../GamePreviewComponent/GamePreviewComponent.tsx";
import {InfoSection} from "../InfoSection/InfoSection.tsx";
import {BottomWarningMessageComponent} from "../BottomWarningMessageComponent/BottomWarningMessageComponent.tsx";


export const ContentPage = () => {


    return (
        <>
            <section className={styles.mainsection}>
                <Container>
                    <TopWarningMessageComponent />
                </Container>
            </section>
            <BackgroundZone size={"m"} />
            <MiddleSection />
            <BackgroundZone size={"s"} />
            <GamePreviewComponent />
            <InfoSection />
            <BottomWarningMessageComponent />

        </>
    )
        ;
};