import { makeStyles } from "@material-ui/core/styles";
import { CHAT_SECTION_SPLITTER_BACKGROUND_COLOR } from "../../../common/constants";
import ChatSectionWindowBody from "./chatSectionWindowBody";
import ChatSectionWindowFooter from "./chatSectionWindowFooter";
import ChatSectionWindowHeader from "./chatSectionWindowHeader";

const useStyles = makeStyles({
    chatSectionWindow: {
        height: "100%",
        width: threadWindowWidth => `calc(100% - ${threadWindowWidth}px)`,
        "&.is-thread": {
            width: threadWindowWidth => threadWindowWidth - 31,
            borderLeft: `1px solid ${CHAT_SECTION_SPLITTER_BACKGROUND_COLOR}`,
        }
    }
  });

  function ChatSectionWindow({threadWindowWidth, isThread}) {
    const styles = useStyles(threadWindowWidth);

    return <div className={`${styles.chatSectionWindow} ${isThread ? "is-thread" : ""}`}>
        <ChatSectionWindowHeader isThread={isThread}/>
        <ChatSectionWindowBody />
        <ChatSectionWindowFooter />
    </div>;
}

export default ChatSectionWindow;