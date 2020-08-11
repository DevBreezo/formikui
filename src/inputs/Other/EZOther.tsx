import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { useField } from "formik";
import { initialGrid } from "../../helpers/initialGrid";
import { EZComponentBase } from "../../types/BaseTypes";

export type OtherComponentProps = React.ComponentType<{
  errorMsg?: any;
  setValue: (value: any) => void;
  value: any;
  [key: string]: any;
}>;

type EZOtherProps = EZComponentBase & {
  setValue: (value: any) => void;
  component: OtherComponentProps;
};

export const EZOther: React.FC<EZOtherProps> = ({
  component: Component,
  setValue,
  componentProps,
  grid = initialGrid,
  ...props
}) => {
  const [field, meta] = useField(props);
  const errorMsg = meta.error ? meta.error : "";
  const isError = errorMsg !== "";

  return (
    <Grid item {...grid}>
      <Component
        {...componentProps}
        errorMsg={isError ? errorMsg : undefined}
        setValue={setValue}
        value={field.value}
      />
    </Grid>
  );
};