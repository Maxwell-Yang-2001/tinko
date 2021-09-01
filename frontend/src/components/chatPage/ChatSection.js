import { makeStyles } from '@material-ui/core/styles';
import ChatSectionHeader from './chatSection/chatSectionHeader';

const useStyles = makeStyles({
    chatSectionContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        width: width => `calc(100% - ${width}px)`,
    },
});

function ChatSection(props) {
    const { contactSectionWidth } = props;

    const styles = useStyles(contactSectionWidth);

    return <div className={styles.chatSectionContainer}>
        <ChatSectionHeader />
    </div>;
}

export default ChatSection;