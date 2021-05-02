import { makeStyles } from "@material-ui/core/styles";
import {
  CONTACT_SECTION_BACKGROUND_COLOR,
  CONTACT_SECTION_FONT_COLOR,
} from "../../common/constants";
import ContactSectionChannels from "./contactSection/contactSectionChannels";
import ContactSectionFooter from "./contactSection/contactSectionFooter";
import ContactSectionHeader from "./contactSection/contactSectionHeader";
import ContactSectionPeople from "./contactSection/contactSectionPeople";

const useStyles = makeStyles({
  contactSectionContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: (width) => width,
    backgroundColor: CONTACT_SECTION_BACKGROUND_COLOR,
    color: CONTACT_SECTION_FONT_COLOR,
    flexDirection: "column",
  },
});

function ContactSection(props) {
  const { contactSectionWidth } = props;
  const styles = useStyles(contactSectionWidth);

  return (
    <div className={styles.contactSectionContainer}>
      <ContactSectionHeader />
      <ContactSectionChannels />
      <ContactSectionPeople />
      <ContactSectionFooter />
    </div>
  );
}

export default ContactSection;
