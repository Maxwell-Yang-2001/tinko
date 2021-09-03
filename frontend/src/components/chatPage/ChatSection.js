import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {
  THREAD_WINDOW_DEFAULT_WIDTH,
  THREAD_WINDOW_MAX_WIDTH,
  THREAD_WINDOW_MIN_WIDTH,
} from "../../common/constants";
import ChatSectionWindow from "./chatSectionWindow/chatSectionWindow";
import SectionSplitter from "./SectionSplitter";

const useStyles = makeStyles({
  chatSectionContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: (width) => `calc(100% - ${width}px)`,
  },
});

function ChatSection(props) {
  const { contactSectionWidth } = props;

  const [threadWindowWidth, setThreadWindowWidth] = useState(THREAD_WINDOW_DEFAULT_WIDTH);
  const [threadWindowActive, setThreadWindowActive] = useState(true);
  const [resizeWidthDown, setResizeWidthDown] = useState(false);

  const styles = useStyles(contactSectionWidth);

  return (
    <div
      className={styles.chatSectionContainer}
      onMouseMove={(e) => {
        if (resizeWidthDown) {
          let newWidth = threadWindowWidth - e.movementX;
          if (newWidth < THREAD_WINDOW_MIN_WIDTH) {
            newWidth = THREAD_WINDOW_MIN_WIDTH;
          } else if (newWidth > THREAD_WINDOW_MAX_WIDTH) {
            newWidth = THREAD_WINDOW_MAX_WIDTH;
          }
          setThreadWindowWidth(newWidth);
        }
      }}
      onMouseUp={(e) => {
        setResizeWidthDown(false);
      }}
    >
      <ChatSectionWindow
        threadWindowWidth={threadWindowActive ? threadWindowWidth : 0}
        isThread={false}
      />
      {threadWindowActive && (
        <SectionSplitter
          edgeWidth={threadWindowWidth}
          left={false}
          setResizeWidthDown={setResizeWidthDown}
        />
      )}
      {threadWindowActive && (
        <ChatSectionWindow
          threadWindowWidth={threadWindowWidth}
          setThreadWindowActive={setThreadWindowActive.bind(this)}
          isThread={true}
        />
      )}
    </div>
  );
}

export default ChatSection;
