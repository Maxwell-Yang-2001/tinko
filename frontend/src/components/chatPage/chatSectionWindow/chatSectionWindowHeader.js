import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import {
  BACKGROUND_DEEP_LIGHT_GREY_COLOR,
  FONT_BLACK_COLOR,
  FONT_GREY_COLOR,
  SECTION_TITLE_HEIGHT,
} from "../../../common/constants";

const useStyles = makeStyles({
  chatSectionWindowHeader: {
    width: "100%",
    height: SECTION_TITLE_HEIGHT,
    display: "flex",
    boxSizing: "border-box",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottom: `1px solid ${BACKGROUND_DEEP_LIGHT_GREY_COLOR}`,
    "& > *": {
      marginTop: "auto",
      marginBottom: "auto",
    },
    // thread header
    ".is-thread > &": {
      "& > :nth-child(1)": {
        fontSize: 18,
        color: FONT_BLACK_COLOR,
        fontWeight: 900,
      },
      "& > :nth-child(2)": {
        fontSize: 14,
        fontWeight: 500,
        color: FONT_GREY_COLOR,
        paddingTop: 3,
        marginLeft: 10,
        "&:hover": {
          cursor: "pointer",
        }
      },
      "& > :nth-child(3)": {
        marginLeft: "auto",
        justifyContent: "center",
        alignItems: "center",
        width: 29,
        height: 29,
        borderRadius: 5,
        display: "flex",
        "&:hover": {
          backgroundColor: BACKGROUND_DEEP_LIGHT_GREY_COLOR,
          cursor: "pointer",
          "&:hover > svg": {
            transform: "scale(1.2)",
          }
        }
      },
    },
    // channel header
    ":not(.is-thread) > &": {
      "& > :nth-child(1)": {
        fontSize: 18,
        color: FONT_BLACK_COLOR,
        fontWeight: 900,
      },
      "& > :nth-child(2)": {
        fontSize: 18,
        color: FONT_BLACK_COLOR,
        fontWeight: 900,
        marginLeft: 5,
      },
    },
  },
  closeButton: {
    width: 21,
    height: 21,
    transition: "transform .2s",
  },
});

const mockThread = {
  title: "secret-discussion",
  link: "mobile-dev-private",
  channel: true,
  public: false,
};

function ChatSectionWindowHeader({isThread, setThreadWindowActive}) {
  const styles = useStyles();

  return isThread ? (
    <div className={styles.chatSectionWindowHeader}>
      <span>Thread</span>
      <span>Maxwell Yang</span>
      <div onClick={() => {setThreadWindowActive(false)}}>
        <CloseIcon classes={{ root: styles.closeButton}}/>
      </div>
    </div>
  ) : (
    <div className={styles.chatSectionWindowHeader}>
      <span>#</span>
      <span>general</span>
    </div>
  );
}

export default ChatSectionWindowHeader;
