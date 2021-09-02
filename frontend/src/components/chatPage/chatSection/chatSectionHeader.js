import { makeStyles } from "@material-ui/core/styles";
import {
    SECTION_TITLE_HEIGHT
  } from "../../../common/constants";

const useStyles = makeStyles({
    chatSectionHeader: {
        backgroundColor: "white",
        width: "100%",
        height: SECTION_TITLE_HEIGHT,
    }
  });

function ChatSectionHeader(props) {
    const styles = useStyles();

    return <div className={styles.chatSectionHeader}>2</div>;
}

export default ChatSectionHeader;