import ChatSection from "./ChatSection";
import ContactSection from "./ContactSection";
import { makeStyles } from '@material-ui/core/styles';
import SectionSplitter from "./SectionSplitter";
import { useState } from "react";
import { CONTACT_SECTION_MAX_WIDTH, CONTACT_SECTION_MIN_WIDTH, DEFAULT_CONTACT_SECTION_WIDTH } from "../../common/constants";

const useStyles = makeStyles({
    sectionContainer: {
        height: "100vh",
        cursor: resizeWidthDown => resizeWidthDown ? "col-resize" : "default",
        "& > div": {
            height: "100%",
            display: "inline-block",
        },
    },
});

function ChatPage() {

    const [contactSectionWidth, setContactSectionWidth] = useState(DEFAULT_CONTACT_SECTION_WIDTH);

    const [resizeWidthDown, setResizeWidthDown] = useState(false);

    const styles = useStyles(resizeWidthDown);

    return <div className={styles.sectionContainer} onMouseMove={(e) => {
        if (resizeWidthDown) {
            let newWidth = contactSectionWidth + e.movementX;
            if (newWidth < CONTACT_SECTION_MIN_WIDTH) {
                newWidth = CONTACT_SECTION_MIN_WIDTH;
            } else if (newWidth > CONTACT_SECTION_MAX_WIDTH) {
                newWidth = CONTACT_SECTION_MAX_WIDTH;
            }
            setContactSectionWidth(newWidth);
        }
    }} onMouseUp={(e) => {
        setResizeWidthDown(false);
    }}>
        <ContactSection contactSectionWidth={contactSectionWidth} />
        <SectionSplitter contactSectionWidth={contactSectionWidth} setResizeWidthDown={setResizeWidthDown.bind(this)} />
        <ChatSection contactSectionWidth={contactSectionWidth} />
    </div>;
}

export default ChatPage;