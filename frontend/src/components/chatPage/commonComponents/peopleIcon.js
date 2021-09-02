import { makeStyles } from "@material-ui/core/styles";

import {
  PEOPLE_STATUS_ACTIVE_COLOR,
  PEOPLE_STATUS_AWAY_COLOR,
  PEOPLE_STATUS_BUSY_COLOR,
  PEOPLE_STATUS_OFFLINE_COLOR,
} from "../../../common/constants";

const useStyles = makeStyles({
  people:  width => ({
    "& > img": {
      width: width,
      height: width,
    },
    "& > div": {
      position: "absolute",
      left: width * 0.9,
      top: width * 0.9,
      width: width / 3,
      height: width / 3,
      borderRadius: width / 4,
      border: "2px solid",
      backgroundColor: PEOPLE_STATUS_ACTIVE_COLOR,
      borderColor: "inherit",
      transition: "border-color .2s",
      "&.status-away": {
        backgroundColor: PEOPLE_STATUS_AWAY_COLOR,
      },
      "&.status-busy": {
        backgroundColor: PEOPLE_STATUS_BUSY_COLOR,
      },
      "&.status-offline": {
        backgroundColor: PEOPLE_STATUS_OFFLINE_COLOR,
      },
    },
  }),
});

function PeopleIcon({ width, status }) {
  const styles = useStyles(width);

  return (
    <div className={styles.people}>
      <img
        alt="people-icon"
        src="https://d35aaqx5ub95lt.cloudfront.net/favicon.ico"
      ></img>
      <div className={status === "active" ? "" : `status-${status}`}></div>
    </div>
  );
}

export default PeopleIcon;
