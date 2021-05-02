import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import {
  CONTACT_SECTION_END_BACKGROUND_COLOR,
  CONTACT_SECTION_SPLITTER_BACKGROUND_COLOR,
} from "../../../common/constants";
import { useState } from "react";

const useStyles = makeStyles({
  contactSectionHeader: {
    margin: 0,
    borderBottom: `1px solid ${CONTACT_SECTION_SPLITTER_BACKGROUND_COLOR}`,
    padding: "20px 15px",
    fontSize: 16,
    fontWeight: 900,
    display: "flex",
    alignItems: "center",
    transition: "background-color .2s",
    "&:hover": {
      backgroundColor: CONTACT_SECTION_END_BACKGROUND_COLOR,
      cursor: "pointer",
    },
    "& > *": {
      marginTop: "auto",
      marginBottom: "auto",
    },
    "& > img": {
      width: 30,
      height: 30,
      marginRight: 5,
    },
  },
  bell: {
    marginLeft: "auto",
    width: 25,
    height: 25,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
});

function ContactSectionHeader(props) {
  const styles = useStyles();

  const [notificationOn, setNotificationOn] = useState(true);

  return (
    <div className={styles.contactSectionHeader}>
      <img
        alt="team-icon"
        src="https://d35aaqx5ub95lt.cloudfront.net/favicon.ico"
      ></img>
      <span>TeamApple</span>
      {notificationOn ? (
        <NotificationsIcon
          classes={{ root: styles.bell }}
          onClick={(e) => {
            setNotificationOn(false);
            e.stopPropagation();
          }}
        />
      ) : (
        <NotificationsOffIcon
          classes={{ root: styles.bell }}
          onClick={(e) => {
            setNotificationOn(true);
            e.stopPropagation();
          }}
        />
      )}
    </div>
  );
}

export default ContactSectionHeader;
