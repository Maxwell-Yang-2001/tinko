import { makeStyles } from "@material-ui/core/styles";
import { RESIZABLE_WIDTH } from "../../common/constants";

const useStyles = makeStyles({
  sectionSplitter: {
    position: "absolute",
    top: 0,
    width: RESIZABLE_WIDTH,
    height: "100%",
    zIndex: 50,
    "&:hover": {
      cursor: "col-resize",
    },
    "&.left": {
        left: edgeWidth => edgeWidth - RESIZABLE_WIDTH / 2,
    },
    "&:not(.left)": {
        right: edgeWidth => edgeWidth - RESIZABLE_WIDTH / 2,
    },
  },
});

function SectionSplitter(props) {
  const { edgeWidth, left, setResizeWidthDown } = props;
  const styles = useStyles(edgeWidth);

  return (
    <div
      className={`${styles.sectionSplitter} ${left ? "left" : ""}`}
      onMouseDown={() => {
        setResizeWidthDown(true);
      }}
    ></div>
  );
}

export default SectionSplitter;
