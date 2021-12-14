export const size = {
  mobileS: "120px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "600px",
  laptop: "1080px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileSmall: ` @media screen and (max-width: ${size.mobileM}) and (min-width: ${size.mobileS})`,
  mobileMedium: ` @media screen and (max-width: ${size.tablet}) and (min-width: ${size.mobileM})`,
  Tablet: ` @media screen and (max-width: ${size.laptop}) and (min-width: ${size.tablet})`,
  Desktop: ` @media screen and (max-width: ${size.desktop}) and (min-width: ${size.laptop})`,
};
