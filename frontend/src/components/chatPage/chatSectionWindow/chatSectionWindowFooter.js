import { makeStyles } from "@material-ui/core/styles";
import {
    SECTION_END_HEIGHT
  } from "../../../common/constants";

const useStyles = makeStyles({
    chatSectionWindowFooter: {
        width: "100%",
        height: SECTION_END_HEIGHT,
    }
  });

function ChatSectionWindowFooter(props) {
    const styles = useStyles();

    return <div className={styles.chatSectionWindowFooter}>2</div>;
}

export default ChatSectionWindowFooter;