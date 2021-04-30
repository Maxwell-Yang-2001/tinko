import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    contactSectionContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: width => width,
        backgroundColor: "#31056A",
        color: "#FFFFFF",
    },
});

function ContactSection(props) {

    const { contactSectionWidth } = props;
    const styles = useStyles(contactSectionWidth);

    return <div className={styles.contactSectionContainer}>1</div>;
}

export default ContactSection;