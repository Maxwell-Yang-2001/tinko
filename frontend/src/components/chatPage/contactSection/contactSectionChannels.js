import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { useState } from "react";
import {
  CONTACT_SECTION_SELECTED_BACKGROUND_COLOR,
  CONTACT_SECTION_HOVER_BACKGROUND_COLOR,
} from "../../../common/constants";

const useStyles = makeStyles({
  ContactSectionChannels: {
    margin: 0,
    fontSize: 16,
    alignItems: "center",
    padding: 15,
    "& > *": {
      display: "flex",
    },
  },
  title: {
    "& > *": {
      marginTop: "auto",
      marginBottom: "auto",
    },
  },
  titleText: {
    opacity: 0.8,
    transition: "opacity .2s",
    "&:hover": {
      opacity: 1,
      cursor: "pointer",
    },
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  titleCount: {
    marginLeft: 5,
    opacity: 0.4,
  },
  entry: {
    padding: 3,
    marginTop: 3,
    marginBottom: 3,
    borderRadius: 3,
    transition: "background-color .2s",
    "&:hover": {
      backgroundColor: CONTACT_SECTION_HOVER_BACKGROUND_COLOR,
      cursor: "pointer",
    },
    "&.selected": {
      backgroundColor: CONTACT_SECTION_SELECTED_BACKGROUND_COLOR,
    },
    "& > *": {
      marginTop: "auto",
      marginBottom: "auto",
    },
    "& > span": {
      opacity: 0.8,
    },
    "& > :nth-child(1)": {
      minWidth: 20,
      marginRight: 5,
      textAlign: "center",
      opacity: 0.5,
    },
    "& > :nth-child(2)": {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  },
  dropDownIcon: {
    marginLeft: "auto",
    width: 25,
    height: 25,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
    "&.drop-down-right": {
      transform: "rotate(-90deg)",
      "&:hover": {
        transform: "rotate(-90deg) scale(1.2)",
      },
    },
  },
  addIcon: {
    width: 25,
    height: 25,
    marginRight: 3,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
  },
  closeButton: {
    visibility: "hidden",
    opacity: 0.8,
    marginLeft: "auto",
    marginRight: 2,
    width: 21,
    height: 21,
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
    ":hover > &": {
      visibility: "visible",
    },
  },
  privateButton: {
    width: 15,
    height: 15,
  },
});

function ChannelEntry(props) {
  const {
    name,
    href,
    isPublic,
    selectedChannelHref,
    setSelectedChannelHref,
  } = props;

  const styles = useStyles();

  return (
    <div
      className={`${styles.entry} ${
        selectedChannelHref === href ? "selected" : ""
      }`}
      onClick={(e) => {
        setSelectedChannelHref(href);
      }}
    >
      {isPublic ? (
        <span>#</span>
      ) : (
        <LocalMallIcon classes={{ root: styles.privateButton }} />
      )}
      <span>{name}</span>
      <CloseIcon
        classes={{ root: styles.closeButton }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
}

function ContactSectionChannels(props) {
  const styles = useStyles();

  const [showList, setShowList] = useState(true);

  const [selectedChannelHref, setSelectedChannelHref] = useState(null);

  const mock = [
    {
      name: "mobile-dev-private",
      isPublic: false,
      href: "abcd",
    },
    {
      name: "general",
      isPublic: true,
      href: "efgh",
    },
    {
      name: "random",
      isPublic: true,
      href: "ijkl",
    },
  ];

  return (
    <div className={styles.ContactSectionChannels}>
      <div className={styles.title}>
        <span
          className={styles.titleText}
          onClick={(e) => {
            setSelectedChannelHref(null);
          }}
        >
          CHANNELS<span className={styles.titleCount}>(6)</span>
        </span>
        <ArrowDropDownIcon
          classes={{ root: styles.dropDownIcon }}
          className={showList ? "" : "drop-down-right"}
          onClick={(e) => {
            setShowList(!showList);
          }}
        />
        <AddIcon classes={{ root: styles.addIcon }} />
      </div>
      {showList
        ? mock.map((entry) => (
            <ChannelEntry
              name={entry.name}
              isPublic={entry.isPublic}
              key={entry.href}
              href={entry.href}
              selectedChannelHref={selectedChannelHref}
              setSelectedChannelHref={setSelectedChannelHref}
            />
          ))
        : null}
    </div>
  );
}

export default ContactSectionChannels;
