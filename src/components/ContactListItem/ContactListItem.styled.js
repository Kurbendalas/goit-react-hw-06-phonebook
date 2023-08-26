import styled from "@emotion/styled";
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: transform 0.4s;

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
    background: linear-gradient(to bottom right, #e8dbfc, #f8f9d2);
  }
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Span = styled.span`
  display: flex;
  margin-right: 10px;
`;

export const Phone = styled.span`
  display: block;
  margin-left: 5px;
`;

export const List = styled.ul`
  padding-right: 40px;
`;

export const DeleteBtn = styled.button`
   text-transform: capitalize;
  background: linear-gradient(to bottom right, #FF0000, #FF7878);
  border: 0;
  display:block;
  border-radius: 12px;
  width:100px;
  cursor: pointer;
  margin-left:auto;
  margin-right:20px;
`;