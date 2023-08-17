import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
  font-size: 1.5rem;
  color: lightgray;

  ${({ isHalf }) =>
    isHalf &&
    css`
      position: absolute;
      width: 12px;
      overflow: hidden;

      &:nth-of-type(10) {
        transform: translate(-108px);
      }
      &:nth-of-type(8) {
        transform: translate(-84px);
      }
      &:nth-of-type(6) {
        transform: translate(-60px);
      }
      &:nth-of-type(4) {
        transform: translate(-36px);
      }
      &:nth-of-type(2) {
        transform: translate(-12px);
      }
    `}
`;

const StarInput = ({ onClickRating, value, isHalf }) => {
  const handleClickRatingInput = (value) => {
    onClickRating(value);

    // 평가 값을 백엔드로 전송 (추가)
    axios
      .post("http://127.0.0.1:8000/api/rate", { rating: value })
      .then((response) => {
        console.log("Rating submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  };

  return (
    <>
      <Input
        type="radio"
        name="rating"
        id={`star${value}`}
        value={value}
        onChange={handleClickRatingInput}
      />
      <Label
        onClick={handleClickRatingInput}
        isHalf={isHalf}
        htmlFor={`star${value}`}
      >
        {isHalf ? <FaStarHalf /> : <FaStar />}
      </Label>
    </>
  );
};

export default StarInput;
