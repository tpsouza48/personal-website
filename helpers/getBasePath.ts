export const getBasePath = () => process.env.NODE_ENV === "production"
    ? "/personal-website"
    : "";