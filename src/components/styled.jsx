import styled from "styled-components";

//nav
export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15%;
  background-color: #f3f7fc;
`;
export const Navbar_Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
  gap: 20px;
`;

export const MainLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25%;
  font-weight: 600;
  font-size: 40px;
  width: 90%;
`;

export const Nav_Pages = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 20%;
  width: 90%;
`;
export const StoreMap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  height: 60px;
  width: 100%;
  border-radius: 8px;
  gap: 45px;
  font-size: 20px;
`;

export const LookforFav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  height: 60px;
  width: 100%;
  border-radius: 8px;
  gap: 15px;
`;
export const MyreviewBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  height: 60px;
  width: 100%;
  border-radius: 8px;
  gap: 45px;
`;

export const Nav_MyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 30%;
  width: 90%;
`;
export const Nav_MyPage_Header = styled.div`
  width: 100%;
  font-weight: 600;

  height: 20%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Nav_MyPage_Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border-style: none;
  height: 30px;
`;
export const Nav_MyPage_Myreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border-style: none;
  height: 30px;
`;
export const Navbar_Logout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
`;
export const Nav_Logout_Box = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  font-size: 20px;
  border-style: none;
  background-color: transparent;
  font-weight: 600;
  gap: 20px;
`;

// ContentBox

export const ContentOuter = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f7fc;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 98%;
  background-color: #b8d1f86e;
  border-radius: 8px;
`;
export const Content_Top = styled.div`
  width: 93%;
  /* border:1px solid black; */
  height: 55%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const Content_Top_Map = styled.div`
  width: 93%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const Content_Top_Scrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
`;
export const Content_Top_Scrap_Header = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  left: 10px;
  font-weight: 600;
`;
export const Content_Top_Scrap_Body = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 330px;
`;

export const Content_Bottom = styled.div`
  width: 93%;
  height: 45%;
`;

export const Content_Bottom_Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 20%;
  height: 20%;
  font-size: 20px;
  gap: 10px;
  font-weight: 600;
  color: #273345;
`;
export const Content_Slider = styled.div`
  width: 100%;
  height: 80%;
  font-size: 20px;
  color: #273345;
`;

export const NoScrapMessage = styled.div`
  font-size: 12px;
  text-align: center;
`;

//새로 추가된거
export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
export const Slide = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
export const Slideimage = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 70%;
    height: 70%;
    border-radius: 8px; /* Add this line to apply rounded corners */
  }
`;
export const Slideinfo = styled.div`
  width: 50%;
  height: 100%;
`;
export const Sliderow = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: start;
  height: 80%;
`;
export const Slidewrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
`;
export const Sliderinfoheader = styled.div`
  width: 100%;
  height: 50%;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sliderinfocontent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: start;
  justify-content: center;
  color: #5b5f66;
  font-size: 13px;
`;
