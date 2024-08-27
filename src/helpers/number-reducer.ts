import type { INumberReducer } from "@custom-types/index";

const NumberReducer = ({ value, min=0,max=1,notation="compact",style='currency' }: INumberReducer)=> {
  if (value === null || value === undefined) return "N/A";

  const options: Intl.NumberFormatOptions = {
    notation:notation,
    style:style,
    currency: style === 'currency' ? "USD" : undefined,
    maximumFractionDigits: max,
    minimumFractionDigits: min
  };

  const formatter = new Intl.NumberFormat("en-US", options);
  const formattedValue = style === "percent" ? value / 100 : value;
  return formatter.format(Math.abs(formattedValue));
  
};

export default NumberReducer;