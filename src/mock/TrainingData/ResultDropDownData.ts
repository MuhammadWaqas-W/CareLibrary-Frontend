type ResultFilterType = {
  id: string;
  labelName: string;
  placeholder: string;
  optionsArray: { value: string; label: string }[];
};

export const myResultsFilter: ResultFilterType[] = [
  {
    id: "01",
    labelName: "Course Type",
    placeholder: "Course Type",
    optionsArray: [
      {
        value: "Short Course",
        label: "Short Course",
      },
      {
        value: "Long Course",
        label: "Long Course",
      },
    ],
  },
  {
    id: "02",
    labelName: "Category",
    placeholder: "Category",
    optionsArray: [
      {
        value: "Trainee",
        label: "Trainee",
      },
      {
        value: "Medical",
        label: "Medical",
      },
    ],
  },
];
