const experienceData = [
  {
    title: "Carer",
    date: "01/2020 - 05/2020",
    desc: "Sherwood Grange Care UK",
  },
  {
    title: "Carer",
    date: "01/2020 - 05/2020",
    desc: "Sherwood Grange Care UK",
  },
];

const Experience = () => {
  return (
    <div className="experience-card">
      <h1 className="title">Experience</h1>
      {experienceData.map((item: any, index: number) => (
        <div key={index} className="experience">
          <div className="carer">
            <h5>{item?.title}</h5>
            <p>{item?.date}</p>
          </div>
          <h2>{item?.desc}</h2>
        </div>
      ))}
    </div>
  );
};

export default Experience;
