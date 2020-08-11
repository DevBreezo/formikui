import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useField } from "formik";
import { initialGrid } from "../../helpers";
import { EZComponentBase, FieldHTMLType } from "../../types";

type EZTextFieldProps = EZComponentBase & {
  type: FieldHTMLType;
};

export const EZTextField: React.FC<EZTextFieldProps> = ({
  componentProps,
  grid = initialGrid,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorMsg = meta.error && meta.touched ? meta.error : "";
  const isError = errorMsg !== "";

  return (
    <Grid item {...grid}>
      <TextField
        {...field}
        {...props}
        helperText={errorMsg}
        error={isError}
        margin="dense"
        fullWidth
        {...componentProps}
      />
    </Grid>
  );
};
