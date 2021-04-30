import { makeStyles } from '@material-ui/core/styles';
import { RESIZABLE_WIDTH } from '../../common/constants';

const useStyles = makeStyles({
    sectionSplitter: {
        position: 'absolute',
        top: 0,
        left: width => width - RESIZABLE_WIDTH / 2,
        width: RESIZABLE_WIDTH,
        zIndex: 50,
        "&:hover": {
            cursor: "col-resize",
        },
    }
});


function SectionSplitter(props) {

    const { contactSectionWidth, setResizeWidthDown } = props;
    const styles = useStyles(contactSectionWidth);

    return <div className={styles.sectionSplitter} onMouseDown={() => { setResizeWidthDown(true); }}></div>;
}

export default SectionSplitter;