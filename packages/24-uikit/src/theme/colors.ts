import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f6c90e",
  primaryBright: "#f6c90e",
  primaryDark: "#0098A1",
  secondary: "#f6c90e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#242012",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#f6c90e",
  background: "#303841",
  backgroundDisabled: "#434138",
  backgroundAlt: "#3a4750",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#514c35",
  inputSecondary: "#8f8459",
  primaryDark: "#0098A1",
  tertiary: "#55513f",
  text: "#fcf7e3",
  textDisabled: "#767366",
  textSubtle: "#d5c78c",
  borderColor: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #4b4428 0%, #4b4426 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
  },
};
