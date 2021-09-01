import { makeStyles } from "@material-ui/core/styles";
import {
    CHAT_SECTION_HEADER_BACKGROUND_COLOR,
    SECTION_TITLE_HEIGHT
  } from "../../../common/constants";

const useStyles = makeStyles({
    chatSectionHeader: {
        backgroundColor: CHAT_SECTION_HEADER_BACKGROUND_COLOR,
        width: "100%",
        height: SECTION_TITLE_HEIGHT,
    }
  });

function ChatSectionHeader(props) {
    const styles = useStyles();

    return <div className={styles.chatSectionHeader}></div>;
}

export default ChatSectionHeader;