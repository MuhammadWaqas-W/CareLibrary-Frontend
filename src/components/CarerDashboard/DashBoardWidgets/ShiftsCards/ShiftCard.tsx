const ShiftCard = ({ card, setIsModalOpen }: any) => {
  return (
    <div className="shift-card">
      <h1 className={`title ${card.color}`}>{card?.title}</h1>
      <div className="card-content">
        <h2 className="card-heading">{card?.heading}</h2>
        <div className="card-details">
          {card?.details.map((item: any) => (
            <div
              onClick={() => item.cursor && setIsModalOpen(true)}
              className="item"
            >
              <img src={item?.icon} alt="" />
              <p className={item.cursor}>{item?.text}</p>
            </div>
          ))}
          {!card?.checkStatus ? (
            <button className="btn">More Details</button>
          ) : (
            <div className="check-status">
              <div>
                <p>Check-In</p>
                <h2 className="check-in">{card?.checkStatus?.checkIn}</h2>
              </div>
              <div>
                <p>Check-Out</p>
                <h2 className="check-out">{card?.checkStatus?.checkOut}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
