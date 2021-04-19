import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 200 200" {...props}>
   <g id="#313131ff">
<path fill="#313131" opacity="1.00" d=" M 85.75 0.00 L 114.44 0.00 C 116.61 1.46 119.36 0.67 121.71 1.61 C 123.04 1.96 124.38 2.28 125.71 2.62 C 127.05 2.96 128.39 3.29 129.71 3.69 C 130.17 3.82 131.07 4.08 131.52 4.21 C 132.58 4.56 133.64 4.91 134.70 5.25 C 135.64 5.73 136.58 6.20 137.52 6.68 C 138.93 7.14 140.33 7.64 141.72 8.16 C 143.01 8.88 144.31 9.58 145.62 10.28 C 146.16 10.51 147.23 10.97 147.76 11.20 C 149.66 12.38 151.53 13.59 153.48 14.67 C 154.52 15.27 155.54 15.90 156.55 16.54 C 158.27 17.83 159.96 19.18 161.80 20.31 C 165.67 24.43 170.86 27.13 174.21 31.78 C 176.43 35.17 179.73 37.71 181.66 41.31 C 182.30 42.33 182.96 43.33 183.64 44.33 C 184.29 45.33 184.97 46.31 185.66 47.29 C 186.58 48.68 187.50 50.07 188.37 51.50 C 188.81 52.43 189.27 53.37 189.73 54.30 C 190.41 55.63 191.10 56.95 191.81 58.27 C 192.35 59.62 192.89 60.97 193.40 62.33 C 193.69 63.39 193.97 64.46 194.25 65.54 C 194.81 66.47 195.38 67.40 195.96 68.33 C 196.02 69.32 196.08 70.32 196.14 71.32 C 196.60 72.32 197.04 73.32 197.49 74.33 C 197.85 75.96 198.07 77.62 198.30 79.27 C 198.87 81.43 199.30 83.62 200.00 85.74 L 200.00 114.45 C 198.94 115.93 199.04 117.78 198.76 119.48 C 198.15 121.50 197.87 123.60 197.47 125.66 C 197.04 126.67 196.60 127.68 196.15 128.68 C 196.08 129.68 196.01 130.67 195.95 131.67 C 195.38 132.60 194.81 133.53 194.25 134.47 C 193.98 135.54 193.69 136.61 193.39 137.67 C 192.88 139.03 192.35 140.38 191.82 141.73 C 191.11 143.03 190.42 144.33 189.73 145.63 C 189.50 146.17 189.04 147.23 188.81 147.76 C 187.80 149.43 186.73 151.06 185.68 152.70 C 184.98 153.68 184.29 154.67 183.62 155.67 C 182.95 156.69 182.30 157.72 181.67 158.76 C 181.37 159.19 180.76 160.05 180.46 160.48 C 178.65 163.28 176.03 165.42 174.20 168.21 C 170.86 172.87 165.68 175.57 161.79 179.69 C 159.96 180.82 158.27 182.16 156.55 183.46 C 155.53 184.10 154.51 184.73 153.47 185.34 C 151.53 186.43 149.65 187.63 147.74 188.79 C 146.38 189.42 145.02 190.06 143.66 190.70 C 142.31 191.42 140.96 192.15 139.63 192.91 C 139.10 192.97 138.06 193.07 137.54 193.12 C 136.61 193.69 135.68 194.25 134.75 194.80 C 133.68 195.07 132.62 195.36 131.57 195.68 C 130.56 196.04 129.55 196.40 128.54 196.77 C 127.17 197.05 125.81 197.32 124.48 197.77 C 123.57 197.94 122.66 198.11 121.75 198.28 C 119.33 199.24 116.60 198.84 114.24 200.00 L 85.55 200.00 C 83.38 198.57 80.64 199.30 78.28 198.40 C 76.94 198.03 75.61 197.69 74.28 197.31 C 73.83 197.18 72.93 196.91 72.48 196.78 C 70.81 196.26 69.11 195.82 67.45 195.27 C 66.09 194.71 64.71 194.18 63.31 193.71 C 62.36 193.25 61.42 192.79 60.48 192.33 C 59.06 191.86 57.66 191.37 56.25 190.87 C 53.63 189.42 51.08 187.85 48.52 186.30 C 47.06 185.46 45.64 184.57 44.20 183.70 C 43.79 183.38 42.97 182.74 42.56 182.42 C 40.76 181.20 39.05 179.85 37.20 178.70 C 29.43 171.16 21.46 163.72 15.64 154.51 C 14.60 152.52 13.37 150.65 12.20 148.75 C 11.97 148.23 11.49 147.19 11.25 146.67 C 9.95 143.94 8.60 141.23 7.08 138.62 C 7.03 138.09 6.94 137.04 6.89 136.52 C 6.29 135.58 5.68 134.64 5.08 133.71 C 4.99 133.21 4.81 132.22 4.72 131.73 C 4.29 130.40 3.99 129.04 3.70 127.68 C 3.32 126.67 2.93 125.67 2.55 124.67 C 2.14 123.04 1.92 121.38 1.68 119.73 C 0.75 117.32 1.15 114.60 0.00 112.25 L 0.00 87.55 C 1.48 85.38 0.62 82.59 1.68 80.25 C 1.92 78.58 2.10 76.89 2.65 75.28 C 2.81 74.84 3.13 73.95 3.29 73.50 C 3.66 72.17 3.96 70.82 4.27 69.47 C 4.60 68.41 4.92 67.35 5.22 66.29 C 5.73 65.36 6.22 64.43 6.72 63.50 C 7.00 62.47 7.30 61.44 7.62 60.41 C 8.91 58.10 10.09 55.72 11.26 53.34 C 11.50 52.82 11.97 51.77 12.20 51.25 C 13.38 49.35 14.60 47.48 15.64 45.50 C 17.71 42.32 20.20 39.45 22.34 36.32 C 25.47 32.48 29.36 29.36 32.68 25.70 C 35.54 22.50 39.00 19.94 42.57 17.59 C 42.98 17.27 43.80 16.62 44.20 16.30 C 45.64 15.43 47.07 14.54 48.52 13.70 C 51.08 12.15 53.62 10.57 56.25 9.13 C 57.65 8.64 59.06 8.15 60.48 7.68 C 61.42 7.21 62.37 6.75 63.32 6.29 C 65.10 5.80 66.80 5.04 68.42 4.13 C 69.39 4.03 70.35 3.92 71.32 3.82 C 72.31 3.39 73.31 2.97 74.32 2.57 C 75.64 2.24 76.96 1.95 78.28 1.63 C 80.72 0.83 83.40 1.13 85.75 0.00 Z"/>
</g>
    </Svg>
  );
};

export default Icon;