import { makeStyles } from "@material-ui/core/styles";
import {
    SECTION_TITLE_HEIGHT,
    SECTION_END_HEIGHT,
  } from "../../../common/constants";

const useStyles = makeStyles({
    chatSectionWindowBody: {
        width: "100%",
        height:  `calc(100% - ${SECTION_TITLE_HEIGHT + SECTION_END_HEIGHT}px)`,
    }
  });

  function ChatSectionWindowBody(props) {
    const styles = useStyles();

    return <div className={styles.chatSectionWindowBody}>
        Body
    </div>;
}

export default ChatSectionWindowBody;