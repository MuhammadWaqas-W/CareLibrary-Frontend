import { Input, Rate, Form, Button } from "antd";
import { useState } from "react";
import editIcon from "../../../../assets/icons/training/edit-icon2.png";

const ratingValue =
  "The lessons were really engaging and the short videos are a good technique to keep attention. I actually enjoyed the course. Get this professor if you can, hes funny, quirky, and most importantly an insanely good lecturer.";

const CertificateRating = () => {
  const [value, setValue] = useState(3);
  const [ratingNote, setRatingNote] = useState(ratingValue);
  const [editReview, setEditReview] = useState(false);

  return (
    <div className="rating-card">
      <div className="d-flex justify-between top-bar">
        <h2 className="title m-0 fs-14 fw-600">How Would You Rate This Course OverAll?</h2>
        <img onClick={() => setEditReview(true)} src={editIcon} alt="" />
      </div>
      <div className="rating">
        <Rate disabled={!editReview} onChange={setValue} value={value} />
        {!editReview ? (
          <p className="desc fs-12 fw-400">{ratingNote}</p>
        ) : (
          <Form style={{ marginTop: "10px" }} layout="vertical">
            <Form.Item
              label={<span className="fw-600 label-color">Write your review (Optional)</span>}
            >
              <Input.TextArea
                onChange={(e: any) => setRatingNote(e.target.value)}
                value={ratingNote}
                rows={4}
              />
            </Form.Item>
            <Button onClick={() => setEditReview(false)} className="save-btn">
              Save
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default CertificateRating;
