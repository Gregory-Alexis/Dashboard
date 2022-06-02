module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#6439ff",
      },
      backgroundColor: {
        primary: "#6439ff",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
      },
      boxShadow: {
        search: "0px 1px 3px 0.5px rgb(0 0 0 / 0.2)",
        card: "4px 4px 10px 1px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [],
};
