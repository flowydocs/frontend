import {
  Box,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    label: {
      fontSize: 46, 
      fontWeight: 800
    }
  };
});

const EditProjectComponent = () => {
  return (
    <Box>

    </Box>
  );
};

export default EditProjectComponent;