import { makeStyles } from "@material-ui/core/styles";
import {
  CONTACT_SECTION_END_BACKGROUND_COLOR,
  CONTACT_SECTION_SPLITTER_BACKGROUND_COLOR,
  SECTION_END_HEIGHT,
} from "../../../common/constants";

const useStyles = makeStyles({
  ContactSectionEnder: {
    margin: "auto 0 0 0",
    height: SECTION_END_HEIGHT,
    borderTop: `1px solid ${CONTACT_SECTION_SPLITTER_BACKGROUND_COLOR}`,
    backgroundColor: CONTACT_SECTION_END_BACKGROUND_COLOR,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    "& > img": {
      width: 25,
      height: 25,
      marginRight: "auto",
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.2)",
        cursor: "pointer",
      },
    },
    "& > span": {
      transition: "text-shadow .2s",
      "&:hover": {
        textShadow: "0px 0px 1px white",
        cursor: "pointer",
      },
    },
  },
});

function ContactSectionFooter(props) {
  const styles = useStyles();

  return (
    <div className={`${styles.ContactSectionEnder} flex-container`}>
      <img
        alt="team-icon"
        src="https://d35aaqx5ub95lt.cloudfront.net/favicon.ico"
      ></img>
      <span>{"Help & Feedback"}</span>
    </div>
  );
}

export default ContactSectionFooter;
