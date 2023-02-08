import { AiFillDollarCircle } from "react-icons/ai";

export const data = [
  {
    id: 1,
    assetsValue: "9,170,500",
    labels: [],
    information: [
      "Cash On Hand & In Banks",
      "Savings Account",
      "IRA, 401(k), SEP & Other.....",
      "Receivables Due to Me on Loans.....",
      "Life Insurance",
      "Stocks & Bonds",
      "Businesses",
      "Automobiles",
      "Personal Property",
      "Real Estate",
      "Other Assets",
    ],
    backgroundColorr: [
      "rgb(147, 207, 163)",
      "rgb( 208, 217, 210)",
      "rgb(155, 204, 166)",
      "rgb(157, 204,198)",
      "rgb(165, 194, 171)",
      "rgb(123, 148, 129)",
      "rgb(123, 148, 129)",
      "rgb(45, 59, 48)",
      "rgb(86, 115, 92)",
      "rgb(123, 148, 129)",
      "rgb(45, 59, 48)",
    ],
    datasets: [
      {
        label: ["Assets"],
        data: [35, 30, 8, 6, 1, 3, 3, 5, 1, 3, 0.5],
        backgroundColor: [
          "rgb(147, 207, 163)",
          "rgb( 208, 217, 210)",
          "rgb(155, 204, 166)",
          "rgb(157, 204,198)",
          "rgb(165, 194, 171)",
          "rgb(123, 148, 129)",
          "rgb(123, 148, 129)",
          "rgb(45, 59, 48)",
          "rgb(86, 115, 92)",
          "rgb(123, 148, 129)",
          "rgb(45, 59, 48)",
        ],
        hoverOffset: 15,
      },
    ],
  },

  {
    assetsValue: "4,815,000",
    labels: [],
    information: [
      "Accounts Payable - Credit...",
      "Notes Payable to Banks and Others",
      "Installment Accounts (Others)",
      "Unpaid Taxes",
      "Mortgages on Real Estate",
      "Other Liabilities",
      "Liabilities from assets",
    ],
    backgroundColorr: [
      "rgb(161, 63, 56)",
      "rgb( 232, 204, 202)",
      "rgb(201, 171, 169)",
      "rgb(173, 115, 111)",
      "rgb(201, 171, 169)",
      "rgb(138, 82, 78)",
      "rgb(133, 61, 56)",
    ],
    datasets: [
      {
        label: ["Liabilities"],
        data: [20, 50, 10, 20, 10, 5, 5],
        backgroundColor: [
          "rgb(161, 63, 56)",
          "rgb( 232, 204, 202)",
          "rgb(201, 171, 169)",
          "rgb(173, 115, 111)",
          "rgb(201, 171, 169)",
          "rgb(138, 82, 78)",
          "rgb(133, 61, 56)",
          "rgb(133, 61, 56)",
          "rgb(86, 115, 92)",
          "rgb(123, 148, 129)",
          "rgb(45, 59, 48)",
        ],
        hoverOffset: 15,
      },
    ],
  },

  {
    assetsValue: "4,355,500",
    labels: [],

    information: ["Total Assets", "Total liabilities"],
    backgroundColorr: ["rgb(161, 63, 56)", "rgb(9, 84, 55)"],
    datasets: [
      {
        label: ["Net Worth"],
        data: [30, 70],

        backgroundColor: ["rgb(161, 63, 56)", "rgb(9, 84, 55)"],
        hoverOffset: 1,
      },
    ],
  },
];

export const linedata = [
  {
    labels: ["Q1", "Q2", "Q3"],
    datasets: [
      {
        label: ["assets"],
        data: [10, 60, 40],
        fill: false,
        borderColor: "rgb(155, 212, 176)",
        tension: 0.6,
      },
    ],
  },
  {
    labels: ["Q1", "Q2", "Q3"],
    datasets: [
      {
        label: ["liabilities"],
        data: [50, 40, 5],
        fill: false,
        borderColor: "rgb(161, 63, 56)",
        tension: 0.6,
      },
    ],
  },
  {
    labels: ["Q1", "Q2", "Q3"],
    datasets: [
      {
        label: ["assets"],
        data: [22, 52, 75],
        fill: false,
        borderColor: "rgb(155, 212, 176)",
        tension: 0.6,
      },
      {
        label: ["liabilities"],
        data: [50, 35, 5],
        fill: false,
        borderColor: "rgb(161, 63, 56)",
        tension: 0.5,
      },
      {
        label: ["Net Worth"],
        data: [10, 58, 38],
        fill: false,
        borderColor: "rgb(70, 46, 230)",
        tension: 0.6,
      },
    ],
  },
];

export const objects = [
  {
    icon: AiFillDollarCircle,
    name: "Assets",
    value: "$9,170,500",
    borderColor: "rgb(155, 212, 176)",
  },
  {
    icon: AiFillDollarCircle,
    name: "Liabilities",
    value: "$4,815,000",
    borderColor: "rgb(161, 63, 56)",
  },
  {
    icon: AiFillDollarCircle,
    name: "Net Worth",
    value: "$4,355,500",
    borderColor: "rgb(70, 46, 230)",
  },
];
