import { cardData,CardDataType,TagsType } from "../../../mock/UnpublishedShifts/CardData";

type PropsType = {
  card: CardDataType;
};

const BookingCard = ({ card }: PropsType) => {
  return (
    <div className="staff-card">
      <div className="card-header">
        <div className="user-info">
          <img src={card?.userImg} alt="profile" />
          <div style={{ marginLeft: "10px" }}>
            <h2 className="user-name">{card?.name}</h2>
            <p className="user-role">{card?.role}</p>
          </div>
        </div>
        <div>
          <p className="total-shift">
            Total Shifts: <span>{card?.totalShifts}</span>
          </p>
        </div>
      </div>
      <div className="tags">
        {card?.tags.map((tag: TagsType) => (
          <div className="tag" key={tag.title}>
            <img src={tag.icon} alt="" />
            <p>{tag.title}</p>
          </div>
        ))}
      </div>
      <div className="card-btn">
        <button className="btn confirm">Request Confirmation</button>
        <button className="btn allocate">Allocate</button>
      </div>
    </div>
  );
};

export default BookingCard;
